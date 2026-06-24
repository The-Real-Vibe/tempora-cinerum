# Tempora Cinerum

A small reading site for the collection. Static HTML, no build step. Everything
can be edited through GitHub's website.

## Structure

```
index.html                      ← the library (lists every work)
assets/style.css                ← all styling lives here
assets/app.js                   ← scroll reveals + reading progress bar
works/
  viaticum/
    index.html                  ← the work's table of contents
    nocturne.html               ← chapter 1
    requiem.html                ← chapter 2
    aubade.html                 ← chapter 3
```

## How to read the design

One stylesheet (`assets/style.css`) controls the whole site. Change a colour or
font there once and every page updates. The key classes:

- `.breath` — a centered one-line beat (e.g. *His sandals were dry.*)
- `.dialogue` — an indented line of speech
- `.coda` — the final paragraph of a work
- `.mv-name` — the calligraphic chapter title (carries the amber glow)
- `.reveal` — fades the element in on scroll

## Adding a new chapter to an existing work

1. Copy an existing chapter file (e.g. `requiem.html`) to a new name.
2. Change the `<title>`, the eyebrow (`Viaticum · II`), the `.mv-name`, and the
   `.mv-def`.
3. Replace the paragraphs inside `<div class="prose"> ... </div>`.
4. Fix the prev/next links at the bottom (`.chnav`).
5. Add a `<li>` for it in the work's `index.html` table of contents.

## Adding a whole new work

1. Make a new folder under `works/` (e.g. `works/second-story/`).
2. Copy `viaticum/index.html` and the chapter files into it as a starting point.
3. Edit them with the new content.
4. Open the top-level `index.html` and copy the `work-card` block, point it at the
   new work's folder.

## Putting it online (GitHub Pages)

1. Create a new public repository on github.com.
2. Upload everything in this folder (keep the structure).
3. Repo → Settings → Pages → Source: "Deploy from a branch", branch `main`,
   folder `/ (root)`. Save.
4. Wait about a minute. The site is live at
   `https://YOURNAME.github.io/REPONAME/`.

## A note on the font

Titles use a calligraphic system font when the reader's device has one
(Apple Chancery, Edwardian Script, etc.) and fall back to EB Garamond otherwise.
EB Garamond is loaded from Google Fonts for the body text and always works.
