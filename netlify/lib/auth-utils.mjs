import { createHash, createHmac, timingSafeEqual } from "node:crypto";

const SESSION_DURATION_MS = 12 * 60 * 60 * 1000;

function base64url(buffer) {
  return Buffer.from(buffer).toString("base64url");
}

export function safeCompare(a, b) {
  const ha = createHash("sha256").update(String(a)).digest();
  const hb = createHash("sha256").update(String(b)).digest();
  return timingSafeEqual(ha, hb);
}

export function signToken(secret) {
  const payload = JSON.stringify({ exp: Date.now() + SESSION_DURATION_MS });
  const payloadPart = base64url(payload);
  const signature = createHmac("sha256", secret)
    .update(payloadPart)
    .digest("base64url");
  return `${payloadPart}.${signature}`;
}

export function verifyToken(token, secret) {
  if (!token || typeof token !== "string" || !token.includes(".")) {
    return false;
  }

  const [payloadPart, signature] = token.split(".");
  const expected = createHmac("sha256", secret)
    .update(payloadPart)
    .digest("base64url");

  const sigBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (
    sigBuffer.length !== expectedBuffer.length ||
    !timingSafeEqual(sigBuffer, expectedBuffer)
  ) {
    return false;
  }

  try {
    const payload = JSON.parse(
      Buffer.from(payloadPart, "base64url").toString("utf8"),
    );
    return typeof payload.exp === "number" && Date.now() < payload.exp;
  } catch {
    return false;
  }
}
