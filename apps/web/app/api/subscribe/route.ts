import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

// Newsletter subscribe endpoint — uses the Resend HTTP API directly (no SDK
// dependency). Requires RESEND_API_KEY in env; optionally RESEND_AUDIENCE_ID
// to store contacts in a Resend Audience, and RESEND_FROM to send from a
// verified domain address.
//
// Env (set in Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY      required for the endpoint to accept subscribers
//   RESEND_AUDIENCE_ID  optional — Resend Audience to add the contact to
//   RESEND_FROM         optional — e.g. "Gracious Greens <hello@graciousgreens.in>"
//                       (domain must be verified in Resend; defaults to
//                       Resend's shared onboarding address, fine for testing)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESEND_API = "https://api.resend.com";

export async function POST(request: Request) {
  let email: unknown;
  try {
    ({ email } = await request.json());
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }
  const subscriber = email.trim().toLowerCase();

  const apiKey = process.env["RESEND_API_KEY"];
  if (!apiKey) {
    // Not configured yet — be honest with the client rather than pretending.
    console.error("[subscribe] RESEND_API_KEY missing — subscriber not stored:", subscriber);
    return NextResponse.json(
      { ok: false, error: "Subscriptions are temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };
  const from = process.env["RESEND_FROM"] ?? "Gracious Greens <onboarding@resend.dev>";

  // 1. Store the contact (if an audience is configured)
  const audienceId = process.env["RESEND_AUDIENCE_ID"];
  if (audienceId) {
    const res = await fetch(`${RESEND_API}/audiences/${audienceId}/contacts`, {
      method: "POST",
      headers,
      body: JSON.stringify({ email: subscriber, unsubscribed: false }),
    });
    if (!res.ok) {
      console.error("[subscribe] audience add failed:", res.status, await res.text());
    }
  }

  // 2. Welcome email with the free care guide (the lead magnet)
  const welcome = await fetch(`${RESEND_API}/emails`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      from,
      to: [subscriber],
      subject: "Welcome to Gracious Greens 🌿 (your free plant care guide inside)",
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #042f2e;">
          <h1 style="font-weight: 400; font-size: 26px;">Welcome to Gracious Greens.</h1>
          <p style="font-family: Arial, sans-serif; font-size: 15px; line-height: 1.7; color: #333;">
            Thank you for joining us. As promised, here's your free
            <strong>Plant Care Guide</strong> — everything you need to keep a
            Money Plant, ZZ, Snake Plant, or Aglaonema thriving with just a few
            minutes of care a month:
          </p>
          <p style="text-align: center; margin: 28px 0;">
            <a href="https://graciousgreens.in/downloads/gracious-greens-plant-care-guide.pdf"
               style="background: #c2410c; color: #fff; padding: 14px 32px; border-radius: 50px; text-decoration: none; font-family: Arial, sans-serif; font-size: 14px;">
              Download the Care Guide (PDF)
            </a>
          </p>
          <p style="font-family: Arial, sans-serif; font-size: 15px; line-height: 1.7; color: #333;">
            Every Gracious Greens piece is a handcrafted miniature scene — a tiny
            world built around someone's story. If you'd like to see what we make:
            <a href="https://graciousgreens.in/shop" style="color: #c2410c;">browse the collection</a>.
          </p>
          <p style="font-family: Arial, sans-serif; font-size: 13px; color: #888; margin-top: 32px;">
            — Parul, Gracious Greens · Palwal, India<br/>
            You're receiving this because you subscribed at graciousgreens.in.
          </p>
        </div>
      `,
    }),
  });
  if (!welcome.ok) {
    console.error("[subscribe] welcome email failed:", welcome.status, await welcome.text());
  }

  // 3. Notify the studio inbox — doubles as a crude subscriber log even
  //    before an Audience is configured.
  await fetch(`${RESEND_API}/emails`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      from,
      to: [SITE.email],
      subject: `New newsletter subscriber: ${subscriber}`,
      text: `${subscriber} subscribed via the graciousgreens.in footer.`,
    }),
  }).catch((e) => console.error("[subscribe] notify failed:", e));

  return NextResponse.json({ ok: true });
}
