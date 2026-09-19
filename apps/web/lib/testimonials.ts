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
    name: "Sangeeta Kaushal",
    context: "WhatsApp customer feedback",
  },
  {
    quote:
      "Thank you so much! I just want to thank you for beautifully converting my thoughts into the form of a beautiful planter. The birthday person was beyond thrilled with it. Your creativity is next level 🌱",
    name: "Dr. Neha Arya",
    context: "Custom birthday gift, via WhatsApp",
  },
  {
    quote:
      "Good morning you are incredible and your talent is also extra ordinary and super. I loved this plant platter.",
    name: "Dr. Aarti Khurana",
    context: "Custom plant platter, via WhatsApp",
  },
  {
    quote:
      "Gracious Greens has truly created a little world in this planter! It's so aesthetic that it has already become a must-have background for my candle videos. The detailing and creativity are just beautiful! Thank you Parul for this gorgeous piece.",
    name: "Nisha Hooda",
    context: "Faridabad, via Instagram",
  },
  {
    quote: "Thanks Parul, ur plants n bacho ka gifts were a hit.",
    name: "Ripul Gupta",
    context: "Gifts for the family, via WhatsApp",
  },
  {
    quote:
      "Absolutely in love with this beautiful jade plant pot. The detailing, the cute little figurines, and the overall aesthetic just bring so much positivity and charm to my space. It's not just a plant — it's a whole vibe! A big heartfelt thank you to Parul di for this lovely plant. It surely was a great gifting option for the special person.",
    name: "Heena Bhatia",
    context: "Jade plant gift, via WhatsApp",
  },
  {
    quote:
      "I recently ordered a custom planter from Parul for my relative's housewarming party, and I couldn't be more impressed! The craftsmanship was absolutely beautiful — elegant, thoughtfully designed, and perfectly suited to the occasion. Every detail, from the choice of materials to the finishing touches, reflected true artistry and care. The planter added such charm to the décor and became an instant favorite among all the guests.",
    name: "Dr. Laxmi Gupta",
    context: "Custom housewarming gift, via WhatsApp",
  },
  {
    quote:
      "Came across ur creativity and impressed. I also have one of ur creative tray gardens.",
    name: "Vibha Bhalla",
    context: "Tray garden customer, via WhatsApp",
  },
  {
    quote:
      "Thank u Parul. I bless you and wish for your business an passion growth. Keep doing good work, you spread colors in lives.",
    name: "Dr. Savita Manchanda",
    context: "via WhatsApp",
  },
];
