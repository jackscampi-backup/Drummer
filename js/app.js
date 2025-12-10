// DRUMMER - Main Application

document.addEventListener('DOMContentLoaded', () => {
    console.log('DRUMMER - Beat Generator per Bassisti');
    console.log('-------------------------------------');

    // Inizializza il beat generator
    const beatGen = new BeatGenerator();
    console.log('Beat Generator inizializzato');

    // Esponi globalmente per BASSIST sync
    window.beatGen = beatGen;

    // Keyboard shortcut per play/pause
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            beatGen.togglePlay();
        }
    });

    console.log('App pronta!');
    console.log('Scegli un genere e una variazione, poi premi Play');
});
