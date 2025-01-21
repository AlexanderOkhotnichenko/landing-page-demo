import { v4 as randomId } from 'uuid';
import indatabet from "./assets/img/indatabet.webp";
import editor from "./assets/img/editor.webp";
import shoppay from "./assets/img/shoppay.webp";
import nifter from "./assets/img/nifter.webp";
import gastro_chef from "./assets/img/gastro_chef.webp";
import react_admin_dashbord from "./assets/img/react_admin_dashbord.webp";
import admin_dashbord from "./assets/img/admin_dashbord.webp";
import arc_vector from "./assets/img/arc_vector.webp";
import just_egg from "./assets/img/just_egg.webp";
import socket_live_chat from "./assets/img/socket_live_chat.webp";

export const data = [
  {
    id: randomId(),
    link: {
      href: "https://socket-live-chat.netlify.app"
    },
    img: {
      src: socket_live_chat,
      alt: "Socket Live Chat"
    },
    title: {
      name: "MERN-Socket full stack application",
      attr: "MERN-Socket full stack application"
    },
  },
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
      name: "MERN full stack application",
      attr: "MERN full stack application"
    },
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
  },
];