import type socialIcons from "@assets/socialIcons";

export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
  scheduledPostMargin: number;
};

export type SocialObjects = {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[];

export type CareerObjects = {
  company: string;
  href: string;
  jobTitle: string;
  active: boolean;
  startDate: string;
  endDate?: string;
  description?: string;
}[];

export type TechnologiesObjects = {
  stackName: string;
  href: string;
  imgSrc: string;
}[];
