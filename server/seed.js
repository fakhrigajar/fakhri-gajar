import "dotenv/config";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import mongoose from "mongoose";

import { connectDB } from "./db.js";
import { COLLECTIONS } from "./routes/content.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const seedPath = join(__dirname, "../shared/site-content.seed.json");
const seed = JSON.parse(readFileSync(seedPath, "utf-8"));

const force = process.argv.includes("--force");

async function run() {
  await connectDB();

  for (const [key, Model] of Object.entries(COLLECTIONS)) {
    const count = await Model.countDocuments();
    if (count > 0 && !force) {
      console.log(`Skipping ${key}: already has ${count} document(s). Use --force to overwrite.`);
      continue;
    }

    if (force) await Model.deleteMany({});
    const docs = seed[key] || [];
    if (docs.length) await Model.insertMany(docs);
    console.log(`Seeded ${key} with ${docs.length} document(s).`);
  }

  await mongoose.disconnect();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
