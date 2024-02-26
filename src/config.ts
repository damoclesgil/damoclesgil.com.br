import type { CareerObjects, Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://damoclesgil.com.br", // replace this with your deployed domain
  author: "Dâmocles Gil Marçal",
  desc: "A blog by a front-end engineer who likes anime, games, vuejs and nextjs.",
  title: "Dâmocles Gil",
  ogImage: "damoclesgil-og.png",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/damoclesgil",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/damoclesgil",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/damoclesgil",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/damoclesgil",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:dmaoclesgil@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/damocles_gil",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://twitch.tv/the_gandas",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/damoclesgil",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=5562981165159",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/damoclesgil",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/damoclesgil",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://codepen.com/damoclesgil",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://discord.com/damoclesgil",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];

export const CAREER: CareerObjects = [
  {
    name: "Calculato",
    href: "https://www.calculato.com.br/",
    active: false,
    startDate: "Dec 2022",
    endDate: "Present",
  },
];
