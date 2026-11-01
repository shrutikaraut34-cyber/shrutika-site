# Handover checklist (for Aayush)

Do these once. Then Shrutika follows START-HERE.md. You can delete this file afterwards.

## 1. Fill in what you can before handing over
Ask Shrutika for her real email, LinkedIn link, CV and a square-ish photo. Then:
- email and LinkedIn: `src/lib/site.ts`
- CV: save as `public/cv.pdf`; photo: save as `public/portrait.jpg`

If she does not have them yet, skip this. START-HERE.md shows her how to add them later.

## 2. Check it builds
```bash
npm install
npm run build
```
It should finish with `Complete!`. Preview with `npm run dev`.

## 3. Put it on GitHub as a template
Create the repo at https://github.com/new on your account:
- Name: `shrutika-site` (START-HERE.md uses `github.com/aayushmk/shrutika-site`; if you use another
  name or account, update the link in Part 2 of START-HERE.md)
- **Public**, and **do not** add a README, .gitignore or license (the project has them)

Then, in this folder:
```bash
git init -b main
git add .
git commit -m "Shrutika's website"
git remote add origin https://github.com/aayushmk/shrutika-site.git
git push -u origin main
```
On GitHub open **Settings, General** and tick **Template repository**.

## 4. Send her three things
1. A preview of what she is getting: https://aayushmk.github.io/swebsite/v2/
2. The template link: https://github.com/aayushmk/shrutika-site
3. The guide: open `START-HERE.md` on GitHub and send her that page's link.

## 5. Be around for two moments
- **Part 4 (DNS)** is where people get stuck, because every domain company's screen differs.
  If she cannot find the DNS page, ask for a screenshot of her domain company's dashboard.
- **After it is live**, open https://shrutika.com.np and click through the pages.

## Why a template and not a transfer
"Use this template" gives her an independent copy under her own account in one click, with
no waiting for her to accept a transfer. Your repo stays untouched. If you would rather hand
over the repo itself, use **Settings, Danger zone, Transfer** instead, and skip Part 2.
