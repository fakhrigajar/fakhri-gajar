import { Schema, model } from "mongoose";

const socialSchema = new Schema(
  {
    name: { type: String, required: true },
    icon: { type: String, default: "" },
    value: { type: String, default: "" },
  },
  { timestamps: true },
);

export default model("Social", socialSchema);
