import meImg from "../assets/images/me.png";

export const bio = {
  name: "Fakhri Gajar",
  description:
    "I’m a passionate Frontend Developer focused on crafting clean, responsive, and user-friendly web interfaces. I love turning ideas into interactive digital experiences using modern web technologies.",
  roles: ["Frontend Developer", "Coder", "Programmer"],
  resume:
    "https://drive.google.com/file/d/1OF5OBRZb6AWol0lO9-q3QW_BKwSN17Jf/view?usp=sharing",
  image: meImg,
};

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
