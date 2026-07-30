import { Schema, model } from "mongoose";

const certificateSchema = new Schema(
  {
    title: { type: String, required: true },
    issuer: { type: String, default: "" },
    date: { type: String, default: "" },
    image: { type: String, default: "" },
    pdf: { type: String, default: "" },
  },
  { timestamps: true },
);

export default model("Certificate", certificateSchema);
