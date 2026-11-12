# Shrutika's website

Personal site of Shrutika, a psychology graduate, writer and public speaker who works in
English. Astro 4 static site, live at https://shrutika.com.np. Every push to the
`main` branch is built and published by GitHub Pages (.github/workflows/deploy.yml).

## Who you are helping
The owner is not a programmer. Explain in plain words, one step at a time, say what you
changed and where, and avoid jargon. Never change her writing unless she asks. If something
fails, say what went wrong and how to fix it.

## Adding an article
- Create `src/content/blog/<short-slug>.md` (lowercase, words joined with hyphens).
- The top of the file must look like this, then her text below it:

      ---
      title: The title
      description: One or two sentences shown under the title.
      date: 2026-11-15
      topic: life
      ---

- `topic` is one of: life, society, movies. `date` is written year-month-day.
- Add `draft: true` to hide an article until it is ready.
- `sample-*.md` are placeholder articles. Delete them once she has real ones (ask first).

## Where things live
- `src/pages/index.astro`: home page text (about, talk topics).
- `src/lib/site.ts`: her email (`SITE.email`) and LinkedIn link (`SITE.linkedin`).
- `public/cv.pdf` and `public/portrait.jpg`: add either file and it appears on the site
  automatically (a CV button, and a polaroid photo on the hero desk and in About).
- `public/og.png`: the picture shown when the link is shared on LinkedIn or WhatsApp.
- `public/CNAME`: her domain. Do not change or delete it.

## Design rules (keep these)
- White paper with a faint dot grid, one royal blue (`--ink`), red only for small accents.
- Bricolage Grotesque for headings, Newsreader for reading text, Caveat only for short
  handwritten notes.
- The name unscrambling in the hero and the letter tiles are the signature. Keep motion
  limited to those and respect reduced motion.
- Copy is plain and warm, in her first-person voice. No em-dashes.

## Before publishing
Run `npm run build` and fix any error it prints. To publish, commit and push to `main`;
the site updates in 1 to 3 minutes.
