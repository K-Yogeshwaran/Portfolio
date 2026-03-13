
import Freshathon from "./assets/Freshathon Image.jpg";
import KalamAwards from "./assets/Kalam Awards Image.jpg";
import FiftyDayBadge from "./assets/Leetcode 50 day badge.png";
import HundredDayBadge from "./assets/Leetcode 100 day badge.png";
import AgriHackathon from "./assets/Agri Hackathon Image.jpeg";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaJava
} from "react-icons/fa";


import {
    SiCplusplus,
    SiPython
} from "react-icons/si";

import {
    FaNodeJs
} from "react-icons/fa";

import {
    SiSpringboot
} from "react-icons/si";


import {
    SiMysql,
    SiMongodb
} from "react-icons/si";


import {
    FaGithub,
    FaGitAlt
} from "react-icons/fa";

import { VscCode } from "react-icons/vsc";

import { FaBolt, FaAward, FaFire, FaTrophy } from "react-icons/fa";


export const emailId = "yogeshkuberan111@gmail.com";

export const github = {
    id: "@K-Yogeshwaran",
    link: "https://github.com/K-Yogeshwaran"
}


export const noOfProjects = 3;

export const techStacks = [

    {
        category: "Frontend",
        items: [
            {
                name: "HTML",
                icon: FaHtml5
            },
            {
                name: "CSS",
                icon: FaCss3Alt
            },
            {
                name: "Javascript",
                icon: FaJs
            },
            {
                name: "React",
                icon: FaReact
            }
        ]
    },
    {
        category: "Languages",
        items: [
            {
                name: "Java",
                icon: FaJava
            },
            {
                name: "C++",
                icon: SiCplusplus
            },
            {
                name: "Python",
                icon: SiPython
            }
        ]
    },
    {
        category: "Backend",
        items: [
            {
                name: "Springboot",
                icon: SiSpringboot
            },
            {
                name: "Node JS",
                icon: FaNodeJs
            },
        ]
    },
    {
        category: "Database",
        items: [
            {
                name: "MySql",
                icon: SiMysql
            },
            {
                name: "MongoDB",
                icon: SiMongodb
            }
        ]
    },
    {
        category: "Tools",
        items: [
            {
                name: "Git",
                icon: FaGitAlt
            },
            {
                name: "Github",
                icon: FaGithub
            },
            {
                name: "Visual Studio Code",
                icon: VscCode
            }
        ]
    }

]


export const projects = [
    {
        name: "Electro Mart",
        description: "An E-Commerce Website that helped me master the key nuances of developing a website",
        github: "https://github.com/K-Yogeshwaran/ElectroMart-E-Commerce-Website",
        link: "#",
        techStack: ["React JS", "Node JS", "Express JS", "MongoDB"]
    },
    {
        name: "Course Registration System",
        description: "An web application that helped me master the Java Backend Development",
        github: "https://github.com/K-Yogeshwaran/Course-Registration-System",
        link: "#",
        techStack: ["React JS", "Springboot", "MySQL"]
    },
    {

        name: "Intellifarm",
        description: "A mobile application build to increase the transparency in the food supply chain",
        github: "#",
        link: "#",
        techStack: ["Flutter", "Python", "Flask", "Firebase"]
    }
]

export const certifications = [
    {
        title: "C Programming Certificate",
        source: "IIT Bombay",
        period: "November 2024",
        link: "https://drive.google.com/file/d/1uk3Mh1nb7misGOwQNe80wtN0KppT0sdf/view?usp=drive_link"
    },
    {
        title: "Java Programming",
        source: "Udemy",
        period: "October 2025",
        link: "#"
    },
    {
        title: "Web Development Using React Js",
        source: "Udemy",
        period: "November 2025",
        link: "https://drive.google.com/file/d/1eBtbFdgviy2WHMKVImlrIJwqXwozsl1e/view?usp=drive_link"
    },
    {
        title: "Agentforce Specialist",
        source: "Salesforce",
        period: "December 2025",
        link: "https://drive.google.com/file/d/1iXrXId-YwJyXF1zaV-5ow6FzkPU4l5v3/view?usp=drive_link"
    },
]

export const achievements = [
    {
        title: "2nd Prize – Agri Tech Hardware Hackathon 2026",
        category: "AgriTech Hardware Innovation",
        description:
            "Secured second place in the Agri Tech Hardware Hackathon 2026 organized by Founderpassion Foundation. Collaborated with a team to design and develop an innovative agriculture-focused hardware solution addressing real-world farming challenges through technology and smart systems.",
        period: "Feb 2026",
        image: AgriHackathon,
        icon: FaSeedling,
        iconColor: "#4CAF50",
        iconBgColor: "rgba(76, 175, 80, 0.15)"
    },
    {
        title: "Runner Up – Freshathon 2024",
        category: "Project Presentation",
        description:
            "Secured second place in an intra-college project presentation competition by developing and presenting an innovative, real-world focused solution, evaluated by a panel of industry and academic experts.",
        period: "May 2024",
        image: Freshathon,
        icon: FaBolt,
        iconColor: "#FFD166",
        iconBgColor: "rgba(255, 209, 102, 0.15)"

    },
    {
        title: "Dr. Kalam’s Young Achiever Award 2025",
        category: "Award",
        description:
            "Honored with statewide recognition for building socially impactful technology solutions, awarded by the World Youth Federation for innovation, creativity, and contribution to society.",
        period: "October 2024",
        image: KalamAwards,
        icon: FaAward,
        iconColor: "#FFD700",
        iconBgColor: "rgba(255, 215, 0, 0.15)"

    },
    {
        title: "LeetCode 50-Day Consistency Badge",
        category: "Milestone",
        description:
            "Earned the 50-day LeetCode consistency badge by maintaining a daily problem-solving streak, strengthening core data structures, algorithms, and logical thinking skills.",
        period: "September 2024",
        image: FiftyDayBadge,
        icon: FaFire,
        iconColor: "#FF6B35",
        iconBgColor: "rgba(255, 107, 53, 0.15)"
    },
    {
        title: "LeetCode 100-Day Consistency Badge",
        category: "Milestone",
        description:
            "Achieved the 100-day LeetCode consistency milestone, demonstrating strong discipline, perseverance, and a long-term commitment to mastering problem-solving and algorithmic thinking.",
        period: "December 2024",
        image: HundredDayBadge,
        icon: FaFire,
        iconColor: "#4D96FF",
        iconBgColor: "rgba(77, 150, 255, 0.15)"
    }
];
