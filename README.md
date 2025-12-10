# DRUMMER

Beat Generator per Bassisti - Applicazione web per esercitarsi al basso con pattern di batteria autentici e bass line famose.

## Descrizione

DRUMMER genera pattern di batteria in tempo reale usando Tone.js. Non richiede file audio esterni: tutti i suoni sono sintetizzati nel browser. Funziona offline, basta aprire `index.html`.

Interfaccia in stile **vintage analog hardware** con estetica da rack/mixer:
- Display LED arancione (font DSEG7 a 7 segmenti)
- LED indicators verdi sui bottoni genere/pattern
- Toggle switch per mute
- Fader slider con levetta rettangolare stile mixer
- Pannelli neri con bordi grigi

## Funzionalita'

### Beat Generator
- **8 generi musicali** con **64 pattern totali** (8 per genere)
- Controllo BPM con fader e tacche preset (60-170)
- Toggle switch MUTE per Kick, Snare, Hi-Hat
- Visualizzazione pattern step sequencer (16 step con LED)
- Beat counter visivo (1-2-3-4)
- Shortcut tastiera: Spazio per Play/Pause

### Bass Rack
- **Selettore tonalita'** (C, C#, D... B)
- **4 progressioni accordi**:
  - I (Drone) - nota singola
  - I-IV-V - Blues 12 battute
  - I-V-vi-IV - Pop progression
  - ii-V-I - Jazz standard
- **Display accordo corrente** con grado
- Basso synth che suona le fondamentali
- Controllo volume

### Practice Mode - Bass Lines Iconiche
- **12 bass line disco famose** dal PDF di Scott's Bass Lessons
- Tablatura visualizzata per ogni brano
- **Basso synth** che suona la linea automaticamente
- **Speed control** (50%, 75%, 100%) per rallentare e imparare
- Info complete: artista, bassista, album, tonalita', BPM, difficolta'

## Bass Lines Incluse

| Brano | Artista | Bassista | Difficolta' |
|-------|---------|----------|-------------|
| Stayin' Alive | Bee Gees | Maurice Gibb | Easy |
| Le Freak | Chic | Bernard Edwards | Medium |
| We Are Family | Sister Sledge | Bernard Edwards | Medium |
| Got To Be Real | Cheryl Lynn | David Shields | Medium |
| Blame it on the Boogie | The Jacksons | Gary King / Nathan Watts | Medium |
| And The Beat Goes On | The Whispers | Leon F Sylvers | Medium |
| Good Times | Chic | Bernard Edwards | Hard |
| September | Earth, Wind & Fire | Verdine White | Hard |
| Boogie Oogie Oogie | A Taste of Honey | Janice-Marie Johnson | Hard |
| I Want Your Love | Chic | Bernard Edwards | Hard |
| I Need Your Lovin' | Teena Marie | Allen McGrier | Hard |
| Stomp! | Brothers Johnson | Louis Johnson | Expert |

## Generi e Pattern

| Genere | Pattern | BPM Range |
|--------|---------|-----------|
| **Rock** | Basic, Hard, Pop, Half-Time, Shuffle, Punk, Ballad, Stadium | 70-170 |
| **Pop** | Basic, Dance, Ballad, Upbeat, Motown, Synthpop, Funk, Modern | 72-128 |
| **Funk** | Basic, JB Style, Funky Dr., Boom Bap, Trap, Lo-Fi, N.Orleans, Breakbeat | 80-140 |
| **Blues** | Shuffle, Slow, Chicago, Texas, 12/8 Feel, Jump, Rock, Train | 60-160 |
| **Jazz** | Swing, Bebop, Ballad, Waltz, Slow Sw., Med-Up, Fusion, Brushes | 65-220 |
| **Latin** | Bossa, Samba, Salsa, Cha-Cha, AfroCuban, Mambo, Songo, Bossa Sl. | 100-195 |
| **Reggae** | One Drop, Rockers, Steppers, Ska, Dub, Roots Sl., Dancehall, Step Fast | 65-150 |
| **Electro** | House, Techno, Disco, Synthpop, Trip-Hop, D&B, Garage, Trance | 80-174 |

## Come Usare

### Beat Generator
1. Apri `index.html` nel browser
2. Scegli un genere (bottoni con LED verde)
3. Scegli una variazione pattern
4. Premi Play o Spazio
5. Usa i toggle switch per mutare singoli strumenti
6. Regola BPM con fader o tacche preset

### Bass Rack
1. Attiva il basso con il pulsante ♪
2. Seleziona la tonalita' (es. G per Sol)
3. Scegli una progressione accordi
4. Il basso suona la fondamentale sul beat 1 e 3
5. Regola il volume col fader

### Practice Mode
1. Scorri la lista e seleziona un brano
2. Leggi la tablatura e le info
3. Scegli la velocita' (50% per iniziare)
4. Premi **Practice** - parte beat + bass line
5. Suona insieme seguendo la TAB!

## Tacche BPM

| BPM | Stile tipico |
|-----|--------------|
| 60 | Slow Blues |
| 75 | Trip-Hop, Reggae |
| 90 | Funk, Hip-Hop |
| 105 | Latin, Motown |
| 120 | Disco, Pop |
| 135 | Rock |
| 150 | Fast |
| 170 | Bebop |

## Struttura

```
DRUMMER/
├── index.html          # Pagina principale
├── README.md           # Documentazione
├── CLAUDE.md           # Guida per Claude Code
├── css/
│   └── style.css       # Stili vintage analog hardware
├── fonts/
│   └── DSEG7Classic-Bold.ttf  # Font LED 7 segmenti
├── dymo/
│   └── Dymo.ttf        # Font Dymo per bottoni
├── tabs/
│   └── SBL-932-12-Iconic-DISCO-Bass-Lines.pdf  # Bass lines reference
└── js/
    ├── app.js          # Inizializzazione
    ├── beatgen.js      # Generatore beat (Tone.js)
    ├── bassgen.js      # Generatore basso con progressioni
    ├── basslines.js    # 12 bass lines disco famose
    ├── practice.js     # Practice mode con playback
    └── patterns.js     # 64 pattern di batteria
```

## Tecnologie

- HTML5 / CSS3 / JavaScript vanilla
- [Tone.js](https://tonejs.github.io/) per sintesi audio e sequencing
- Font DSEG7 per display LED a 7 segmenti
- Font Dymo per bottoni genere/pattern

## Stile Interfaccia

L'interfaccia replica l'estetica di un rack hardware da studio:
- **Display LED**: sfondo nero, testo arancione con glow (titolo, BPM, etichette strumenti)
- **LED indicators**: verdi sui bottoni per indicare selezione attiva
- **Pannelli**: sfondo nero con bordi grigi
- **Toggle switch**: per mute strumenti (rosso quando attivo)
- **Fader**: slider con levetta rettangolare alta stile mixer analogico

## Note Tecniche

I pattern sono definiti come array di 16 step (sedicesimi in 4/4):
- `1` = colpo
- `0` = silenzio

Esempio pattern Rock:
```javascript
{
    kick:  [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
    snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
    hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0]
}
```

Le bass lines sono definite come array di note:
```javascript
notes: [
    [0, 'E1', '8n'],    // step 0, nota E1, durata ottavo
    [4, 'Bb1', '8n'],   // step 4, nota Bb1, durata ottavo
    ...
]
```

I suoni sono generati con synth Tone.js:
- **Kick**: MembraneSynth (sine wave con pitch decay)
- **Snare**: NoiseSynth (white noise)
- **Hi-Hat**: NoiseSynth con filtro highpass a 8kHz
- **Bass**: MonoSynth (FM sine, caldo tipo Fender)

## Credits

- Bass lines da "12 Iconic DISCO Bass Lines from the 1970's" - Scott's Bass Lessons (Scott Devine & Ian Allison)

## Licenza

Uso personale.
