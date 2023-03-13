import projectOneImage from "../assets/mascotaFeliz.png";
import portfolioImage from "../assets/portfolio.png";
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
import { SiCodewars, SiCsharp } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { BiCodeBlock } from "react-icons/bi ";
import {
  FiTwitter,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiUser,
} from "react-icons/fi";

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
    image: projectOneImage,
    alt: "mascota feliz app image",
    description: "Under construction...",
    finished: false,
    tools: ["React", "Tailwind", "Loopback", "MongoDB"],
    githubLink: "",
    liveLink: "",
  },
  {
    name: "Portfolio",
    image: portfolioImage,
    alt: "portfolio app image",
    description:
      "A web app for visualizing more information about me. Here you can find my skills and hobbies.",
    finished: true,
    tools: ["React", "Tailwind"],
    githubLink: "",
    liveLink: "",
  },
];

export const hobbies = [
  {
    title: "Codewars",
    description:
      "Codewars is an online platform that provides programming challenges. It's a great platform for improving programming skills and learning new programming languages.",
    icon: <SiCodewars />,
    website: {
      icon: <FiUser />,
      link: "https://www.codewars.com/users/ian_2398",
    },
  },
  {
    title: "Frontendmentor",
    description: "Frontend Mentor provides web design challenges for users to practice and improve their front-end development skills.",
    icon: <BiCodeBlock />,
    website: {
      icon: <FiUser />,
      link: "https://www.frontendmentor.io/profile/tamerlantian",
    },
  },
  {
    title: "Trywilco",
    description:
      "Wilco provides a fantasy company with its own production environment that simulates lifelike challenges. It's like a flight simulator for developers, where you practice and develop engineering skills",
    icon: <VscCode />,
    website: {
      icon: <FiUser />,
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
