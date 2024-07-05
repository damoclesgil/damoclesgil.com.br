import { getDuration } from "@utils/getDuration";

// eslint-disable-next-line -->

// type STACK_TYPE = {
//   link: string,
// icon: string
// }
type PROJECT_TYPE = {
  title: string;
  url: string;
  description: string;
  active: boolean;
  img?: string;
  stacks?: Array<string>;
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
        description:
          "A personal website to post things I've learned and to share some things with my friends",
        active: true,
        stacks: [
          "devicon:astro",
          "logos:mdx",
          "devicon:tailwindcss",
          "devicon:typescript",
        ],
        img: "assets/images/projects/damoclesgil.com.br_about_.png",
      },
      {
        title: "Empregador App",
        url: "https://empregador.app",
        description:
          "An SPA that communicates with another SPA called Calculato-Folha (payroll system) through requests to help manage workers in a company that has multiple employers.",
        active: true,
        img: "assets/images/projects/empregador.app.png",
        stacks: [
          "devicon:vuejs",
          "devicon:vitejs",
          "logos:vitest",
          "logos:pinia",
          "devicon:typescript",
        ],
      },
      {
        title: "Api ecommerce - loryartcroche",
        url: "https://github.com/damoclesgil/api-loryartcroche",
        active: true,
        description:
          "Api made for an ecommerce of handmade bags made by Mrs. Lory, this api helps her register her products and track payment orders using stripe.js",
        stacks: ["logos:strapi-icon", "devicon:typescript", "logos:stripe"],
        img: "assets/images/projects/loryartcroche/backend/list-products.png",
      },
      {
        title: "Front-end ecommerce - loryartcroche",
        url: "https://github.com/damoclesgil/front-loryartcroche",
        active: true,
        description:
          "Frontend app using next.js for an ecommerce of handmade bags made by Mrs. Lory, this a website is a ecommerce to disclose the handmade bags.",
        img: "assets/images/projects/loryartcroche/frontend/loryartcroche.com.br.png",
        stacks: [
          "devicon:nextjs",
          "logos:graphql",
          "logos:apollostack",
          "devicon:react",
          "devicon:typescript",
          "logos:vitest",
        ],
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
        description:
          "A challenge requested for the company interview called project waste",
        stacks: ["devicon:vuejs", "devicon:typescript"],
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
        stacks: [
          "devicon:nextjs",
          "devicon:typescript",
          "vscode-icons:file-type-styled",
        ],
      },
      {
        title: "Calculato Folha",
        description: "Payroll system",
        url: "https://folha.calculato.com.br/",
        img: "assets/images/projects/calculato-folha.png",
        active: true,
        stacks: [
          "devicon:vuejs",
          "devicon:javascript",
          "logos:graphql",
          "logos:apollostack",
          "logos:jest",
          "devicon:tailwindcss",
          "devicon:storybook",
          "devicon:markdown",
          "logos:eslint",
          "logos:prettier",
        ],
      },
      {
        title: "Trabalhador App",
        url: "https://trabalhador.app/trabalhador",
        description:
          "An SPA to communicate with the manager who uses the calculato-folha",
        active: true,
        img: "assets/images/projects/trabalhador-app.png",
        stacks: ["devicon:vuejs", "devicon:javascript"],
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
        description:
          "This a challenge for interview for work in startup of itau to work in cubo",
        stacks: ["devicon:vuejs", "devicon:typescript", "logos:jest"],
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
        description:
          "I worked on the development team as Front-End on the core project (NectarCRM) using the angularjs framework.",
        stacks: ["devicon:angularjs", "devicon:javascript", "devicon:java"],
      },
      {
        title: "damoclesgil.github.io",
        url: "https://damoclesgil.github.io/",
        active: true,
        img: "assets/images/projects/damoclesgil.github.io.png",
        stacks: ["devicon:html5", "devicon:javascript", "devicon:css3"],
      },
      {
        title: "Personal Website Using VuePress",
        url: "https://github.com/damoclesgil/portfolio-vuepress",
        active: true,
        description:
          "This is a Portfolio using a vuepress and is basically a merge of vue and markdown.",
        stacks: ["devicon:vuejs", "devicon:markdown"],
        img: "assets/images/projects/vuepressblog.png",
      },
    ],
  },
  {
    year: "2018",
    projects: [
      {
        title: "Daxplace",
        url: "https://google.com.br",
        description: `
              Front-End EngineerFront-End Engineer
              Daxplace · Full-timeDaxplace · Full-time
              Apr 2018 - Sep 2019 · 1 yr 6 mosApr 2018 to Sep 2019 · 1 yr 6 mos
              Goiânia e Região, BrasilGoiânia e Região, Brasil
              In Daxplace I used Vue in the Front-end, and with Node.js and Laravel in the Back-end.

              Still, in the Daxplace Four, I had a bigger challenge, managing a team of Front-end developers. Yes, here I learned a lot about people and how they work.`,
        active: false,
        stacks: ["devicon:vuejs", "devicon:laravel", "devicon:wordpress"],
      },
      {
        title: "Realtrade",
        url: "https://realtradeclub.com.br",
        active: false,
        // img: 'assets/images/projects/realtrade/realtrade_01.jpg',
        stacks: ["devicon:vuejs", "devicon:laravel"],
      },
      {
        title: "Premyu",
        url: "https://premyu.com.br",
        active: false,
        img: "assets/images/projects/premyu/dashboard.png",
        stacks: ["devicon:vuejs", "devicon:laravel"],
      },
      {
        title: "Conexão Soluções Corporativas",
        url: "https://conexaopro.com.br/site/",
        description:
          "Development of new features to the site, backstage administration and other stuff for the product. Help to create the best UX/UI, using HTML5, CSS, JS and etc.",
        active: true,
        img: "assets/images/projects/conexao/homepage.png",
        stacks: [
          "devicon:php",
          "logos:codeigniter",
          "devicon:html5",
          "devicon:css3",
          "devicon:jquery",
        ],
      },
      {
        title: "APCAM",
        url: "https://apcam.org.br/home/institucional",
        active: true,
        img: "assets/images/projects/apcam.org.br.jpg",
        description: `
        The Association of Breast Cancer Patients - APCAM is a philanthropic, non-profit entity that survives on donations, activities to raise financial resources carried out by the Association's patients and collaborators, as well as research projects developed by researchers from the Network Brazilian Research Institute in Mastology, belonging to the Mastology Program - HC/UFG.
        `,
        stacks: [
          "devicon:php",
          "logos:codeigniter",
          "devicon:html5",
          "devicon:css3",
          "devicon:jquery",
        ],
      },
      {
        title: "Infotech Goianésia",
        url: "https://infotechgoianesia.com.br/",
        active: true,
        img: "assets/images/projects/www.infotechgoianesia.com.br.jpg",
        description:
          "A website using nuxt.js to promote an internet provider in Goianésia and nearby regions.",
        stacks: ["logos:nuxt"],
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
        stacks: ["devicon:wordpress", "devicon:jquery"],
      },
      {
        title: "Favorites Link",
        url: "https://github.com/damoclesgil/favorites-links",
        active: true,
        description: `This a an repo with my favorites that contain links that I find useful in my daily life for development`,
        stacks: ["devicon:markdown"],
      },
      {
        title: "Boilerplate website",
        url: "https://github.com/damoclesgil/boilerplate-website",
        active: true,
        description: `This is a an repo with my boilerplate for constructing an website static`,
        stacks: [
          "devicon:html5",
          "devicon:css3",
          "devicon:javascript",
          "devicon:webpack",
        ],
      },
      {
        title: "Actuar Website",
        url: "https://actuar.com/",
        active: true,
        description: `I worked on many fronts, from developing email marketing, setting up google adwords, creating and maintaining websites and web applications and doing customer service on social networks.`,
        img: "assets/images/projects/actuar.com.jpg",
        stacks: ["devicon:html5", "devicon:css3", "devicon:jquery"],
      },
      {
        title: "Actuar App",
        url: "https://actuar.com/",
        active: true,
        description: `This is a SPA using Angular for help the gyms in management.`,
        img: "assets/images/projects/actuar/dashboard.png",
        stacks: ["devicon:angular", "devicon:typescript"],
      },
      {
        title: "Trei.no",
        url: "https://trei.no/",
        active: true,
        img: "assets/images/projects/treino/treino.png",
        description: `An app for helping students training in gyms`,
        stacks: ["devicon:ionic", "devicon:typescript"],
      },
      {
        title: "Afig",
        url: "https://www.afig.com.br/",
        stacks: ["devicon:angular", "devicon:javascript"],
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
    year: "2015",
    projects: [
      {
        title: "Information Technology Management",
        active: false,
        url: "http://www.go.senac.br/faculdade/site/",
        description: `
          I am studying Information Technology Management at the SENAC - Faculty of Technology, Goiás. Duration: 2015-2017
          `,
      },
    ],
  },
  {
    year: "2014",
    projects: [
      {
        title: "Web Designer",
        active: false,
        description: `
          I am graduated in web designer by the technical school called "MCTech". Duration: 2014-2016
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
