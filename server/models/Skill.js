import { Schema, model } from "mongoose";

const skillSchema = new Schema(
  {
    label: { type: String, required: true },
    image: { type: String, default: "" },
  },
  { timestamps: true },
);

export default model("Skill", skillSchema);
