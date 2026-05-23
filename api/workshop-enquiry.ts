import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  organization: z.string().trim().min(1).max(150),
  designation: z.string().trim().max(100).optional().default(""),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(5).max(30),
  city: z.string().trim().min(1).max(100),
  state: z.string().trim().min(1).max(100),
  audienceType: z.string().trim().min(1).max(100),
  workshops: z.array(z.string().trim().max(150)).min(1).max(20),
  duration: z.string().trim().min(1).max(50),
  participants: z.string().trim().min(1).max(50),
  workshopDate: z.string().trim().max(50).optional().default(""),
  mode: z.string().trim().min(1).max(30),
  message: z.string().trim().min(1).max(2000),
  consent: z.literal(true),
});

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "Email service not configured" });

  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid form data", details: parsed.error.flatten().fieldErrors });
  }

  const d = parsed.data;
  const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #eee;font-weight:600;color:#5E4B71;width:38%;vertical-align:top;">${label}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #eee;color:#222;white-space:pre-wrap;">${value || "—"}</td>
    </tr>`;

  const adminHtml = `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;background:#ffffff;color:#222;">
      <div style="background:linear-gradient(135deg,#5E4B71,#8B5CF6);padding:24px;border-radius:14px;color:#fff;margin-bottom:20px;">
        <h2 style="margin:0 0 6px;font-size:20px;">New Workshop Registration / Enquiry</h2>
        <p style="margin:0;opacity:.9;font-size:13px;">VGEN Website · ${esc(submittedAt)} IST</p>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px;border:1px solid #eee;border-radius:10px;overflow:hidden;">
        ${row("Full Name", esc(d.name))}
        ${row("Organization / School / College", esc(d.organization))}
        ${row("Designation", esc(d.designation))}
        ${row("Email", esc(d.email))}
        ${row("Phone", esc(d.phone))}
        ${row("City / District", esc(d.city))}
        ${row("State", esc(d.state))}
        ${row("Audience Type", esc(d.audienceType))}
        ${row("Workshops Selected", esc(d.workshops.join(", ")))}
        ${row("Preferred Duration", esc(d.duration))}
        ${row("Expected Participants", esc(d.participants))}
        ${row("Preferred Date", esc(d.workshopDate))}
        ${row("Mode", esc(d.mode))}
        ${row("Requirements / Message", esc(d.message))}
        ${row("Submitted", esc(submittedAt) + " IST")}
      </table>
    </div>`;

  const userHtml = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;padding:24px;background:#ffffff;color:#222;">
      <div style="background:linear-gradient(135deg,#5E4B71,#8B5CF6);padding:28px;border-radius:14px;color:#fff;margin-bottom:20px;text-align:center;">
        <h2 style="margin:0 0 6px;font-size:22px;">Thank You for Contacting VGEN</h2>
        <p style="margin:0;opacity:.9;font-size:13px;">Workshops & Innovation Programs</p>
      </div>
      <p style="font-size:15px;line-height:1.6;">Dear ${esc(d.name)},</p>
      <p style="font-size:14px;line-height:1.7;color:#444;">Thank you for your interest in <strong>VGEN Workshops & Innovation Programs</strong>.</p>
      <p style="font-size:14px;line-height:1.7;color:#444;">We have successfully received your enquiry. Our team will review the details and connect with you shortly.</p>
      <p style="font-size:14px;line-height:1.7;color:#444;">We look forward to helping you bring practical technology learning, innovation, and future-ready experiences to your institution or organization.</p>
      <div style="margin-top:28px;padding-top:18px;border-top:1px solid #eee;font-size:13px;color:#666;">
        Regards,<br/>
        <strong style="color:#5E4B71;">VGEN Team</strong><br/>
        <em>Learn. Grow. Succeed.</em>
      </div>
    </div>`;

  try {
    const resend = new Resend(apiKey);

    const adminSend = resend.emails.send({
      from: "VGEN <contact@vgen.co.in>",
      to: ["contact@vgen.co.in", "contact.vgen@gmail.com"],
      replyTo: d.email,
      subject: "New Workshop Registration / Enquiry – VGEN",
      html: adminHtml,
    });

    const userSend = resend.emails.send({
      from: "VGEN <contact@vgen.co.in>",
      to: [d.email],
      subject: "Thank You for Contacting VGEN",
      html: userHtml,
    });

    const [adminRes, userRes] = await Promise.all([adminSend, userSend]);

    if (adminRes.error) {
      console.error("Resend admin error:", adminRes.error);
      return res.status(502).json({ error: "Failed to send enquiry" });
    }
    if (userRes.error) {
      console.error("Resend auto-reply error:", userRes.error);
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Workshop enquiry handler error:", err);
    return res.status(500).json({ error: "Unexpected error" });
  }
}
