// Pattern di batteria organizzati per genere musicale
// Ogni pattern è un array di 16 step (1 = hit, 0 = silence)
// Rappresentano una battuta 4/4 con suddivisione in sedicesimi

const PATTERNS = {

    // ========== ROCK (8 patterns) ==========
    rock_basic: {
        name: 'Basic',
        genre: 'Rock',
        bpm: 115,
        kick:  [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    rock_hard: {
        name: 'Hard',
        genre: 'Rock',
        bpm: 130,
        kick:  [1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,1,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    rock_pop: {
        name: 'Pop',
        genre: 'Rock',
        bpm: 110,
        kick:  [1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,1,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    rock_halftime: {
        name: 'Half-Time',
        genre: 'Rock',
        bpm: 80,
        kick:  [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        snare: [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    rock_shuffle: {
        name: 'Shuffle',
        genre: 'Rock',
        bpm: 120,
        kick:  [1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,1,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,0,1, 0,0,1,0, 1,0,0,1, 0,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    rock_punk: {
        name: 'Punk',
        genre: 'Rock',
        bpm: 170,
        kick:  [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    rock_ballad: {
        name: 'Ballad',
        genre: 'Rock',
        bpm: 70,
        kick:  [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,1,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    rock_stadium: {
        name: 'Stadium',
        genre: 'Rock',
        bpm: 135,
        kick:  [1,0,0,0, 0,0,0,0, 1,0,1,0, 0,0,0,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },

    // ========== POP (8 patterns) ==========
    pop_basic: {
        name: 'Basic',
        genre: 'Pop',
        bpm: 105,
        kick:  [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    pop_dance: {
        name: 'Dance',
        genre: 'Pop',
        bpm: 122,
        kick:  [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    pop_ballad: {
        name: 'Ballad',
        genre: 'Pop',
        bpm: 72,
        kick:  [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    pop_upbeat: {
        name: 'Upbeat',
        genre: 'Pop',
        bpm: 128,
        kick:  [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    pop_motown: {
        name: 'Motown',
        genre: 'Pop',
        bpm: 112,
        kick:  [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        snare: [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        hihat: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    pop_synthpop: {
        name: 'Synthpop',
        genre: 'Pop',
        bpm: 118,
        kick:  [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,1,1, 1,0,1,1, 1,0,1,1, 1,0,1,1],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    pop_funk: {
        name: 'Funk',
        genre: 'Pop',
        bpm: 108,
        kick:  [1,0,0,1, 0,0,1,0, 1,0,0,1, 0,0,0,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0]
    },
    pop_modern: {
        name: 'Modern',
        genre: 'Pop',
        bpm: 100,
        kick:  [1,0,0,0, 0,0,1,0, 0,0,1,0, 0,0,0,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },

    // ========== FUNK / HIP-HOP (8 patterns) ==========
    funk_basic: {
        name: 'Basic',
        genre: 'Funk',
        bpm: 100,
        kick:  [1,0,0,1, 0,0,1,0, 0,0,1,0, 0,0,0,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0]
    },
    funk_jb: {
        name: 'JB-Style',
        genre: 'Funk',
        bpm: 110,
        kick:  [1,0,0,0, 0,0,1,0, 0,1,0,0, 0,0,1,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,1],
        hihat: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        rim:   [0,0,1,0, 0,0,0,0, 0,0,1,0, 0,0,0,0]
    },
    funk_drummer: {
        name: 'FunkyDr.',
        genre: 'Funk',
        bpm: 105,
        kick:  [1,0,0,1, 0,0,0,0, 1,0,1,0, 0,0,0,0],
        snare: [0,0,0,0, 1,0,0,1, 0,0,0,0, 1,0,1,0],
        hihat: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    funk_boombap: {
        name: 'BoomBap',
        genre: 'Funk',
        bpm: 90,
        kick:  [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    funk_trap: {
        name: 'Trap',
        genre: 'Funk',
        bpm: 140,
        kick:  [1,0,0,0, 0,0,0,0, 0,0,0,1, 0,0,1,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    funk_lofi: {
        name: 'Lo-Fi',
        genre: 'Funk',
        bpm: 80,
        kick:  [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,1],
        hihat: [1,0,1,1, 0,1,1,0, 1,0,1,1, 0,1,0,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    funk_neworleans: {
        name: 'N.Orleans',
        genre: 'Funk',
        bpm: 95,
        kick:  [1,0,0,0, 0,0,1,0, 0,0,0,0, 0,1,0,0],
        snare: [0,0,0,0, 1,0,0,1, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0]
    },
    funk_breakbeat: {
        name: 'Breakbeat',
        genre: 'Funk',
        bpm: 115,
        kick:  [1,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0],
        snare: [0,0,0,0, 1,0,0,0, 0,1,0,0, 1,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },

    // ========== BLUES (8 patterns) ==========
    blues_shuffle: {
        name: 'Shuffle',
        genre: 'Blues',
        bpm: 100,
        kick:  [1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,1,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,0,1, 0,0,1,0, 1,0,0,1, 0,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    blues_slow: {
        name: 'Slow',
        genre: 'Blues',
        bpm: 60,
        kick:  [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    blues_chicago: {
        name: 'Chicago',
        genre: 'Blues',
        bpm: 110,
        kick:  [1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,1,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,0,1, 0,0,1,0, 1,0,0,1, 0,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    blues_texas: {
        name: 'Texas',
        genre: 'Blues',
        bpm: 120,
        kick:  [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,0,1, 0,0,1,0, 1,0,0,1, 0,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    blues_12_8: {
        name: '12/8Feel',
        genre: 'Blues',
        bpm: 70,
        kick:  [1,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,1],
        hihat: [1,0,1,1, 0,1,1,0, 1,1,0,1, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    blues_jump: {
        name: 'Jump',
        genre: 'Blues',
        bpm: 160,
        kick:  [1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,1,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,0,1, 0,0,1,0, 1,0,0,1, 0,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    blues_rock: {
        name: 'Rock',
        genre: 'Blues',
        bpm: 130,
        kick:  [1,0,0,0, 0,0,1,0, 1,0,0,0, 0,1,0,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,0,1, 0,0,1,0, 1,0,0,1, 0,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    blues_train: {
        name: 'Train',
        genre: 'Blues',
        bpm: 110,
        kick:  [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        snare: [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },

    // ========== JAZZ (8 patterns) ==========
    jazz_swing: {
        name: 'Swing',
        genre: 'Jazz',
        bpm: 140,
        kick:  [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        snare: [0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0],
        hihat: [1,0,0,1, 0,0,1,0, 1,0,0,1, 0,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    jazz_bebop: {
        name: 'Bebop',
        genre: 'Jazz',
        bpm: 220,
        kick:  [1,0,0,0, 0,0,0,0, 0,1,0,0, 0,0,0,0],
        snare: [0,0,1,0, 0,0,0,1, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,0,1, 0,0,1,0, 1,0,0,1, 0,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    jazz_ballad: {
        name: 'Ballad',
        genre: 'Jazz',
        bpm: 65,
        kick:  [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0],
        snare: [0,1,0,1, 0,1,0,1, 0,1,0,1, 0,1,0,1],
        hihat: [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    jazz_waltz: {
        name: 'Waltz',
        genre: 'Jazz',
        bpm: 155,
        kick:  [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
        snare: [0,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,0],
        hihat: [1,0,0,1, 0,0,1,0, 0,1,0,0, 0,0,0,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    jazz_slow_swing: {
        name: 'SlowSw.',
        genre: 'Jazz',
        bpm: 100,
        kick:  [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        snare: [0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0],
        hihat: [1,0,0,1, 0,0,1,0, 1,0,0,1, 0,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    jazz_medium_up: {
        name: 'Med-Up',
        genre: 'Jazz',
        bpm: 175,
        kick:  [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,1,0,0],
        snare: [0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0],
        hihat: [1,0,0,1, 0,0,1,0, 1,0,0,1, 0,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    jazz_fusion: {
        name: 'Fusion',
        genre: 'Jazz',
        bpm: 115,
        kick:  [1,0,0,0, 0,0,1,0, 0,0,0,0, 0,1,0,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,1,0, 1,0,0,0],
        hihat: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    jazz_brushes: {
        name: 'Brushes',
        genre: 'Jazz',
        bpm: 120,
        kick:  [1,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0],
        snare: [0,1,0,1, 0,1,0,1, 0,1,0,1, 0,1,0,1],
        hihat: [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },

    // ========== LATIN (8 patterns) ==========
    latin_bossa: {
        name: 'Bossa',
        genre: 'Latin',
        bpm: 135,
        kick:  [1,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0],
        snare: [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,1,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    latin_samba: {
        name: 'Samba',
        genre: 'Latin',
        bpm: 100,
        kick:  [1,0,0,1, 0,0,1,0, 1,0,0,1, 0,0,1,0],
        snare: [0,0,1,0, 0,1,0,0, 0,0,1,0, 0,1,0,0],
        hihat: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    latin_salsa: {
        name: 'Salsa',
        genre: 'Latin',
        bpm: 185,
        kick:  [1,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0],
        snare: [0,0,0,1, 0,0,0,0, 1,0,0,1, 0,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    latin_chacha: {
        name: 'Cha-Cha',
        genre: 'Latin',
        bpm: 120,
        kick:  [1,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,1,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    latin_afrocuban: {
        name: 'AfroCuban',
        genre: 'Latin',
        bpm: 110,
        kick:  [1,0,0,0, 0,0,1,0, 0,1,0,0, 0,0,0,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,1,0],
        hihat: [1,0,1,1, 0,1,1,0, 1,0,1,1, 0,1,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    latin_mambo: {
        name: 'Mambo',
        genre: 'Latin',
        bpm: 195,
        kick:  [1,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0],
        snare: [0,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        hihat: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    latin_songo: {
        name: 'Songo',
        genre: 'Latin',
        bpm: 108,
        kick:  [1,0,0,0, 0,0,1,0, 0,0,0,0, 0,1,0,0],
        snare: [0,0,0,0, 1,0,0,0, 0,1,0,0, 1,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    latin_bossa_slow: {
        name: 'BossaSl.',
        genre: 'Latin',
        bpm: 100,
        kick:  [1,0,0,0, 0,0,1,0, 0,0,0,0, 1,0,0,0],
        snare: [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,1,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },

    // ========== REGGAE (8 patterns) ==========
    reggae_onedrop: {
        name: 'OneDrop',
        genre: 'Reggae',
        bpm: 78,
        kick:  [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        snare: [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    reggae_rockers: {
        name: 'Rockers',
        genre: 'Reggae',
        bpm: 82,
        kick:  [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        snare: [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    reggae_steppers: {
        name: 'Steppers',
        genre: 'Reggae',
        bpm: 122,
        kick:  [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        snare: [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    reggae_ska: {
        name: 'Ska',
        genre: 'Reggae',
        bpm: 130,
        kick:  [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    reggae_dub: {
        name: 'Dub',
        genre: 'Reggae',
        bpm: 68,
        kick:  [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        snare: [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    reggae_roots_slow: {
        name: 'RootsSl.',
        genre: 'Reggae',
        bpm: 65,
        kick:  [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        snare: [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    reggae_dancehall: {
        name: 'Dancehall',
        genre: 'Reggae',
        bpm: 100,
        kick:  [1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,1,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    reggae_steppers_fast: {
        name: 'StepFast',
        genre: 'Reggae',
        bpm: 150,
        kick:  [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],
        snare: [0,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },

    // ========== ELECTRONIC (8 patterns) - Trip-Hop / Slow Hip-Hop ==========
    electronic_massive: {
        name: 'Massive',
        genre: 'Electronic',
        bpm: 68,
        // Massive Attack - Teardrop style
        kick:  [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    electronic_tricky: {
        name: 'Tricky',
        genre: 'Electronic',
        bpm: 75,
        // Tricky - Hell Is Round The Corner style
        kick:  [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        snare: [0,0,0,0, 1,0,0,1, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    electronic_fugees: {
        name: 'Fugees',
        genre: 'Electronic',
        bpm: 96,
        // Fugees - Killing Me Softly style
        kick:  [1,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    electronic_delasoui: {
        name: 'DeLa',
        genre: 'Electronic',
        bpm: 98,
        // De La Soul - laid back groove
        kick:  [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,1,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    electronic_slim: {
        name: 'Slim',
        genre: 'Electronic',
        bpm: 86,
        // Eminem - Slim Shady LP style
        kick:  [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    electronic_portis: {
        name: 'Portis',
        genre: 'Electronic',
        bpm: 72,
        // Portishead - Glory Box style
        kick:  [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,1],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    electronic_morcheeba: {
        name: 'Morch',
        genre: 'Electronic',
        bpm: 82,
        // Morcheeba - chill groove
        kick:  [1,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,1,1, 0,0,1,0, 1,0,1,1, 0,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    },
    electronic_hiphop: {
        name: 'Hip-Hop',
        genre: 'Electronic',
        bpm: 90,
        // Classic 90s Hip-Hop
        kick:  [1,0,0,0, 0,0,0,0, 0,0,1,0, 0,0,0,0],
        snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
        hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
        rim:   [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0]
    }
};

// Raggruppa pattern per genere (8 pattern ciascuno)
const GENRES = {
    rock: {
        name: 'Rock',
        patterns: ['rock_basic', 'rock_hard', 'rock_pop', 'rock_halftime', 'rock_shuffle', 'rock_punk', 'rock_ballad', 'rock_stadium']
    },
    pop: {
        name: 'Pop',
        patterns: ['pop_basic', 'pop_dance', 'pop_ballad', 'pop_upbeat', 'pop_motown', 'pop_synthpop', 'pop_funk', 'pop_modern']
    },
    funk: {
        name: 'Funk',
        patterns: ['funk_basic', 'funk_jb', 'funk_drummer', 'funk_boombap', 'funk_trap', 'funk_lofi', 'funk_neworleans', 'funk_breakbeat']
    },
    blues: {
        name: 'Blues',
        patterns: ['blues_shuffle', 'blues_slow', 'blues_chicago', 'blues_texas', 'blues_12_8', 'blues_jump', 'blues_rock', 'blues_train']
    },
    jazz: {
        name: 'Jazz',
        patterns: ['jazz_swing', 'jazz_bebop', 'jazz_ballad', 'jazz_waltz', 'jazz_slow_swing', 'jazz_medium_up', 'jazz_fusion', 'jazz_brushes']
    },
    latin: {
        name: 'Latin',
        patterns: ['latin_bossa', 'latin_samba', 'latin_salsa', 'latin_chacha', 'latin_afrocuban', 'latin_mambo', 'latin_songo', 'latin_bossa_slow']
    },
    reggae: {
        name: 'Reggae',
        patterns: ['reggae_onedrop', 'reggae_rockers', 'reggae_steppers', 'reggae_ska', 'reggae_dub', 'reggae_roots_slow', 'reggae_dancehall', 'reggae_steppers_fast']
    },
    electronic: {
        name: 'Electro',
        patterns: ['electronic_massive', 'electronic_tricky', 'electronic_fugees', 'electronic_delasoui', 'electronic_slim', 'electronic_portis', 'electronic_morcheeba', 'electronic_hiphop']
    }
};

// Esporta per uso globale
window.PATTERNS = PATTERNS;
window.GENRES = GENRES;
