import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const FIELD_LABELS: Record<string, string> = {
  first_name: "First Name",
  last_name: "Last Name",
  company: "Company / Business Name",
  email: "Email",
  phone: "Phone Number",
  store_type: "Store Type",
  locations: "Number of Locations",
  monthly_units: "Estimated Monthly Units",
  state: "State / Region",
  message: "Message / Notes",
};

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Server misconfigured" });
  }

  const body: Record<string, string> | null =
    req.body && typeof req.body === "object" ? req.body : null;
  if (!body) {
    return res.status(400).json({ error: "Invalid JSON" });
  }

  const required = ["first_name", "last_name", "company", "email", "phone"];
  for (const key of required) {
    if (!body[key] || typeof body[key] !== "string" || !body[key].trim()) {
      return res.status(400).json({ error: `Missing field: ${key}` });
    }
  }

  const rows = Object.entries(FIELD_LABELS)
    .map(([key, label]) => {
      const value = (body[key] ?? "").toString().trim() || "—";
      return `
        <tr>
          <td style="padding:10px 14px;border-bottom:1px solid #e8e8e8;font-family:sans-serif;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#184EA2;width:200px;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:10px 14px;border-bottom:1px solid #e8e8e8;font-family:sans-serif;font-size:14px;color:#000;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`;
    })
    .join("");

  const html = `
    <div style="background:#fff;padding:32px;font-family:sans-serif;color:#000;">
      <h1 style="font-family:Georgia,serif;font-weight:300;font-size:28px;color:#184EA2;margin:0 0 8px 0;">New Wholesale Inquiry</h1>
      <p style="font-size:13px;color:#666;margin:0 0 24px 0;">Submitted via drinkaquavibes.com</p>
      <table style="border-collapse:collapse;width:100%;max-width:640px;">${rows}</table>
    </div>
  `;

  const text = Object.entries(FIELD_LABELS)
    .map(([key, label]) => `${label}: ${(body[key] ?? "").toString().trim() || "—"}`)
    .join("\n");

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: "Aqua Vibes Wholesale <forms@drinkaquavibes.com>",
    to: ["hello@drinkaquavibes.com"],
    replyTo: body.email,
    subject: `New Wholesale Inquiry — ${body.first_name} ${body.last_name} (${body.company})`,
    html,
    text,
  });

  if (error) {
    return res.status(502).json({ error: error.message });
  }

  return res.status(200).json({ ok: true });
}
