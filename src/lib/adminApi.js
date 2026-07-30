const TOKEN_KEY = "admin_token";

// The admin dashboard always talks to the real deployed API, never a local
// stand-in — otherwise uploaded file URLs get stamped with whichever host
// happened to handle the request (e.g. `localhost:4000`), which breaks the
// moment anyone else views the site. Override via VITE_API_BASE_URL only if
// you deliberately want to point the admin UI at a different backend.
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://fakhri-gajar.onrender.com";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

const API_UNAVAILABLE_MESSAGE =
  "Admin API not reachable. It may be waking up from sleep (Render free tier) — wait a moment and try again.";

async function parseJson(res) {
  try {
    return await res.json();
  } catch {
    throw new Error(API_UNAVAILABLE_MESSAGE);
  }
}

export async function login(password) {
  const res = await fetch(`${API_BASE_URL}/api/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });
  const data = await parseJson(res);
  if (!res.ok) {
    throw new Error(data.error || "Login failed.");
  }
  setToken(data.token);
  return data.token;
}

export async function fetchContent() {
  const res = await fetch(`${API_BASE_URL}/api/content`);
  if (!res.ok) {
    throw new Error("Failed to load site content.");
  }
  return parseJson(res);
}

export async function uploadImage(file) {
  const token = getToken();
  const body = new FormData();
  body.append("file", file);

  const res = await fetch(`${API_BASE_URL}/api/uploads`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body,
  });
  const data = await parseJson(res);
  if (!res.ok) {
    if (res.status === 401) clearToken();
    throw new Error(data.error || "Failed to upload file.");
  }
  return data.url;
}

export async function saveContent(content) {
  const token = getToken();
  const res = await fetch(`${API_BASE_URL}/api/content`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(content),
  });
  const data = await parseJson(res);
  if (!res.ok) {
    if (res.status === 401) clearToken();
    throw new Error(data.error || "Failed to save changes.");
  }
  return data;
}
