"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/site";
import { track } from "@vercel/analytics";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 18px",
  backgroundColor: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,251,235,0.18)",
  borderRadius: "12px",
  color: "#FEF7E4",
  fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
  fontSize: "14px",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
  fontSize: "12px",
  fontWeight: 500,
  letterSpacing: "0.5px",
  color: "rgba(255,251,235,0.55)",
  marginBottom: "6px",
  textAlign: "left",
};

// Corporate enquiry form — sits on the dark teal strip of /corporate.
// Submits entirely via WhatsApp (no email backend — self-domain email
// delivery to hello@graciousgreens.in proved unreliable against the
// domain's own strict SPF/DMARC policy, and WhatsApp is the channel
// Parul actually checks).
export function CorporateLeadForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const waMessage = [
    `Hi Parul! I'm interested in corporate gifting from Gracious Greens.`,
    `Name: ${name.trim()}`,
    company.trim() ? `Company: ${company.trim()}` : "",
    `Phone: ${phone.trim()}`,
    quantity.trim() ? `Approx. quantity: ${quantity.trim()}` : "",
    message.trim() ? `Details: ${message.trim()}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setStatus("error");
      return;
    }
    track("corporate_lead_submitted");
    track("whatsapp_order_click", { source: "corporate" });
    window.open(whatsappLink(waMessage), "_blank", "noopener,noreferrer");
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div style={{ maxWidth: "480px", margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
            fontSize: "24px",
            color: "#FEF7E4",
            marginBottom: "12px",
          }}
        >
          Opening WhatsApp… 🌿
        </p>
        <p
          style={{
            fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
            fontSize: "15px",
            lineHeight: 1.7,
            color: "rgba(255,251,235,0.7)",
          }}
        >
          If it didn&apos;t open automatically, tap below — your details are pre-filled.
        </p>
        <a
          href={whatsappLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_order_click", { source: "corporate" })}
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "14px 32px",
            border: "1px solid rgba(255,251,235,0.35)",
            color: "#FEF7E4",
            fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
            fontSize: "13px",
            fontWeight: 500,
            borderRadius: "50px",
            textDecoration: "none",
          }}
        >
          Chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ maxWidth: "520px", margin: "0 auto", textAlign: "left" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
        <div>
          <label htmlFor="cl-name" style={labelStyle}>Your name *</label>
          <input id="cl-name" style={inputStyle} value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="cl-company" style={labelStyle}>Company</label>
          <input id="cl-company" style={inputStyle} value={company} onChange={(e) => setCompany(e.target.value)} />
        </div>
        <div>
          <label htmlFor="cl-phone" style={labelStyle}>Phone / WhatsApp *</label>
          <input id="cl-phone" type="tel" style={inputStyle} value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="cl-qty" style={labelStyle}>Approx. quantity</label>
          <input id="cl-qty" style={inputStyle} value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="e.g. 50" />
        </div>
      </div>
      <div style={{ marginBottom: "18px" }}>
        <label htmlFor="cl-msg" style={labelStyle}>Occasion, timeline, branding — anything that helps</label>
        <textarea
          id="cl-msg"
          rows={3}
          style={{ ...inputStyle, resize: "vertical" }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {status === "error" && (
        <p style={{ fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)", fontSize: "13px", color: "#f0a68c", marginBottom: "14px" }}>
          Please add your name and phone number first.
        </p>
      )}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          type="submit"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "16px 40px",
            backgroundColor: "#c2410c",
            color: "#ffffff",
            fontFamily: "var(--font-geist-sans, 'Inter', sans-serif)",
            fontSize: "13px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            borderRadius: "50px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" aria-hidden>
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.477-.937zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          Send via WhatsApp
        </button>
      </div>
    </form>
  );
}
