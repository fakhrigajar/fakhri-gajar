import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";

export function createCrudRouter(Model) {
  const router = Router();

  router.get("/", async (req, res) => {
    const items = await Model.find().sort({ createdAt: 1 });
    res.json(items);
  });

  router.get("/:id", async (req, res) => {
    const item = await Model.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found." });
    res.json(item);
  });

  router.post("/", requireAuth, async (req, res) => {
    const { _id, ...body } = req.body;
    const item = await Model.create(body);
    res.status(201).json(item);
  });

  router.put("/:id", requireAuth, async (req, res) => {
    const { _id, ...body } = req.body;
    const item = await Model.findByIdAndUpdate(req.params.id, body, {
      new: true,
      overwrite: true,
      runValidators: true,
    });
    if (!item) return res.status(404).json({ error: "Not found." });
    res.json(item);
  });

  router.patch("/:id", requireAuth, async (req, res) => {
    const { _id, ...body } = req.body;
    const item = await Model.findByIdAndUpdate(req.params.id, body, {
      new: true,
      runValidators: true,
    });
    if (!item) return res.status(404).json({ error: "Not found." });
    res.json(item);
  });

  router.delete("/:id", requireAuth, async (req, res) => {
    const item = await Model.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found." });
    res.status(204).end();
  });

  return router;
}
