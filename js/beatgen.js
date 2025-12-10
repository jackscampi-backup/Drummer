// Beat Generator con Tone.js - Rack Unit Style

class BeatGenerator {
    constructor() {
        this.isPlaying = false;
        this.currentPattern = null;
        this.currentGenre = null;
        this.currentStep = 0;
        this.bpm = 120;

        // Synth per i suoni di batteria
        this.kick = null;
        this.snare = null;
        this.hihat = null;

        // Volumi
        this.kickVol = null;
        this.snareVol = null;
        this.hihatVol = null;
        this.masterVol = null;

        // Sequencer
        this.sequence = null;

        // DOM elements
        this.beatPlayBtn = document.getElementById('beatPlayBtn');
        this.beatPlayIcon = document.getElementById('beatPlayIcon');
        this.genreButtonsContainer = document.getElementById('genreButtons');
        this.variationButtonsContainer = document.getElementById('variationButtons');

        // BPM controls
        this.bpmDisplay = document.getElementById('bpmDisplay');

        // Pattern display
        this.kickPatternEl = document.getElementById('kickPattern');
        this.snarePatternEl = document.getElementById('snarePattern');
        this.hihatPatternEl = document.getElementById('hihatPattern');

        this.init();
    }

    init() {
        this.setupSounds();
        this.renderGenreButtons();
        this.setupEventListeners();
        this.createPatternDisplay();
        this.updateBpmDisplay();

        // Seleziona il primo genere
        this.selectGenre('rock');
    }

    renderGenreButtons() {
        let html = '';
        Object.keys(GENRES).forEach(genreKey => {
            const genre = GENRES[genreKey];
            html += `<button class="genre-btn" data-genre="${genreKey}">
                <span class="genre-led"></span>
                <span class="dymo-label">${genre.name}</span>
            </button>`;
        });
        this.genreButtonsContainer.innerHTML = html;
    }

    renderVariationButtons(genreKey) {
        const genre = GENRES[genreKey];
        let html = '';
        genre.patterns.forEach(patternKey => {
            const pattern = PATTERNS[patternKey];
            html += `<button class="variation-btn" data-pattern="${patternKey}">
                <span class="variation-led"></span>
                <span class="dymo-label">${pattern.name}</span>
            </button>`;
        });
        this.variationButtonsContainer.innerHTML = html;

        // Aggiungi event listeners alle nuove variazioni
        this.variationButtonsContainer.querySelectorAll('.variation-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.selectPattern(btn.dataset.pattern);
            });
        });
    }

    setupSounds() {
        // Master volume
        this.masterVol = new Tone.Volume(0).toDestination();

        // Volumi individuali
        this.kickVol = new Tone.Volume(-6).connect(this.masterVol);
        this.snareVol = new Tone.Volume(-6).connect(this.masterVol);
        this.hihatVol = new Tone.Volume(-10).connect(this.masterVol);

        // Kick drum
        this.kick = new Tone.MembraneSynth({
            pitchDecay: 0.05,
            octaves: 6,
            oscillator: { type: 'sine' },
            envelope: {
                attack: 0.001,
                decay: 0.4,
                sustain: 0.01,
                release: 0.4
            }
        }).connect(this.kickVol);

        // Snare
        this.snare = new Tone.NoiseSynth({
            noise: { type: 'white' },
            envelope: {
                attack: 0.001,
                decay: 0.2,
                sustain: 0,
                release: 0.1
            }
        }).connect(this.snareVol);

        // Hi-hat
        const hihatFilter = new Tone.Filter(8000, 'highpass').connect(this.hihatVol);
        this.hihat = new Tone.NoiseSynth({
            noise: { type: 'white' },
            envelope: {
                attack: 0.001,
                decay: 0.05,
                sustain: 0,
                release: 0.02
            }
        }).connect(hihatFilter);

    }

    setupEventListeners() {
        // Play/Pause
        this.beatPlayBtn.addEventListener('click', () => this.togglePlay());

        // Genre selection
        this.genreButtonsContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.genre-btn');
            if (btn) {
                this.selectGenre(btn.dataset.genre);
            }
        });

        // BPM input
        this.bpmDisplay.addEventListener('change', () => this.handleBpmInput());
        this.bpmDisplay.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.handleBpmInput();
                this.bpmDisplay.blur();
            }
        });

        // Keyboard shortcut
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space' && e.target.tagName !== 'INPUT') {
                e.preventDefault();
                this.togglePlay();
            }
        });
    }

    handleBpmInput() {
        let value = parseInt(this.bpmDisplay.value);
        if (isNaN(value)) value = 120;
        value = Math.max(40, Math.min(220, value));
        this.setBPM(value);
    }

    updateBpmDisplay() {
        // Always show 3 digits with leading zeros
        this.bpmDisplay.value = String(this.bpm).padStart(3, '0');
    }

    createPatternDisplay() {
        [this.kickPatternEl, this.snarePatternEl, this.hihatPatternEl].forEach(row => {
            row.innerHTML = '';
            // Create 4 beat groups
            for (let beat = 0; beat < 4; beat++) {
                const beatGroup = document.createElement('div');
                beatGroup.className = 'beat-group-steps';
                for (let s = 0; s < 4; s++) {
                    const stepIndex = beat * 4 + s;
                    const step = document.createElement('div');
                    step.className = 'step';
                    step.dataset.step = stepIndex;
                    beatGroup.appendChild(step);
                }
                row.appendChild(beatGroup);
            }
        });
    }

    updatePatternDisplay() {
        if (!this.currentPattern) return;

        const pattern = PATTERNS[this.currentPattern];

        const updateRow = (row, data) => {
            row.querySelectorAll('.step').forEach((step, i) => {
                step.classList.toggle('active', data[i] === 1);
            });
        };

        updateRow(this.kickPatternEl, pattern.kick);
        updateRow(this.snarePatternEl, pattern.snare);
        updateRow(this.hihatPatternEl, pattern.hihat);
    }

    highlightStep(step) {
        document.querySelectorAll('.step-row .step').forEach(s => {
            s.classList.remove('playing');
        });

        [this.kickPatternEl, this.snarePatternEl, this.hihatPatternEl].forEach(row => {
            const stepEl = row.querySelector(`[data-step="${step}"]`);
            if (stepEl) stepEl.classList.add('playing');
        });
    }

    selectGenre(genreKey) {
        if (!GENRES[genreKey]) return;

        this.currentGenre = genreKey;

        this.genreButtonsContainer.querySelectorAll('.genre-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.genre === genreKey);
        });

        this.renderVariationButtons(genreKey);
        const firstPattern = GENRES[genreKey].patterns[0];
        this.selectPattern(firstPattern);
    }

    selectPattern(patternName) {
        if (!PATTERNS[patternName]) return;

        this.currentPattern = patternName;
        const pattern = PATTERNS[patternName];

        this.variationButtonsContainer.querySelectorAll('.variation-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.pattern === patternName);
        });

        this.setBPM(pattern.bpm);
        this.updatePatternDisplay();

        if (this.isPlaying) {
            this.stopSequence();
            this.startSequence();
        }
    }

    setBPM(bpm) {
        this.bpm = bpm;
        Tone.Transport.bpm.value = bpm;
        this.updateBpmDisplay();
    }

    async togglePlay() {
        if (this.isPlaying) {
            this.stop();
        } else {
            await this.play();
        }
    }

    async play() {
        if (!this.currentPattern) {
            this.selectGenre('rock');
        }

        await Tone.start();
        this.startSequence();
        this.isPlaying = true;
        this.beatPlayIcon.textContent = '⏸';
        this.beatPlayBtn.classList.add('active');
    }

    stop() {
        this.stopSequence();
        this.isPlaying = false;
        this.beatPlayIcon.textContent = '▶';
        this.beatPlayBtn.classList.remove('active');
        this.currentStep = 0;
        this.highlightStep(-1);
        this.clearBeatCounter();
    }

    startSequence() {
        const pattern = PATTERNS[this.currentPattern];
        Tone.Transport.bpm.value = this.bpm;

        this.sequence = new Tone.Sequence((time, step) => {
            this.currentStep = step;

            if (pattern.kick[step]) {
                this.kick.triggerAttackRelease('C1', '8n', time);
            }
            if (pattern.snare[step]) {
                this.snare.triggerAttackRelease('8n', time);
            }
            if (pattern.hihat[step]) {
                this.hihat.triggerAttackRelease('32n', time);
            }

            Tone.Draw.schedule(() => {
                this.highlightStep(step);
                this.updateBeatCounter(step);
            }, time);

        }, [...Array(16).keys()], '16n');

        this.sequence.start(0);
        Tone.Transport.start();
    }

    updateBeatCounter(step) {
        const beat = Math.floor(step / 4) + 1;

        document.querySelectorAll('.beat-num').forEach(beatEl => {
            const beatNum = parseInt(beatEl.dataset.beat);
            beatEl.classList.remove('active', 'downbeat');

            if (beatNum === beat) {
                beatEl.classList.add('active');
                if (beatNum === 1) {
                    beatEl.classList.add('downbeat');
                }
            }
        });
    }

    clearBeatCounter() {
        document.querySelectorAll('.beat-num').forEach(beatEl => {
            beatEl.classList.remove('active', 'downbeat');
        });
    }

    stopSequence() {
        if (this.sequence) {
            this.sequence.stop();
            this.sequence.dispose();
            this.sequence = null;
        }
        Tone.Transport.stop();
    }
}

window.BeatGenerator = BeatGenerator;
