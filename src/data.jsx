import { v4 as randomId } from 'uuid';
import indatabet from "./assets/img/indatabet.webp";
import editor from "./assets/img/editor.webp";
import shoppay from "./assets/img/shoppay.webp";
import nifter from "./assets/img/nifter.webp";
import gastro_chef from "./assets/img/gastro_chef.webp";
import cat_energy from "./assets/img/cat_energy.webp";
import inkom from "./assets/img/inkom.webp";
import dessert from "./assets/img/dessert.webp";
import react_admin_dashbord from "./assets/img/react_admin_dashbord.webp";
import admin_dashbord from "./assets/img/admin_dashbord.webp";
import arc_vector from "./assets/img/arc_vector.webp";
import just_egg from "./assets/img/just_egg.webp";
import tropical_kiwi_mix from "./assets/img/tropical_kiwi_mix.webp";
import orange from "./assets/img/orange.webp";

export const data = [
  {
    id: randomId(),
    link: {
      href: "https://mern-shoppay.netlify.app"
    },
    img: {
      src: shoppay,
      alt: "ShopPay"
    },
    title: {
      name: "MERN fullstack application",
      attr: "MERN fullstack application"
    },
    tags: [
      {
        name: "#mern",
      },
    ],
  },
  {
    id: randomId(),
    link: {
      href: "https://indatabet.com/"
    },
    img: {
      src: indatabet,
      alt: "Indatabet"
    },
    title: {
      name: "E-commercial website",
      attr: "E-commercial website"
    },
    tags: [
      {
        name: "#e-commercial",
      },
    ],
  },
  {
    id: randomId(),
    link: {
      href: "https://alexanderokhotnichenko.github.io/landing-page-nifter/"
    },
    img: {
      src: nifter,
      alt: "NFT Nifter"
    },
    title: {
      name: "Landing Page NFT Nifter",
      attr: "Landing Page NFT Nifter"
    },
    tags: [
      {
        name: "#landing",
      },
    ],
  },
  {
    id: randomId(),
    link: {
      href: "https://alexanderokhotnichenko.github.io/gastro-chef-v2/"
    },
    img: {
      src: gastro_chef,
      alt: "Gastro Chef"
    },
    title: {
      name: "Landing Page Gastro Chef",
      attr: "Landing Page Gastro Chef"
    },
    tags: [
      {
        name: "#landing",
      },
    ],
  },
  {
    id: randomId(),
    link: {
      href: "https://alexanderokhotnichenko.github.io/cat-foot-landing/"
    },
    img: {
      src: cat_energy,
      alt: "Cat Energy"
    },
    title: {
      name: "Landing Page Cat Energy",
      attr: "Landing Page Cat Energy"
    },
    tags: [
      {
        name: "#multipage",
      },
    ],
  },
  {
    id: randomId(),
    link: {
      href: "https://alexanderokhotnichenko.github.io/inkom-landing/"
    },
    img: {
      src: inkom,
      alt: "Inkom"
    },
    title: {
      name: "Landing Page Inkom",
      attr: "Landing Page Inkom"
    },
    tags: [
      {
        name: "#landing",
      },
    ],
  },
  {
    id: randomId(),
    link: {
      href: "https://alexanderokhotnichenko.github.io/edit-image/"
    },
    img: {
      src: editor,
      alt: "editor"
    },
    title: {
      name: "Photo editor",
      attr: "Photo editor"
    },
    tags: [
      {
        name: "#editor",
      },
    ],
  },
  {
    id: randomId(),
    link: {
      href: "https://alexanderokhotnichenko.github.io/react-vite-dashbord/"
    },
    img: {
      src: react_admin_dashbord,
      alt: "React Admin Dashbord"
    },
    title: {
      name: "React Admin Dashbord",
      attr: "React Admin Dashbord"
    },
    tags: [
      {
        name: "#dashbord",
      },
    ],
  },
  {
    id: randomId(),
    link: {
      href: "https://alexanderokhotnichenko.github.io/admin-dashboard/"
    },
    img: {
      src: admin_dashbord,
      alt: "Admin Dashbord"
    },
    title: {
      name: "Admin Dashbord",
      attr: "Admin Dashbord"
    },
    tags: [
      {
        name: "#dashbord",
      },
    ],
  },
];