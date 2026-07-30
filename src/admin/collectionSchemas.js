export const collectionSchemas = {
  skills: {
    label: "Skill",
    itemLabel: (item) => item.label || "New skill",
    emptyItem: { label: "", image: "" },
    fields: [
      { key: "label", label: "Label", type: "text", required: true },
      { key: "image", label: "Image", type: "image" },
    ],
  },
  experiences: {
    label: "Experience",
    itemLabel: (item) => item.position || item.company || "New role",
    emptyItem: {
      position: "",
      company: "",
      date: { start: "", end: "", ongoing: false },
      image: "",
      description: "",
      skills: [],
    },
    fields: [
      { key: "position", label: "Position", type: "text", required: true },
      { key: "company", label: "Company", type: "text", required: true },
      {
        key: "date",
        label: "Date",
        type: "daterange",
        ongoingLabel: "I currently work here",
      },
      { key: "image", label: "Logo", type: "image" },
      { key: "description", label: "Description", type: "textarea" },
      { key: "skills", label: "Skills", type: "tags" },
    ],
  },
  educations: {
    label: "Education",
    itemLabel: (item) => item.institution || "New school",
    emptyItem: {
      institution: "",
      degree: "",
      date: { start: "", end: "", ongoing: false },
    },
    fields: [
      {
        key: "institution",
        label: "Institution",
        type: "text",
        required: true,
      },
      { key: "degree", label: "Degree", type: "text" },
      {
        key: "date",
        label: "Date",
        type: "daterange",
        ongoingLabel: "I'm currently studying here",
      },
    ],
  },
  projects: {
    label: "Project",
    itemLabel: (item) => item.name || "New project",
    emptyItem: {
      name: "",
      image: "",
      category: "",
      date: { start: "", end: "", ongoing: false },
      skills: [],
      links: ["", ""],
    },
    fields: [
      { key: "name", label: "Name", type: "text", required: true },
      { key: "image", label: "Image", type: "image" },
      { key: "category", label: "Category", type: "text" },
      {
        key: "date",
        label: "Date",
        type: "daterange",
        ongoingLabel: "This project is ongoing",
      },
      { key: "skills", label: "Skills", type: "tags" },
      { key: "links", label: "Links", type: "links" },
    ],
  },
  certificates: {
    label: "Certificate",
    itemLabel: (item) => item.title || "New certificate",
    emptyItem: { title: "", issuer: "", date: "", image: "" },
    fields: [
      { key: "title", label: "Title", type: "text", required: true },
      { key: "issuer", label: "Issuer", type: "text" },
      { key: "date", label: "Date", type: "date" },
      { key: "image", label: "Image", type: "image" },
    ],
  },
  socials: {
    label: "Social",
    itemLabel: (item) => item.name || "New social",
    emptyItem: { name: "", icon: "", value: "" },
    fields: [
      { key: "name", label: "Name", type: "text", required: true },
      { key: "icon", label: "Icon class (remixicon)", type: "text" },
      { key: "value", label: "URL", type: "url" },
    ],
  },
};

export const collectionOrder = [
  "skills",
  "projects",
  "experiences",
  "educations",
  "certificates",
  "socials",
];
