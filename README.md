# ibtsaamqadir.github.io

Single-page personal site. One HTML file, one stylesheet, one small script. No build step.

```
index.html            the whole site
assets/css/style.css  all colour and layout
assets/js/main.js     highlights the nav link for the section you're viewing
assets/img/           put portrait.jpg and logo.png here
preview.html          local preview only — do NOT upload
```

## Deploying

Your repo currently holds a React build whose `index.html` will win over this one, so clear the root first.

```bash
git clone https://github.com/ibtsaamqadir/ibtsaamqadir.github.io.git
cd ibtsaamqadir.github.io
git rm -r --cached . && rm -rf *
cp -r /path/to/these/files/. .
rm preview.html README.md
git add . && git commit -m "New site" && git push
```

Through the web UI instead: delete the old files, then drag the whole folder onto the upload page so `assets/` is preserved. Uploading files one at a time breaks the stylesheet path.

Settings → Pages → Deploy from a branch → `main` / `(root)`. Preview locally with `python3 -m http.server 8000`.

## Your images

- **Portrait** — `assets/img/portrait.jpg`. Square crop, roughly 600×600. It's masked to a circle in CSS, so anything square works.
- **Logo** — `assets/img/logo.png`. Sits left of your name in the top bar at 30px tall, so export at ~60–90px tall for retina. Transparent PNG or SVG.

If either file is missing the element deletes itself, so the page never shows a broken image.

## Before you publish

1. **Email** — `your.email@purdue.edu` appears twice (hero and contact). Search and replace.
2. **Awards** — the three entries under "Awards & honours" are format placeholders.
3. **CV** — the CV link points at `assets/cv.pdf`. Add the file or remove the link.

## Editing

**News** — add newest at the top of `<ul class="news">`:

```html
<li>
  <p class="when">Sep 2026</p>
  <div>
    <h4>Headline goes here</h4>
    <p>One sentence of context. <a href="https://..." target="_blank" rel="noopener">Read more</a></p>
  </div>
</li>
```

**Research** — each theme is one `<article class="card">`. Add a fifth and the 2×2 grid becomes 2×2+1 automatically. Tags are just `<span>`s inside `<div class="tags">`.

**Publications** — copy any `<li>` inside a `<ul class="pubs">`:

```html
<li>
  <span class="title">Title of the paper.</span>
  <span class="authors"><b>Qadir MI</b>, Coauthor A, Coauthor B.</span>
  <span class="venue">Journal Name</span>, 2026.
  <a class="view" href="https://doi.org/..." target="_blank" rel="noopener">[View]</a>
</li>
```

`<b>` bolds your own name. Drop the `[View]` link if there isn't one.

**Adding a section** — give it an `id`, then add `<a href="#yourid">Label</a>` to the nav. The scroll highlighting picks it up with no further changes.

## Colour

Everything comes from the tokens at the top of `style.css`. `--teal` drives links, tags, timeline dots, card top-borders and the nav highlight; `--teal-deep` and `--teal-dark` make the hero gradient and the footer. Change those three and the whole site reskins.
