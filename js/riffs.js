// BASSIST - Grooves Library
// Original practice patterns for bass - sync with DRUMMER
// Each groove is an array of 16th note steps (16 per bar)
// Step format: null (rest) or {s: string, f: fret}

const GROOVE_CATEGORIES = {
    foundation: { name: 'FOUNDATION', color: '#ffffff' },
    rock: { name: 'ROCK', color: '#ff6600' },
    blues: { name: 'BLUES', color: '#6666ff' },
    funk: { name: 'FUNK', color: '#ffff00' },
    disco: { name: 'DISCO', color: '#ff00ff' }
};

const GROOVES = {
    // ==================== FOUNDATION ====================
    // Basic patterns for all styles - focus on timing and fundamentals

    'found-whole': {
        id: 'found-whole',
        name: 'Whole Notes',
        category: 'foundation',
        difficulty: 1,
        bpm: 70,
        bars: 2,
        drumPattern: 'rock_ballad',
        description: 'One note per bar',
        steps: [
            // Bar 1
            {s:'E',f:0}, null, null, null,
            null, null, null, null,
            null, null, null, null,
            null, null, null, null,
            // Bar 2
            {s:'E',f:0}, null, null, null,
            null, null, null, null,
            null, null, null, null,
            null, null, null, null
        ]
    },

    'found-half': {
        id: 'found-half',
        name: 'Half Notes',
        category: 'foundation',
        difficulty: 1,
        bpm: 80,
        bars: 1,
        drumPattern: 'rock_halftime',
        description: 'Two notes per bar',
        steps: [
            {s:'E',f:0}, null, null, null,
            null, null, null, null,
            {s:'E',f:0}, null, null, null,
            null, null, null, null
        ]
    },

    'found-quarters': {
        id: 'found-quarters',
        name: 'Quarter Lock',
        category: 'foundation',
        difficulty: 1,
        bpm: 90,
        bars: 1,
        drumPattern: 'drill_backbeat',
        description: 'Quarter notes on root',
        steps: [
            {s:'E',f:0}, null, null, null,
            {s:'E',f:0}, null, null, null,
            {s:'E',f:0}, null, null, null,
            {s:'E',f:0}, null, null, null
        ]
    },

    'found-eighths': {
        id: 'found-eighths',
        name: 'Eighth Drive',
        category: 'foundation',
        difficulty: 2,
        bpm: 100,
        bars: 1,
        drumPattern: 'rock_basic',
        description: 'Eighth notes steady',
        steps: [
            {s:'E',f:0}, null, {s:'E',f:0}, null,
            {s:'E',f:0}, null, {s:'E',f:0}, null,
            {s:'E',f:0}, null, {s:'E',f:0}, null,
            {s:'E',f:0}, null, {s:'E',f:0}, null
        ]
    },

    'found-r5': {
        id: 'found-r5',
        name: 'Root-Fifth',
        category: 'foundation',
        difficulty: 2,
        bpm: 100,
        bars: 1,
        drumPattern: 'rock_basic',
        description: 'Root to fifth alternation',
        steps: [
            {s:'E',f:0}, null, null, null,
            {s:'A',f:2}, null, null, null,
            {s:'E',f:0}, null, null, null,
            {s:'A',f:2}, null, null, null
        ]
    },

    'found-r8': {
        id: 'found-r8',
        name: 'Root-Octave',
        category: 'foundation',
        difficulty: 2,
        bpm: 100,
        bars: 1,
        drumPattern: 'rock_basic',
        description: 'Root to octave jump',
        steps: [
            {s:'E',f:0}, null, null, null,
            {s:'D',f:2}, null, null, null,
            {s:'E',f:0}, null, null, null,
            {s:'D',f:2}, null, null, null
        ]
    },

    'found-r5-8': {
        id: 'found-r5-8',
        name: 'R-5-8 Climb',
        category: 'foundation',
        difficulty: 3,
        bpm: 95,
        bars: 1,
        drumPattern: 'rock_pop',
        description: 'Root, fifth, octave pattern',
        steps: [
            {s:'E',f:0}, null, null, null,
            {s:'A',f:2}, null, null, null,
            {s:'D',f:2}, null, null, null,
            {s:'A',f:2}, null, null, null
        ]
    },

    'found-walkup': {
        id: 'found-walkup',
        name: 'Scale Walkup',
        category: 'foundation',
        difficulty: 3,
        bpm: 90,
        bars: 1,
        drumPattern: 'blues_chicago',
        description: 'Four note scale climb',
        steps: [
            {s:'E',f:0}, null, null, null,
            {s:'E',f:2}, null, null, null,
            {s:'E',f:4}, null, null, null,
            {s:'A',f:0}, null, null, null
        ]
    },

    // ==================== ROCK ====================
    // Rock patterns from basic to heavy

    'rock-lock': {
        id: 'rock-lock',
        name: 'Rock Lock',
        category: 'rock',
        difficulty: 1,
        bpm: 110,
        bars: 1,
        drumPattern: 'rock_pop',
        description: 'Solid root quarters',
        steps: [
            {s:'E',f:0}, null, null, null,
            {s:'E',f:0}, null, null, null,
            {s:'E',f:0}, null, null, null,
            {s:'E',f:0}, null, null, null
        ]
    },

    'rock-eighths': {
        id: 'rock-eighths',
        name: 'Rock Eighths',
        category: 'rock',
        difficulty: 2,
        bpm: 120,
        bars: 1,
        drumPattern: 'rock_basic',
        description: 'Driving eighth notes',
        steps: [
            {s:'E',f:0}, null, {s:'E',f:0}, null,
            {s:'E',f:0}, null, {s:'E',f:0}, null,
            {s:'E',f:0}, null, {s:'E',f:0}, null,
            {s:'E',f:0}, null, {s:'E',f:0}, null
        ]
    },

    'rock-r5': {
        id: 'rock-r5',
        name: 'Power R5',
        category: 'rock',
        difficulty: 2,
        bpm: 120,
        bars: 1,
        drumPattern: 'rock_basic',
        description: 'Power root-fifth',
        steps: [
            {s:'E',f:0}, null, {s:'E',f:0}, null,
            {s:'A',f:2}, null, {s:'A',f:2}, null,
            {s:'E',f:0}, null, {s:'E',f:0}, null,
            {s:'A',f:2}, null, {s:'A',f:2}, null
        ]
    },

    'rock-shuffle': {
        id: 'rock-shuffle',
        name: 'Rock Shuffle',
        category: 'rock',
        difficulty: 2,
        bpm: 130,
        bars: 1,
        drumPattern: 'rock_shuffle',
        description: 'Light shuffle feel',
        steps: [
            {s:'E',f:0}, null, null, {s:'E',f:0},
            {s:'E',f:0}, null, null, {s:'E',f:0},
            {s:'E',f:0}, null, null, {s:'E',f:0},
            {s:'E',f:0}, null, null, {s:'E',f:0}
        ]
    },

    'rock-fill1': {
        id: 'rock-fill1',
        name: 'Walkup Fill',
        category: 'rock',
        difficulty: 3,
        bpm: 120,
        bars: 1,
        drumPattern: 'rock_fill',
        description: 'Chromatic walkup fill',
        steps: [
            {s:'E',f:0}, null, {s:'E',f:0}, null,
            {s:'E',f:0}, null, {s:'E',f:0}, null,
            {s:'E',f:0}, null, {s:'E',f:2}, null,
            {s:'E',f:3}, null, {s:'E',f:4}, null
        ]
    },

    'rock-fill2': {
        id: 'rock-fill2',
        name: 'Walkdown Fill',
        category: 'rock',
        difficulty: 3,
        bpm: 120,
        bars: 1,
        drumPattern: 'rock_fill',
        description: 'Chromatic walkdown fill',
        steps: [
            {s:'E',f:0}, null, {s:'E',f:0}, null,
            {s:'E',f:0}, null, {s:'E',f:0}, null,
            {s:'A',f:2}, null, {s:'A',f:1}, null,
            {s:'A',f:0}, null, {s:'E',f:4}, null
        ]
    },

    'rock-penta': {
        id: 'rock-penta',
        name: 'Penta Rock',
        category: 'rock',
        difficulty: 3,
        bpm: 115,
        bars: 2,
        drumPattern: 'rock_basic',
        description: 'Pentatonic rock groove',
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

    'rock-heavy': {
        id: 'rock-heavy',
        name: 'Heavy Drive',
        category: 'rock',
        difficulty: 4,
        bpm: 130,
        bars: 2,
        drumPattern: 'rock_hard',
        description: 'Heavy eighths with variations',
        steps: [
            // Bar 1
            {s:'E',f:0}, null, {s:'E',f:0}, null,
            {s:'E',f:0}, {s:'E',f:0}, {s:'E',f:0}, null,
            {s:'A',f:2}, null, {s:'A',f:2}, null,
            {s:'E',f:0}, null, {s:'E',f:3}, {s:'E',f:0},
            // Bar 2
            {s:'E',f:0}, null, {s:'E',f:0}, null,
            {s:'E',f:0}, null, {s:'E',f:0}, {s:'E',f:3},
            {s:'A',f:0}, null, {s:'A',f:2}, null,
            {s:'E',f:4}, {s:'E',f:3}, {s:'E',f:2}, {s:'E',f:0}
        ]
    },

    // ==================== BLUES ====================
    // Blues patterns with shuffle and feel

    'blues-slow': {
        id: 'blues-slow',
        name: 'Slow Blues',
        category: 'blues',
        difficulty: 1,
        bpm: 65,
        bars: 1,
        drumPattern: 'blues_slow',
        description: 'Slow quarters with space',
        steps: [
            {s:'E',f:0}, null, null, null,
            {s:'E',f:0}, null, null, null,
            {s:'E',f:0}, null, null, null,
            {s:'E',f:0}, null, null, null
        ]
    },

    'blues-shuffle': {
        id: 'blues-shuffle',
        name: 'Blues Shuffle',
        category: 'blues',
        difficulty: 2,
        bpm: 85,
        bars: 1,
        drumPattern: 'blues_shuffle',
        description: 'Classic shuffle pattern',
        steps: [
            {s:'E',f:0}, null, null, {s:'E',f:0},
            {s:'E',f:0}, null, null, {s:'E',f:0},
            {s:'E',f:0}, null, null, {s:'E',f:0},
            {s:'E',f:0}, null, null, {s:'E',f:0}
        ]
    },

    'blues-walk': {
        id: 'blues-walk',
        name: 'Blues Walk',
        category: 'blues',
        difficulty: 2,
        bpm: 80,
        bars: 2,
        drumPattern: 'blues_chicago',
        description: 'Simple walking blues',
        steps: [
            // Bar 1
            {s:'E',f:0}, null, null, null,
            {s:'E',f:2}, null, null, null,
            {s:'E',f:4}, null, null, null,
            {s:'A',f:0}, null, null, null,
            // Bar 2
            {s:'A',f:2}, null, null, null,
            {s:'A',f:0}, null, null, null,
            {s:'E',f:4}, null, null, null,
            {s:'E',f:0}, null, null, null
        ]
    },

    'blues-turna': {
        id: 'blues-turna',
        name: 'Turnaround',
        category: 'blues',
        difficulty: 3,
        bpm: 80,
        bars: 2,
        drumPattern: 'blues_chicago',
        description: 'V-IV-I turnaround',
        steps: [
            // Bar 1 - V chord (B)
            {s:'A',f:2}, null, null, null,
            {s:'A',f:2}, null, null, null,
            // IV chord (A)
            {s:'A',f:0}, null, null, null,
            {s:'A',f:0}, null, null, null,
            // Bar 2 - I chord (E)
            {s:'E',f:0}, null, null, null,
            {s:'E',f:0}, null, null, null,
            // V chord lead-in
            {s:'E',f:4}, null, {s:'A',f:0}, null,
            {s:'A',f:1}, null, {s:'A',f:2}, null
        ]
    },

    'blues-climb': {
        id: 'blues-climb',
        name: 'Blues Climb',
        category: 'blues',
        difficulty: 3,
        bpm: 75,
        bars: 2,
        drumPattern: 'blues_slow',
        description: 'Blues scale climb',
        steps: [
            // Bar 1 - climb up
            {s:'E',f:0}, null, null, null,
            {s:'E',f:3}, null, null, null,
            {s:'A',f:0}, null, null, null,
            {s:'A',f:1}, null, null, null,
            // Bar 2 - continue and back
            {s:'A',f:2}, null, null, null,
            {s:'D',f:0}, null, null, null,
            {s:'A',f:2}, null, null, null,
            {s:'E',f:0}, null, null, null
        ]
    },

    'blues-12bar': {
        id: 'blues-12bar',
        name: '12 Bar Comp',
        category: 'blues',
        difficulty: 3,
        bpm: 80,
        bars: 4,
        drumPattern: 'blues_shuffle',
        description: 'First 4 bars of 12-bar blues',
        steps: [
            // Bar 1 - I (E)
            {s:'E',f:0}, null, null, {s:'E',f:0},
            {s:'E',f:0}, null, null, {s:'E',f:4},
            {s:'A',f:0}, null, null, {s:'A',f:0},
            {s:'E',f:4}, null, null, {s:'E',f:0},
            // Bar 2 - I (E)
            {s:'E',f:0}, null, null, {s:'E',f:0},
            {s:'E',f:0}, null, null, {s:'E',f:4},
            {s:'A',f:0}, null, null, {s:'A',f:0},
            {s:'E',f:4}, null, null, {s:'E',f:0},
            // Bar 3 - I (E)
            {s:'E',f:0}, null, null, {s:'E',f:0},
            {s:'E',f:0}, null, null, {s:'E',f:4},
            {s:'A',f:0}, null, null, {s:'A',f:0},
            {s:'E',f:4}, null, null, {s:'E',f:0},
            // Bar 4 - I (E)
            {s:'E',f:0}, null, null, {s:'E',f:0},
            {s:'E',f:0}, null, null, {s:'E',f:4},
            {s:'A',f:0}, null, null, {s:'A',f:2},
            {s:'E',f:4}, null, {s:'A',f:0}, {s:'E',f:0}
        ]
    },

    'blues-texas': {
        id: 'blues-texas',
        name: 'Texas Shuffle',
        category: 'blues',
        difficulty: 4,
        bpm: 130,
        bars: 2,
        drumPattern: 'blues_texas',
        description: 'Fast shuffle with fills',
        steps: [
            // Bar 1
            {s:'E',f:0}, null, null, {s:'E',f:0},
            {s:'E',f:4}, null, null, {s:'A',f:0},
            {s:'E',f:0}, null, null, {s:'E',f:0},
            {s:'E',f:4}, null, {s:'A',f:0}, {s:'E',f:0},
            // Bar 2
            {s:'E',f:0}, null, null, {s:'E',f:0},
            {s:'E',f:4}, null, null, {s:'A',f:0},
            {s:'E',f:3}, null, {s:'E',f:2}, null,
            {s:'E',f:0}, {s:'E',f:0}, {s:'E',f:3}, {s:'E',f:0}
        ]
    },

    // ==================== FUNK ====================
    // Syncopated funk patterns

    'funk-one': {
        id: 'funk-one',
        name: 'On The One',
        category: 'funk',
        difficulty: 1,
        bpm: 95,
        bars: 1,
        drumPattern: 'funk_basic',
        description: 'Focus on beat 1',
        steps: [
            {s:'E',f:0}, null, null, null,
            null, null, null, null,
            {s:'E',f:0}, null, null, null,
            null, null, null, null
        ]
    },

    'funk-simple': {
        id: 'funk-simple',
        name: 'Funk Simple',
        category: 'funk',
        difficulty: 2,
        bpm: 95,
        bars: 1,
        drumPattern: 'funk_basic',
        description: 'Basic 16ths groove',
        steps: [
            {s:'E',f:0}, null, {s:'E',f:0}, null,
            null, {s:'E',f:0}, null, null,
            {s:'E',f:0}, null, null, {s:'E',f:0},
            null, null, {s:'E',f:0}, null
        ]
    },

    'funk-synco1': {
        id: 'funk-synco1',
        name: 'Synco Light',
        category: 'funk',
        difficulty: 2,
        bpm: 92,
        bars: 1,
        drumPattern: 'funk_basic',
        description: 'Light syncopation',
        steps: [
            {s:'E',f:0}, null, null, {s:'E',f:0},
            null, null, {s:'E',f:0}, null,
            {s:'E',f:0}, null, null, {s:'E',f:0},
            null, null, {s:'E',f:0}, null
        ]
    },

    'funk-synco2': {
        id: 'funk-synco2',
        name: 'Synco Heavy',
        category: 'funk',
        difficulty: 3,
        bpm: 90,
        bars: 1,
        drumPattern: 'funk_boombap',
        description: 'Heavy syncopation',
        steps: [
            {s:'E',f:0}, null, null, {s:'E',f:0},
            null, {s:'E',f:3}, null, {s:'E',f:0},
            null, null, {s:'E',f:0}, null,
            {s:'E',f:3}, null, null, {s:'E',f:0}
        ]
    },

    'funk-ghost': {
        id: 'funk-ghost',
        name: 'Ghost Groove',
        category: 'funk',
        difficulty: 3,
        bpm: 88,
        bars: 1,
        drumPattern: 'funk_lofi',
        description: 'With ghost notes feel',
        steps: [
            {s:'E',f:0}, {s:'E',f:0}, null, {s:'E',f:0},
            null, {s:'E',f:0}, {s:'E',f:0}, null,
            {s:'E',f:0}, {s:'E',f:0}, null, {s:'E',f:0},
            null, {s:'E',f:3}, {s:'E',f:0}, null
        ]
    },

    'funk-slap': {
        id: 'funk-slap',
        name: 'Slap Basic',
        category: 'funk',
        difficulty: 3,
        bpm: 92,
        bars: 1,
        drumPattern: 'funk_drummer',
        description: 'Basic slap pattern',
        steps: [
            {s:'E',f:0}, null, null, null,
            {s:'D',f:2}, null, {s:'E',f:0}, null,
            null, null, {s:'D',f:2}, null,
            {s:'E',f:0}, null, {s:'D',f:2}, null
        ]
    },

    'funk-jb': {
        id: 'funk-jb',
        name: 'JB Style',
        category: 'funk',
        difficulty: 4,
        bpm: 108,
        bars: 2,
        drumPattern: 'funk_jb',
        description: 'James Brown pocket',
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

    'funk-larry': {
        id: 'funk-larry',
        name: 'Larry Style',
        category: 'funk',
        difficulty: 4,
        bpm: 96,
        bars: 2,
        drumPattern: 'funk_drummer',
        description: 'Larry Graham slap style',
        steps: [
            // Bar 1
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, null, null, {s:'D',f:2},
            null, {s:'E',f:0}, {s:'D',f:2}, null,
            {s:'E',f:0}, {s:'E',f:0}, {s:'D',f:2}, null,
            // Bar 2
            {s:'E',f:0}, null, {s:'D',f:2}, {s:'D',f:2},
            null, {s:'E',f:0}, null, {s:'D',f:2},
            {s:'E',f:0}, null, null, {s:'D',f:2},
            {s:'E',f:3}, {s:'E',f:0}, {s:'D',f:2}, null
        ]
    },

    // ==================== DISCO ====================
    // Disco octave patterns

    'disco-basic': {
        id: 'disco-basic',
        name: 'Disco Basic',
        category: 'disco',
        difficulty: 1,
        bpm: 115,
        bars: 1,
        drumPattern: 'pop_disco',
        description: 'Simple R-8 octaves',
        steps: [
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, null, {s:'D',f:2}, null
        ]
    },

    'disco-pump': {
        id: 'disco-pump',
        name: 'Disco Pump',
        category: 'disco',
        difficulty: 2,
        bpm: 118,
        bars: 1,
        drumPattern: 'pop_disco',
        description: 'Classic pump pattern',
        steps: [
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, null, {s:'D',f:2}, {s:'D',f:2},
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, {s:'E',f:0}, {s:'D',f:2}, null
        ]
    },

    'disco-8ths': {
        id: 'disco-8ths',
        name: 'Disco Eighths',
        category: 'disco',
        difficulty: 2,
        bpm: 120,
        bars: 1,
        drumPattern: 'pop_disco',
        description: 'Full eighth notes octave',
        steps: [
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, null, {s:'D',f:2}, null
        ]
    },

    'disco-synco': {
        id: 'disco-synco',
        name: 'Disco Synco',
        category: 'disco',
        difficulty: 3,
        bpm: 118,
        bars: 1,
        drumPattern: 'pop_disco',
        description: 'Syncopated octaves',
        steps: [
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, null, null, {s:'D',f:2},
            null, {s:'E',f:0}, null, {s:'D',f:2},
            {s:'E',f:0}, null, {s:'D',f:2}, null
        ]
    },

    'disco-chic': {
        id: 'disco-chic',
        name: 'Chic Style',
        category: 'disco',
        difficulty: 3,
        bpm: 115,
        bars: 2,
        drumPattern: 'pop_disco',
        description: 'Bernard Edwards style',
        steps: [
            // Bar 1
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, null, {s:'D',f:2}, {s:'D',f:2},
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            // Bar 2
            {s:'A',f:0}, null, {s:'G',f:2}, null,
            {s:'A',f:0}, null, {s:'G',f:2}, null,
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, {s:'E',f:3}, {s:'D',f:2}, null
        ]
    },

    'disco-run': {
        id: 'disco-run',
        name: 'Disco Run',
        category: 'disco',
        difficulty: 3,
        bpm: 120,
        bars: 2,
        drumPattern: 'pop_upbeat',
        description: 'With scalar runs',
        steps: [
            // Bar 1
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, null, {s:'E',f:2}, {s:'E',f:4},
            // Bar 2
            {s:'A',f:0}, null, {s:'G',f:2}, null,
            {s:'A',f:0}, null, {s:'G',f:2}, null,
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'D',f:2}, {s:'A',f:4}, {s:'A',f:2}, {s:'A',f:0}
        ]
    },

    'disco-slap': {
        id: 'disco-slap',
        name: 'Disco Slap',
        category: 'disco',
        difficulty: 4,
        bpm: 115,
        bars: 2,
        drumPattern: 'pop_disco',
        description: 'Octaves with slap feel',
        steps: [
            // Bar 1
            {s:'E',f:0}, null, {s:'D',f:2}, {s:'D',f:2},
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, {s:'E',f:0}, {s:'D',f:2}, {s:'D',f:2},
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            // Bar 2
            {s:'E',f:0}, null, {s:'D',f:2}, {s:'D',f:2},
            null, {s:'E',f:0}, {s:'D',f:2}, null,
            {s:'E',f:0}, {s:'E',f:0}, {s:'D',f:2}, null,
            {s:'E',f:3}, {s:'E',f:0}, {s:'D',f:2}, {s:'D',f:2}
        ]
    },

    'disco-full': {
        id: 'disco-full',
        name: 'Full Disco',
        category: 'disco',
        difficulty: 4,
        bpm: 120,
        bars: 2,
        drumPattern: 'pop_upbeat',
        description: 'Complete disco groove',
        steps: [
            // Bar 1
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, null, {s:'D',f:2}, {s:'D',f:2},
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, {s:'E',f:0}, {s:'D',f:2}, {s:'A',f:0},
            // Bar 2
            {s:'A',f:0}, null, {s:'G',f:2}, null,
            {s:'A',f:0}, null, {s:'G',f:2}, {s:'G',f:2},
            {s:'E',f:0}, null, {s:'D',f:2}, null,
            {s:'E',f:0}, {s:'E',f:2}, {s:'E',f:4}, {s:'A',f:0}
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
