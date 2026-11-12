// The video content portfolio. Each thumbnail is a file in public/videos.
// To add a video: save its thumbnail in public/videos and add a line here.
export type Video = {
  title: string; // short title shown under the thumbnail
  by: string; // the account that posted it
  platform: 'Instagram' | 'TikTok';
  link: string;
  thumb: string; // file name in public/videos
};

export const VIDEOS: Video[] = [
  {
    title: 'How much do you really know about psychology?',
    by: 'PICS Nepal',
    platform: 'Instagram',
    link: 'https://www.instagram.com/reel/DdEQwx4jgm2/',
    thumb: '01.jpg',
  },
  {
    title: 'Why do two people react differently to the same situation?',
    by: 'PICS Nepal',
    platform: 'Instagram',
    link: 'https://www.instagram.com/reel/DbqFtgOiHEY/',
    thumb: '02.jpg',
  },
  {
    title: 'What is your inner child trying to tell you?',
    by: 'PICS Nepal',
    platform: 'Instagram',
    link: 'https://www.instagram.com/reel/DbyIuYzgKso/',
    thumb: '03.jpg',
  },
  {
    title: 'Pride and Men’s Mental Health Awareness Month',
    by: 'PICS Nepal',
    platform: 'Instagram',
    link: 'https://www.instagram.com/reel/DZ978PEgbF_/',
    thumb: '04.jpg',
  },
  {
    title: 'Study MSc Global Healthcare Management in London',
    by: 'Murphy Education',
    platform: 'Instagram',
    link: 'https://www.instagram.com/reel/DfMw3REkbXm/',
    thumb: '05.jpg',
  },
  {
    title: 'A name Nepal has walked with for years',
    by: 'Shikhar Shoes',
    platform: 'Instagram',
    link: 'https://www.instagram.com/reel/DbyAIUDE9KC/',
    thumb: '06.jpg',
  },
  {
    title: 'Prompt Genie',
    by: 'TWB creatives',
    platform: 'Instagram',
    link: 'https://www.instagram.com/reel/DJjc2t_ICRe/',
    thumb: '07.jpg',
  },
  {
    title: 'The Complete Dashain Feast',
    by: 'Mutton Station Smoky Grill',
    platform: 'Instagram',
    link: 'https://www.instagram.com/reel/DO2qbfZjw9t/',
    thumb: '08.jpg',
  },
  {
    title: 'When Coke became part of Dashain',
    by: 'TWB creates',
    platform: 'TikTok',
    link: 'https://www.tiktok.com/@twb_creates/video/7531703265629654280',
    thumb: '09.jpg',
  },
  {
    title: 'A drink for every mood',
    by: 'Chiya Snooks',
    platform: 'TikTok',
    link: 'https://www.tiktok.com/@chiyasnooks/video/7549870890348039444',
    thumb: '10.jpg',
  },
  {
    title: 'First time at 16T? Don’t let the menu confuse you',
    by: '16T Restro and Bar',
    platform: 'Instagram',
    link: 'https://www.instagram.com/reel/DeEs-opAgpm/',
    thumb: '11.jpg',
  },
];
