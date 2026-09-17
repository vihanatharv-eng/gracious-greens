// Real customer testimonials — ONLY genuine quotes from actual customers.
// Never invent entries here: fabricated reviews are a legal liability
// (Consumer Protection Act) and a Google structured-data penalty risk.
//
// To add one: get the customer's permission, then append an entry below.
// The homepage section renders automatically once at least one exists.
// `photo` is optional — a customer's photo of the product in their home
// converts far better than a studio shot. Drop the image in
// /public/images/testimonials/ and reference it here.

export type Testimonial = {
  quote: string;
  name: string;
  /** City or short descriptor, e.g. "Delhi" or "Corporate order, Gurugram" */
  context: string;
  /** Slug of the product they bought, if known — links the quote to the product */
  productSlug?: string;
  /** Optional customer photo, e.g. "/images/testimonials/anita-family-picnic.jpg" */
  photo?: string;
  /**
   * 1-5 star rating, ONLY if the customer actually gave one. Powers the
   * Product page's review/aggregateRating schema — a product only gets
   * that markup once it has a real rated testimonial here.
   */
  rating?: 1 | 2 | 3 | 4 | 5;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Thanks Parul Ji for creating such beauties for the anniversary of my parents and uncle and aunty. This was a perfect gift and everyone loved it. Will order more shortly.",
    name: "Ginny Karol",
    context: "Custom anniversary gift, for her parents & uncle-aunty",
  },
  {
    quote:
      "Thank you so much mam... The pot looked beautiful to all and everyone appreciated it.",
    name: "Verified Customer",
    context: "WhatsApp customer feedback",
  },
  {
    quote:
      "Thank you so much! I just want to thank you for beautifully converting my thoughts into the form of a beautiful planter. The birthday person was beyond thrilled with it. Your creativity is next level 🌱",
    name: "Verified Customer",
    context: "Custom birthday gift, via WhatsApp",
  },
];
