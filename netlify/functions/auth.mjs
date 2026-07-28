import { safeCompare, signToken } from "../lib/auth-utils.mjs";

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export default async (req) => {
  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed." }, 405);
  }

  const adminPassword = process.env.ADMIN_PASSWORD;
  const tokenSecret = process.env.ADMIN_TOKEN_SECRET;

  if (!adminPassword || !tokenSecret) {
    return jsonResponse(
      {
        error:
          "Admin login isn't configured. Set ADMIN_PASSWORD and ADMIN_TOKEN_SECRET.",
      },
      500,
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return jsonResponse({ error: "Invalid request body." }, 400);
  }

  if (!body.password || !safeCompare(body.password, adminPassword)) {
    return jsonResponse({ error: "Incorrect password." }, 401);
  }

  return jsonResponse({ token: signToken(tokenSecret) });
};

export const config = { path: "/api/auth" };
