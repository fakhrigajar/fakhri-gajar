import { Schema, model } from "mongoose";

const educationSchema = new Schema(
  {
    institution: { type: String, required: true },
    degree: { type: String, default: "" },
    date: {
      start: { type: String, default: "" },
      end: { type: String, default: "" },
      ongoing: { type: Boolean, default: false },
    },
  },
  { timestamps: true },
);

export default model("Education", educationSchema);
