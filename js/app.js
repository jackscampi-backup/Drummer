// DRUMMER - Main Application

document.addEventListener('DOMContentLoaded', () => {
    console.log('DRUMMER - Beat Generator per Bassisti');
    console.log('-------------------------------------');

    // Inizializza il beat generator
    const beatGen = new BeatGenerator();
    console.log('Beat Generator inizializzato');

    // Inizializza il practice mode
    const practiceMode = new PracticeMode(beatGen);
    console.log('Practice Mode inizializzato');

    // Esponi globalmente per debug
    window.beatGen = beatGen;
    window.practiceMode = practiceMode;

    // Keyboard shortcut per play/pause
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            beatGen.togglePlay();
        }
    });

    console.log('App pronta!');
    console.log('Scegli un genere e una variazione, poi premi Play');
    console.log('Usa Practice per esercitarti sulle bass lines disco famose!');
});
