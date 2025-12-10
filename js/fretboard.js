// BASSIST - Fretboard visualization

class Fretboard {
    constructor() {
        this.rootNote = 'E';
        this.currentScale = 'pentatonic_minor';
        this.numFrets = 12;
        this.fretMarkers = [3, 5, 7, 9, 12];  // Standard bass markers
        this.showIntervals = true;  // Show intervals by default (R, 3, 5, etc.)
        this.useItalianNotes = false;  // Use English notation by default
        this.showShape = false;  // Show only box shape when enabled
        this.shapeWidth = 4;  // Shape covers 4 frets (e.g., frets 0-3, or 5-8)
        this.showArpeggio = false;  // Show only chord tones (R, 3, 5, 7)

        // Autoplay state
        this.isPlaying = false;
        this.scaleSequence = null;
        this.currentNoteIndex = 0;

        this.init();
    }

    // Find the lowest fret where root appears on E string (or closest)
    getRootFret() {
        const rootIndex = NOTES.indexOf(this.rootNote);
        const eIndex = NOTES.indexOf('E');
        // Calculate fret on E string where root appears
        let fret = (rootIndex - eIndex + 12) % 12;
        return fret;
    }

    // Check if a fret is within the current shape
    isInShape(fret) {
        if (!this.showShape) return true;  // If shape mode off, all frets are valid

        const rootFret = this.getRootFret();
        // Shape starts 1 fret before root (if possible) and extends shapeWidth frets
        const shapeStart = Math.max(0, rootFret - 1);
        const shapeEnd = shapeStart + this.shapeWidth;

        return fret >= shapeStart && fret <= shapeEnd;
    }

    init() {
        this.renderRootButtons();
        this.renderScaleButtons();
        this.renderFretboard();
        this.updateDisplay();

        // Set initial toggle button state
        const toggleBtn = document.getElementById('displayToggle');
        if (toggleBtn) {
            toggleBtn.classList.add('active');
        }
    }

    // Get note display name based on notation setting
    getDisplayNote(note) {
        return this.useItalianNotes ? noteToItalian(note) : note;
    }

    renderRootButtons() {
        const container = document.getElementById('rootButtons');
        if (!container) return;

        container.innerHTML = '';
        NOTES.forEach(note => {
            const btn = document.createElement('button');
            btn.className = 'root-btn';
            btn.textContent = this.getDisplayNote(note);
            btn.dataset.note = note;
            if (note === this.rootNote) btn.classList.add('active');
            btn.addEventListener('click', () => this.selectRoot(note));
            container.appendChild(btn);
        });
    }

    renderScaleButtons() {
        const container = document.getElementById('scaleButtons');
        if (!container) return;

        container.innerHTML = '';
        Object.entries(SCALES).forEach(([key, scale]) => {
            const btn = document.createElement('button');
            btn.className = 'scale-btn';
            btn.textContent = scale.name;
            btn.dataset.scale = key;
            if (key === this.currentScale) btn.classList.add('active');
            btn.addEventListener('click', () => this.selectScale(key));
            container.appendChild(btn);
        });
    }

    renderFretboard() {
        const container = document.getElementById('fretboard');
        if (!container) return;

        container.innerHTML = '';

        // Fret numbers header
        const fretNumbers = document.createElement('div');
        fretNumbers.className = 'fret-numbers';
        for (let fret = 0; fret <= this.numFrets; fret++) {
            const num = document.createElement('div');
            num.className = 'fret-num';
            num.textContent = fret;
            fretNumbers.appendChild(num);
        }
        container.appendChild(fretNumbers);

        // Strings (from high G to low E for visual display)
        const stringsReversed = [...BASS_TUNING].reverse();
        stringsReversed.forEach((stringNote, stringIndex) => {
            const stringRow = document.createElement('div');
            stringRow.className = 'string-row';

            // String label
            const label = document.createElement('div');
            label.className = 'string-label';
            label.dataset.note = stringNote;
            label.textContent = this.getDisplayNote(stringNote);
            stringRow.appendChild(label);

            // Frets
            const fretsContainer = document.createElement('div');
            fretsContainer.className = 'frets-container';

            for (let fret = 0; fret <= this.numFrets; fret++) {
                const fretDiv = document.createElement('div');
                fretDiv.className = 'fret';
                if (fret === 0) fretDiv.classList.add('nut');
                if (this.fretMarkers.includes(fret)) fretDiv.classList.add('marker');

                const note = getNoteAtFret(stringNote, fret);
                const noteDiv = document.createElement('div');
                noteDiv.className = 'note';
                noteDiv.dataset.note = note;
                noteDiv.dataset.string = stringNote;
                noteDiv.dataset.fret = fret;
                noteDiv.textContent = note;

                // Click to play sound
                noteDiv.addEventListener('click', () => this.playNote(stringNote, fret));

                fretDiv.appendChild(noteDiv);
                fretsContainer.appendChild(fretDiv);
            }

            stringRow.appendChild(fretsContainer);
            container.appendChild(stringRow);
        });

        // Fret markers row
        const markersRow = document.createElement('div');
        markersRow.className = 'markers-row';
        for (let fret = 0; fret <= this.numFrets; fret++) {
            const markerDiv = document.createElement('div');
            markerDiv.className = 'marker-dot-container';
            if (this.fretMarkers.includes(fret)) {
                const dot = document.createElement('div');
                dot.className = 'marker-dot';
                if (fret === 12) dot.classList.add('double');
                markerDiv.appendChild(dot);
            }
            markersRow.appendChild(markerDiv);
        }
        container.appendChild(markersRow);
    }

    selectRoot(note) {
        this.rootNote = note;

        // Update button states
        document.querySelectorAll('.root-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.note === note);
        });

        this.updateDisplay();
    }

    selectScale(scaleKey) {
        this.currentScale = scaleKey;

        // Update button states
        document.querySelectorAll('.scale-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.scale === scaleKey);
        });

        this.updateDisplay();
    }

    updateDisplay() {
        // Get notes to display based on arpeggio mode
        const scaleNotes = this.showArpeggio
            ? getArpeggioNotes(this.rootNote, this.currentScale)
            : getScaleNotes(this.rootNote, this.currentScale);

        document.querySelectorAll('.note').forEach(noteDiv => {
            const note = noteDiv.dataset.note;
            const fret = parseInt(noteDiv.dataset.fret);
            const inShape = this.isInShape(fret);

            // Reset classes
            noteDiv.classList.remove('in-scale', 'root', 'out-of-shape', 'in-arpeggio');

            // Check if note is in scale/arpeggio AND in shape (if shape mode is on)
            const isNoteRoot = isRoot(note, this.rootNote);
            const isNoteInScale = scaleNotes.includes(note);

            if (isNoteRoot && inShape) {
                noteDiv.classList.add('root');
                noteDiv.textContent = this.showIntervals ? 'R' : this.getDisplayNote(note);
            } else if (isNoteInScale && inShape) {
                noteDiv.classList.add(this.showArpeggio ? 'in-arpeggio' : 'in-scale');
                if (this.showIntervals) {
                    const interval = this.showArpeggio
                        ? getArpeggioIntervalName(note, this.rootNote, this.currentScale)
                        : getIntervalName(note, this.rootNote, this.currentScale);
                    noteDiv.textContent = interval || this.getDisplayNote(note);
                } else {
                    noteDiv.textContent = this.getDisplayNote(note);
                }
            } else if ((isNoteRoot || isNoteInScale) && !inShape) {
                // Note is in scale but outside shape - dim it
                noteDiv.classList.add('out-of-shape');
                noteDiv.textContent = this.getDisplayNote(note);
            } else {
                // Not in scale
                noteDiv.textContent = this.getDisplayNote(note);
            }
        });

        // Update string labels
        document.querySelectorAll('.string-label').forEach(label => {
            const note = label.dataset.note;
            if (note) {
                label.textContent = this.getDisplayNote(note);
            }
        });

        // Update root buttons
        document.querySelectorAll('.root-btn').forEach(btn => {
            const note = btn.dataset.note;
            if (note) {
                btn.textContent = this.getDisplayNote(note);
            }
        });

        // Update toggle button state (LED on = intervals, LED off = notes)
        const toggleBtn = document.getElementById('displayToggle');
        if (toggleBtn) {
            toggleBtn.classList.toggle('active', this.showIntervals);
        }

        // Update notation toggle button state
        const notationBtn = document.getElementById('notationToggle');
        if (notationBtn) {
            notationBtn.classList.toggle('active', this.useItalianNotes);
        }

        // Update shape toggle button state
        const shapeBtn = document.getElementById('shapeToggle');
        if (shapeBtn) {
            shapeBtn.classList.toggle('active', this.showShape);
        }

        // Update arpeggio toggle button state
        const arpBtn = document.getElementById('arpToggle');
        if (arpBtn) {
            arpBtn.classList.toggle('active', this.showArpeggio);
        }
    }

    toggleDisplay() {
        this.showIntervals = !this.showIntervals;
        this.updateDisplay();
    }

    toggleNotation() {
        this.useItalianNotes = !this.useItalianNotes;
        this.updateDisplay();
    }

    toggleShape() {
        this.showShape = !this.showShape;
        this.updateDisplay();
    }

    toggleArpeggio() {
        this.showArpeggio = !this.showArpeggio;
        this.updateDisplay();
    }

    /**
     * Play a note on the bass
     * @param {string} stringNote - Which string (E, A, D, G)
     * @param {number} fret - Fret number
     */
    async playNote(stringNote, fret) {
        // Initialize sound on first click (required by browsers)
        if (!bassSound.isReady) {
            await bassSound.init();
        }
        bassSound.play(null, stringNote, fret, '8n');
    }

    /**
     * Build array of scale notes to play (ascending on E string, then loop)
     * Returns array of {string, fret, note} objects
     */
    buildScaleNotes() {
        const notes = [];
        const scaleNotes = this.showArpeggio
            ? getArpeggioNotes(this.rootNote, this.currentScale)
            : getScaleNotes(this.rootNote, this.currentScale);

        // Build ascending scale on E string (simplest approach)
        // Find each scale note's fret position on E string
        for (let fret = 0; fret <= this.numFrets; fret++) {
            const noteAtFret = getNoteAtFret('E', fret);
            if (scaleNotes.includes(noteAtFret)) {
                // If shape mode is on, only include notes in shape
                if (this.isInShape(fret)) {
                    notes.push({
                        string: 'E',
                        fret: fret,
                        note: noteAtFret
                    });
                }
            }
        }

        return notes;
    }

    /**
     * Highlight a note on the fretboard during playback
     */
    highlightPlayingNote(noteInfo) {
        // Remove previous highlight
        document.querySelectorAll('.note.playing').forEach(el => {
            el.classList.remove('playing');
        });

        if (noteInfo) {
            // Find and highlight the current note
            const noteEl = document.querySelector(
                `.note[data-string="${noteInfo.string}"][data-fret="${noteInfo.fret}"]`
            );
            if (noteEl) {
                noteEl.classList.add('playing');
            }
        }
    }

    /**
     * Toggle scale autoplay
     */
    async togglePlay() {
        // Initialize sound if needed
        if (!bassSound.isReady) {
            await bassSound.init();
        }

        if (this.isPlaying) {
            // Stop playback
            this.stopPlay();
        } else {
            // Start playback
            this.startPlay();
        }
    }

    startPlay() {
        console.log('BASSIST: startPlay() called');

        const scaleNotes = this.buildScaleNotes();
        console.log('BASSIST: scaleNotes =', scaleNotes);
        if (scaleNotes.length === 0) {
            console.warn('BASSIST: No scale notes to play!');
            alert('Seleziona una scala prima!');
            return;
        }

        // Get current DRUMMER pattern for kick sync
        console.log('BASSIST: window.beatGen =', window.beatGen);
        console.log('BASSIST: typeof window.beatGen =', typeof window.beatGen);
        if (window.beatGen) {
            console.log('BASSIST: beatGen.currentPattern =', window.beatGen.currentPattern);
            console.log('BASSIST: beatGen keys =', Object.keys(window.beatGen));
        }

        if (!window.beatGen) {
            console.warn('BASSIST: beatGen not found on window');
            alert('Errore: beatGen non trovato!');
            return;
        }

        if (!window.beatGen.currentPattern) {
            console.warn('BASSIST: No DRUMMER pattern selected');
            alert('Seleziona un pattern in DRUMMER prima!\n(currentPattern = ' + window.beatGen.currentPattern + ')');
            return;
        }

        const pattern = PATTERNS[window.beatGen.currentPattern];
        console.log('BASSIST: pattern =', pattern);

        if (!pattern || !pattern.kick) {
            console.warn('BASSIST: Pattern has no kick array');
            alert('Pattern senza kick!');
            return;
        }

        this.isPlaying = true;
        this.currentNoteIndex = 0;

        // Update button state
        const btn = document.getElementById('scalePlayBtn');
        if (btn) btn.classList.add('active');

        // Determine step duration based on time signature
        const timeSignature = pattern.timeSignature || '4/4';
        let stepDuration = '16n';  // Default: 16th notes for 4/4
        if (timeSignature === '12/8') stepDuration = '8t';  // Triplet 8ths
        if (timeSignature === '6/8') stepDuration = '8n';

        // Get total steps (handle multi-bar patterns)
        const bars = pattern.bars || 1;
        const kickArray = pattern.kick;
        const totalSteps = kickArray.length;

        // Create sequence synced with kick pattern
        this.scaleSequence = new Tone.Sequence(
            (time, step) => {
                // Check if kick hits on this step
                if (kickArray[step] === 1) {
                    const noteInfo = scaleNotes[this.currentNoteIndex % scaleNotes.length];

                    // Play the note
                    bassSound.play(null, noteInfo.string, noteInfo.fret, '8n');

                    // Highlight on the UI (use Draw for visual sync)
                    Tone.Draw.schedule(() => {
                        this.highlightPlayingNote(noteInfo);
                    }, time);

                    // Advance to next scale note
                    this.currentNoteIndex++;
                }
            },
            // Array of step indices
            [...Array(totalSteps).keys()],
            stepDuration
        );

        this.scaleSequence.loop = true;
        this.scaleSequence.start(0);

        // Start transport if not already running
        if (Tone.Transport.state !== 'started') {
            Tone.Transport.start();
        }
    }

    stopPlay() {
        this.isPlaying = false;

        // Update button state
        const btn = document.getElementById('scalePlayBtn');
        if (btn) btn.classList.remove('active');

        // Stop and dispose sequence
        if (this.scaleSequence) {
            this.scaleSequence.stop();
            this.scaleSequence.dispose();
            this.scaleSequence = null;
        }

        // Clear highlight
        this.highlightPlayingNote(null);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.fretboard = new Fretboard();
});
