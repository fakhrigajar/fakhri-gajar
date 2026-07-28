import { getStore } from "@netlify/blobs";
import { verifyToken } from "../lib/auth-utils.mjs";
import seed from "../../shared/site-content.seed.json";

const STORE_NAME = "site-content";
const KEY = "content";

const EDITABLE_COLLECTIONS = [
  "skills",
  "experiences",
  "educations",
  "projects",
  "certificates",
  "socials",
];

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export default async (req) => {
  const store = getStore(STORE_NAME);

  if (req.method === "GET") {
    const content = (await store.get(KEY, { type: "json" })) || seed;
    return jsonResponse(content);
  }

  if (req.method === "POST") {
    const tokenSecret = process.env.ADMIN_TOKEN_SECRET;
    const authHeader = req.headers.get("authorization") || "";
    const token = authHeader.replace(/^Bearer\s+/i, "");

    if (!tokenSecret || !verifyToken(token, tokenSecret)) {
      return jsonResponse({ error: "Unauthorized." }, 401);
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return jsonResponse({ error: "Invalid JSON body." }, 400);
    }

    const current = (await store.get(KEY, { type: "json" })) || seed;
    const next = { ...current };

    for (const key of EDITABLE_COLLECTIONS) {
      if (Array.isArray(body[key])) {
        next[key] = body[key];
      }
    }

    await store.setJSON(KEY, next);
    return jsonResponse(next);
  }

  return jsonResponse({ error: "Method not allowed." }, 405);
};

export const config = { path: "/api/content" };
