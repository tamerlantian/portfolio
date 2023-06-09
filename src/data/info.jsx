import { useTranslation } from "react-i18next";
import projectOneImage from "../assets/vetpet_preview.png";
import portfolioImage from "../assets/portfolio_preview.png";
import { DiReact, DiJavascript1, DiLinux } from "react-icons/di";
import { SiTailwindcss, SiGit, SiNodedotjs, SiChakraui, SiRedux } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiCodewars, SiMongodb } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { BiCodeBlock } from "react-icons/bi";
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
        name: "Full-Stack Vetpet",
        image: projectOneImage,
        alt: "vetpet landing preview image",
        description: t("projects.description-1"),
        finished: true,
        tools: [
          "React",
          "Redux Toolkit",
          "Tailwind",
          "Chakra UI",
          "Express",
          "MongoDB",
        ],
        githubLink: "https://github.com/tamerlantian/vetpet",
        liveLink: "https://backend-vetpet-production.up.railway.app/",
      },
      {
        name: "Portfolio",
        image: portfolioImage,
        alt: "portfolio preview image",
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
    tag: "Javascript",
    icon: <DiJavascript1 />,
  },
  {
    tag: "React",
    icon: <DiReact />,
  },
  {
    tag: "Redux TK",
    icon: <SiRedux />
  },
  {
    tag: "Nodejs",
    icon: <SiNodedotjs />,
  },
  {
    tag: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    tag: "MySQL",
    icon: <GrMysql />,
  },
  {
    tag: "Chakra IU",
    icon: <SiChakraui />,
  },
  {
    tag: "Linux",
    icon: <DiLinux />,
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
