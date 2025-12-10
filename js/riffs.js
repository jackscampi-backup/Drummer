// BASSIST - Grooves Library
// Original practice patterns for bass - sync with DRUMMER
// Each groove is an array of 16th note steps (16 per bar)
// Step format: null (rest) or {s: string, f: fret}

const GROOVE_CATEGORIES = {
    root: { name: 'ROOT LOCK', color: '#ff6600' },
    octave: { name: 'OCTAVE', color: '#ff00ff' },
    penta: { name: 'PENTA', color: '#00ff00' },
    walking: { name: 'WALKING', color: '#00ffff' },
    funk: { name: 'FUNK', color: '#ffff00' }
};

const GROOVES = {
    // ==================== ROOT LOCK ====================
    // Simple root-based patterns - focus on timing

    'root-quarters': {
        id: 'root-quarters',
        name: 'Root Quarters',
        category: 'root',
        genre: 'rock',
        difficulty: 1,
        bpm: 100,
        bars: 1,
        description: 'Una nota per beat - il fondamento',
        drummerMatch: ['rock_basic', 'rock_steady'],
        steps: [
            // Beat 1, 2, 3, 4 - quarter notes on E root
            {s:'E',f:0}, null, null, null,
            {s:'E',f:0}, null, null, null,
            {s:'E',f:0}, null, null, null,
            {s:'E',f:0}, null, null, null
        ]
    },

    'root-eighths': {
        id: 'root-eighths',
        name: 'Root Eighths',
        category: 'root',
        genre: 'rock',
        difficulty: 1,
        bpm: 110,
        bars: 1,
        description: 'Due note per beat - più drive',
        drummerMatch: ['rock_basic', 'rock_driving'],
        steps: [
            {s:'E',f:0}, null, {s:'E',f:0}, null,
            {s:'E',f:0}, null, {s:'E',f:0}, null,
            {s:'E',f:0}, null, {s:'E',f:0}, null,
            {s:'E',f:0}, null, {s:'E',f:0}, null
        ]
    },

    'root-fifth': {
        id: 'root-fifth',
        name: 'Root & Fifth',
        category: 'root',
        genre: 'rock',
        difficulty: 2,
        bpm: 120,
        bars: 1,
        description: 'Root + quinta - classico rock',
        drummerMatch: ['rock_basic', 'rock_steady'],
        steps: [
            {s:'E',f:0}, null, null, null,
            {s:'A',f:2}, null, null, null,
            {s:'E',f:0}, null, null, null,
            {s:'A',f:2}, null, null, null
        ]
    },

    // ==================== OCTAVE PUMP ====================
    // Disco/funk octave patterns

    'octave-basic': {
        id: 'octave-basic',
        name: 'Octave Basic',
        category: 'octave',
        genre: 'disco',
        difficulty: 2,
        bpm: 115,
        bars: 1,
        description: 'Ottava semplice - stile disco',
        drummerMatch: ['disco_classic', 'disco_basic'],
        steps: [
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, null, {s:'D',f:2}, null
        ]
    },

    'octave-pump': {
        id: 'octave-pump',
        name: 'Disco Pump',
        category: 'octave',
        genre: 'disco',
        difficulty: 2,
        bpm: 120,
        bars: 2,
        description: 'Pump disco classico con variazione',
        drummerMatch: ['disco_classic', 'disco_hihat'],
        steps: [
            // Bar 1
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, {s:'E',f:0}, {s:'D',f:2}, null,
            // Bar 2 - variation
            {s:'A',f:0}, null, {s:'G',f:2}, null,
            {s:'A',f:0}, null, {s:'G',f:2}, null,
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, null, {s:'D',f:2}, {s:'D',f:2}
        ]
    },

    'octave-synco': {
        id: 'octave-synco',
        name: 'Octave Synco',
        category: 'octave',
        genre: 'disco',
        difficulty: 3,
        bpm: 118,
        bars: 1,
        description: 'Ottave sincropate - anticipo sul 4',
        drummerMatch: ['disco_classic', 'funk_basic'],
        steps: [
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, null, null, {s:'D',f:2},
            null, {s:'E',f:0}, null, {s:'D',f:2},
            {s:'E',f:0}, null, {s:'D',f:2}, null
        ]
    },

    // ==================== PENTA JAM ====================
    // Pentatonic patterns in box position

    'penta-climb': {
        id: 'penta-climb',
        name: 'Penta Climb',
        category: 'penta',
        genre: 'blues',
        difficulty: 2,
        bpm: 90,
        bars: 2,
        description: 'Salita pentatonica minore - box E',
        drummerMatch: ['blues_shuffle', 'blues_slow'],
        steps: [
            // Bar 1 - climb up
            {s:'E',f:0}, null, null, null,
            {s:'E',f:3}, null, null, null,
            {s:'A',f:0}, null, null, null,
            {s:'A',f:2}, null, null, null,
            // Bar 2 - continue and back
            {s:'D',f:0}, null, null, null,
            {s:'D',f:2}, null, null, null,
            {s:'A',f:2}, null, null, null,
            {s:'E',f:0}, null, null, null
        ]
    },

    'penta-box': {
        id: 'penta-box',
        name: 'Penta Box',
        category: 'penta',
        genre: 'rock',
        difficulty: 2,
        bpm: 100,
        bars: 1,
        description: 'Pattern nel box - 4 note loop',
        drummerMatch: ['rock_basic', 'blues_rock'],
        steps: [
            {s:'E',f:0}, null, {s:'E',f:3}, null,
            {s:'A',f:0}, null, {s:'A',f:2}, null,
            {s:'A',f:0}, null, {s:'E',f:3}, null,
            {s:'E',f:0}, null, null, null
        ]
    },

    'penta-groove': {
        id: 'penta-groove',
        name: 'Penta Groove',
        category: 'penta',
        genre: 'rock',
        difficulty: 3,
        bpm: 105,
        bars: 2,
        description: 'Groove rock con pentatonica',
        drummerMatch: ['rock_driving', 'rock_heavy'],
        steps: [
            // Bar 1
            {s:'E',f:0}, null, {s:'E',f:0}, {s:'E',f:3},
            null, {s:'A',f:0}, null, null,
            {s:'A',f:2}, null, {s:'A',f:0}, null,
            {s:'E',f:3}, null, {s:'E',f:0}, null,
            // Bar 2
            {s:'E',f:0}, null, {s:'E',f:0}, {s:'E',f:3},
            null, {s:'A',f:0}, null, {s:'A',f:2},
            null, null, {s:'A',f:0}, null,
            {s:'E',f:3}, {s:'E',f:3}, {s:'E',f:0}, null
        ]
    },

    // ==================== WALKING ====================
    // Walking bass patterns

    'walk-basic': {
        id: 'walk-basic',
        name: 'Walk Basic',
        category: 'walking',
        genre: 'jazz',
        difficulty: 2,
        bpm: 100,
        bars: 2,
        description: 'Walking bass semplice - 1 nota per beat',
        drummerMatch: ['jazz_swing', 'jazz_brushes'],
        steps: [
            // Bar 1 - C chord area (on A string)
            {s:'A',f:3}, null, null, null,
            {s:'A',f:5}, null, null, null,
            {s:'D',f:2}, null, null, null,
            {s:'D',f:4}, null, null, null,
            // Bar 2 - back down
            {s:'D',f:5}, null, null, null,
            {s:'D',f:2}, null, null, null,
            {s:'A',f:5}, null, null, null,
            {s:'A',f:3}, null, null, null
        ]
    },

    'walk-approach': {
        id: 'walk-approach',
        name: 'Walk Approach',
        category: 'walking',
        genre: 'jazz',
        difficulty: 3,
        bpm: 110,
        bars: 2,
        description: 'Note di approccio cromatico',
        drummerMatch: ['jazz_swing', 'jazz_medium'],
        steps: [
            // Bar 1
            {s:'E',f:0}, null, null, null,
            {s:'E',f:2}, null, null, null,
            {s:'E',f:4}, null, null, null,
            {s:'A',f:0}, null, null, null,
            // Bar 2 - chromatic approach
            {s:'A',f:2}, null, null, null,
            {s:'A',f:4}, null, null, null,
            {s:'D',f:0}, null, null, null,
            {s:'D',f:1}, null, null, null
        ]
    },

    // ==================== FUNK ====================
    // Syncopated funk patterns

    'funk-basic': {
        id: 'funk-basic',
        name: 'Funk Basic',
        category: 'funk',
        genre: 'funk',
        difficulty: 2,
        bpm: 95,
        bars: 1,
        description: 'Groove funk base - sedicesimi',
        drummerMatch: ['funk_basic', 'funk_tight'],
        steps: [
            {s:'E',f:0}, null, {s:'E',f:0}, null,
            null, {s:'E',f:0}, null, {s:'E',f:3},
            {s:'E',f:0}, null, null, {s:'E',f:0},
            null, {s:'E',f:3}, {s:'E',f:0}, null
        ]
    },

    'funk-slap': {
        id: 'funk-slap',
        name: 'Funk Pocket',
        category: 'funk',
        genre: 'funk',
        difficulty: 3,
        bpm: 92,
        bars: 2,
        description: 'Nel pocket - spazio tra le note',
        drummerMatch: ['funk_basic', 'funk_groove'],
        steps: [
            // Bar 1
            {s:'E',f:0}, null, null, null,
            null, null, {s:'E',f:0}, null,
            {s:'A',f:2}, null, null, {s:'E',f:0},
            null, null, null, null,
            // Bar 2
            {s:'E',f:0}, null, null, {s:'E',f:3},
            null, null, {s:'E',f:0}, null,
            null, {s:'A',f:2}, null, {s:'E',f:0},
            null, {s:'E',f:3}, {s:'E',f:0}, null
        ]
    },

    'funk-16ths': {
        id: 'funk-16ths',
        name: 'Funk 16ths',
        category: 'funk',
        genre: 'funk',
        difficulty: 4,
        bpm: 88,
        bars: 1,
        description: 'Sedicesimi funk - impegnativo!',
        drummerMatch: ['funk_tight', 'funk_groove'],
        steps: [
            {s:'E',f:0}, {s:'E',f:0}, null, {s:'E',f:3},
            {s:'E',f:0}, null, {s:'A',f:0}, {s:'A',f:2},
            null, {s:'E',f:0}, {s:'E',f:3}, {s:'E',f:0},
            null, {s:'A',f:2}, {s:'A',f:0}, null
        ]
    }
};

// Helper: Get groove by ID
function getGroove(id) {
    return GROOVES[id] || null;
}

// Helper: Get all grooves as array
function getAllGrooves() {
    return Object.values(GROOVES);
}

// Helper: Get grooves by category
function getGroovesByCategory(category) {
    return Object.values(GROOVES).filter(g => g.category === category);
}

// Helper: Get grooves by genre
function getGroovesByGenre(genre) {
    return Object.values(GROOVES).filter(g => g.genre === genre);
}

// Helper: Get grooves by difficulty
function getGroovesByDifficulty(difficulty) {
    return Object.values(GROOVES).filter(g => g.difficulty === difficulty);
}

// Helper: Get random groove
function getRandomGroove(category = null) {
    let grooves = category ? getGroovesByCategory(category) : getAllGrooves();
    return grooves[Math.floor(Math.random() * grooves.length)];
}

// Backwards compatibility - alias for riff functions
const RIFFS = GROOVES;
function getRiff(id) { return getGroove(id); }
function getAllRiffs() { return getAllGrooves(); }
