import { createHash, timingSafeEqual } from "node:crypto";
import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

function safeCompare(a, b) {
  const ha = createHash("sha256").update(String(a)).digest();
  const hb = createHash("sha256").update(String(b)).digest();
  return timingSafeEqual(ha, hb);
}

router.post("/", (req, res) => {
  const adminPassword = process.env.ADMIN_PASSWORD;
  const jwtSecret = process.env.JWT_SECRET;

  if (!adminPassword || !jwtSecret) {
    return res.status(500).json({
      error: "Admin login isn't configured. Set ADMIN_PASSWORD and JWT_SECRET.",
    });
  }

  const { password } = req.body;
  if (!password || !safeCompare(password, adminPassword)) {
    return res.status(401).json({ error: "Incorrect password." });
  }

  const token = jwt.sign({ role: "admin" }, jwtSecret, { expiresIn: "12h" });
  res.json({ token });
});

export default router;
