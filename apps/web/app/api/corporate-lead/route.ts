import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

// Corporate gifting enquiry endpoint — corporate orders are the highest-AOV
// channel, so leads land in the studio inbox immediately via Resend.
// Requires RESEND_API_KEY (same env as /api/subscribe).

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const name = typeof body["name"] === "string" ? body["name"].trim() : "";
  const company = typeof body["company"] === "string" ? body["company"].trim() : "";
  const phone = typeof body["phone"] === "string" ? body["phone"].trim() : "";
  const quantity = typeof body["quantity"] === "string" ? body["quantity"].trim() : "";
  const message = typeof body["message"] === "string" ? body["message"].trim() : "";

  if (!name || !phone) {
    return NextResponse.json(
      { ok: false, error: "Name and phone are required" },
      { status: 400 },
    );
  }
  // Keep payload sane
  if ([name, company, phone, quantity].some((v) => v.length > 200) || message.length > 2000) {
    return NextResponse.json({ ok: false, error: "Input too long" }, { status: 400 });
  }

  const apiKey = process.env["RESEND_API_KEY"];
  if (!apiKey) {
    console.error("[corporate-lead] RESEND_API_KEY missing — lead not delivered:", { name, company, phone, quantity });
    return NextResponse.json(
      { ok: false, error: "Could not submit right now — please WhatsApp us instead." },
      { status: 503 },
    );
  }

  const from = process.env["RESEND_FROM"] ?? "Gracious Greens <onboarding@resend.dev>";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [SITE.email],
      subject: `🏢 Corporate lead: ${company || name} (${quantity || "qty not specified"})`,
      text: [
        `New corporate gifting enquiry from graciousgreens.in:`,
        ``,
        `Name:     ${name}`,
        `Company:  ${company || "—"}`,
        `Phone:    ${phone}`,
        `Quantity: ${quantity || "—"}`,
        ``,
        `Message:`,
        message || "—",
        ``,
        `Reply fast — corporate leads go cold within a day.`,
      ].join("\n"),
    }),
  });

  if (!res.ok) {
    console.error("[corporate-lead] send failed:", res.status, await res.text());
    return NextResponse.json(
      { ok: false, error: "Could not submit right now — please WhatsApp us instead." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
