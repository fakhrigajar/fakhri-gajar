import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import Skill from "../models/Skill.js";
import Experience from "../models/Experience.js";
import Education from "../models/Education.js";
import Project from "../models/Project.js";
import Certificate from "../models/Certificate.js";
import Social from "../models/Social.js";
import About from "../models/About.js";

const router = Router();

export const COLLECTIONS = {
  skills: Skill,
  experiences: Experience,
  educations: Education,
  projects: Project,
  certificates: Certificate,
  socials: Social,
};

const EMPTY_ABOUT = {
  name: "",
  description: "",
  roles: [],
  resume: "",
  image: "",
};

async function readAllCollections() {
  const entries = await Promise.all(
    Object.entries(COLLECTIONS).map(async ([key, Model]) => [
      key,
      await Model.find().sort({ createdAt: 1 }),
    ]),
  );
  const aboutDoc = await About.findOne();
  return {
    ...Object.fromEntries(entries),
    about: aboutDoc ? aboutDoc.toObject() : EMPTY_ABOUT,
  };
}

router.get("/", async (req, res) => {
  res.json(await readAllCollections());
});

router.post("/", requireAuth, async (req, res) => {
  for (const [key, Model] of Object.entries(COLLECTIONS)) {
    if (Array.isArray(req.body[key])) {
      await Model.deleteMany({});
      const docs = req.body[key].map(({ _id, ...rest }) => rest);
      if (docs.length) await Model.insertMany(docs);
    }
  }

  if (req.body.about && typeof req.body.about === "object") {
    const { _id, ...rest } = req.body.about;
    await About.findOneAndUpdate({}, rest, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });
  }

  res.json(await readAllCollections());
});

export default router;
