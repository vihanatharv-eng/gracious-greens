# Sprint 1 — Founder Tasks (Parul + Vihan)

## 1. Resend account (15 min, Vihan) — unblocks newsletter + corporate leads

1. Sign up free at resend.com (3,000 emails/month free)
2. API Keys → Create → copy the key
3. Vercel → gracious-greens-web → Settings → Environment Variables → add `RESEND_API_KEY`
4. Optional but recommended:
   - Audiences → create "Newsletter" → copy ID → add as `RESEND_AUDIENCE_ID`
   - Domains → add graciousgreens.in → add the DNS records it shows via `npx vercel dns add ...` → once verified, add `RESEND_FROM` = `Gracious Greens <hello@graciousgreens.in>`
5. Redeploy. Test: subscribe in the site footer → welcome email with the care-guide PDF should arrive.

## 2. Review collection (30 min, Parul) — send to every past customer

WhatsApp draft (personalise the first line each time):

> Hi ___! Parul here from Gracious Greens 🌿 So glad the [piece name] found a home with you. I'm collecting a few words from early customers for our website — would you mind sharing 1–2 lines about how you found it? A photo of it in your home would make my day. And if you have a spare minute, a Google review would help our tiny business more than you know: [paste GBP review link]

Getting your GBP review link: business.google.com → your profile → "Ask for reviews" → copy link.

**Target: 5+ Google reviews and 3+ website quotes this sprint.**
As quotes come in, send them to Vihan (or Claude) to add to `apps/web/lib/testimonials.ts` — with the customer's permission, name + city.

## 3. Batch shoot #1 (90 min, Parul on camera)

Setup: phone, window light, clean table, one piece being built start-to-finish.

| # | Shot | Duration | Feeds |
|---|---|---|---|
| 1 | Hands arranging moss/pebbles in bowl, top-down | 2–3 min continuous | Build-along Reel (timelapse) |
| 2 | Placing each figurine, close-up | 1 min per figurine | Reel cuts + Pinterest pins |
| 3 | Parul to camera: "This one's for a couple's first home…" (the story) | 30–60 sec | Reel voiceover + founder story |
| 4 | Finished piece — slow orbit, then still shots on white + lifestyle | 2 min + 10 photos | Pins, GBP post, WhatsApp status |
| 5 | Watering/misting demo on any plant | 60 sec | Care-tip Reel |
| 6 | Packing an order (bubble wrap, note card, box seal) | 2 min | "Packing an order" Reel — highest-trust format |

Send all clips/photos to Vihan — captions, cuts, pins, and posts get produced from this one session.

## 4. Google Business Profile (10 min/week, either)

- Respond to every review within 24h (2 lines, warm, mention the piece by name)
- One post per week: this week's build photo + 2 lines + link to the product page
- Add 10+ photos from the batch shoot to the profile
- Q&A: seed 3 questions yourself (Can I order a custom scene? Do you deliver outside NCR? Corporate bulk orders?) and answer them
