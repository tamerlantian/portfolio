import landing1 from "../assets/landing1.png";
import landing2 from "../assets/landing2.png";
import landing3 from "../assets/landing3.jpg";
import PortfolioImage from "../assets/portfolio.png";
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
    tag: "MongoDB",
    icon: <DiMongodb />,
  },
  {
    tag: "Java",
    icon: <FaJava />,
  },
  {
    tag: "Tailwind",
    icon: <SiTailwindcss />,
  },
  {
    tag: "MySQL",
    icon: <GrMysql />,
  },
];

export const projects = [
  {
    name: "Tier App",
    image: landing1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, fugiat illo molestias voluptate id facilis, repudiandae sit praesentium aut adipisci alias.",
    tools: ["React", "Tailwind", "Express", "MongoDB"],
    githubLink: "",
    liveLink: "",
  },
  {
    name: "Pet App",
    image: landing2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, fugiat illo molestias voluptate id facilis, repudiandae sit praesentium aut adipisci alias.",
    tools: ["React", "Bootstrap", "NodeJS", "MongoDB"],
    githubLink: "",
    liveLink: "",
  },
  {
    name: "Clock App",
    image: landing3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, fugiat illo molestias voluptate id facilis, repudiandae sit praesentium aut adipisci alias.",
    tools: ["React", "Styled Components", "Express", "MySQL"],
    githubLink: "",
    liveLink: "",
  },
];

export const hobbies = [
  {
    title: "Codewars",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ab, nam ut voluptatem vero eum distinctio temporibus nisi. Dolorem hic suscipit sit rem iure temporibus sapiente mollitia, possimus blanditiis odit!",
    image: "https://www.codewars.com/users/ian_2398/badges/large",
  },
  {
    title: "Tryhackme",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, quasi at earum nobis doloremque consectetur consequuntur repudiandae perspiciatis aperiam quas. Mollitia necessitatibus dolorum rerum eum distinctio, rem repellat provident optio.",
    image: "https://tryhackme-badges.s3.amazonaws.com/tamerlan.png",
  },
  {
    title: "TryWilco",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid architecto corporis soluta quas voluptatibus consequatur quia dolorem natus ipsum est libero assumenda illum vero in nemo, id adipisci possimus nesciunt?",
    image: ""
  }
];