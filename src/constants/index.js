import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  tesla,
  shopify,
  ppss,
  jobit,
  tripguide,
  threejs,
  pacelogo,
  bit,
  images,
  freelancer,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cpp Programmer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Designer (Freelance)",
    company_name: "Self-Employed",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Present",
    points: [
      "Designed and developed a responsive website for a private client.",
      "Used HTML, CSS, JavaScript, and Tailwind CSS to create clean and modern UI.",
      "Focused on user-friendly layouts, accessibility, and cross-device compatibility.",
      "Delivered a fully functional website tailored to client requirements.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "PaceWisdom Solutions",
    icon: pacelogo,
    iconBg: "#383E56",
    date: "Jun 2025 - Aug 2025",
    points: [
      "Contributed to ConvoxAI, an AI-driven calling agent enhancing customer communication.",
      "Developed and maintained scalable web applications using React.js, Next.js, and Tailwind CSS.",
      "Integrated FastAPI backend services and REST APIs for seamless data flow.",
      "Implemented responsive UI components with cross-browser and mobile compatibility.",
    ],
  },

];


const projects = [
  {
    name: "Personal Portfolio",
    description:
      "Personal portfolio created using React,Tailwind and 3JS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ppss,
    source_code_link: "https://github.com/",
  },
  
];
const education = [
  {
    institution: "Delhi Public School,Ranipur",
    degree: "High School",
    year: "2008 - 2022",
    location: "Haridwar, Uttarakhand",
    image: images,
  },
  {
    institution: "Birla Institute Of Technology,Mesra",
    degree: "Bachelor of Technology in Computer Science",
    year: "2022 - 2026",
    location: "Ranchi, Jharkhand",
    image: bit,
  },
];

export { services, technologies, experiences, education, projects };