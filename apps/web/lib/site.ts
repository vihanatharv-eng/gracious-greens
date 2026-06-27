// Central place for business contact details so the phone/WhatsApp number
// lives in exactly one spot (used by the contact page, product pages, cart,
// and the Grievance Officer block in the legal pages).

export const SITE = {
  owner: "Parul Jain",
  email: "hello@graciousgreens.in",
  phoneDisplay: "+91 95184 24799",
  phoneE164: "919518424799", // country code + number, digits only (for wa.me)
  location: "Palwal, Haryana, India",
  instagramHandle: "gracious.greens",
  instagramUrl: "https://instagram.com/gracious.greens",
} as const;

/** Build a WhatsApp deep link with a pre-filled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${SITE.phoneE164}?text=${encodeURIComponent(message)}`;
}
