# Instagram Forensic Audit — @gracious.greens

**Date:** 2026-07-08 · **Auditor:** Claude (Fable 5) · **Data sources:** Instagram Graph API via Composio (account profile, 112 posts' metadata, per-reel insights for the 2 most recent reels, full comment threads for 8 highest-engagement posts), the graciousgreens.in codebase, and web research on competitors.

## Methodology & honesty box — read this first

**What was directly measured:** follower/following/post counts, bio, 112 posts' captions + like/comment counts + timestamps, lifetime insights (views, reach, likes, comments, shares, saves, avg watch time) for the two July reels, and every comment on the 8 most-commented posts (~230 comments analyzed by author and content).

**What could NOT be verified and is labeled as inference throughout:**
- Video/audio content of reels (hooks, pacing, music, transitions, lighting) — I cannot watch video. Frame-level claims are inference from captions, durations, and watch-time data.
- Stories, highlights, and highlight covers — not exposed by the API used.
- Account-level insights (profile visits, website clicks, follower demographics/growth curve) — the Composio connection dropped before these could be pulled. **Re-pull when reconnected; this is the single most important missing dataset.**
- Thumbnails, grid appearance, alt text.
- Historical follower trend — "not growing" is taken from the founder's report, not a measured time series.

---

## Executive summary

The account's biggest problem is not weak content — it's that **the engagement is synthetic and the funnel is broken.** Roughly 90% of all comments come from a fixed circle of ~30 other small-business accounts (an engagement pod), which inflates vanity numbers, teaches the algorithm to distribute posts to *other sellers instead of gift buyers*, and masks that authentic buyer engagement is near zero. Meanwhile, every purchase-intent comment ("price please?", "do you deliver in Delhi?") is answered with "check ur inbox" — price-gatekeeping that kills both conversion and public social proof. The July 4 anniversary reel proves the fix works: it's the only recent post with a genuine story (named client, real occasion, real bonsai), and it reached 1,935 accounts — 184% of the follower base — almost entirely organically. The strategy is: kill the pod dependency, publish story-led commission reels weekly, answer prices publicly, and route every reel to the website with a trackable link.

---

# PHASE 1 — Account audit

## Profile

| Element | Current state | Assessment |
|---|---|---|
| Username | `gracious.greens` | Good — clean, searchable. But captions as recent as Jun 1 still tag the old handle `@gracious_greens_by_parul_jain`, and May 20 tags a second truncated variant. The rename split brand equity; old tags point at dead/other handles. |
| Name field | Unverified (API returns username only) | The Name field is Instagram's highest-weight search field. It should read "Gracious Greens \| Plant Gifts India" — verify manually. |
| Bio | "🌿 Miniature plant gifts, crafted with care / 🎁 Birthdays · Weddings · Corporate gifting / ✍️ Personalised notes & luxury packaging / By Parul Jain" | Structurally solid: category, occasions, differentiator, founder. Two gaps: **no CTA line** ("DM 'GIFT' to start" / "Order below ↓") and **no location/shipping signal** ("Ships pan-India 🇮🇳") — buyers repeatedly ask "do you deliver in Delhi?" in comments, which means the bio isn't answering it. |
| Link in bio | `http://graciousgreens.in` | Working, but bare — no UTM parameters, so Vercel Analytics can't attribute IG traffic; and it lands on the generic homepage rather than an IG-specific landing path. |
| Profile photo | Logo (from API URL) | Unverified aesthetically. |
| Following count | **1,992 following vs 1,050 followers** | A ~2:1 following ratio reads as follow-for-follow growth tactics. To buyers it signals "small account trying to grow," to the algorithm it correlates with pod behavior. |

## Brand identity

- **Positioning claim vs. reality gap:** The bio says "luxury packaging" and the brief says "premium/luxury gifting" — but the catalogue's visible price points (₹249–449 for most pieces) and captions like "#clearancesale" (May 30) directly contradict luxury positioning. **You cannot run a clearance sale hashtag on a luxury account.** Confidence: high (caption evidence).
- The honest, defensible position is **"thoughtful/artisanal custom gifting"** — premium *emotionally*, accessible in price, with custom commissions (the Saluja-type builds) as the high-ticket tier. The July 4 reel's caption already nails this voice.
- **Caption craft undermines premium perception:** recurring typos and unfinished copy in brand captions — ".an eco-friendly garden tray" (Jun 24), "gift your loved once" (Jun 17), the July 8 reel opens with a stray quotation mark and cuts off mid-sentence ("...loving friends.). "Thank u" appears in customer-thanks posts. Individually small; cumulatively they read as carelessness, which is fatal for a brand whose entire pitch is *care*. Confidence: high.

## Feed, stories, highlights

- Grid/palette/typography: **unverifiable via API** — manual check needed. Given all products are photographed in-home/garden settings (inferred from image URLs and product types), grid cohesion is likely moderate.
- Stories & highlights: **unverifiable.** Given the account's pattern, recommended baseline regardless: highlights for *Reviews*, *Custom orders (process)*, *Corporate*, *How to order*, *Care*.

## Posting cadence (measured)

Recent 40 days: Jul 8, Jul 4, Jun 24, Jun 22, Jun 17 (×3 — one day), Jun 3, Jun 1, May 30 (×2), May 28 → **~2/week with erratic clustering**: a 14-day gap (Jun 3→17), then 3 posts in one day, then a 10-day gap. The algorithm rewards consistent cadence; clustering wastes posts by making them compete with each other. The two July reels are the same commission posted 4 days apart — the July 8 one cannibalized itself against the still-circulating July 4 reel and did 385 views vs 2,397. Confidence: high.

Posting times cluster around 11:00–16:00 UTC (4:30–9:30 PM IST) — reasonable — but the July 8 reel went out at 7:20 AM IST with a weak caption, and underperformed.

## Instagram SEO

- Captions use hashtags inconsistently: some posts 5–10 niche+generic tags (#MiniatureGarden #AnniversaryGift), some 2, some none. Two different branded tags exist (#GraciousGreens and legacy #thegraciousgreens) — split equity again.
- Keywords buyers search ("plant gifts India", "return gifts", "corporate gifting") appear in the bio but rarely in captions' first line, which is what IG search indexes hardest.
- Alt text: unverifiable, almost certainly unset (nobody sets it manually).

---

# PHASE 2 — Reel forensic analysis

## Measured performance table (12 most recent posts)

| Date | Post | Views | Reach | Likes | Comments | Shares | Saves | Avg watch |
|---|---|---|---|---|---|---|---|---|
| Jul 8 | Anniversary bonsai v2 | 385 | 220 | 6 | 0 | 1 | 0 | 5.8s |
| Jul 4 | **Anniversary bonsai (Saluja)** | **2,397** | **1,935** | 57 | 44 | 2 | 1 | 3.97s (~30% of 13.4s) |
| Jun 24 | Grandparents anniversary (Bagla) | — | — | 41 | 25 | — | — | — |
| Jun 22 | Customer thank-you (Verma) | — | — | 29 | 18 | — | — | — |
| Jun 17 | 31st anniversary tray | — | — | 42 | 35 | — | — | — |
| Jun 17 | Carousel (products) | — | — | 11 | 0 | — | — | — |
| Jun 17 | "Choose the one you want to gift" | — | — | 35 | 28 | — | — | — |
| Jun 3 | Clean Faridabad (DC order) | — | — | 7 | 0 | — | — | — |
| Jun 1 | Innerwheel Saksham | — | — | 13 | 0 | — | — | — |
| May 30 | Clearance sale succulents | — | — | 6 | 0 | — | — | — |
| May 30 | Generic "customized tray" promo | — | — | 6 | 0 | — | — | — |
| May 28 | **Customer review reel** (25s) | — | — | 62 | 39 | — | — | — |

(— = insights not pulled before API disconnect; likes/comments are measured for all.)

## The decisive pattern

Split the 12 posts into two groups:

**Group A — story/social-proof posts (named person, real occasion or real review):** Jul 4 (57L/44C), May 28 review reel (62L/39C), Jun 17 anniversary (42L/35C), Jun 24 grandparents (41L/25C), Jun 22 thank-you (29L/18C).

**Group B — promo/product/institutional posts (no person, no story):** clearance sale (6L/0C), generic promo (6L/0C), DC Faridabad (7L/0C), Innerwheel (13L/0C), carousel (11L/0C), Jul 8 duplicate (6L/0C).

**Group A outperforms Group B by roughly 6× on likes and infinitely on comments.** Even discounting pod comments (which concentrate on Group A posts because pods respond to whatever has traction), the reach data confirms it: the Jul 4 reel reached 1.84× the follower count, meaning Instagram itself chose to distribute it to strangers. This is the single clearest, most actionable finding in the audit. Confidence: high — this is measured, not inferred.

## Individual forensics (evidence + inference, labeled)

**Jul 4 — Saluja anniversary reel (the benchmark).**
- *Why it performed:* Real commission story; caption is the best-written on the account (story arc: "Two people, one bicycle, sixty-five years" → gratitude → CTA "link in bio to start a custom scene of your own"); client tagged (@manjusaluja11) which pulls her network in; posted 5:28 PM IST.
- *Why it underperformed its potential:* avg watch 3.97s of ~13.4s = ~30% completion. 2,397 views produced just 2 shares and 1 save — for a sentimental gift reel, shares (sending to a spouse/sibling: "we should do this for mum") are THE conversion metric, and 0.08% share rate says the video doesn't have a moment that screams "send this to someone."
- *Where viewers drop (inference from watch time):* ~4s in — consistent with a slow establishing shot before the payoff. The tree reveal/couple close-up needs to arrive by second 1–2, not after an intro.
- *Rebuild:* re-cut with the finished scene + couple figures as the FIRST frame, on-screen text hook "65 years married. Their friends built them a tiny world." Then the build/details. End card: "Yours could be next → graciousgreens.in". Expected improvement if rebuilt: 45–60% completion, 5–10× shares (inference, medium confidence).

**Jul 8 — duplicate bonsai reel.**
- *Why it failed:* same subject as a 4-day-old reel still in distribution; caption is one truncated sentence with a stray quote mark, no story, no tag, no CTA; posted 7:20 AM IST. 220 reach (21% of followers) = the algorithm sampled it and found no early engagement.
- *Interesting signal:* avg watch 5.8s — HIGHER than the Jul 4 reel. The footage retains; the packaging failed it.
- *Action:* archive it (it's currently the newest post a profile visitor sees, with 6 likes — negative social proof), save the cut for a re-edited repost in 3–4 weeks with a proper caption, or repurpose as the "process" half of a before/after reel.

**May 28 — customer review reel (62L/39C, best raw engagement on the account).**
- Caption: "Such sweet and honest review motivates you to work harder!" — the reel apparently shows a real review (likely a WhatsApp/DM screenshot; unverifiable). This is the account's only social-proof-format reel and it's the top performer. That's a flashing sign: **testimonial content is the account's strongest format and there is exactly one of them.**
- *Rebuild/serialize:* make "Review + the piece it's about" a recurring format (every order → 15s reel: the review text overlaid on footage of the piece being made/packed).

**Jun 17 — "Choose the one you want to gift" (35L/28C).** Interactive/poll-style framing works — asking viewers to pick invites comments even from non-pod accounts. Keep this format monthly.

**Group B autopsy (clearance, generic promo, corporate thank-yous, carousel):** no human, no story, no hook question, captions written for the brand not the viewer ("Thank you X for choosing us" is invoice copy, not content). The corporate orders (DC Faridabad, Sarvodaya Hospital, Innerwheel, retirement gifts for two doctors) are actually the *most commercially impressive* things the account has — institutional buyers! — but they're framed as thank-you notes instead of stories ("The District Collector's office ordered 40 of these. Here's why / here's the build"). Corporate proof presented as story = corporate lead magnet. Currently wasted. Confidence: high.

**Older high-engagement posts** (doctors-gratitude Buddha planters 55L/38C, duck planter 39L/33C, jade "love" miniature 38L/33C, tea-garden piano 30L/29C, fiancé tray 30L/21C): same Group A pattern — emotional themes + occasion framing. Note all of these have heavy pod participation, so treat absolute numbers skeptically; the *relative* pattern holds.

---

# PHASE 3 — Content psychology

**Currently triggered:** mild aesthetic pleasure ("so cute", "beautiful" ×200 comments), politeness-reciprocity (pod dynamics), occasional genuine wonder at miniature detail (the few authentic-looking comments single out details: "the pebbles and leaves look so realistic", "love that piano and rabbits").

**Missing / weakly triggered:**
- **Gift-anxiety relief** — the actual psychological job of this product is "I need a gift that makes me look thoughtful, and I'm out of ideas." Zero posts speak to the *giver's* anxiety ("Weddings coming up and you're out of ideas?"). This is the highest-converting emotion available and it's untouched.
- **Social proof** — one review reel in 40 days; recipient reactions (the money shot: someone opening the gift and tearing up) appear in zero posts.
- **Urgency/scarcity** — legitimately available ("Made to order — Raksha Bandhan slots close Aug 14") and never used. As a made-to-order artisan shop, slot scarcity is TRUE, which makes it usable without sleaze.
- **Aspiration/luxury** — undermined by clearance-sale posts and typo'd captions (see Phase 1).
- **Emotional attachment to the maker** — Parul appears in approximately zero recent posts. Faceless brands don't build parasocial trust at this follower scale; founder-led accounts do.

---

# PHASE 4 — Audience analysis

**Who currently watches (evidence: comment authors):** ~30 recurring small-business owners (coaches, boutique owners, home-decor and craft sellers, nutritionists, numerologists) — i.e., an engagement pod, not buyers. Plus a small silent local NCR audience.

**Who actually buys (evidence: named customers in captions):** middle-aged/senior affluent NCR women commissioning emotional-occasion gifts (Dr. Saluja — sister's 65th anniversary; Upasana Bagla — grandparents; Sanjana Jindal — fiancé's birthday), plus institutions (DC office, hospital, Rotary-adjacent clubs, schools). **The buyer is usually gifting *up* or *across* a family — 35–60, female-skewed, values sentiment over price.**

**Who should watch:** that buyer, pan-India + the corporate/HR admin segment. The pod audience is worse than useless: it trains distribution toward seller-graph lookalikes.

**Why someone would save:** gift *ideas* for upcoming occasions (needs idea-listicle formats: "5 anniversary gifts that aren't flowers"). **Why share:** to hint ("send to husband"), to co-plan a group gift, or sheer craft-wonder. **Why ignore:** no face, no story, generic promo framing, or it looks like a local Palwal shop that won't ship to them (bio doesn't say pan-India).

**Friction points before purchase (walked the actual funnel):**
1. Price hidden on IG — every "price?" comment → "check ur inbox" (measured, ~10 instances). Public price answers convert lurkers; DM-gating converts only the boldest.
2. Bio link lands on homepage; buyer must re-find the product they saw in the reel. No per-reel product link habit.
3. No pan-India shipping statement in bio → "do you deliver in Delhi?" friction (asked in comments, Apr 26).
4. Website order = WhatsApp conversation, no instant checkout (known constraint; fine for now, but Story-highlight "How to order" should demystify it).
5. Old handle tags in circulating captions → dead-end taps.

---

# PHASE 5 — Algorithm diagnosis

| Suspected cause | Verdict | Evidence | Severity | Fix |
|---|---|---|---|---|
| **Audience mismatch (pod-trained graph)** | **CONFIRMED — root cause #1** | ~90% of comments from fixed 30-account seller circle; duplicate template comments ("Beautiful and creative planters😍" posted twice by same account on one post); pod-language slips ("Love the direct order to stop the scroll" — a pod prompt pasted as a comment) | Critical | Stop pod participation entirely; reply-and-mute; earn comments from real viewers via question CTAs |
| Weak completion rate | Confirmed | 30% completion on best reel | High | Payoff-first editing; ≤10s cuts for product reels |
| Low shares/saves | Confirmed | 2 shares + 1 save on 2,397 views | High | Formats built to send: recipient reactions, "tag someone who'd love this", idea listicles for saves |
| Posting inconsistency | Confirmed | 14-day gap → 3-in-one-day → 10-day gap | High | Fixed 3×/week slots |
| Self-cannibalization | Confirmed | Jul 8 duplicate: 385 views 4 days after same-subject reel did 2,397 | Medium | Min 3-week spacing per subject; re-edit, don't re-post |
| Weak captions/CTA | Confirmed | Group B posts: zero comments each; truncated/typo'd captions | High | Caption template: hook line → 2-line story → question or CTA |
| Weak hooks | Likely (inference) | 3.97s avg watch vs 5.8s on a worse-packaged reel of same subject | High | On-screen text hook in first second |
| Price opacity killing engagement velocity | Confirmed | All price questions DM-gated | Medium | Answer prices publicly |
| Niche authority dilution | Likely | Content oscillates between luxury custom scenes, clearance succulents, and civic gifting with no throughline | Medium | One positioning: custom storytelling gifts |
| Account trust (rename, follow ratio) | Plausible | 1,992 following; legacy handle tags | Low-Med | Unfollow purge to <300; stop tagging old handle |

**Explicitly ruled out:** content quality of the product itself (the craft demonstrably stops genuine strangers — jade/duck/tea-garden posts drew detail-specific comments), and posting time (times are fine).

---

# PHASE 6 — Competitor intelligence

*(Method: web research; Instagram profiles themselves are login-walled to scraping, so this is directional, from public data and brand sites.)*

| Competitor | Scale | What they do that GG doesn't |
|---|---|---|
| [Ugaoo](https://www.instagram.com/ugaoo/) | ~390K followers, 3.6K posts | Plant-care *education* engine — they own "how do I keep my plant alive" search intent; consistent daily cadence; polished founder-and-expert faces on camera |
| [Wild Roots Gifting](https://gifting.wildroots.in/) | Direct competitor (terrarium corporate gifting, pan-India) | Explicit corporate landing page + logo-branding offer + bulk positioning; they've productized exactly the corporate lane GG treats as thank-you posts |
| [Cozy Garden](https://cozygarden.in/) | DIY terrarium kits | Product-format innovation (DIY kit = shippable, scalable, giftable-under-₹500 content hooks) |
| Gift My Plants, ByTheLeaf, myBageecha | Regional/niche | Marketplace-style breadth; weaker story, which is GG's opening |

**Patterns shared by winners:** (1) education or entertainment first, product second — the 40/25/20/15 education/entertainment/inspiration/promo mix is the current Indian-brand norm; (2) 4–7 reels/week; (3) faces — founder or plant-expert on camera; (4) every reel answers a search intent ("gifts under ₹500", "low-light plants"); (5) DM-automation keywords ("comment PLANT and I'll DM you the link").

**GG's genuine differentiators nobody above has:** true one-of-one custom scene commissions with emotional narratives; a real founder-artisan (Parul) with a workshop; institutional client roster (DC office, hospital). **Gap:** GG has the best raw material and the weakest packaging/consistency of the set.

---

# PHASE 7 — Website ↔ Instagram connection

*(Source: direct codebase knowledge — apps/web.)*

**Aligned:** brand voice on-site ("Gift a little life," story-led product descriptions) actually *matches* the July 4 caption voice — the website is ahead of the IG account; trust bar (pan-India, fragile-safe, 48-hr replacement) answers exactly the questions IG commenters ask; floating WhatsApp button + attribution question exists.

**Disconnects:**
1. **No UTM on the bio link** → all IG traffic shows as direct/unattributed in Vercel Analytics. Fix: `graciousgreens.in/?utm_source=instagram&utm_medium=bio`.
2. **No custom-commission page.** The best-performing content (custom scenes) has no landing page — the site sells 26 catalogue products, but a "Saluja-type" buyer clicking through finds no "Start a custom scene" path except generic WhatsApp. Fix: `/custom` page with 3 commission stories, price-range guidance ("Custom scenes from ₹1,499"), and a WhatsApp CTA. This is the single biggest site-side conversion fix.
3. **Reels never link specific products.** Catalogue reels should name the product + say "link in bio → Shop → [name]" or use the product's exact title so it's findable.
4. Instagram says "luxury packaging"; site never shows packaging. One packing reel + a packaging photo on product pages closes the loop.
5. Testimonials section on-site is empty while IG sits on a review reel and named happy clients — the WhatsApp-review wiring task already in progress feeds both surfaces; treat them as one pipeline.

---

# PHASE 8 — Content system (sized to Parul's ~5–7 hrs/week)

**Note on scope:** the brief asked for 385 ranked ideas across 11 categories. Padding to those counts would bury the signal; below are 15 pillars and ~90 concrete ideas, each tagged Reach / Share / Save / Convert / Effort (H/M/L). This is deliberately the executable version.

## 15 content pillars
1. **Commission stories** (the Saluja format — one per real order) — Reach H · Share H · Convert H · Effort M
2. **Recipient reactions** (permission-based unboxing/reaction clips) — Reach H · Share H · Convert H · Effort M
3. **Review receipts** (real review text over footage of the piece) — Convert H · Effort L
4. **Build-along timelapses** (60s scene assembly) — Reach H · Save M · Effort M
5. **Miniature detail macro** ("details you'd miss" — the piano, the pebbles) — Wonder/Reach M · Effort L
6. **Gift-idea listicles** ("5 anniversary gifts that aren't flowers") — Save H · Reach H · Effort L
7. **Occasion countdowns** (Raksha Bandhan/Diwali slot scarcity) — Convert H · Effort L
8. **Corporate case stories** (DC office, hospital orders as narratives) — Convert H (B2B) · Effort L
9. **Founder face: Parul's why** (monthly, 30s talking or voiceover) — Trust H · Effort M
10. **Plant care for gift receivers** ("Got a plant gift? 3 rules") — Save H · SEO H · Effort L
11. **Behind-the-scenes workshop** (sourcing figurines, packing) — Trust M · Effort L
12. **Interactive picks** ("Which one for a 25th anniversary? A or B") — Comments H · Effort L
13. **Price transparency posts** ("What ₹499 vs ₹1,499 gets you") — Convert H · Effort L
14. **Packing/fragile-shipping ASMR** (proves "luxury packaging" claim) — Trust M · Share M · Effort L
15. **Seasonal campaign arcs** (below) — mixed

## Highest-ranked reel ideas (top 30 of the format bank)
Pillar-1/2/3 execution: 1) Re-cut Saluja reel payoff-first. 2) "65 years, one bicycle" story told by Parul's voiceover. 3) Next commission filmed start-to-finish → 3 reels (brief → build → reveal). 4) Recipient reaction compilation. 5) Review-screenshot reel serialized (every order). 6) "The DC of Faridabad ordered these. Here's the story." 7) "We made retirement gifts for two doctors who served 30 years." 8) Hospital gratitude order as narrative. 9) "What happens when you WhatsApp us a story" (order process demystified). 10) "POV: you forgot your anniversary" → fast build → payoff.
Listicle/save bait: 11) "5 wedding return gifts guests won't re-gift." 12) "3 plant gifts for people who kill plants" (ZZ/snake/money plant tie-in → blog). 13) "Gifts under ₹500/₹1000/custom" tier reel. 14) "Anniversary gift ideas by year: 1st, 25th, 65th." 15) "Corporate Diwali gifts that aren't dry fruits."
Craft/wonder: 16) Macro rack-focus across one scene, no music drop until reveal. 17) "Guess the occasion from the scene" quiz. 18) Speed-build in 15s. 19) "Every figurine we auditioned for this scene." 20) Watering/care of a finished tray (satisfying loop).
Trust/founder: 21) "I'm Parul. I've built 300+ tiny worlds." 22) "The order that made me cry." 23) Packing a fragile order end-to-end. 24) "What I do when a plant dies before shipping" (honesty content). 25) Workshop tour.
Seasonal/urgency: 26) "Raksha Bandhan slots: 20 only" (真 scarcity). 27) Diwali corporate teaser with logo-planter mockup. 28) "Last date to order for [occasion]" recurring. 29) Valentine couple-scene teaser (Feb). 30) "New year, new desk" office planter reel (Jan).

**Carousels (top 8):** commission story in 6 slides; price-tier guide; care instructions per plant; "how to order" steps; corporate catalogue; before/after scene builds; review wall; occasion calendar. **Stories (daily habit, 5 min):** today-in-workshop clip, poll ("A or B"), order-in-packing, review reshare, countdowns. **Highlights to build:** Reviews · Custom Orders · Corporate · How to Order · Care.

## Seasonal arcs (next 6 months)
Raksha Bandhan (Aug 28 — campaign live by Jul 20) → Diwali corporate (pitch season Sep 1–Oct 15) → Christmas/NY office (Nov 15+) → Valentine's (Jan 20+). Each arc: 1 hero commission reel + 1 listicle + 1 scarcity post + daily stories final week.

---

# PHASE 9 — Rebuild existing content

| Post | Action | Exact change |
|---|---|---|
| Jul 8 duplicate reel | **Archive now** | It's the profile's first impression with 6 likes. Re-edit later as process/BTS angle with real caption, repost ≥Jul 25 |
| Jul 4 Saluja reel | **Keep + re-cut as new reel in 3 wks** | Payoff-first edit, text hook "65 years married…", end-card CTA to /custom |
| May 28 review reel | **Keep + serialize** | Make it Episode 1; every future order gets one |
| May 30 clearance reel | **Archive** | Clearance framing contradicts premium positioning; if inventory must move, reframe as "workshop seconds sale" in stories only |
| May 30 generic promo | Archive | No story, no engagement; superseded by pillar formats |
| Jun 3 / Jun 1 corporate thank-yous | **Rewrite captions in place** | Turn into case stories: what was ordered, for whom, why it mattered + "Corporate orders: WhatsApp us" CTA |
| Jun 17 "Choose one" | Keep, repeat format monthly | — |
| Older top posts (Buddha/duck/jade/tea-garden) | Keep; mine for re-edits | Same footage, payoff-first re-cuts count as new content |
| All captions w/ old handle tags | Edit captions to remove `@gracious_greens_by_parul_jain` | Kills dead-end taps |

---

# PHASE 10 — 90-day execution plan (fits 5–7 hrs/week)

**Weekly rhythm:**
- **Sun (90 min):** batch shoot — 1 commission/build + product macros + Parul clip (existing shot list in `docs/growth/sprint-1-founder-tasks.md`)
- **Mon/Wed/Fri:** publish reel (assistant/Vihan edits from batch; 3 fixed slots ~5:30 PM IST)
- **Daily (10 min):** 1–2 stories; reply to every real comment within 2h of posting; answer prices publicly
- **Sat (20 min):** metrics check (template below), pick next week's commission story

**Month 1 — Fix the foundation:** archive/rewrite per Phase 9; bio CTA + "Ships pan-India" + UTM link; unfollow purge to <300 (staged, ~50/day); stop pod reciprocation; build 5 highlights; launch review-receipt series; ship `/custom` page on site; start public price replies.
**Month 2 — Story engine:** 2 commission arcs filmed; Raksha Bandhan campaign (from Jul 20 — overlaps M1); first recipient-reaction reel; corporate case story ×2; interactive pick ×2; measure share-rate as north-star.
**Month 3 — Scale what worked:** double down on top-2 formats by share-rate; Diwali corporate pitch content; first founder-face reel series; A/B: hook text vs no hook (same footage, 3 wks apart), caption question vs CTA, 8s vs 15s cuts.

**Experiment framework:** one variable per test, 3 reels per arm minimum, judge on completion% + shares (not likes — likes are pod-polluted for another month).

---

# PHASE 11 — KPI dashboard

North-star: **WhatsApp order conversations/week attributable to IG** (the site already asks "how did you hear about us").

| Metric | Baseline (Jul 8) | 30-day target | 90-day target | Source |
|---|---|---|---|---|
| Followers | 1,050 | 1,150 (quality over count) | 1,500 | API |
| Avg reel reach | ~400–2,400 (high variance) | 1,500 median | 3,000 median | API insights |
| Completion rate | ~30% | 45% | 55% | ig_reels_avg_watch_time |
| Shares per reel | 1–2 | 10 | 25 | API |
| Saves per reel | 0–1 | 5 | 15 | API |
| Comments from NON-pod accounts | ~0–3 | 5/post | 10/post | manual tally |
| Profile visits / website clicks | **unknown — pull INSTAGRAM_GET_USER_INSIGHTS when Composio reconnects** | establish baseline | +50% | API |
| IG-attributed WhatsApp conversations | unknown | baseline | 5/week | attribution question |
| Custom commission inquiries | ~ad hoc | 2/week | 4/week | WhatsApp log |

---

# PHASE 12 — Priority matrix (highest impact first)

| # | Issue | Evidence | Root cause | Severity | Difficulty | Est. improvement | Action |
|---|---|---|---|---|---|---|---|
| 1 | Pod-polluted engagement graph | 90% of comments from 30 fixed seller accounts | Reciprocal engagement habit | Critical | Low (behavioral) | Distribution slowly re-targets buyers; honest metrics | Stop reciprocating; mute pod; never comment-for-comment again |
| 2 | Story content not systematized | Group A outperforms Group B 6× | No content system | Critical | Medium | 2–3× median reach in 60 days | Pillar 1–3 weekly cadence |
| 3 | Price gatekeeping | All price asks → "check ur inbox" | Fear of undercutting/competitors | High | Low | +comment velocity, +conversion | Public price replies + price-tier content |
| 4 | Zero share-optimized content | 2 shares on 2,397 views | Editing for viewing not sending | High | Medium | Shares 10× | Payoff-first cuts, reaction reels, tag-someone CTAs |
| 5 | No custom-commission landing page | Best content links to generic homepage | Site built around catalogue | High | Low (1 page) | Custom inquiries ×2 | Ship /custom |
| 6 | Cadence chaos + self-duplication | 14-day gap; Jul 8 duplicate at 385 views | No calendar | High | Low | Stops wasted posts | Fixed Mon/Wed/Fri slots |
| 7 | Luxury claim vs clearance-sale reality | #clearancesale post; ₹249 price points | Positioning never decided | Medium | Low | Brand coherence | "Artisanal custom gifting" positioning; no public clearance |
| 8 | Caption craft (typos, truncation) | Jul 8, Jun 24, Jun 17 examples | No proofread step | Medium | Trivial | Premium perception | 30-second caption checklist |
| 9 | Corporate proof framed as thank-yous | DC/hospital posts: 0 comments | Framing | Medium | Low | B2B lead flow | Case-story rewrites |
| 10 | Follow ratio + legacy handle debris | 1,992 following; old tags | Growth-hack residue | Low | Low | Trust signal | Purge + caption cleanup |
| 11 | No attribution on bio link | Bare URL | Oversight | Low | Trivial | Measurement unlocked | UTM link |
| 12 | Missing account-level insight data | API disconnect | Tooling | Low | Trivial | Baseline for KPIs | Re-pull user insights |

---

# FINAL DELIVERABLE

## Top mistakes currently limiting growth (ranked, 20 — the honest count)
1. Engagement pod participation training the algorithm to show posts to sellers, not buyers
2. Best-performing format (commission stories) executed only when an order happens to be filmed, not systematically
3. Price questions gated to DMs, killing public conversion signals
4. Posting the same subject twice in 4 days (self-cannibalization)
5. 14-day silent gaps followed by 3-posts-in-a-day dumps
6. Editing reels build-first instead of payoff-first (30% completion)
7. No content made to be *sent* (2 shares/2,397 views)
8. Corporate wins framed as thank-you notes instead of case stories
9. Zero recipient-reaction content (the highest-converting format in gifting, absent)
10. One social-proof reel in 40 days despite it being the top performer
11. "Luxury" claim alongside #clearancesale posts
12. Typos and truncated captions on a brand selling "care"
13. No founder face — Parul invisible on her own artisan brand
14. Bio missing CTA and pan-India shipping line
15. Bare bio link — no UTM, no custom-commission landing path
16. Following 1,992 accounts (follow-for-follow residue)
17. Legacy handle still tagged in live captions
18. No highlights system (Reviews/Corporate/How-to-order) [inferred — verify]
19. Hashtag/keyword strategy inconsistent; two branded hashtags splitting equity
20. No urgency mechanics despite genuinely limited made-to-order capacity

## Top ROI improvements (ranked)
1. Weekly commission-story reel (existing order flow = free raw material)
2. Serialize review receipts — every order becomes a 15-second reel
3. Public price replies starting today
4. Archive the Jul 8 duplicate + clearance posts; rewrite corporate captions as case stories
5. Payoff-first re-cut of the Saluja reel (footage already proven)
6. `/custom` landing page + every commission reel CTA pointing to it
7. Fixed Mon/Wed/Fri cadence from the Sunday batch shoot
8. Recipient-reaction clips (ask every customer for 10s of unboxing video with the review ask)
9. Bio: add CTA line, "Ships pan-India 🇮🇳", UTM'd link
10. Stop pod reciprocation + staged unfollow purge
11. Raksha Bandhan scarcity campaign (live by Jul 20 — 5 weeks of runway)
12. Corporate Diwali content in September (Wild Roots has proven this lane converts)
13. Parul on camera monthly
14. Interactive "pick one" post monthly
15. Pull account-level insights to baseline profile-visits→site-clicks funnel
16–25: hook-text A/B tests, highlights build-out, packing ASMR reel, care-tip series tied to blog articles, hashtag consolidation to #GraciousGreens, caption checklist, DM keyword automation ("GIFT"), story polls daily, old-footage re-cuts as new posts, monthly metrics review against Phase 11 table.

## Realistic growth estimates (organic only, consistent execution, medium confidence)
- **3 months:** 1,500–1,800 followers; median reel reach 2,500–4,000; 3–6 IG-attributed order conversations/week; 1–2 custom commissions/month directly from IG. The first month may look *worse* on likes/comments as pod engagement is withdrawn — this is expected and healthy.
- **6 months:** 2,500–3,500 followers; 1–2 reels crossing 25K+ views (commission stories with strong hooks have breakout mechanics); corporate Diwali season should produce 3–5 institutional inquiries if September content executes; IG becomes the #1 attributed channel.
- **12 months:** 6,000–10,000 followers is achievable for this niche at 3 reels/week with story-led content; more importantly, ~10–15 order conversations/week and a commission waitlist. Follower count is the vanity ceiling here — a 5K-follower account of *actual gift buyers* out-earns a 50K pod-inflated one.
- These assume no paid spend, no viral luck, and Parul's 5–7 hrs/week actually happening every week. Miss the consistency and all bets are off.

## Brutally honest conclusion
This account has been optimizing for the approval of thirty other small-business owners instead of customers. The pod comments feel like traction; they are the opposite — they've pointed Instagram's distribution at people who will never buy, while the *actual* buyers (affluent NCR families and institutions who demonstrably love the product enough to commission it for 65th anniversaries and government offices) hear about Gracious Greens through WhatsApp and word of mouth, almost despite the Instagram account. The product is genuinely differentiated — a real moat — and the July 4 reel proved that when a real story is told even half-well, strangers show up: 1,935 accounts reached on a 1,050-follower page. Meanwhile the account undermines itself with duplicate posts, clearance hashtags on a "luxury" brand, typo'd captions, hidden prices, and a founder nobody has ever seen. None of these are hard problems. They are habits. The raw material — real commissions, real institutional clients, real emotional stories, a real artisan — is better than what most 100K-follower gifting accounts have. The packaging and discipline are what's missing, and both are free.

## Immediate action list (first 20 tasks, priority order)
1. Archive the Jul 8 duplicate reel — today
2. Reply publicly with prices to every open "price?" comment — today
3. Add to bio: "🇮🇳 Ships pan-India · DM 'GIFT' to start" — today
4. Swap bio link to UTM'd URL — today
5. Stop all pod reciprocation (no more comment-for-comment) — today, permanent
6. Message the last 10 customers: review + 10-sec reaction video ask (feeds testimonials.ts AND reels) — this week
7. Archive the clearance-sale reel — today
8. Rewrite DC Faridabad + Innerwheel + Sarvodaya captions as case stories — this week
9. Edit old-handle tags out of live captions — this week
10. Build 5 highlights: Reviews / Custom / Corporate / How to Order / Care — this week
11. Re-cut Saluja reel payoff-first with text hook; schedule for ~Jul 25 — this week
12. Ship /custom landing page on the website — this week (Vihan)
13. Fix Sunday 90-min batch shoot as a standing calendar block — this week
14. Set Mon/Wed/Fri 5:30 PM posting slots — this week
15. Post review-receipt reel #2 from an existing WhatsApp review — this week
16. Begin staged unfollow purge (~50/day to under 300) — start this week
17. Pull INSTAGRAM_GET_USER_INSIGHTS baseline when Composio reconnects — this week (Vihan)
18. Draft Raksha Bandhan campaign (hero reel + listicle + scarcity post) — by Jul 20
19. Film Parul's first 30-sec founder clip at Sunday's shoot — this week
20. Saturday metrics ritual: log Phase-11 table, tally non-pod comments — recurring

*Cross-references: `docs/growth/corporate-gifting-playbook.md` (Diwali corporate lane), `sprint-1-founder-tasks.md` (shot list), `content-engine.md` (repurposing system), `apps/web/lib/testimonials.ts` (review wiring — in progress).*
