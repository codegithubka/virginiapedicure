# Must be resolved before this site goes public

Nothing here blocks local development. Everything here blocks publishing.

## 1. Condition photos — resolved

The stock and web-sourced photos from `Untitled document.pdf` were deleted and
are NOT used. They have been replaced by four of Virginia's own clinical
photographs, taken in her practice:

| File | Section | Page |
|---|---|---|
| `eelt.jpg` | Eelt | voetklachten |
| `likdoorn.jpg` | Likdoorn | voetklachten |
| `ingroeiende-nagel.jpg` | Ingroeiende nagel | voetklachten |
| `reumavoet.jpg` | Reuma | diabetes-en-reuma |

- **Copyright:** clear. They are her own photographs.
- **AVG / GDPR:** these are photographs of real clients' feet, which is health
  data. The owner has confirmed that permission to publish them online was
  granted. Virginia should keep that consent on file in writing, per person, for
  as long as the photos remain on the site.
- **Metadata:** every file was stripped of EXIF before publishing. The originals
  carried GPS coordinates, which would otherwise have revealed the location where
  each photo was taken.

**Labels were assigned from the images themselves, not from the order they
arrived.** The photos and the label list turned out to be rotated by one
position relative to each other. The mapping now in use:

| Original | Published as | Why |
|---|---|---|
| `IMG_8250` | `reumavoet.jpg` | Severe hallux valgus, prominent bunion, red swollen joint on a clawed second toe. Standsverandering and gewrichtsontsteking; no eelt visible. |
| `IMG_8673` | `eelt.jpg` | Broad, diffuse, round yellow plaque on the ball of the foot. Too large and too diffuse for a likdoorn. |
| `IMG_8674` | `likdoorn.jpg` | Small, sharply demarcated lesion on the side of a toe, at a pressure point between toes. |
| `IMG_0060` | `ingroeiende-nagel.jpg` | Sharply thickened yellow nail curling into the nail fold, with red skin around it. The only photo showing a nail. |

Worth a final confirmation from Virginia, since she knows which client and
condition each photo was taken for.

## 2. ProVoet and Procert logos are not present and not cleared

Neither logo is in the source documents; the original notes annotated them
"Logo van internet". Both organisations issue official member logos to
registered members through the member portal, with usage conditions.
Virginia should download hers from her own member account.

Also verify her KRP (Kwaliteitsregister voor Medisch Pedicures) registration is
current before the site claims it.

## 3. Logo source file

`public/img/logo-mark.png` and `public/img/logo-full.jpg` were cropped out of
`IMG_1408.jpg`, which is a phone screenshot. They are soft at larger sizes.
Ask for the original vector (SVG / AI / EPS) or a PNG with transparency.

## 4. Content still awaiting Virginia's answer

- **Diabetes / reuma wording.** Answered: she supplied a full page of copy on
  both, so she clearly treats these groups. The line asking visitors to mention
  diabetes, reuma or vaatproblemen when booking is now live on voetklachten and
  on the new page. That sentence is MY wording, not hers - she should read and
  approve it. Her own supplied text is reproduced verbatim apart from light
  punctuation tidying.
- **Privacyverklaring.** Drafted, but she must read and approve it before launch.
- **Vergoeding by zorgverzekeraars.** Deliberately absent. Her documents make no
  reimbursement claim, so the site makes none. Only add it if she supplies the
  wording herself.

## 5. Photos still needed

- **A photo of kloven.** Virginia will take one when she next sees a client
  with kloven. Kloven is the only section on voetklachten without an image.

Her portrait is now in place (`public/img/virginia.jpg`), so the hero no
longer shows a placeholder box.

## 6. One tariff question for Virginia

Her latest note says the deelbehandeling is salon-only and that "ambulant it is
only the whole treatment for 60,-". Both ambulant tiers from the original
document have been kept as they were:

- Ambulante behandeling, binnen Bergen: EUR 60,00
- Ambulante behandeling, buiten Bergen: EUR 65,00

She did not mention the EUR 65 buiten-Bergen rate either way, so it has NOT been
removed. Confirm whether it still applies before launch.

## 7. Domain — virginiapedicure.nl

Bought. The build now targets it: `site` is https://virginiapedicure.nl and
`base` is '/'. DNS at GoDaddy is configured and verified.

The custom domain must be entered by hand in the repo under Settings > Pages >
Custom domain. This repo deploys through a GitHub Actions workflow, and GitHub
ignores CNAME files for Actions deploys, so `public/CNAME` does not set it.

Remaining, at the registrar and in the repo settings:

1. Four A records on the apex, host `@`:
   185.199.108.153 / 185.199.109.153 / 185.199.110.153 / 185.199.111.153
2. Four AAAA records on the apex, host `@`:
   2606:50c0:8000::153 / 2606:50c0:8001::153 / 2606:50c0:8002::153 / 2606:50c0:8003::153
3. One CNAME on host `www` pointing to `codegithubka.github.io.`
4. GitHub repo Settings > Pages > Custom domain: virginiapedicure.nl, then
   tick Enforce HTTPS once the certificate is issued.

## 8. Search engines are still blocked

`isPreview` in `src/layouts/Base.astro` is still `true`, which emits
`<meta name="robots" content="noindex, nofollow">` on every page, and
`public/robots.txt` still disallows everything. That was right for the
github.io preview. Flip both when the site is ready to be found on Google —
but not before items 2 to 6 above are settled.
