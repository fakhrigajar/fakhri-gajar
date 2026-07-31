import meImg from "../assets/images/me.png";

import jsImg from "../assets/images/skills/js.png";
import muiImg from "../assets/images/skills/mui.png";
import firebaseImg from "../assets/images/skills/firebase.png";
import figmaImg from "../assets/images/skills/Figma.png";
import csImg from "../assets/images/skills/cs.svg.png";
import bootstrapImg from "../assets/images/skills/bootstrap.svg";
import nextJsImg from "../assets/images/skills/next-js.webp";
import htmlImg from "../assets/images/skills/html.png";
import cssImg from "../assets/images/skills/css.svg";
import githubImg from "../assets/images/skills/github.png";
import reactImg from "../assets/images/skills/react.png";
import reduxImg from "../assets/images/skills/redux.png";
import sassImg from "../assets/images/skills/sass.png";
import tailwindImg from "../assets/images/skills/tailwind.png";
import nodejsImg from "../assets/images/skills/nodejs.svg";
import expressImg from "../assets/images/skills/express.png";
import postmanImg from "../assets/images/skills/postman.png";
import scratchImg from "../assets/images/skills/scratch.svg";
import tinkercadImg from "../assets/images/skills/tinkercad.png";

import hscImg from "../assets/images/experience/hsc.png";
import alqoritmikaImg from "../assets/images/experience/alqoritmika.png";
import itbrainsImg from "../assets/images/experience/itbrains.jpg";
import companyImg from "../assets/images/experience/company.jpg";
import jetAcademyImg from "../assets/images/experience/jet-academy.jpg";

import fitbMoviesImg from "../assets/images/projects/fitb-movies.png";
import fitbNotepadImg from "../assets/images/projects/fitb-notepad.png";
import fitbGameImg from "../assets/images/projects/fitb-game.png";
import jerseyStoreImg from "../assets/images/projects/jersey-store.png";
import fitbFinderImg from "../assets/images/projects/fitb-finder.png";

import cssFreecodecampImg from "../assets/images/certificates/css-freecodecamp.jpg";
import cssHackerrankImg from "../assets/images/certificates/css-hackerrank.jpg";
import codeacademyImg from "../assets/images/certificates/codeacademy.jpg";
import reactSimplilearnImg from "../assets/images/certificates/react-simplilearn.jpg";
import jsCiscoImg from "../assets/images/certificates/js-cisco.jpg";
import jsHackerrankImg from "../assets/images/certificates/js-hackerrank.jpg";
import jedAcademyImg from "../assets/images/certificates/jed-academy.jpg";
import teflImg from "../assets/images/certificates/tefl.jpg";
import fsimFrontendImg from "../assets/images/certificates/4sim-frontend.jpg";
import milliHakatonImg from "../assets/images/certificates/milli-hakaton.jpg";
import pashaHackathonImg from "../assets/images/certificates/pasha-hackathon.jpg";
import courseraAiCurveImg from "../assets/images/certificates/coursera-ai-curve.jpg";
import frontendReactHackerrankImg from "../assets/images/certificates/frontend-developer-react-hackerrank.jpg";
import javascriptIntermediateHackerrankImg from "../assets/images/certificates/javascript-intermediate-hackerrank.jpg";

export const navigations = [
  {
    label: "About",
    value: "#about",
  },
  {
    label: "Skills",
    value: "#skills",
  },

  {
    label: "Projects",
    value: "#projects",
  },
  {
    label: "Journey",
    children: [
      {
        label: "Education",
        value: "#education",
      },
      {
        label: "Experience",
        value: "#experience",
      },
      {
        label: "Certificates",
        value: "#certificates",
      },
    ],
  },
  {
    label: "Contact me",
    value: "#contact",
  },
];

export const contactDetail = {
  description:
    "Want to get in touch? I'd love to hear from you. Feel free to use the contact form ",
  infos: [
    {
      icon: "ri-map-pin-line",
      label: "Baku, Azerbaijan",
    },
    {
      icon: "ri-mail-line",
      label: "fakhrigajar@gmail.com",
    },
    {
      icon: "ri-phone-fill",
      label: "+994 (070) 382 18 11",
    },
  ],
  socials: [
    {
      value: "https://www.facebook.com/profile.php?id=100088924454057",
      icon: "ri-facebook-fill",
    },
    {
      value: "https://github.com/fakhrigajar",
      icon: "ri-github-line",
    },
    {
      value: "https://www.instagram.com/faakhrii03/",
      icon: "ri-instagram-line",
    },
    {
      value: "https://www.linkedin.com/in/fakhrigajar/",
      icon: "ri-linkedin-fill",
    },
  ],
  fields: [
    {
      element: "input",
      type: "text",
      label: "Your Name",
      name: "name",
    },
    {
      element: "input",
      type: "email",
      label: "Email",
      name: "email",
    },
    {
      element: "input",
      type: "number",
      label: "Phone",
      name: "phone",
    },
    {
      element: "textarea",
      type: "text",
      label: "Message",
      name: "message",
    },
  ],
};

export const about = {
  name: "Fakhri Gajar",
  description:
    "I’m a passionate Frontend Developer focused on crafting clean, responsive, and user-friendly web interfaces. I love turning ideas into interactive digital experiences using modern web technologies.",
  roles: ["Frontend Developer", "Coder", "Programmer"],
  resume:
    "https://drive.google.com/file/d/1OF5OBRZb6AWol0lO9-q3QW_BKwSN17Jf/view?usp=sharing",
  image: meImg,
};

export const skills = [
  { label: "Javascript", image: jsImg },
  { label: "Material UI", image: muiImg },
  { label: "Firebase", image: firebaseImg },
  { label: "Figma", image: figmaImg },
  { label: "C#", image: csImg },
  { label: "Bootstrap", image: bootstrapImg },
  { label: "Next JS", image: nextJsImg },
  { label: "HTML", image: htmlImg },
  { label: "CSS", image: cssImg },
  { label: "GitHub", image: githubImg },
  { label: "React JS", image: reactImg },
  { label: "Redux", image: reduxImg },
  { label: "SASS/SCSS", image: sassImg },
  { label: "Tailwind CSS", image: tailwindImg },
  { label: "Node JS", image: nodejsImg },
  { label: "Express JS", image: expressImg },
  { label: "Postman", image: postmanImg },
  { label: "Scratch", image: scratchImg },
  { label: "Tinkercad", image: tinkercadImg },
];

export const experiences = [
  {
    position: "ICT Instructor",
    company: "Hadaf Stars Campus",
    image: hscImg,
    date: { start: "Sep 2025", end: "", ongoing: true },
    description:
      "As an ICT teacher for students in grades 3 to 7, I design and deliver engaging lessons that introduce young learners to the fundamentals of computer science, digital literacy, and safe technology use. My teaching focuses on helping students understand algorithms, logical thinking, and problem-solving through interactive platforms. I create a supportive and motivating classroom environment where students explore the basics of programming, data handling, and information processing. By combining theory with hands-on activities, I aim to develop their curiosity about technology and prepare them for more advanced ICT concepts in the future.",
    skills: [],
  },
  {
    position: "Mentor — Məktəblilərarası Milli Hakaton",
    company: "Algoritmika",
    image: alqoritmikaImg,
    date: { start: "Nov 2026", end: "Dec 2026", ongoing: false },
    description:
      "As a Mentor at the Məktəblilərarası Milli Hakaton (National Hackathon for School Students), I guided semifinalist teams in developing their technology projects by providing technical support and mentorship throughout the process. My role involved assisting students in building web-based and Python projects using tools such as HTML, CSS, Flask, Pandas, PyQt, and PyGame. I focused on fostering their creativity, teamwork, and problem-solving skills while helping them apply programming concepts in real-world scenarios. Through this experience, I strengthened my communication and leadership abilities, gained valuable mentoring experience, and contributed to inspiring the next generation of young technologists.",
    skills: ["HTML", "CSS", "Flask", "Pandas", "PyQT", "PyGame"],
  },
  {
    position: "Frontend Developer (Mentor)",
    company: "IT Brains",
    image: itbrainsImg,
    date: { start: "September 2024", end: "November 2024", ongoing: false },
    description:
      "As a Frontend Developer Mentor, I enjoy sharing what I’ve learned about building clean, responsive, and user-friendly interfaces. I guide beginners through real project experiences, explain concepts in a simple way, and help them avoid the mistakes I made when starting out. It’s about growing together and turning challenges into confidence",
    skills: [
      "Front-End Development",
      "JavaScript",
      "Problem Solving",
      "Analytical Skills",
      "HTML",
      "CSS",
    ],
  },
  {
    position: "Frontend Developer (Startup)",
    company: "NEXT US",
    image: companyImg,
    date: { start: "May 2024", end: "August 2024", ongoing: false },
    description:
      "I am currently working as a Frontend Developer at a startup called NEXT US. Here we work as a team and try to come up with interesting projects.",
    skills: [
      "Front-End Development",
      "JavaScript",
      "Problem Solving",
      "Analytical Skills",
      "React.js",
      "HTML",
      "CSS",
      "SCSS",
      "Axios",
      "REST API",
    ],
  },
  {
    position: "Frontend Developer (Intern)",
    company: "JET Academy",
    image: jetAcademyImg,
    date: { start: "May 2024", end: "June 2024", ongoing: false },
    description:
      "I am currently participating in JET Academy's Frontend Developer internship program. Here, I am increasing my knowledge and experience by working on interesting projects.",
    skills: [
      "Front-End Development",
      "JavaScript",
      "Problem Solving",
      "Analytical Skills",
      "React.js",
      "HTML",
      "CSS",
      "SCSS",
    ],
  },
];

export const educations = [
  {
    institution: "Azerbaijan Technical University",
    degree: "Master / Multichannel Telecommunications Engineering",
    date: { start: "Sep 2025", end: "", ongoing: true },
  },
  {
    institution: "Azerbaijan State Oil and Industry University",
    degree: "Bachelor / Radiotechnic and Telecommunications Engineering",
    date: { start: "Sep 2021", end: "Jun 2025", ongoing: false },
  },
];

export const projects = [
  {
    name: "FITB Movies",
    image: fitbMoviesImg,
    category: "Web App",
    date: { start: "December 2024", end: "", ongoing: false },
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Tailwind CSS",
      "Swiper",
      "Ant Design",
      "Formik",
      "Axios",
      "Clerk",
    ],
    links: [
      "https://fitbmovies.vercel.app/",
      "https://github.com/itzjustfitb/fitbmovies",
    ],
  },
  {
    name: "FITB NotePad +",
    image: fitbNotepadImg,
    category: "Web App",
    date: { start: "August 2024", end: "August 2024", ongoing: false },
    skills: ["HTML", "CSS", "Javascript", "Tailwind CSS", "Clerk", "Material UI"],
    links: [
      "https://fitb-notepad-plus.netlify.app/",
      "https://github.com/itzjustfitb/fitb-notepad-plus",
    ],
  },
  {
    name: "FITB Game",
    image: fitbGameImg,
    category: "E-Commerce",
    date: { start: "Aug 2023", end: "Sep 2023", ongoing: false },
    skills: ["HTML", "CSS", "Javascript", "SASS/SCSS"],
    links: [
      "https://fitbgame.netlify.app/",
      "https://github.com/itzjustfitb/FITB-Game",
    ],
  },
  {
    name: "Jersey Store",
    image: jerseyStoreImg,
    category: "E-Commerce",
    date: { start: "Feb 2024", end: "Mar 2024", ongoing: false },
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "SASS/SCSS",
      "React JS",
      "Redux/Redux Toolkit",
      "Firebase",
      "Axios",
    ],
    links: [
      "https://jerseystoreaz.vercel.app/",
      "https://github.com/itzjustfitb/jersey-store",
    ],
  },
  {
    name: "FITB Finder",
    image: fitbFinderImg,
    category: "Web App",
    date: { start: "Mar 2024", end: "Mar 2024", ongoing: false },
    skills: ["HTML", "CSS", "Javascript", "SASS/SCSS", "React JS", "Axios"],
    links: [
      "https://fitbfinder.netlify.app/",
      "https://github.com/itzjustfitb/FITB-Finder",
    ],
  },
];

export const certificates = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Oct 2023",
    image: cssFreecodecampImg,
  },
  {
    title: "CSS (Basic)",
    issuer: "HackerRank",
    date: "Oct 2023",
    image: cssHackerrankImg,
  },
  {
    title: "Software Development",
    issuer: "Code Academy",
    date: "Dec 2023",
    image: codeacademyImg,
  },
  {
    title: "Getting Started with ReactJS Components",
    issuer: "Simplilearn SkillUp",
    date: "Dec 2023",
    image: reactSimplilearnImg,
  },
  {
    title: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "",
    image: jsCiscoImg,
  },
  {
    title: "JavaScript (Basic)",
    issuer: "HackerRank",
    date: "Mar 2024",
    image: jsHackerrankImg,
  },
  {
    title: "Front-End Development Course",
    issuer: "JED Academy",
    date: "Apr 2024",
    image: jedAcademyImg,
  },
  {
    title: "Teaching English as a Foreign Language",
    issuer: "TEFL Professional Institute",
    date: "Jun 2026",
    image: teflImg,
  },
  {
    title: "Frontend Developer Internship",
    issuer: "4SİM",
    date: "Aug - Nov 2025",
    image: fsimFrontendImg,
  },
  {
    title: "Məktəblilərarası Milli Hakaton — Mentor",
    issuer: "Algoritmika",
    date: "Dec 2025",
    image: milliHakatonImg,
  },
  {
    title: "PASHA Hackathon 6.0 — Certificate of Participation",
    issuer: "PASHA Holding",
    date: "May 2026",
    image: pashaHackathonImg,
  },
  {
    title: "Stay Ahead of the AI Curve",
    issuer: "Google (via Coursera)",
    date: "Jul 2026",
    image: courseraAiCurveImg,
  },
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "Jul 2026",
    image: frontendReactHackerrankImg,
  },
  {
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    date: "Jul 2026",
    image: javascriptIntermediateHackerrankImg,
  },
];

export const socials = [
  {
    name: "Instagram",
    icon: "ri-instagram-fill",
    value: "https://www.instagram.com/faakhrii03",
  },
  {
    name: "Facebook",
    icon: "ri-facebook-circle-fill",
    value: "https://www.facebook.com/profile.php?id=100088924454057",
  },
  {
    name: "Linkedin",
    icon: "ri-linkedin-box-fill",
    value: "https://www.linkedin.com/in/fakhrigajar/",
  },
  {
    name: "Github",
    icon: "ri-github-fill",
    value: "https://github.com/fakhrigajar",
  },
];
