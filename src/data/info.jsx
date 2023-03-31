import { useTranslation } from "react-i18next";
import projectOneImage from "../assets/mascotaFeliz.png";
import portfolioImage from "../assets/portfolio.png";
import { DiReact, DiJavascript1, DiLinux } from "react-icons/di";
import { SiTailwindcss, SiGit } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiCodewars } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { BiCodeBlock } from "react-icons/bi ";
import {
  FiTwitter,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiUser,
} from "react-icons/fi";

export const info = () => {
  const [t] = useTranslation("global");
  return {
    socialData: [
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
    ],
    navbarItems: [
      {
        link: "#about",
        name: t("navbar.about"),
      },
      {
        link: "#projects",
        name: t("navbar.projects"),
      },
      {
        link: "#hobbies",
        name: t("navbar.hobbies"),
      },
      {
        link: "#contact",
        name: t("navbar.contact"),
      },
    ],
    projects: [
      {
        name: "Vetpet",
        image: projectOneImage,
        alt: "mascota feliz app image",
        description: t("projects.under-construction"),
        finished: false,
        tools: ["React", "Redux Toolkit", "Tailwind", "Chakra UI"],
        githubLink: "https://github.com/tamerlantian/MascotaFeliz",
        liveLink: "",
      },
      {
        name: "Portfolio",
        image: portfolioImage,
        alt: "portfolio app image",
        description: t("projects.description-2"),
        finished: true,
        tools: ["React", "Tailwind"],
        githubLink: "https://github.com/tamerlantian/portfolio",
        liveLink: "https://main--elaborate-bonbon-db4b47.netlify.app/",
      },
    ],
    hobbies: [
      {
        title: "Codewars",
        description: t("hobbies.card-description-1"),
        icon: <SiCodewars />,
        website: {
          icon: <FiUser />,
          link: "https://www.codewars.com/users/ian_2398",
        },
      },
      {
        title: "Frontendmentor",
        description: t("hobbies.card-description-2"),
        icon: <BiCodeBlock />,
        website: {
          icon: <FiUser />,
          link: "https://www.frontendmentor.io/profile/tamerlantian",
        },
      },
      {
        title: "Trywilco",
        description: t("hobbies.card-description-3"),
        icon: <VscCode />,
        website: {
          icon: <FiUser />,
          link: "https://app.wilco.gg/portfolio/tamerlantian",
        },
      },
    ],
  };
};

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
    tag: "Linux",
    icon: <DiLinux />,
  },
  {
    tag: "Java",
    icon: <FaJava />,
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
    tag: "Git",
    icon: <SiGit />,
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
