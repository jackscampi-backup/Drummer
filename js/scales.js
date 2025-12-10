// Scale data for BASSIST fretboard

const NOTES = ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'];

// Italian notation (Do, Re, Mi, Fa, Sol, La, Si)
const NOTES_ITA = ['Mi', 'Fa', 'Fa#', 'Sol', 'Sol#', 'La', 'La#', 'Si', 'Do', 'Do#', 'Re', 'Re#'];

// Convert English note to Italian
function noteToItalian(note) {
    const index = NOTES.indexOf(note);
    return index >= 0 ? NOTES_ITA[index] : note;
}

const SCALES = {
    pentatonic_minor: {
        name: 'Penta Min',
        intervals: [0, 3, 5, 7, 10],
        names: ['R', 'b3', '4', '5', 'b7'],
        arpeggio: [0, 3, 7, 10],  // Min7: R, b3, 5, b7
        arpNames: ['R', 'b3', '5', 'b7']
    },
    blues: {
        name: 'Blues',
        intervals: [0, 3, 5, 6, 7, 10],
        names: ['R', 'b3', '4', 'b5', '5', 'b7'],
        arpeggio: [0, 3, 7, 10],  // Min7: R, b3, 5, b7
        arpNames: ['R', 'b3', '5', 'b7']
    },
    major: {
        name: 'Maggiore',
        intervals: [0, 2, 4, 5, 7, 9, 11],
        names: ['R', '2', '3', '4', '5', '6', '7'],
        arpeggio: [0, 4, 7, 11],  // Maj7: R, 3, 5, 7
        arpNames: ['R', '3', '5', '7']
    },
    minor: {
        name: 'Minore',
        intervals: [0, 2, 3, 5, 7, 8, 10],
        names: ['R', '2', 'b3', '4', '5', 'b6', 'b7'],
        arpeggio: [0, 3, 7, 10],  // Min7: R, b3, 5, b7
        arpNames: ['R', 'b3', '5', 'b7']
    },
    pentatonic_major: {
        name: 'Penta Maj',
        intervals: [0, 2, 4, 7, 9],
        names: ['R', '2', '3', '5', '6'],
        arpeggio: [0, 4, 7],  // Maj: R, 3, 5
        arpNames: ['R', '3', '5']
    }
};

// Standard 4-string bass tuning (low to high)
const BASS_TUNING = ['E', 'A', 'D', 'G'];

// Get note at given fret on given string
function getNoteAtFret(stringNote, fret) {
    const startIndex = NOTES.indexOf(stringNote);
    return NOTES[(startIndex + fret) % 12];
}

// Get all notes in a scale from a root
function getScaleNotes(rootNote, scaleKey) {
    const scale = SCALES[scaleKey];
    if (!scale) return [];

    const rootIndex = NOTES.indexOf(rootNote);
    return scale.intervals.map(interval => NOTES[(rootIndex + interval) % 12]);
}

// Check if a note is in the scale
function isNoteInScale(note, rootNote, scaleKey) {
    const scaleNotes = getScaleNotes(rootNote, scaleKey);
    return scaleNotes.includes(note);
}

// Check if note is the root
function isRoot(note, rootNote) {
    return note === rootNote;
}

// Get interval name for a note in a scale
function getIntervalName(note, rootNote, scaleKey) {
    const scale = SCALES[scaleKey];
    if (!scale) return null;

    const rootIndex = NOTES.indexOf(rootNote);
    const noteIndex = NOTES.indexOf(note);

    // Calculate semitones from root (handle wrap-around)
    let semitones = (noteIndex - rootIndex + 12) % 12;

    // Find this interval in the scale
    const intervalIndex = scale.intervals.indexOf(semitones);
    if (intervalIndex === -1) return null;

    return scale.names[intervalIndex];
}

// Get arpeggio notes for a scale
function getArpeggioNotes(rootNote, scaleKey) {
    const scale = SCALES[scaleKey];
    if (!scale || !scale.arpeggio) return [];

    const rootIndex = NOTES.indexOf(rootNote);
    return scale.arpeggio.map(interval => NOTES[(rootIndex + interval) % 12]);
}

// Get arpeggio interval name for a note
function getArpeggioIntervalName(note, rootNote, scaleKey) {
    const scale = SCALES[scaleKey];
    if (!scale || !scale.arpeggio) return null;

    const rootIndex = NOTES.indexOf(rootNote);
    const noteIndex = NOTES.indexOf(note);

    let semitones = (noteIndex - rootIndex + 12) % 12;

    const arpIndex = scale.arpeggio.indexOf(semitones);
    if (arpIndex === -1) return null;

    return scale.arpNames[arpIndex];
}
