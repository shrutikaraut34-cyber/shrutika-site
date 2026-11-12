import fs from 'node:fs';
import type { MarkdownInstance } from 'astro';

export const SITE = {
  name: 'Shrutika',
  description:
    'Shrutika is a psychology graduate, writer and speaker. She writes about everyday life, society and film.',
  email: 'shrutika.raut.34@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shrutika-raut-755b32240/', // full LinkedIn URL; the link is hidden while this is empty
};

export const TOPICS = {
  life: 'Life',
  society: 'Society',
  movies: 'Movies',
  psychology: 'Psychology',
} as const;

export type Topic = keyof typeof TOPICS;

export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
}

// Optional files in public/. Each one shows up on the site once it exists.
export const HAS_CV = fs.existsSync(new URL('../../public/cv.pdf', import.meta.url));
export const HAS_PORTRAIT = fs.existsSync(new URL('../../public/portrait.jpg', import.meta.url));

type Frontmatter = {
  title: string;
  description: string;
  date: string | Date;
  topic: Topic;
  draft?: boolean;
  pin?: number; // 1, 2, 3 ... keeps an article at the top of the lists, in that order
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: Date;
  topic: Topic;
  words: number;
  pin?: number;
  cover?: string; // public/blog/<slug>/cover.* when it exists
  Content: MarkdownInstance<Frontmatter>['Content'];
};

// Articles are the .md files in src/content/blog.
const files = import.meta.glob<MarkdownInstance<Frontmatter>>('../content/blog/*.md', {
  eager: true,
});

export function getPosts(): Post[] {
  return Object.entries(files)
    .filter(([, file]) => !file.frontmatter.draft)
    .map(([path, file]) => {
      const slug = path.split('/').pop()!.replace(/\.md$/, '');
      const fm = file.frontmatter;
      // Plain-language errors, so a typo at the top of an article is easy to find and fix
      for (const key of ['title', 'description', 'date', 'topic'] as const) {
        if (!fm[key]) throw new Error(`The article "${slug}.md" is missing "${key}" at the top of the file.`);
      }
      if (!(fm.topic in TOPICS)) {
        throw new Error(`The article "${slug}.md" has topic "${fm.topic}". The topic must be life, society, movies or psychology.`);
      }
      const date = new Date(fm.date);
      if (Number.isNaN(date.valueOf())) {
        throw new Error(`The article "${slug}.md" has a date that is not written like 2026-11-15.`);
      }
      const coverDir = new URL(`../../public/blog/${slug}/`, import.meta.url);
      const coverFile = fs.existsSync(coverDir) ? fs.readdirSync(coverDir).find((f) => f.startsWith('cover.')) : undefined;
      return {
        slug,
        cover: coverFile ? url(`blog/${slug}/${coverFile}`) : undefined,
        title: fm.title,
        description: fm.description,
        date,
        topic: fm.topic,
        pin: fm.pin,
        words: file.rawContent().trim().split(/\s+/).length,
        Content: file.Content,
      };
    })
    // Pinned articles first (1, 2, 3 ...), then everything else, newest first
    .sort((a, b) => (a.pin ?? Infinity) - (b.pin ?? Infinity) || b.date.valueOf() - a.date.valueOf());
}

export function formatDate(d: Date) {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function shortDate(d: Date) {
  return d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
}

export function readingTime(words: number) {
  return `${Math.max(1, Math.round(words / 220))} min read`;
}
