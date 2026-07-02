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
};

export const TESTIMONIALS: Testimonial[] = [
  // Example (delete once real ones are in):
  // {
  //   quote: "The little family under the plant looks exactly like us. My mother cried.",
  //   name: "Anita S.",
  //   context: "Delhi",
  //   productSlug: "family-picnic",
  // },
];
