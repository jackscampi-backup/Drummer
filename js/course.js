// CORSO - Bass Course for DRUMMER/BASSIST
// Structured lessons for bass guitar learning

const COURSE_STRUCTURE = {
    foundation: {
        name: 'FOUNDATION',
        lessons: ['intervals', 'major-scale', 'minor-scale', 'building-lines']
    },
    rock: {
        name: 'ROCK',
        lessons: ['rock-intro', 'rock-eighths', 'rock-fills']
    },
    blues: {
        name: 'BLUES',
        lessons: ['blues-intro', 'blues-12bar', 'blues-shuffle']
    },
    funk: {
        name: 'FUNK',
        lessons: ['funk-intro', 'funk-synco', 'funk-ghost']
    },
    disco: {
        name: 'DISCO',
        lessons: ['disco-intro', 'disco-octave', 'disco-melodic']
    }
};

const LESSONS = {
    // ==================== FOUNDATION ====================

    'intervals': {
        id: 'intervals',
        module: 'foundation',
        title: 'Intervals',
        content: `
| Interval | Semitones | On bass |
|----------|-----------|---------|
| Unison | 0 | same note |
| m2 | 1 | +1 fret |
| M2 | 2 | +2 frets |
| m3 | 3 | +3 frets |
| M3 | 4 | +4 frets |
| P4 | 5 | next string, same fret |
| P5 | 7 | next string, +2 frets |
| 8ve | 12 | +2 strings, +2 frets |
`,
        exercises: [
            { name: 'Root-Fifth', groove: 'found-r5' },
            { name: 'Root-Octave', groove: 'found-r8' }
        ]
    },

    'major-scale': {
        id: 'major-scale',
        module: 'foundation',
        title: 'Major Scale',
        content: `
**Formula:** W-W-H-W-W-W-H

| Degree | Interval | Function |
|--------|----------|----------|
| 1 | ROOT | home |
| 2 | M2 | passing |
| 3 | M3 | major color |
| 4 | P4 | subdominant |
| 5 | P5 | dominant |
| 6 | M6 | color |
| 7 | M7 | leading tone |
`,
        exercises: [
            { name: 'Scale Walkup', groove: 'found-walkup', drumPattern: 'rock_basic' },
            { name: 'R-5-8 Climb', groove: 'found-r5-8' }
        ]
    },

    'minor-scale': {
        id: 'minor-scale',
        module: 'foundation',
        title: 'Minor Pentatonic',
        content: `
**Notes:** 1 - b3 - 4 - 5 - b7

**Box shape:**
\`\`\`
G |--0--3--|
D |--0--2--|
A |--0--2--|
E |--0--3--|
\`\`\`

Moveable: fret 0 = ROOT
`,
        exercises: [
            { name: 'Blues Climb', groove: 'blues-climb' },
            { name: 'Blues Walk', groove: 'blues-walk' }
        ]
    },

    'building-lines': {
        id: 'building-lines',
        module: 'foundation',
        title: 'Building Lines',
        content: `
**Core notes:**
| Note | Interval | Use |
|------|----------|-----|
| R | root | beat 1, anchor |
| 5 | P5 | safe, strong |
| 8 | octave | movement |
| 3 | M3/m3 | color |

**1-bar structure:**
\`\`\`
Beat: 1    2    3    4
      R    5    R    approach
\`\`\`
`,
        exercises: [
            { name: 'Root-Fifth', groove: 'found-r5' },
            { name: 'Root-Octave', groove: 'found-r8' },
            { name: 'R-5-8 Climb', groove: 'found-r5-8' }
        ]
    },

    // ==================== ROCK ====================

    'rock-intro': {
        id: 'rock-intro',
        module: 'rock',
        title: 'Rock Basics',
        content: `
**Figures:** quarters, eighths

**Notes:** R, 5, 8

\`\`\`
Quarters:  R . . . R . . . R . . . R . . .
Eighths:   R . R . R . R . R . R . R . R .
\`\`\`
`,
        exercises: [
            { name: 'Rock Lock', groove: 'rock-lock', drumPattern: 'rock_basic' },
            { name: 'Power R5', groove: 'rock-r5', drumPattern: 'rock_basic' }
        ]
    },

    'rock-eighths': {
        id: 'rock-eighths',
        module: 'rock',
        title: 'Driving Eighths',
        content: `
**Count:** 1 & 2 & 3 & 4 &

\`\`\`
Straight:    R R R R R R R R
Root-Fifth:  R . 5 . R . 5 .
Accented:    R r R r R r R r  (R=loud, r=soft)
\`\`\`
`,
        exercises: [
            { name: 'Rock Eighths', groove: 'rock-eighths', drumPattern: 'rock_hard' },
            { name: 'Rock Shuffle', groove: 'rock-shuffle', drumPattern: 'rock_basic' }
        ]
    },

    'rock-fills': {
        id: 'rock-fills',
        module: 'rock',
        title: 'Fills',
        content: `
**Types:**
\`\`\`
Walkup:    . . . . . . 5 6 7 R . . . . . .
Walkdown:  . . . . . . R 7 6 5 . . . . . .
Octave:    . . . . . . . . . . . . R . 8 .
\`\`\`

Use at bar 4, 8, before chorus.
`,
        exercises: [
            { name: 'Walkup Fill', groove: 'rock-fill1', drumPattern: 'rock_basic' },
            { name: 'Walkdown Fill', groove: 'rock-fill2', drumPattern: 'rock_basic' },
            { name: 'Penta Rock', groove: 'rock-penta', drumPattern: 'rock_heavy' },
            { name: 'Heavy Drive', groove: 'rock-heavy', drumPattern: 'rock_heavy' }
        ]
    },

    // ==================== BLUES ====================

    'blues-intro': {
        id: 'blues-intro',
        module: 'blues',
        title: 'Blues Basics',
        content: `
**Blues scale:** 1 - b3 - 4 - b5 - 5 - b7

**Feel:** behind the beat, long notes

**Shuffle:** long-short, not straight eighths
`,
        exercises: [
            { name: 'Slow Blues', groove: 'blues-slow', drumPattern: 'blues_slow' },
            { name: 'Blues Climb', groove: 'blues-climb', drumPattern: 'blues_slow' }
        ]
    },

    'blues-12bar': {
        id: 'blues-12bar',
        module: 'blues',
        title: '12 Bar Blues',
        content: `
**Structure:**
\`\`\`
| I  | I  | I  | I  |
| IV | IV | I  | I  |
| V  | IV | I  | V  |
\`\`\`

**In E:**
\`\`\`
| E  | E  | E  | E  |
| A  | A  | E  | E  |
| B  | A  | E  | B  |
\`\`\`
`,
        exercises: [
            { name: '12 Bar Comp', groove: 'blues-12bar', drumPattern: 'blues_shuffle' },
            { name: 'Blues Walk', groove: 'blues-walk', drumPattern: 'blues_shuffle' },
            { name: 'Turnaround', groove: 'blues-turna', drumPattern: 'blues_shuffle' }
        ]
    },

    'blues-shuffle': {
        id: 'blues-shuffle',
        module: 'blues',
        title: 'Shuffle Feel',
        content: `
**Triplet subdivision:**
\`\`\`
Straight: | 1 . 2 . 3 . 4 . |
Shuffle:  | 1 . . 2 . . 3 . . 4 . . |  (12/8)
\`\`\`

Play 1st and 3rd of triplet only.
`,
        exercises: [
            { name: 'Blues Shuffle', groove: 'blues-shuffle', drumPattern: 'blues_shuffle' },
            { name: 'Texas Shuffle', groove: 'blues-texas', drumPattern: 'blues_shuffle' }
        ]
    },

    // ==================== FUNK ====================

    'funk-intro': {
        id: 'funk-intro',
        module: 'funk',
        title: 'Funk Basics',
        content: `
**16th note grid:**
\`\`\`
1 e & a 2 e & a 3 e & a 4 e & a
\`\`\`

**Key:** staccato, space, beat 1 strong
`,
        exercises: [
            { name: 'On The One', groove: 'funk-one', drumPattern: 'funk_basic' },
            { name: 'Funk Simple', groove: 'funk-simple', drumPattern: 'funk_basic' }
        ]
    },

    'funk-synco': {
        id: 'funk-synco',
        module: 'funk',
        title: 'Syncopation',
        content: `
**Anticipation:** play on & before beat
\`\`\`
On beat:  R . . . R . . . R . . . R . . .
Synco:    R . . R . . R . R . . R . . R .
              ^anticipate
\`\`\`
`,
        exercises: [
            { name: 'Synco Light', groove: 'funk-synco1', drumPattern: 'funk_basic' },
            { name: 'Synco Heavy', groove: 'funk-synco2', drumPattern: 'funk_jb' },
            { name: 'JB Style', groove: 'funk-jb', drumPattern: 'funk_jb' }
        ]
    },

    'funk-ghost': {
        id: 'funk-ghost',
        module: 'funk',
        title: 'Ghost Notes',
        content: `
**Notation:** x = muted note

\`\`\`
1 e & a 2 e & a 3 e & a 4 e & a
R x x x R x R x R x x x R x R x
\`\`\`

Mute with left hand, pluck normally.
`,
        exercises: [
            { name: 'Ghost Groove', groove: 'funk-ghost', drumPattern: 'funk_basic' },
            { name: 'Slap Basic', groove: 'funk-slap', drumPattern: 'funk_basic' },
            { name: 'Larry Style', groove: 'funk-larry', drumPattern: 'funk_groove' }
        ]
    },

    // ==================== DISCO ====================

    'disco-intro': {
        id: 'disco-intro',
        module: 'disco',
        title: 'Disco Basics',
        content: `
**Octave pattern:**
\`\`\`
1 & 2 & 3 & 4 &
R 8 R 8 R 8 R 8
\`\`\`

8 = 2 strings up, 2 frets forward
`,
        exercises: [
            { name: 'Disco Basic', groove: 'disco-basic', drumPattern: 'pop_disco' },
            { name: 'Disco Eighths', groove: 'disco-8ths', drumPattern: 'pop_disco' }
        ]
    },

    'disco-octave': {
        id: 'disco-octave',
        module: 'disco',
        title: 'Octave Pump',
        content: `
**Variations:**
\`\`\`
Straight: R 8 R 8 R 8 R 8
Rest:     R 8 R 8 R . R 8
Pump:     R 8 8 8 R 8 8 8
\`\`\`
`,
        exercises: [
            { name: 'Disco Pump', groove: 'disco-pump', drumPattern: 'pop_disco' },
            { name: 'Disco Synco', groove: 'disco-synco', drumPattern: 'pop_disco' },
            { name: 'Chic Style', groove: 'disco-chic', drumPattern: 'pop_disco' }
        ]
    },

    'disco-melodic': {
        id: 'disco-melodic',
        module: 'disco',
        title: 'Melodic Lines',
        content: `
**Add scale tones:**
\`\`\`
Base:     R 8 R 8 R 8 R 8
+5th:     R 8 R 5 R 8 R 5
+passing: R 8 3 5 R 8 6 7
\`\`\`
`,
        exercises: [
            { name: 'Disco Run', groove: 'disco-run', drumPattern: 'pop_disco' },
            { name: 'Disco Slap', groove: 'disco-slap', drumPattern: 'pop_disco' },
            { name: 'Full Disco', groove: 'disco-full', drumPattern: 'pop_disco' }
        ]
    }
};

// Course navigation and display class
class Course {
    constructor() {
        this.currentModule = null;
        this.currentLesson = null;
    }

    init() {
        this.renderModuleButtons();
        this.renderLessonSelect();
    }

    renderModuleButtons() {
        const container = document.getElementById('moduleButtons');
        if (!container) return;

        container.innerHTML = '';

        Object.entries(COURSE_STRUCTURE).forEach(([key, module]) => {
            const btn = document.createElement('button');
            btn.className = 'module-btn';
            btn.dataset.module = key;
            btn.innerHTML = `
                <span class="module-led"></span>
                <span class="module-name">${module.name}</span>
            `;
            btn.onclick = () => this.selectModule(key);
            container.appendChild(btn);
        });
    }

    renderLessonSelect() {
        const select = document.getElementById('lessonSelect');
        if (!select) return;

        select.innerHTML = '<option value="">-- Select Lesson --</option>';

        // Group by module
        Object.entries(COURSE_STRUCTURE).forEach(([moduleKey, module]) => {
            const group = document.createElement('optgroup');
            group.label = module.name;

            module.lessons.forEach(lessonId => {
                const lesson = LESSONS[lessonId];
                if (lesson) {
                    const opt = document.createElement('option');
                    opt.value = lessonId;
                    opt.textContent = `${lesson.title}`;
                    group.appendChild(opt);
                }
            });

            select.appendChild(group);
        });
    }

    selectModule(moduleKey) {
        this.currentModule = moduleKey;

        // Update button states
        document.querySelectorAll('.module-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.module === moduleKey);
        });

        // Filter lesson select to this module
        const select = document.getElementById('lessonSelect');
        const module = COURSE_STRUCTURE[moduleKey];

        select.innerHTML = '<option value="">-- Select Lesson --</option>';
        module.lessons.forEach(lessonId => {
            const lesson = LESSONS[lessonId];
            if (lesson) {
                const opt = document.createElement('option');
                opt.value = lessonId;
                opt.textContent = lesson.title;
                select.appendChild(opt);
            }
        });

        // Auto-select first lesson
        if (module.lessons.length > 0) {
            select.value = module.lessons[0];
            this.selectLesson(module.lessons[0]);
        }
    }

    selectLesson(lessonId) {
        if (!lessonId) {
            this.clearLesson();
            return;
        }

        const lesson = LESSONS[lessonId];
        if (!lesson) return;

        this.currentLesson = lesson;
        this.renderLesson(lesson);
    }

    renderLesson(lesson) {
        const display = document.getElementById('lessonDisplay');
        if (!display) return;

        // Convert markdown-like content to HTML
        let contentHtml = this.parseContent(lesson.content);

        // Build exercises HTML
        let exercisesHtml = '';
        if (lesson.exercises && lesson.exercises.length > 0) {
            exercisesHtml = `
                <div class="lesson-exercises">
                    ${lesson.exercises.map(ex => `
                        <div class="exercise-item">
                            <span class="exercise-name">${ex.name}</span>
                            ${ex.groove ? `<button class="exercise-btn" onclick="course.loadGroove('${ex.groove}')">GROOVE</button>` : ''}
                            ${ex.drumPattern ? `<button class="exercise-btn" onclick="course.loadDrumPattern('${ex.drumPattern}')">DRUM</button>` : ''}
                        </div>
                    `).join('')}
                </div>
            `;
        }

        display.innerHTML = `
            <div class="lesson-header">
                <h2 class="lesson-title">${lesson.title}</h2>
            </div>
            <div class="lesson-content">
                ${contentHtml}
            </div>
            ${exercisesHtml}
        `;
    }

    parseContent(content) {
        // Simple markdown-like parsing
        let html = content.trim();

        // Code blocks
        html = html.replace(/```([\s\S]*?)```/g, '<pre class="code-block">$1</pre>');

        // Inline code
        html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

        // Bold
        html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

        // Headers
        html = html.replace(/^### (.+)$/gm, '<h5>$1</h5>');
        html = html.replace(/^## (.+)$/gm, '<h4>$1</h4>');

        // Tables (simple)
        html = html.replace(/\|(.+)\|/g, (match) => {
            const cells = match.split('|').filter(c => c.trim());
            if (cells.every(c => /^[-\s]+$/.test(c))) {
                return ''; // separator row
            }
            const cellHtml = cells.map(c => `<td>${c.trim()}</td>`).join('');
            return `<tr>${cellHtml}</tr>`;
        });
        html = html.replace(/(<tr>[\s\S]*?<\/tr>)+/g, '<table class="lesson-table">$&</table>');

        // Blockquotes
        html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');

        // Line breaks for paragraphs
        html = html.replace(/\n\n/g, '</p><p>');
        html = '<p>' + html + '</p>';

        // Clean up empty paragraphs
        html = html.replace(/<p>\s*<\/p>/g, '');
        html = html.replace(/<p>\s*(<h[45]>)/g, '$1');
        html = html.replace(/(<\/h[45]>)\s*<\/p>/g, '$1');
        html = html.replace(/<p>\s*(<pre)/g, '$1');
        html = html.replace(/(<\/pre>)\s*<\/p>/g, '$1');
        html = html.replace(/<p>\s*(<table)/g, '$1');
        html = html.replace(/(<\/table>)\s*<\/p>/g, '$1');
        html = html.replace(/<p>\s*(<blockquote>)/g, '$1');
        html = html.replace(/(<\/blockquote>)\s*<\/p>/g, '$1');

        return html;
    }

    clearLesson() {
        const display = document.getElementById('lessonDisplay');
        if (display) {
            display.innerHTML = '<p class="lesson-placeholder">Select a module and lesson to begin</p>';
        }
        this.currentLesson = null;
    }

    // Integration with GROOVES
    loadGroove(grooveId) {
        if (window.fretboard && typeof window.fretboard.selectGroove === 'function') {
            // Enable groove mode first if not active
            if (!window.fretboard.grooveModeActive) {
                window.fretboard.toggleGrooveMode();
            }
            // Also update the select dropdown
            const select = document.getElementById('grooveSelect');
            if (select) select.value = grooveId;

            window.fretboard.selectGroove(grooveId);
            console.log('CORSO: Loaded groove', grooveId);
        } else {
            console.warn('CORSO: Fretboard not available');
        }
    }

    // Integration with DRUMMER
    loadDrumPattern(patternKey) {
        if (window.beatGen && typeof window.beatGen.selectPattern === 'function') {
            // Find which genre this pattern belongs to
            const pattern = PATTERNS[patternKey];
            if (pattern && pattern.genre) {
                // Find the genre key from the genre name
                const genreKey = Object.keys(GENRES).find(key =>
                    GENRES[key].name.toLowerCase() === pattern.genre.toLowerCase()
                );
                if (genreKey && genreKey !== window.beatGen.currentGenre) {
                    window.beatGen.selectGenre(genreKey);
                }
            }
            window.beatGen.selectPattern(patternKey);
            console.log('CORSO: Loaded drum pattern', patternKey);
        } else {
            console.warn('CORSO: BeatGen not available');
        }
    }

    // Integration with scales
    loadScale(scaleKey) {
        if (window.fretboard) {
            // Map lesson scale names to actual scale buttons
            const scaleMap = {
                'major': 'MAJ',
                'minor': 'MIN',
                'pentatonic-minor': 'PENTA',
                'blues': 'BLUES'
            };
            const scaleName = scaleMap[scaleKey] || scaleKey;

            // Find and click the scale button
            const scaleButtons = document.querySelectorAll('#scaleButtons .scale-btn');
            scaleButtons.forEach(btn => {
                if (btn.textContent.includes(scaleName)) {
                    btn.click();
                }
            });
            console.log('CORSO: Loaded scale', scaleKey);
        }
    }
}

// Initialize when DOM ready
let course;
document.addEventListener('DOMContentLoaded', () => {
    course = new Course();
    course.init();
    window.course = course;
});
