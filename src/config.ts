import type {
  CareerObjects,
  Site,
  SocialObjects,
  TechnologiesObjects,
} from "./types";

export const SITE: Site = {
  website: "https://damoclesgil.com.br", // replace this with your deployed domain
  author: "Dâmocles Gil Marçal",
  desc: "This a blog by a front-end engineer who likes anime, games, technologies, and travel around the world.",
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
  width: 210,
  height: 36,
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
    href: "https://www.linkedin.com/in/damoclesgil/",
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
    jobTitle: "Front-end Engineer",
    company: "Calculato",
    href: "https://www.calculato.com.br/",
    active: false,
    startDate: "2019-11-29",
  },
  {
    company: "NectarCRM",
    href: "https://nectarcrm.com.br/inicio/",
    active: false,
    jobTitle: "Front-end Engineer",
    startDate: "2019-09-01",
    endDate: "2019-11-01",
  },
  {
    company: "Daxplace",
    href: "https://nectarcrm.com.br/inicio/",
    active: false,
    jobTitle: "Full-stack developer",
    startDate: "2018-04-01",
    endDate: "2019-09-18",
  },
  {
    company: "Conexão Soluções Corporativas",
    href: "https://conexaopro.com.br/site/",
    active: false,
    jobTitle: "Web Designer",
    startDate: "2018-01-01",
    endDate: "2018-04-20",
  },
  {
    company: "Actuar Sistemas",
    href: "https://actuar.com/",
    active: false,
    jobTitle: "Web Developer",
    startDate: "2017-01-01",
    endDate: "2017-12-31",
  },
  {
    company: "Sage",
    href: "https://www.sage.com/pt-pt/",
    active: false,
    jobTitle: "Training and Deployment",
    startDate: "2016-01-01",
    endDate: "2016-10-20",
  },
];
export const SETUP_ITEMS = [
  {
    link: "https://www.kabum.com.br/produto/172068/gabinete-nzxt-h510-preto-fosco-mid-tower-lateral-de-vidro-atx-sem-fonte-2-coolers-ca-h510b-b1",
    img: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/172068/Gabinete-NZXT-H510-Preto-Fosco-Mid-Tower-Lateral-de-Vidro-ATX-Sem-Fonte-2-Coolers-CA-H510B-B1_1694528294_gg.jpg",
    alt: "Gabinete",
    name: "Gabinete Gamer NZXT H510 Preto, Mid Tower, Vidro Temperado.",
  },
  {
    link: "https://www.kabum.com.br/produto/241048/processador-intel-core-i7-12700k-3-6ghz-5-0ghz-max-turbo-12-nucleos-20-threads-lga-1700-video-integrado-bx8071512700k?gad_source=1&gclid=CjwKCAiA29auBhBxEiwAnKcSqvj0sIKdSyVsXz1Hf9aovmJnGmFbdps7E8lBhkVohVhNOV_ksC3F7RoC3_4QAvD_BwE",
    img: "https://images.kabum.com.br/produtos/fotos/241048/processador-intel-core-i7-12700k-cache-25mb-3-6ghz-5-0ghz-max-turbo-lga-1700-bx8071512700k_1634830258_gg.jpg",
    alt: "Processador",
    name: "Processador Intel 12th Gen Intel(R) Core(TM) i7-12700K 3.60 GHz",
  },
  {
    link: "https://www.kabum.com.br/produto/484781/memoria-lexar-ares-rgb-32gb-2x16gb-5600mhz-ddr5-cl32-preto-ld5au016g-r5600gdga?gad_source=1&gclid=CjwKCAiA29auBhBxEiwAnKcSqqpITgU_E00KRaAMGR4_DQkCLWhUMVvw6HGKFxaJZY55GxfhWx4j5hoCLhIQAvD_BwE",
    img: "https://images.kabum.com.br/produtos/fotos/484781/memoria-lexar-ares-rgb-16gb-5600mhz-ddr5-cl32-preto-ld5au016g-r5600gdga_1703608712_gg.jpg",
    alt: "Memória RAM",
    name: "Memória Lexar Ares, RGB, 32GB (2x16GB), 5600MHz, DDR5",
  },
  {
    link: "https://www.pichau.com.br/placa-de-video-zotac-geforce-rtx-3070-ti-8gb-gddr6x-256-bit-zt-a30710q-10p?gad_source=1&gclid=CjwKCAiA29auBhBxEiwAnKcSqmdIUqIqn2B5K5abQelvCBuGyeaVJ07fkvBhQQpdw57rWrtGJjOY6xoCTrsQAvD_BwE",
    img: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/z/t/zt-a30710q-10p4.jpg",
    alt: "Placa de Vídeo",
    name: "Placa de Vídeo: NVIDIA® GeForce RTX 3070 Ti",
  },
  {
    link: "https://www.pichau.com.br/placa-mae-gigabyte-z790-aorus-elite-ddr5-socket-lga1700-atx-chipset-intel-z790-z790-aorus-elite?gad_source=1&gclid=CjwKCAiA29auBhBxEiwAnKcSqnDWMW1J5hS8wyjJm5c3d0tYFIYhuG4m8pfhwfrX4pqbLePI-fqsRRoCT-AQAvD_BwE",
    img: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/z/7/z790-aorus-elite1.jpg",
    alt: "Placa Mãe",
    name: "Placa Mãe z690 Aorus Elite DDR5 | PCLe5",
  },
  {
    link: "https://www.kabum.com.br/produto/111161/monitor-gamer-aoc-hero-27-full-hd-wide-144-hz-1ms-ips-hdmi-e-vga-g-sync-ajuste-de-angulo-27g2-bk?gad_source=1&gclid=CjwKCAiA29auBhBxEiwAnKcSqt6x3h6QWDXQfCvbMnYCT4n-8R01QKPPj3VklQNNC3FazUD4ZTzevhoCXwIQAvD_BwE",
    img: "https://images.kabum.com.br/produtos/fotos/111161/monitor-gamer-aoc-hero-w-led-27-widescreen-fhd-ips-hdmi-displayport-g-sync-compatible-144hz-1ms-altura-ajustavel-27g2-bk_1584370236_gg.jpg",
    alt: "Monitor Gamer AOC",
    name: "Monitor Gamer AOC Hero 27 Full HD, 144 Hz - G-SYNC e Free-Sync",
  },
  {
    link: "https://pt.dhgate.com/product/royal-kludge-rk919-108-keys-usb-wired-keyboard/636280132.html",
    img: "https://www.dhresource.com/webp/m/0x0/f2/albu/g15/M00/54/B3/rBVa3l_8zOGAIpUVAANPWPePuwI172.jpg",
    alt: "TECLADO ROYAL KLUDGE RK919",
    name: "Teclado ROYAL KLUDGE RK919",
  },
  {
    link: "https://http2.mlstatic.com/D_NQ_NP_832123-MLU74074433476_012024-O.webp",
    img: "https://http2.mlstatic.com/D_NQ_NP_832123-MLU74074433476_012024-O.webp",
    alt: "Mouse",
    name: "Mouse Delux-M800 PRO PAW3370",
  },
  {
    link: "https://www.kabum.com.br/produto/263077/headset-gamer-sem-fio-logitech-g435-lightspeed-e-bluetooth-dolby-atmos-usb-pc-ps4-ps5-mobile-drivers-40mm-preto-981-001049?gad_source=1&gclid=CjwKCAiA29auBhBxEiwAnKcSqlgZX12qYiJBrQGgOxyb9S_ha3J4UKeyZJ6WrrxrxZZet5hUr5AcehoCgbkQAvD_BwE",
    img: "https://images.kabum.com.br/produtos/fotos/263077/headset-gamer-sem-fio-logitech-g435-lightspeed-e-bluetooth-dolby-atmos-usb-pc-ps4-ps5-mobile-drivers-40mm-preto-981-001049_1636554612_gg.jpg",
    alt: "Headset",
    name: "Headset Logitech G435 LIGHTSPEED",
  },
  {
    link: "https://www.geniodesks.com.br/mesa-regulagem-eletrica/mesa-com-regulagem-de-altura-geniodesk-pro/produto-mesa-com-regulagem-de-altura-geniodesk-pro?fee=4&fep=337&gad_source=1&gclid=CjwKCAiA29auBhBxEiwAnKcSqlZ51lCSNFHxqioZOuTvvAlrzwpBXUA3jTSiq4Pfoyvdfxu2_LdQTRoCsm0QAvD_BwE",
    img: "https://www.geniodesks.com.br/media/catalog/product/cache/1/image/1200x/af097278c5db4767b0fe9bb92fe21690/a/c/acionador-_web_-_geniodesk_8.jpg",
    alt: "Mesa GenioDesk PRO ",
    name: "Mesa GenioDesk PRO ",
  },
  {
    link: "https://m.dxracer.com.br/cadeira-dxracer-f-series-p08nw-p2426355",
    img: "https://ds92okzpvwldu.cloudfront.net/Custom/Content/Products/24/26/2426355_cadeira-dxracer-f-series-p08nw_m3_637878076946363675.png",
    alt: "Cadeira",
    name: "Cadeira DXRacer Gaming f-series",
  },
  {
    link: "https://www.mercadolivre.com.br/disco-solido-interno-netac-nt01nv7000-2t0-e4x-2tb/p/MLB20673209?pdp_filters=category:MLB1672#searchVariation=MLB20673209&position=1&search_layout=grid&type=product&tracking_id=4d78ceb4-741a-4c5a-b419-81332ef26d79",
    img: "https://http2.mlstatic.com/D_NQ_NP_828291-MLA74134565746_012024-O.webp",
    alt: "Armazenamento",
    name: "SSD Netac NVme 2TB",
  },

  {
    link: "https://www.amazon.com.br/Microfone-HyperX-QuadCast-Preto-Vermelho/dp/B07NZZZ746/ref=asc_df_B07NZZZ746/?tag=googleshopp00-20&linkCode=df0&hvadid=379816334777&hvpos=&hvnetw=g&hvrand=10941354686132554007&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9101794&hvtargid=pla-668583786414&psc=1&mcid=8d9c689ac96f3f7aba2763fbc0228988",
    img: "https://m.media-amazon.com/images/I/71fvNPxUldL._AC_SY879_.jpg",
    alt: "Microfone",
    name: "HyperX Microfone Gamer QuadCast",
  },
  {
    link: "https://produto.mercadolivre.com.br/MLB-2023753268-suporte-articulado-p-microfones-hyperx-quadcast-e-solocast-_JM",
    img: "https://http2.mlstatic.com/D_NQ_NP_665040-MLB53610704816_022023-O.webp",
    alt: "Suporte Articulado",
    name: "Suporte Articulado P/ Microfones Hyperx Quadcast E Solocast",
  },
  {
    link: "https://www.pichau.com.br/fonte-xpg-core-reactor-750w-80-plus-gold-full-modular-preto-corereactor750g-bkcbr?gad_source=1&gclid=CjwKCAiA29auBhBxEiwAnKcSqhN22nVBW9Nlj-bLukzsjCrV4dH0qMTCuSbPUDNWME6fBpbTXw1iYhoCrNcQAvD_BwE",
    img: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/c/o/corereactor750g-bkcbr.jpg",
    alt: "Fonte",
    name: "Fonte: XPG Core Reactor, 850W, 80 Plus Gold Modular",
  },
  {
    link: "https://www.amazon.com.br/dp/B0BGT56NDQ?ref=ppx_yo2ov_dt_b_product_details&th=1",
    img: "https://m.media-amazon.com/images/I/511Y7Yr9EEL._AC_SX679_.jpg",
    alt: "Webcam Full HD Logitech BRIO 500 Branco",
    name: "Webcam Full HD Logitech BRIO 500 Branco",
  },
];

export const TECHNOLOGIES: TechnologiesObjects = [
  {
    stackName: "Vue",
    href: "https://vuejs.org/",
    imgSrc: "https://router.vuejs.org/logo.svg",
  },
  {
    stackName: "Typescript",
    href: "https://www.typescriptlang.org/",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png?20210506173343",
  },
  {
    stackName: "Vite",
    href: "https://vitejs.dev/",
    imgSrc: "https://vitejs.dev/logo.svg",
  },
  {
    stackName: "Pinia",
    href: "https://pinia.vuejs.org",
    imgSrc: "https://pinia.vuejs.org/logo.svg",
  },
  {
    stackName: "NEXTJS",
    href: "https://nextjs.org/",
    imgSrc:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  },
  {
    stackName: "Tailwindcss",
    href: "https://tailwindcss.com/",
    imgSrc:
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    stackName: "GRAPHQL",
    href: "https://graphql.org/",
    imgSrc:
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/graphql/graphql-plain.svg",
  },
  {
    stackName: "Apollo",
    href: "https://www.apollographql.com/",
    imgSrc:
      "https://static-00.iconduck.com/assets.00/apollo-icon-512x512-xs5t5onq.png",
  },
  {
    stackName: "Astro Build",
    href: "https://docs.astro.build/en/getting-started/",
    imgSrc:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/astro/astro-original.svg",
  },
  {
    stackName: "Strapi.io",
    href: "https://strapi.io/",
    imgSrc:
      "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/f154aaf7-96dd-4d9e-8ef6-05259f5a2b31/Strapi-Monogram/w=1920,quality=80",
  },
  {
    stackName: "MDX",
    href: "https://mdxjs.com//",
    imgSrc: "https://www.svgrepo.com/show/373833/mdx.svg",
  },
];
