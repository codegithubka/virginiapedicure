# Build brief: website Virginia Scelso — Medisch Pedicure

You are building a small business website for a solo medical pedicure practice in Bergen (NH), Netherlands. Read this whole brief before writing any code. Ask me about anything marked **[CONFIRM]** before building that part — do not invent a value.

---

## 1. Constraints (non-negotiable)

- **Static site. No backend, no database, no contact form.** Contact happens via `tel:`, `wa.me`, and `mailto:` links only. This is deliberate: it removes all personal-data processing, all form spam, and nearly all GDPR surface for a practice that handles health data.
- **Dutch only.** No language toggle. The clientele is local and Dutch-speaking. (The reference site has an EN toggle; we are not copying that.)
- **No JavaScript required for any content to be readable.** JS is allowed only for progressive enhancement (mobile nav toggle, smooth scroll). If JS fails, the whole site still works.
- **No third-party trackers, no analytics, no cookie banner, no external fonts loaded from Google.** Self-host the fonts. This keeps the site cookie-free, which means no consent banner is legally required — a real advantage for an older audience.
- **All page text lives in one `content.json` file.** No copy hardcoded in templates. See §7.

## 2. Stack

- Astro (static output) or plain HTML/CSS/JS. Prefer Astro for the templating and image optimisation, but do not pull in a UI framework, a CSS framework, or a component library.
- Self-hosted fonts (`.woff2`, subset to latin).
- Deploy target: Cloudflare Pages or Netlify, free tier, connected to a GitHub repo.
- Include a `README.md` written **for a non-developer**, explaining in plain Dutch-friendly English how to change a price or an opening time by editing `content.json`.

## 3. Audience — this drives the design

Mostly people aged 60+ in and around Bergen NH, many with painful feet, some diabetic, some with reduced vision or dexterity. A meaningful share will visit on a phone held at arm's length.

This is the design constraint that matters most:

- Body text minimum **18px**, headings generously sized. Line length under 70 characters.
- Contrast ratio **7:1 or better** for body text (AAA, not AA).
- Tap targets minimum **48×48px**, with real spacing between them.
- The phone number is the single most important element on the site. It must be visible without scrolling on mobile, and tappable everywhere.
- No hover-dependent interactions. No small close buttons. No carousels.
- Respect `prefers-reduced-motion`. Keep motion near zero anyway.

## 4. Visual direction

Derive the palette from the logo (`IMG_1408.jpg` — gold monogram + dark green wordmark on off-white).

**[CONFIRM] — these hex values were sampled by eye from a JPG and are approximate. Open the logo file, sample the actual pixels, and correct them before building:**

| Token | Approx. | Role |
|---|---|---|
| `--gold` | `#B39055` | Accent only: rules, small marks, active states |
| `--green` | `#2B3A35` | Headings, wordmark-matched body text |
| `--paper` | `#FBFAF8` | Page background |
| `--ink` | `#1C2622` | Body text (darker than `--green` for contrast) |

Two more neutrals may be derived as needed. Keep the palette to five values total.

**Type.** The logo pairs a high-contrast serif capital with a widely-tracked sans wordmark. Echo that relationship: one serif for headings, one humanist sans for body. Choose deliberately — do not reach for Playfair/Lato or Cormorant/Inter. The serif should feel calm and clinical rather than decorative wedding-invitation.

**Explicitly avoid** (these read as generated):
- Cream background + high-contrast serif + terracotta accent
- Every section chopped into identical rounded cards with the same soft grey shadow
- Tracked-out ALL-CAPS eyebrow labels above every heading
- Numbered markers (01 / 02 / 03) — nothing on this site is a sequence
- Fade-and-slide-up entrance animations on each section
- A `→` appended to button text

Spend the boldness in one place: the hero. Everything else stays quiet. The logo already carries the identity — the page should defer to it, not compete.

The tagline from the logo, **"Uw voeten in deskundige handen"**, is the strongest line of copy available. Use it.

## 5. Structure — three pages

**`index.html`** (single-page with anchor nav)
1. Header: logo, phone number, WhatsApp link. Sticky on desktop, static on mobile.
2. Hero: name, "Medisch pedicure in Bergen NH", tagline, primary call to action (bellen/WhatsApp). Mention both salon and ambulant (at-home) treatment here — the at-home service is the differentiator and the reference site has no equivalent.
3. Over mij
4. Behandelingen & tarieven
5. Praktische informatie (openingstijden, alleen op afspraak, geen pinautomaat, annuleringsvoorwaarden)
6. Locatie (address + static map link, see §6)
7. Contact
8. Footer: KvK number, links to Voetklachten and Privacy

**`voetklachten.html`** — the educational content on eelt, kloven, likdoorns, ingroeiende/ingegroeide nagels. Separate page, linked from the homepage. Reason: it is long, and the accompanying photos are clinical. Do not put condition photos on the homepage.

**`privacy.html`** — short and honest. Because there is no form and no analytics, this page mostly states that the site collects nothing. Draft it; Virginia should read it before publishing.

## 6. Map

Do **not** embed a Google Maps iframe (the reference site does — it sets cookies and would trigger a consent requirement). Instead: print the address, and link out to Google Maps with a plain anchor. Optionally a static, self-hosted image of the map area.

Note the address is a residential street — confirm with Virginia whether she wants a map pin at all, or address on request only. **[CONFIRM]**

## 7. Content

All of the following goes into `content.json`. Reproduce the Dutch faithfully; correct only obvious typos (e.g. `06-46512650 (afspraak maken of annuleren ook mogelijk via whatsapp)` — fix punctuation, capitalise "WhatsApp"). Do not rewrite her voice into marketing language.

### Over mij (source text — tidy lightly, keep first person)

> Mijn naam is Virginia Scelso en woonachtig in Bergen NH. Ik heb tijdens mijn baan in de thuiszorg de opleiding tot basis pedicure gevolgd en hierna de opleiding tot medisch pedicure. Ik werk nu fulltime met ontzettend veel plezier als medisch pedicure, in mijn salon en merendeel ambulant, dus bij de klanten thuis.
>
> Ik ben aangesloten bij de brancheorganisatie ProVoet en Procert. Dit betekent dat ik als medisch pedicure goed bijgeschoold blijf, zodat ik u optimaal kan en zal behandelen.

### Veel voorkomende klachten
Eelt · Kloven · Likdoorns · Ingroeiende of ingegroeide nagels · Verdikte nagels · Schimmelnagels

### Tarieven

| Behandeling | Prijs |
|---|---|
| Volledige pedicurebehandeling | €47,50 → **€50,00 per 1 november** |
| Ambulante behandeling — binnen Bergen | €60,00 |
| Ambulante behandeling — buiten Bergen | €65,00 |
| Deelbehandeling (één voetprobleem, bv. likdoorn of ingegroeide nagel) | €28,50 |
| Nagelregulatie, ortheses, nagelbeugels, antidruktechniek | In overleg |

**[CONFIRM] — "per 1 november" has no year. I have assumed 1 November 2026. Verify.** Then implement it as two plain values in `content.json` with a comment noting the changeover date, so the price can be swapped by hand. Do **not** write date-based JS logic to switch it automatically — that will silently break.

Description for both full treatments (shared): nagels knippen, indien nodig verdikte nagels verdunnen, mechanisch verwijderen van eelt, likdoorns, ingroeiende teennagels en schimmelnagels, insmeren van de voeten met een hydraterende crème.

### Contact & openingstijden

```
Virginia Pedicure
Jaap Weijandweg 26
1862 XL Bergen
06-46512650  (bellen of WhatsApp)

Maandag    Gesloten
Dinsdag    08:00 – 18:00
Woensdag   08:00 – 18:00
Donderdag  08:00 – 18:00
Vrijdag    08:00 – 17:00
Zaterdag   Gesloten
Zondag     Gesloten

Alleen op afspraak · Geen pinautomaat aanwezig
```

WhatsApp link format: `https://wa.me/31646512650`

### Annuleringsvoorwaarden

> Het kan natuurlijk gebeuren dat een afspraak niet door kan gaan. Laat het mij zo spoedig mogelijk weten. Afspraken kunnen kosteloos worden geannuleerd of verzet tot uiterlijk één werkdag vóór de afspraak. Dit omdat de gereserveerde tijd op zo korte termijn helaas niet meer aan een andere cliënt kan worden aangeboden. Ik hoop op uw begrip.

### Voetklachten page content

**Eelt** — three types: mechanisch (normale verdikking door drukbelasting zoals lopen); pathologisch eelt / hyperkeratose (door onnatuurlijke druk, bv. knellend schoeisel of onjuiste voetstand); fysiologisch eelt (natuurlijke bescherming, niet ziekmakend). Pathologisch eelt kan leiden tot pijn en andere problemen en moet regelmatig verwijderd worden.

**Kloven** — Use the version below. An earlier draft described kloven as caused by uitdroging/wrijving/kou; that version was retracted by the owner and must not be used.

> Er zijn twee soorten kloven die we kunnen onderscheiden: droge kloven en vochtige kloven. Droge kloven zijn scheuren of barsten die zich in de droge huid van de voet vormen. Deze scheuren kunnen soms erg diep zijn en kunnen uiteindelijk gaan ontsteken, wat heel pijnlijk kan zijn. Vochtige kloven ontstaan vaker tussen de tenen, in de zachte huid die zich daar bevindt. Dit komt onder andere door vocht van zweetvoeten of langdurig in het water zijn. Vochtige kloven gaan, in tegenstelling tot de droge variant, vaak gepaard met schimmels. Schimmels houden van vocht en nestelen zich graag tussen de vochtige tenen.

**Likdoorn** (eksteroog) — een eeltknobbel die meestal op de voet verschijnt en ongemak of pijn veroorzaakt. Ontstaat door langdurige druk of wrijving, vaak door slecht passende schoenen.

**Ingroeiende nagel** (pseudo unguis incarnatus) — de zijkant van de nagel drukt in de huid. Kan veel pijn geven; omliggende huid kan rood of gezwollen zijn, maar er is geen ontsteking.

**Ingegroeide nagel** (unguis incarnatus) — het puntje van de nagel groeit in het nagelbed, met ontstekingsverschijnselen, pijn en irritatie. Er kan een wondje ontstaan dat gaat ontsteken waarbij pus uit de huid komt. In dat geval verwijst Virginia eerst door naar de huisarts.

Add a short line at the top of this page making clear it is general information and not a diagnosis, and that people with diabetes, reuma or vaatproblemen should mention this when booking.

## 8. Images — leave slots empty, do not source anything yourself

Build every image slot as a labelled placeholder with correct dimensions and `alt` text written. Do **not** download, generate, or substitute stock images. Output a checklist of what is needed:

| Slot | Status |
|---|---|
| Logo | Have it (`IMG_1408.jpg`) — **[CONFIRM]** ask for the original vector/PNG with transparency; the JPG has a white box |
| Portrait of Virginia | Needed — strongly recommended, builds trust for at-home visits |
| Salon interior | Needed |
| Condition photos (kloven, natte kloven, eelt, likdoorn, ingegroeide nagel, ingroeiende nagel) | Blocked — see below |
| ProVoet logo | Blocked — see below |
| Procert / KRP logo | Blocked — see below |

**Why the condition photos are blocked.** The source document supplies six clinical photos with no stated origin. Two separate problems:
1. If they were taken from the internet, they are someone else's copyrighted work and cannot be used.
2. If they are photos of actual clients' feet, they are health data under the AVG/GDPR. Using them requires explicit, documented, written consent from each person — and a medical practice publishing patient images without it is a serious problem, not a technicality.

Ask Virginia which it is. If she photographed her own clients, she needs signed consent. If neither, the page works fine with no photos at all, or with properly licensed medical stock imagery.

**Why the logos are blocked.** The source document annotates both as "Logo van internet". ProVoet and Procert both issue official member logos to registered members, usually via the member portal, with usage conditions. She should download hers from her member account rather than pulling one off a search result. Also verify her KRP registration is current before making the claim on the site.

Regardless of source: put condition photos behind a click-to-reveal on the voetklachten page. Some visitors will not want them appearing unannounced, and some are visiting because their own feet look like that.

## 9. Legal

- **KvK number must appear on the site.** Dutch businesses are required to state it. **[CONFIRM] — I don't have it.** Footer is the right place.
- **[CONFIRM]** Does she have a business email address? If not, the site can run on phone + WhatsApp alone, but an email address is worth setting up.
- **[CONFIRM]** Does she want to say anything about vergoeding by zorgverzekeraars? The reference site claims treatments are often reimbursed — do **not** copy that claim. Reimbursement depends on the individual's aanvullende verzekering, and for diabetics it usually runs through ketenzorg via a podotherapeut rather than being billed directly. If she wants to mention it, she supplies the wording.
- Do not write testimonials. If she wants them, they must be real and she must have permission. Leave the section out entirely until then.
- Draft `privacy.html`, but mark it clearly for her to read and approve before going live.

## 10. Handoff

Virginia is not technical. Every edit she needs to make — prices, hours, holiday closures — must be a single obvious line in `content.json`. Structure it so that is true, and document it in the README with a worked example ("to change the Tuesday closing time, find this line and change 18:00").

Build it so a git-based CMS (Sveltia CMS or Decap CMS on Netlify) can be added later without restructuring the content. That would let her edit through a web form instead of a file. Do not add it now — just don't preclude it.

## 11. Order of work

Do these as separate steps and stop for review after each. Do not build the whole site in one pass.

1. Ask me the **[CONFIRM]** questions. Wait for answers.
2. Propose the design plan only — palette (resampled from the logo), type choices with rationale, and an ASCII wireframe of the homepage on mobile and desktop. No code yet.
3. Build the homepage.
4. Build voetklachten + privacy.
5. Accessibility and performance pass: contrast check at 7:1, keyboard focus visible, test at 200% browser zoom, check it works with JS disabled.
6. Deployment instructions.
