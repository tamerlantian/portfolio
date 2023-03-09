import landing1 from "../assets/landing1.png";
import {
  DiReact,
  DiJavascript1,
  DiMongodb,
  DiLinux,
  DiNodejsSmall,
} from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiTryhackme, SiCodewars, SiCsharp } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { TfiWorld } from "react-icons/tfi";
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

export const socialData = [
  {
    tag: "twitter",
    icon: <FiTwitter />,
    link: "https://twitter.com/2301_ian",
  },
  {
    tag: "github",
    icon: <FiGithub />,
    link: "https://github.com/tamerlantian",
  },
  {
    tag: "linkedin",
    icon: <FiLinkedin />,
    link: "https://www.linkedin.com/in/sebastianhoyos0123/",
  },
  {
    tag: "instagram",
    icon: <FiInstagram />,
    link: "https://www.instagram.com/sebas_tian.08/",
  },
];

export const skills = [
  {
    tag: "React",
    icon: <DiReact />,
  },
  {
    tag: "Javascript",
    icon: <DiJavascript1 />,
  },
  {
    tag: "NodeJS",
    icon: <DiNodejsSmall />,
  },
  {
    tag: "Linux",
    icon: <DiLinux />,
  },
  {
    tag: "Java",
    icon: <FaJava />,
  },
  {
    tag: "MongoDB",
    icon: <DiMongodb />,
  },
  {
    tag: "MySQL",
    icon: <GrMysql />,
  },
  {
    tag: "Tailwind",
    icon: <SiTailwindcss />,
  },
  {
    tag: "C Sharp",
    icon: <SiCsharp />,
  },
];

export const projects = [
  {
    name: "Mascota Feliz",
    image: landing1,
    description: "",
    tools: ["React", "Tailwind", "Loopback", "MongoDB"],
    githubLink: "",
    liveLink: "",
  },
  {
    name: "Portfolio",
    image: landing1,
    description: "",
    tools: ["React", "Tailwind"],
    githubLink: "",
    liveLink: "",
  },
];

export const hobbies = [
  {
    title: "Codewars",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ab, nam ut voluptatem vero eum distinctio temporibus nisi. Dolorem hic suscipit sit rem iure temporibus sapiente mollitia, possimus blanditiis odit!",
    icon: <SiCodewars />,
    website: {
      icon: <TfiWorld />,
      link: "https://www.codewars.com/users/ian_2398",
    },
  },
  {
    title: "Tryhackme",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, quasi at earum nobis doloremque consectetur consequuntur repudiandae perspiciatis aperiam quas. Mollitia necessitatibus dolorum rerum eum distinctio, rem repellat provident optio.",
    icon: <SiTryhackme />,
    website: {
      icon: <TfiWorld />,
      link: "https://tryhackme.com/p/tamerlan",
    },
  },
  {
    title: "Trywilco",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid architecto corporis soluta quas voluptatibus consequatur quia dolorem natus ipsum est libero assumenda illum vero in nemo, id adipisci possimus nesciunt?",
    icon: <VscCode />,
    website: {
      icon: <TfiWorld />,
      link: "https://app.wilco.gg/portfolio/tamerlantian",
    },
  },
];

export const navbarItems = [
  {
    link: "#about",
    name: "About",
  },
  {
    link: "#projects",
    name: "Projects",
  },
  {
    link: "#hobbies",
    name: "Hobbies",
  },
  {
    link: "#contact",
    name: "Contact",
  },
];
