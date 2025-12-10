# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DRUMMER is a browser-based drum beat generator for bass practice. It uses Tone.js to synthesize drum sounds in real-time - no audio files needed. Works offline by opening `index.html` directly.

## Development

No build process required. Open `index.html` in a browser to run.

For development with live reload:
```bash
npx live-server
```

## Architecture

### Core Files

- **index.html** - Main HTML structure
- **css/style.css** - Vintage drum machine styling (dark theme, LED effects, hardware-inspired UI)
- **js/patterns.js** - Pattern definitions and genre configuration
  - `PATTERNS` object: all drum patterns (40 total across 8 genres)
  - `GENRES` object: groups patterns by genre
- **js/beatgen.js** - `BeatGenerator` class
  - Manages Tone.js synthesizers (kick, snare, hihat)
  - Handles sequencing with `Tone.Sequence`
  - Renders genre/variation buttons dynamically
  - Mute functionality per instrument
  - Visual beat counter (1-2-3-4)
- **js/app.js** - Entry point, initializes BeatGenerator

### UI Components

1. **Header** - Title "DRUMMER" with LED glow effect
2. **Genre Buttons** - 8 genres in a 4x2 grid with green LED indicators
3. **Variation Buttons** - Pattern variations with BPM badges
4. **Beat Controls** - Play button + BPM display + slider with preset ticks (60-170)
5. **Pattern Display** - 16-step sequencer grid with mute buttons per instrument
6. **Beat Counter** - Visual metronome showing beats 1-2-3-4

### Data Flow

1. `GENRES` defines which patterns belong to each genre
2. `BeatGenerator.selectGenre()` renders variation buttons
3. `BeatGenerator.selectPattern()` updates BPM and pattern display
4. `Tone.Sequence` triggers synths based on pattern arrays (respects mute states)
5. `updateBeatCounter()` highlights current beat (1-4)

### Pattern Format

Each pattern is 16 steps (16th notes in 4/4):
```javascript
{
    name: 'Pattern Name',
    genre: 'Genre Name',
    bpm: 120,
    kick:  [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0],  // 1=hit, 0=silence
    snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
    hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0]
}
```

### Adding New Patterns

1. Add pattern object to `PATTERNS` in `js/patterns.js`
2. Add pattern key to appropriate genre in `GENRES` object
3. New genre? Add entry to `GENRES` with name and patterns array

### Synth Configuration

Defined in `BeatGenerator.setupSounds()`:
- Kick: `Tone.MembraneSynth` - sine wave with pitch decay
- Snare: `Tone.NoiseSynth` - white noise
- Hi-Hat: `Tone.NoiseSynth` with 8kHz highpass filter

### BPM Preset Ticks

Standard tempo reference points on the slider:
- 60: Slow Blues
- 75: Trip-Hop
- 90: Funk
- 105: Latin
- 120: Disco
- 135: Rock
- 150: Fast
- 170: Bebop

### Styling

Vintage drum machine aesthetic:
- Dark background (#1a1a1a)
- Orange accent color (#ff8c00) for displays
- Green/red LED indicators
- Hardware-style buttons with bevel effects
- Monospace font (Courier New) throughout
