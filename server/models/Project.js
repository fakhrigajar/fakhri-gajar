import { Schema, model } from "mongoose";

const projectSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, default: "" },
    category: { type: String, default: "" },
    date: {
      start: { type: String, default: "" },
      end: { type: String, default: "" },
      ongoing: { type: Boolean, default: false },
    },
    skills: { type: [String], default: [] },
    links: { type: [String], default: [] },
  },
  { timestamps: true },
);

export default model("Project", projectSchema);
