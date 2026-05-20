import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  school: z.string().trim().max(150).optional().default(""),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(5).max(30),
  message: z.string().trim().min(1).max(2000),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Email service not configured" });
  }

  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid form data", details: parsed.error.flatten().fieldErrors });
  }

  const { name, school, email, phone, message } = parsed.data;
  const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#ffffff;color:#222;">
      <h2 style="color:#5E4B71;margin:0 0 16px;">New Inquiry from VGEN Website</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:8px;border-bottom:1px solid #eee;"><strong>Name</strong></td><td style="padding:8px;border-bottom:1px solid #eee;">${esc(name)}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;"><strong>Organization</strong></td><td style="padding:8px;border-bottom:1px solid #eee;">${esc(school) || "—"}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;"><strong>Email</strong></td><td style="padding:8px;border-bottom:1px solid #eee;">${esc(email)}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;"><strong>Phone</strong></td><td style="padding:8px;border-bottom:1px solid #eee;">${esc(phone)}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;vertical-align:top;"><strong>Message</strong></td><td style="padding:8px;border-bottom:1px solid #eee;white-space:pre-wrap;">${esc(message)}</td></tr>
        <tr><td style="padding:8px;"><strong>Submitted</strong></td><td style="padding:8px;">${submittedAt} IST</td></tr>
      </table>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "VGEN Website <onboarding@resend.dev>",
      to: ["contact@vgen.co.in", "contact.vgen@gmail.com"],
      replyTo: email,
      subject: "New Inquiry from VGEN Website",
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact handler error:", err);
    return res.status(500).json({ error: "Unexpected error" });
  }
}
