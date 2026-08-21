# Happy Birthday My Love 💕

A single-page romantic birthday website with a typewriter hero title, a memories
gallery, a photo grid, and a special message card — all wrapped in a soft
pink-to-purple aesthetic with floating hearts, butterflies, and sparkles.

## Project structure

```
happy-birthday-project/
├── index.html          # Page structure (4 sections)
├── css/
│   └── style.css        # All styling, animations, responsive rules
├── js/
│   └── script.js         # Typewriter effect, floaters, scroll reveal
├── images/               # <-- put your real photos here (see below)
└── README.md
```

## How to run it

No build tools needed — it's plain HTML/CSS/JS.

1. Open `index.html` directly in a browser, **or**
2. For the smoothest experience (fixes some browsers blocking local file access),
   serve it locally:
   ```bash
   cd happy-birthday-project
   python3 -m http.server 5500
   ```
   Then visit `http://127.0.0.1:5500` — this matches the setup shown in your screenshots.

## How to personalize it

### 1. Her name
Open `js/script.js` and change the top line:
```js
const HER_NAME = "Riya";
```

### 2. Photos and videos
Drop your media into the `images/` folder using these exact filenames:

| Filename        | Used in                                  |
|------------------|-------------------------------------------|
| `photo1.mp4`–`photo3.mp4` | "Our Beautiful Memories" 3-card row |
| `photo4.jpeg`, `photo5.jpeg`, `photo6.jpg`, `photo7.jpeg`, `photo8.jpg`, `photo9.jpeg` | Photo grid (2 rows of 3) |

### 3. Birthday song
Add an MP3 named `birthday-song.mp3` to the `images/` folder. Visitors can use the
music button in the top-right corner to play or pause it. Browsers require a click
before music can start.

Any aspect ratio works — CSS crops them automatically (portrait for the memory
cards, square for the grid).

### 4. Captions
Each memory card's caption is in `index.html`, inside the `.memory-overlay`
`<p>` tags — edit the text directly.

### 5. The special message
Edit the paragraph text inside `<section class="message-section">` in
`index.html`.

### 6. Colors
All colors are defined as CSS variables at the top of `css/style.css` under
`:root` — change `--pink-light`, `--rose-deep`, `--purple-start`, etc. to shift
the palette.

## Sections included

1. **Hero** — typewriter-animated title + subtitle + scroll hint
2. **Our Beautiful Memories** — 3 looping video cards, center one raised, hover caption reveal
3. **Photo grid** — 6 photos in a 2×3 grayscale grid that colorizes on hover
4. **A Special Message for You** — purple gradient card with your message

All sections animate in on scroll and are responsive down to mobile.
