import "dotenv/config";
import express from "express";
import cors from "cors";

import { connectDB } from "./db.js";
import { createCrudRouter } from "./routes/createCrudRouter.js";
import authRoutes from "./routes/auth.js";
import contentRoutes from "./routes/content.js";
import uploadRoutes from "./routes/uploads.js";
import Skill from "./models/Skill.js";
import Experience from "./models/Experience.js";
import Education from "./models/Education.js";
import Project from "./models/Project.js";
import Certificate from "./models/Certificate.js";
import Social from "./models/Social.js";

const app = express();

app.set("trust proxy", 1);
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.use("/api/auth", authRoutes);
app.use("/api/uploads", uploadRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/skills", createCrudRouter(Skill));
app.use("/api/experiences", createCrudRouter(Experience));
app.use("/api/educations", createCrudRouter(Education));
app.use("/api/projects", createCrudRouter(Project));
app.use("/api/certificates", createCrudRouter(Certificate));
app.use("/api/socials", createCrudRouter(Social));

app.use((req, res) => {
  res.status(404).json({ error: "Not found." });
});

app.use((err, req, res, _next) => {
  console.error(err);
  if (err.name === "CastError") {
    return res.status(400).json({ error: "Invalid id." });
  }
  if (err.name === "ValidationError") {
    return res.status(400).json({ error: err.message });
  }
  res.status(500).json({ error: "Internal server error." });
});

const PORT = process.env.PORT || 4000;
const HOST = "0.0.0.0";

connectDB()
  .then(() => {
    app.listen(PORT, HOST, () => {
      console.log(`API listening on http://${HOST}:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1);
  });
