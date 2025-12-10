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
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.fretboard = new Fretboard();
});
