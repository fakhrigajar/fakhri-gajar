import { Schema, model } from "mongoose";

const experienceSchema = new Schema(
  {
    position: { type: String, required: true },
    company: { type: String, required: true },
    date: {
      start: { type: String, default: "" },
      end: { type: String, default: "" },
      ongoing: { type: Boolean, default: false },
    },
    image: { type: String, default: "" },
    description: { type: String, default: "" },
    skills: { type: [String], default: [] },
  },
  { timestamps: true },
);

export default model("Experience", experienceSchema);
