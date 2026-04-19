import emailjs from "@emailjs/browser";

export function isEmailJsConfigured() {
  return Boolean(
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY &&
    import.meta.env.VITE_EMAILJS_SERVICE_ID &&
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  );
}

/**
 * EmailJS rejects the promise with EmailJSResponseStatus: { status, text } - not a standard Error.
 * `text` is often JSON from the API, e.g. {"status":400,"text":"..."}.
 */
export function getEmailJsErrorDetail(err) {
  if (!err) return "Unknown error";
  if (typeof err.text === "string" && err.text.trim()) {
    const raw = err.text.trim();
    try {
      const j = JSON.parse(raw);
      if (j && typeof j === "object") {
        const inner = j.text ?? j.message ?? j.error;
        if (inner) return String(inner);
      }
    } catch {
      /* use raw body */
    }
    return raw.length > 400 ? `${raw.slice(0, 400)}…` : raw;
  }
  if (typeof err.message === "string" && err.message) return err.message;
  return err.status ? `Request failed (HTTP ${err.status})` : "Send failed";
}

/**
 * Sends the contact form via EmailJS. Template variables (use in EmailJS HTML):
 *   {{from_name}}, {{reply_to}}, {{message}}
 * Aliases also sent for default EmailJS templates: {{name}}, {{user_email}}, {{from_email}}
 *
 * Paste-ready HTML: `email-templates/emailjs-contact-portfolio.html`
 *
 * If you see HTTP 400: EmailJS dashboard → Account → API keys → add your site origin
 * (e.g. http://localhost:5173 and your production URL) under "Authorized domains".
 * Wrong Service ID / Template ID / Public key also returns 400.
 */
export async function sendContactViaEmailJs({ name, email, message }) {
  if (!isEmailJsConfigured()) {
    throw new Error(
      "EmailJS is not configured. Add VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, and VITE_EMAILJS_TEMPLATE_ID to .env.",
    );
  }
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY.trim();
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID.trim();
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID.trim();

  const safeName = String(name ?? "")
    .trim()
    .slice(0, 200);
  const safeEmail = String(email ?? "")
    .trim()
    .slice(0, 320);
  const safeMessage = String(message ?? "")
    .trim()
    .replace(/\u0000/g, "")
    .slice(0, 8000);

  emailjs.init({ publicKey });

  const templateParams = {
    from_name: safeName,
    name: safeName,
    reply_to: safeEmail,
    from_email: safeEmail,
    user_email: safeEmail,
    email: safeEmail,
    message: safeMessage,
  };

  try {
    await emailjs.send(serviceId, templateId, templateParams, { publicKey });
  } catch (err) {
    throw new Error(getEmailJsErrorDetail(err));
  }
}
