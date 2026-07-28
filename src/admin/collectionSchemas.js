export const collectionSchemas = {
  skills: {
    label: "Skills",
    itemLabel: (item) => item.label || "New skill",
    emptyItem: { label: "", image: "" },
    fields: [
      { key: "label", label: "Label", type: "text", required: true },
      { key: "image", label: "Image URL", type: "image" },
    ],
  },
  experiences: {
    label: "Experience",
    itemLabel: (item) => item.position || item.company || "New role",
    emptyItem: {
      position: "",
      company: "",
      date: "",
      image: "",
      description: "",
      skills: [],
    },
    fields: [
      { key: "position", label: "Position", type: "text", required: true },
      { key: "company", label: "Company", type: "text", required: true },
      { key: "date", label: "Date", type: "text" },
      { key: "image", label: "Logo URL", type: "image" },
      { key: "description", label: "Description", type: "textarea" },
      { key: "skills", label: "Skills (comma separated)", type: "tags" },
    ],
  },
  educations: {
    label: "Education",
    itemLabel: (item) => item.institution || "New school",
    emptyItem: { institution: "", degree: "", date: "" },
    fields: [
      {
        key: "institution",
        label: "Institution",
        type: "text",
        required: true,
      },
      { key: "degree", label: "Degree", type: "text" },
      { key: "date", label: "Date", type: "text" },
    ],
  },
  projects: {
    label: "Projects",
    itemLabel: (item) => item.name || "New project",
    emptyItem: {
      name: "",
      image: "",
      category: "",
      date: "",
      skills: [],
      links: ["", ""],
    },
    fields: [
      { key: "name", label: "Name", type: "text", required: true },
      { key: "image", label: "Image URL", type: "image" },
      { key: "category", label: "Category", type: "text" },
      { key: "date", label: "Date", type: "text" },
      { key: "skills", label: "Skills (comma separated)", type: "tags" },
      { key: "links", label: "Links", type: "links" },
    ],
  },
  certificates: {
    label: "Certificates",
    itemLabel: (item) => item.title || "New certificate",
    emptyItem: { title: "", issuer: "", date: "", image: "", pdf: "" },
    fields: [
      { key: "title", label: "Title", type: "text", required: true },
      { key: "issuer", label: "Issuer", type: "text" },
      { key: "date", label: "Date", type: "text" },
      { key: "image", label: "Image URL", type: "image" },
      { key: "pdf", label: "PDF URL", type: "url" },
    ],
  },
  socials: {
    label: "Socials",
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
