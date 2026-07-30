import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "./db.js";

const COLLECTIONS = ["experiences", "educations", "projects"];

function parseDateRange(raw) {
  const trimmed = raw.trim();
  if (!trimmed) return { start: "", end: "", ongoing: false };

  const parts = trimmed.split(/\s*-\s*/);
  if (parts.length === 1) {
    return { start: parts[0], end: "", ongoing: false };
  }

  const [start, endRaw] = parts;
  const ongoing = /present/i.test(endRaw);
  return { start, end: ongoing ? "" : endRaw, ongoing };
}

async function run() {
  const connection = await connectDB();

  for (const name of COLLECTIONS) {
    const collection = connection.collection(name);
    const docs = await collection.find({ date: { $type: "string" } }).toArray();

    for (const doc of docs) {
      await collection.updateOne(
        { _id: doc._id },
        { $set: { date: parseDateRange(doc.date) } },
      );
    }

    console.log(`${name}: migrated ${docs.length} document(s) to start/end date.`);
  }

  await mongoose.disconnect();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
