import { getDuration } from "@utils/getDuration";

export type PROJECT_TYPE = {
  title: string;
  url: string;
  description: string;
  active: boolean;
  img?: string;
};

export type PROJECTS_TYPE = {
  year: string;
  projects: Array<PROJECT_TYPE>;
};

export const ALL_PROJECTS = [
  {
    year: "2024",
    projects: [
      {
        title: "damoclesgil.com.br",
        url: "https://github.com/damoclesgil/damoclesgil.com.br",
        active: true,
      },
      {
        title: "Empregador App",
        url: "https://empregador.app",
        description:
          "An app for empregador acessing the company to send and give requests",
        active: true,
      },
      {
        title: "Api ecommerce - loryartcroche",
        url: "https://github.com/damoclesgil/api-loryartcroche",
        active: true,
        description:
          "Api made for an ecommerce of handmade bags made by Mrs. Lory, this api helps her register her products and track payment orders using stripe.js",
      },
      {
        title: "Front-end ecommerce - loryartcroche",
        url: "https://github.com/damoclesgil/front-loryartcroche",
        active: true,
        description:
          "Frontend app using next.js for an ecommerce of handmade bags made by Mrs. Lory, this a website is a ecommerce to disclose the handmade bags.",
      },
    ],
  },
  {
    year: "2023",
    projects: [
      {
        title: "Project Waste Challenge",
        url: "https://github.com/damoclesgil/project-waste-coding-challenge",
        active: true,
      },
    ],
  },
  {
    year: "2022",
    projects: [
      {
        title: "Calculato",
        description:
          "- I Worked in the development team as Lead Front-end in web projects. I use all my software architecture knowledge to improve performance, maintainability, scalability and readability. I also use my development skills with the best customer experience in mind, with disruptive and value-generating solutions.",
        url: "https://www.calculato.com.br/",
        active: true,
        img: "assets/images/projects/www.calculato.com.br.jpg",
      },
      {
        title: "Calculato Folha",
        description: "Payroll system",
        url: "https://folha.calculato.com.br/",
        active: true,
      },
      {
        title: "Trabalhador App",
        url: "https://trabalhador.app/trabalhador",
        description: "An App for communication worker app with payroll system",
        active: true,
      },
    ],
  },
  {
    year: "2021",
    projects: [
      {
        title: "Juntos Somos Mais Challenge",
        url: "https://github.com/damoclesgil/jsm-challenge-frontend",
        active: true,
      },
    ],
  },
  {
    year: "2019",
    projects: [
      {
        title: "NectarCRM",
        url: "https://nectarcrm.com.br/inicio/",
        active: true,
        img: "assets/images/projects/nectarcrm.com.br.jpg",
      },
      {
        title: "damoclesgil.github.io",
        url: "https://github.com/damoclesgil/damoclesgil.github.io",
        active: true,
      },
      {
        title: "Personal Website Using VuePress",
        url: "https://github.com/damoclesgil/portfolio-vuepress",
        active: true,
      },
    ],
  },
  {
    year: "2018",
    projects: [
      {
        title: "Daxplace",
        url: "https://google.com.br",
        active: false,
      },
      {
        title: "Realtrade",
        url: "https://realtradeclub.com.br",
        active: false,
      },
      {
        title: "Conexão Soluções Corporativas",
        url: "https://conexaopro.com.br/site/",
        active: true,
      },
      {
        title: "APCAM",
        url: "https://apcam.org.br/home/institucional",
        active: true,
        img: "assets/images/projects/apcam.org.br.jpg",
        descriotion: `
        The Association of Breast Cancer Patients - APCAM is a philanthropic, non-profit entity that survives on donations, activities to raise financial resources carried out by the Association's patients and collaborators, as well as research projects developed by researchers from the Network Brazilian Research Institute in Mastology, belonging to the Mastology Program - HC/UFG.
        `,
      },
      {
        title: "Infotech Goianésia",
        url: "https://infotechgoianesia.com.br/",
        active: true,
        img: "assets/images/projects/www.infotechgoianesia.com.br.jpg",
        description:
          "A website using nuxt.js to promote an internet provider in Goianésia and nearby regions.",
      },
    ],
  },
  {
    year: "2017",
    projects: [
      {
        title: "Believe Escola de Idiomas",
        url: "http://believeescola.com.br/",
        active: true,
        description: `This a an website of school languages, I create using wordpress.`,
      },
      {
        title: "Favorites Link",
        url: "https://github.com/damoclesgil/favorites-links",
        active: true,
        description: `This a an repo with my favorites that contain links that I find useful in my daily life for development`,
      },
      {
        title: "Boilerplate website",
        url: "https://github.com/damoclesgil/boilerplate-website",
        active: true,
        description: `This is a an repo with my boilerplate for constructing an website static`,
      },
      {
        title: "Actuar Sistemas",
        url: "https://actuar.com/",
        active: true,
        description: `This is a website if i developed for the system of gyms`,
        img: "assets/images/projects/actuar.com.jpg",
      },
      {
        title: "Trei.no",
        url: "https://trei.no/",
        active: true,
        img: "assets/images/projects/trei.no.jpg",
        description: `An app for helping students training in gyms`,
      },
      {
        title: "Afig",
        url: "https://www.afig.com.br/",
        active: true,
      },
    ],
  },
  {
    year: "2016",
    projects: [
      {
        title: "Sage",
        url: "https://www.sage.com/pt-pt/",
        active: true,
        description: `
        - Conduct training and qualification of users to use the software.
        <br>
        - Responsible for installing, maintaining and configuring software on users' machines.
        `,
      },
    ],
  },
  {
    year: "1997",
    projects: [
      {
        title: "Born",
        url: "https://google.com.br",
        active: false,
        description: `- I was born in 1997. I was ${getDuration("1997-05-06", null).slice(0, 2)} years old.`,
      },
    ],
  },
] as PROJECTS_TYPE[];
