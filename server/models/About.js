import { Schema, model } from "mongoose";

const aboutSchema = new Schema(
  {
    name: { type: String, default: "" },
    description: { type: String, default: "" },
    roles: { type: [String], default: [] },
    resume: { type: String, default: "" },
    image: { type: String, default: "" },
  },
  { timestamps: true },
);

export default model("About", aboutSchema);
