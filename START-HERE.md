# Putting your website online at shrutika.com.np

Aayush built this website for you. This guide takes you from nothing to a live website on
your own domain, one small step at a time. You do not need to know how to code.

- **Time:** about 1 to 2 hours, and most of that is waiting.
- **Cost:** nothing for hosting. You only keep paying for your domain as you do today.
- **Safe:** nothing here can break your computer or your website. You can always undo a change.

If a screen looks a little different from what is described, that is normal, because websites
move their buttons around now and then. Look for the words in **bold**.

---

## How it works, in one minute

1. Your website's files live on **GitHub**, a free website for storing projects.
2. Every time you save a change, GitHub builds your website and publishes it for free.
3. Your domain, **shrutika.com.np**, is pointed at it, so people type your name and arrive.

You will use three places: **GitHub** (your files and hosting), **your domain company** (to
point the domain), and **Claude** (to help you edit, if you want).

### Why GitHub Pages and not Cloudflare

Both are free and both are good. GitHub Pages is the better fit for you:

- To connect a plain `shrutika.com.np` address, Cloudflare asks you to move your whole domain
  over to Cloudflare by changing "name servers" at the Nepali registry. That step is easy to
  get wrong and can take your domain offline for a while.
- GitHub Pages only needs you to **add a few records** at your domain company and leave
  everything else alone.
- Your website is already set up to publish itself on GitHub. There is nothing extra to learn.

---

## What to have ready

- Your email address.
- The login for the company where you manage **shrutika.com.np** (where you registered it
  or renew it).
- The link Aayush sent you.

Tip: keep a note on your phone for the usernames and passwords you make today.

---

## Part 1. Make a free GitHub account

1. Go to **https://github.com/signup**.
2. Enter your email, make a password, and choose a **username**. Short and simple is best,
   for example `shrutika` or `shrutika-writes`. Write it down. You will need it later.
3. GitHub emails you a code. Type it in to confirm your email.
4. When it asks about plans, choose the **Free** plan.

---

## Part 2. Get your own copy of the website

1. Open the link Aayush sent you. It looks like `https://github.com/aayushmk/shrutika-site`.
2. Click the green button **Use this template**, then **Create a new repository**.
3. Fill it in:
   - **Owner:** your own username (it should already be selected).
   - **Repository name:** `shrutika-site`
   - **Public:** make sure **Public** is selected. This is required for free hosting.
4. Click **Create repository**. After a few seconds you are looking at your own copy.

You now own the website's files. Nobody else can change them without your permission.

---

## Part 3. Switch on the hosting

1. In your new repository, click **Settings** (a tab near the top, with a small gear).
2. In the left menu, click **Pages**.
3. Under **Build and deployment**, find **Source** and choose **GitHub Actions**.
4. Click the **Actions** tab at the top of the repository.
5. If you see a button saying **I understand my workflows, go ahead and enable them**, click it.
6. In the left list, click **Deploy to GitHub Pages**, then click **Run workflow**, and click
   the green **Run workflow** button in the little box.
7. Wait 2 to 3 minutes. A yellow circle means "working". A green tick means "done".

**If you see a red cross instead,** click it, then copy the error message and ask Claude about
it (see "If something goes wrong" at the bottom).

Your website is now built. The next part makes **shrutika.com.np** show it.

> Note: until Part 4 is finished, the address `YOUR-USERNAME.github.io` will not show the
> site properly. That is expected. Keep going.

---

## Part 4. Connect shrutika.com.np

### 4a. Find where your domain's settings are

Log in to the company where you manage **shrutika.com.np**. Look for a page called
**DNS**, **DNS Management**, **Manage DNS**, **Zone Editor** or **Name Servers**.

- If you see a list of "records" with types like **A** and **CNAME**, you are in the right place.
- If it only shows name servers that point to somewhere else (for example a hosting company),
  you need to log in to **that** company instead, because that is where the records live.
- If you cannot find it, use the message in "Ask your domain company for help" below.

### 4b. Add these records

First **delete** any old **A**, **AAAA** or **CNAME** records for `@` or `www` (for example a
"parked page" or "coming soon" record). Leave other record types, such as email (MX), alone.

Then add these **four A records**. The "Name" or "Host" is `@`. Some companies show `@` as
empty, or as `shrutika.com.np`. All mean the same thing: the main address.

| Type | Name / Host | Value / Points to   |
|------|-------------|---------------------|
| A    | @           | 185.199.108.153     |
| A    | @           | 185.199.109.153     |
| A    | @           | 185.199.110.153     |
| A    | @           | 185.199.111.153     |

Then add **one CNAME record** so that `www.shrutika.com.np` works too:

| Type  | Name / Host | Value / Points to                |
|-------|-------------|----------------------------------|
| CNAME | www         | `YOUR-USERNAME.github.io`        |

Replace `YOUR-USERNAME` with your GitHub username. Write only that, with no `https://` and no
repository name. Save the changes.

### Ask your domain company for help

If you cannot find the DNS page, or it will not save, send their support this message. Change
the username first:

> Hello, please add these DNS records for shrutika.com.np and remove any other A, AAAA or
> CNAME records for @ and www:
> A @ 185.199.108.153
> A @ 185.199.109.153
> A @ 185.199.110.153
> A @ 185.199.111.153
> CNAME www YOUR-USERNAME.github.io
> Thank you.

### 4c. Tell GitHub your domain

1. Back on GitHub, open your repository, then **Settings**, then **Pages**.
2. Find **Custom domain**, type `shrutika.com.np`, and click **Save**.
3. GitHub starts a **DNS check**. It may say it is not ready yet. That is fine.

### 4d. Wait, then check

DNS changes take anywhere from a few minutes to a day to spread around the internet. In
Nepal it can sometimes take longer. While you wait:

- Go to **https://dnschecker.org**, type `shrutika.com.np`, choose **A**, and click **Search**.
  When most rows show the `185.199...` addresses, it is working.
- Go back to **Settings, Pages** on GitHub and refresh. When the DNS check turns green, go on.

### 4e. Turn on the padlock (HTTPS)

1. In **Settings, Pages**, tick **Enforce HTTPS**.
2. If the box is greyed out, wait an hour and refresh. GitHub is still creating the secure
   certificate for your domain. This is normal.

**Now open https://shrutika.com.np. Your website is live.** Also try `www.shrutika.com.np`. It
should jump to the main address.

---

## Part 5. Make it yours (do this before you share the link)

The website still has some placeholders. Fix these first.

| What | Where it is | Why |
|------|-------------|-----|
| Your real email | `src/lib/site.ts` | The Contact button currently goes to `hello@example.com` |
| Your LinkedIn link | `src/lib/site.ts` | Appears on the site once added |
| About text in your own words | `src/pages/index.astro` | It is a draft written for you |
| Talks you would give | `src/pages/index.astro` | Change them to what you really offer |
| The 3 sample articles | `src/content/blog` | Delete them once you have your own |
| Your CV (optional) | `public/cv.pdf` | A "Download my CV" button appears |
| Your photo (optional) | `public/portrait.jpg` | A polaroid appears on the desk and in About |

You can change these in two ways. Pick whichever feels easier. You can mix them.

---

## Part 6. Two ways to edit your website

### Way A. With Claude (easiest if you have a paid Claude plan)

Claude can read your whole website and make the changes for you. This needs a paid Claude
plan (Pro or above). Check **https://claude.com/pricing** for what is included today.

1. Go to **https://claude.ai/code** and sign in with your Claude account.
2. When asked, connect your **GitHub** account and allow access to the `shrutika-site`
   repository.
3. Choose your `shrutika-site` repository, then type what you want in plain English.
4. When Claude finishes, it may show you the changes. Say yes to saving them. If it offers a
   **pull request**, open it and click the green **Merge** button. That is what publishes
   the change.
5. Wait 2 to 3 minutes and refresh your website.

Claude already reads a notes file in the repository, so it knows how your site works. Copy
and paste any of these requests:

- *Change my email to YOUR-EMAIL everywhere on the site, and add my LinkedIn link: LINK.*
- *Add a new article. The title is "TITLE", the topic is society, and today's date. Here is my
  text: (paste your text). Do not change my words.*
- *Delete the three sample articles.*
- *I am sending you my CV and a photo. Add them to the site.* (Claude will tell you how to
  give it the files.)
- *Rewrite the About section so it sounds like this: (paste a few sentences you wrote).*
- *Change the talk topics to these: (list them).*
- *Add a section called Experience with these entries: (list them). Match the design.*
- *Where have I spoken? Add a "Where I have spoken" list with: (list events and years).*

**Good habits with Claude:**
- Ask for one change at a time and check the website after each one.
- If you do not like a change, say "undo that" and it will.
- Your words are yours. Say "do not change my words" when you add writing.

### Way B. Without Claude (free, from the GitHub website)

**Add a new article**

1. In your repository, open the folders **src**, then **content**, then **blog**.
2. Click **Add file**, then **Create new file**.
3. In the name box, type a short name ending in `.md`, for example `my-first-post.md`. Use
   lowercase letters and hyphens, with no spaces.
4. Paste this and fill it in:

```
---
title: Your title here
description: One or two sentences that sum up the piece. It shows under the title.
date: 2026-11-15
topic: life
---

Your first paragraph goes here.

## A heading, if you want one

More of your writing here.
```

   - **topic** must be exactly one of: `life`, `society` or `movies`.
   - **date** is written year-month-day, like `2026-11-15`.
   - A blank line starts a new paragraph. A line starting with `## ` makes a heading.
5. Click the green **Commit changes** button, then **Commit changes** again in the box.
6. Wait 2 to 3 minutes, then refresh your website. Your article is there.

Tip: if your essay is in Google Docs, paste it into the free chat at **claude.ai** and say:
*"Turn this into a file in the format below, without changing my words,"* and then paste the
template above. Copy the answer into step 4.

**Change an existing article or the email**

1. Open the file, for example `src/lib/site.ts`.
2. Click the **pencil** icon at the top right of the file.
3. Change only the words between the quote marks. For the email, change
   `hello@example.com` to your own address and keep the quote marks.
4. Click **Commit changes** and confirm. Refresh the website after 2 to 3 minutes.

**Delete a sample article**

1. Open the article's file in `src/content/blog`.
2. Click the three dots at the top right, then **Delete file**, then **Commit changes**.

**Add your CV or photo**

1. Open the **public** folder. Click **Add file**, then **Upload files**.
2. Drag your file in. The name must be exactly `cv.pdf` or `portrait.jpg`. Rename the file
   on your computer first if needed. A square-ish photo under 1 MB works best.
3. Click **Commit changes**.

---

## If something goes wrong

**The Actions tab shows a red cross after a change.** Your website did not update, but the old
one is still live and safe. Click the red cross, then the failed step, and copy the error. The
errors written for you are plain English, for example a missing date at the top of an article.
Fix what it says, or paste the error into Claude and ask what to do.

**I changed something but the website looks the same.** Wait 3 minutes, then do a hard refresh:
**Ctrl + Shift + R** on Windows, or **Cmd + Shift + R** on a Mac.

**GitHub says "DNS check unsuccessful".** Wait an hour and try again. If it still fails, open
**dnschecker.org** and check that your A records show the four `185.199...` addresses. If there
are extra A records pointing somewhere else, delete them.

**The browser says "Not secure".** HTTPS is not switched on yet. Do step 4e, and if the box is
greyed out, wait an hour.

**The site shows a 404 or "There isn't a GitHub Pages site here".** Check that **Settings,
Pages, Source** is set to **GitHub Actions** and that the last run in the **Actions** tab has
a green tick.

**I did something wrong and want to go back.** On GitHub, open the file, click **History**,
choose an earlier version, and copy it back. Or ask Claude: *"Undo my last change."*

---

## Good to know

- **Cost:** GitHub Pages is free for public websites. Keep your domain renewed with your
  domain company so shrutika.com.np does not expire.
- **Keep your logins safe.** Turn on two-step login in GitHub under your profile picture,
  **Settings**, **Password and authentication**.
- **Your articles are public.** Anything you put in this repository is visible to anyone. Do
  not put private documents in it. Use `draft: true` at the top of an article to keep it off
  the website until it is ready.
- **Ask Aayush** if you get stuck. Send him a screenshot.

Congratulations on your website.
