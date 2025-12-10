# DRUMMER

Beat Generator per Bassisti - Drum machine web in stile rack/flycase per esercitarsi al basso.

**[Prova online](https://jackscampi-backup.github.io/Drummer)**

## Descrizione

DRUMMER genera pattern di batteria in tempo reale usando Tone.js. Non richiede file audio esterni: tutti i suoni sono sintetizzati nel browser.

Interfaccia in stile **rack unit da tour flycase**:
- Display LED arancione (font DSEG7 a 7 segmenti)
- Etichette stile Dymo sui bottoni
- LED verdi per selezione attiva
- Viti angolari decorative
- Estetica hardware professionale

## Funzionalita'

- **8 generi musicali** con **64 pattern totali** (8 per genere)
- Controllo BPM editabile (40-220)
- Visualizzazione pattern step sequencer (16 step con LED)
- Beat counter visivo (1-2-3-4)
- Shortcut tastiera: Spazio per Play/Pause

## Generi e Pattern

| Genere | Pattern |
|--------|---------|
| **Rock** | Basic, Hard, Pop, Half-Time, Shuffle, Punk, Ballad, Stadium |
| **Pop** | Basic, Dance, Ballad, Upbeat, Motown, Synthpop, Funk, Modern |
| **Funk** | Basic, JB-Style, FunkyDr., BoomBap, Trap, Lo-Fi, N.Orleans, Breakbeat |
| **Blues** | Shuffle, Slow, Chicago, Texas, 12/8Feel, Jump, Rock, Train |
| **Jazz** | Swing, Bebop, Ballad, Waltz, SlowSw., Med-Up, Fusion, Brushes |
| **Latin** | Bossa, Samba, Salsa, Cha-Cha, AfroCuban, Mambo, Songo, BossaSl. |
| **Reggae** | OneDrop, Rockers, Steppers, Ska, Dub, RootsSl., Dancehall, StepFast |
| **Electro** | Massive, Tricky, Fugees, DeLa, Slim, Portis, Morch, Hip-Hop |

## Come Usare

1. Apri l'app nel browser
2. Scegli un genere (bottoni con etichetta Dymo)
3. Scegli una variazione pattern
4. Premi Play o Spazio
5. Modifica il BPM cliccando sul display

## Struttura

```
DRUMMER/
├── index.html          # Pagina principale
├── css/
│   └── style.css       # Stili rack unit
├── fonts/
│   └── DSEG7Classic-Bold.ttf  # Font LED 7 segmenti
├── dymo/
│   └── Dymo.ttf        # Font Dymo per etichette
└── js/
    ├── app.js          # Inizializzazione
    ├── beatgen.js      # Generatore beat (Tone.js)
    └── patterns.js     # 64 pattern di batteria
```

## Tecnologie

- HTML5 / CSS3 / JavaScript vanilla
- [Tone.js](https://tonejs.github.io/) per sintesi audio e sequencing
- Font DSEG7 per display LED
- Font Dymo per etichette bottoni

## Note Tecniche

I pattern sono array di 16 step (sedicesimi in 4/4):
- `1` = colpo
- `0` = silenzio

Esempio:
```javascript
{
    kick:  [1,0,0,0, 0,0,0,0, 1,0,0,0, 0,0,0,0],
    snare: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
    hihat: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0]
}
```

Suoni generati con Tone.js:
- **Kick**: MembraneSynth (sine wave con pitch decay)
- **Snare**: NoiseSynth (white noise)
- **Hi-Hat**: NoiseSynth con filtro highpass 8kHz

## Licenza

Uso personale.
