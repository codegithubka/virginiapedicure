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

**One label still to confirm with Virginia.** The photo captioned *likdoorn*
is `IMG_8673` and the one captioned *ingroeiende nagel* is `IMG_8674`. The
message supplying them said "8674 is likdoorn", which would swap the two, but
the images themselves and their position in the message both say otherwise:
8673 shows a round hyperkeratotic lesion on the ball of the foot, which is not
a nail. Swap the `foto` values in `content.json` if she says otherwise.

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

- Portrait of Virginia at work (portrait orientation, ~1000 × 1250 px).
  Currently a labelled placeholder box in the hero.
- Salon interior (optional).

## 6. Domain

Not yet purchased. The site currently runs locally only.
