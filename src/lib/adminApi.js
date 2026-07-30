const TOKEN_KEY = "admin_token";

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
  "Admin API not reachable. Run `npm run dev:full` (or start `npm run server` alongside `npm run dev`) locally.";

async function parseJson(res) {
  try {
    return await res.json();
  } catch {
    throw new Error(API_UNAVAILABLE_MESSAGE);
  }
}

export async function login(password) {
  const res = await fetch("/api/auth", {
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
  const res = await fetch("/api/content");
  if (!res.ok) {
    throw new Error("Failed to load site content.");
  }
  return parseJson(res);
}

export async function uploadImage(file) {
  const token = getToken();
  const body = new FormData();
  body.append("file", file);

  const res = await fetch("/api/uploads", {
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
  const res = await fetch("/api/content", {
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
