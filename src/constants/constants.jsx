import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiHostinger } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";

const navBar = [
  {
    name: "HOME",
    navLink: "home",
  },
  {
    name: "PROJECT",
    navLink: "project",
  },
  {
    name: "ABOUT ME",
    navLink: "aboutMe",
  },
  {
    name: "CONTACT ME",
    navLink: "contactMe",
  },
];

const frontendSkill = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    icon: <FaCss3 />,
  },
  {
    name: "Javascript",
    icon: <IoLogoJavascript />,
  },
  {
    name: "React JS",
    icon: <FaReact />,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    name: "Next JS",
    icon: <RiNextjsLine />,
  },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
  },
];

const backendSkill = [
  {
    name: "MongoDB",
    icon: <DiMongodb />,
  },
  {
    name: "My SQL",
    icon: <SiMysql />,
  },
  {
    name: "Node JS",
    icon: <FaNodeJs />,
  },
  {
    name: "Express JS",
    icon: <SiExpress />,
  },
  {
    name: "Amazon Web Service",
    icon: <FaAws />,
  },
  {
    name: "Hostinger",
    icon: <SiHostinger />,
  },
];

const techTools = [
  {
    name: "VS Code",
    icon: <VscVscode />,
  },
  {
    name: "Postman",
    icon: <SiPostman />,
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop />,
  },
  {
    name: "WordPress",
    icon: <FaWordpress />,
  },
];

const projectCardInfo = [
  {
    name: "Movie Rating App",
    img: project1,
    liveLink: "https://climaxweb.netlify.app/",
    codeLink: "https://github.com/Subhrojoti/Fandom-Webapp",
  },
  {
    name: "YouTube Web App",
    img: project2,
    liveLink: "https://utube-project-web.netlify.app/",
    codeLink: "https://github.com/Subhrojoti/YouTube-WebApp",
  },
  {
    name: "Aura Bazaar (Ecom Website)",
    img: project3,
    liveLink: "https://aurabazaar.in/",
    codeLink: "https://aurabazaar.in/",
  },
  {
    name: "CryptoCurrency Dashboard",
    img: project4,
    liveLink: "https://cryptonexhub.netlify.app/",
    codeLink: "https://github.com/Subhrojoti/CryptoCurrency-Dashboard",
  },
  {
    name: "Amazon UI Clone",
    img: project5,
    liveLink: "https://jungle-kart.netlify.app/",
    codeLink: "https://github.com/Subhrojoti/Amazon-UI-Clone",
  },
  {
    name: "Weather App",
    img: project6,
    liveLink: "https://atmosphere.netlify.app/",
    codeLink: "https://github.com/Subhrojoti/Weather-App",
  },
];

const socials = [
  {
    icon: <FaSquareGithub />,
    link: "https://github.com/Subhrojoti",
    name: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/subhrojoti-nag-459204283/",
    name: "Linkedin",
  },
  {
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@tubetalk007",
    name: "YouTube",
  },
];

export default frontendSkill;
export { backendSkill, techTools, projectCardInfo, navBar, socials };
