# Sasurie Group of Institutions: website

Next.js 16.4.2 (App Router) · React 19 · no UI libraries. Fonts (Plus Jakarta Sans, Inter) are fetched from Google at build time and self-hosted; the hero headline font is a local file.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Pages

**`/` — the landing page.** Nav, hero (headline left, climbing arrow right), facts, marquee, the sticky-arrow story of the
four layers (Foundation, Competency, Exposure, Enterprise), programmes, admissions, the Sasurie family and the footer.

The seeded pages below share that landing page's nav, footer, cards and type scale — no new stylesheet rules, so the
look is unchanged. Each one is content transferred from the college's existing site:

| route | what it carries |
|---|---|
| `/about` | history, trust and founder, vision and mission, chairman / secretary / principal, campus facts, accreditations |
| `/departments` | the nine undergraduate departments, M.E. CSE and MBA, and the Centre for Academic Courses |
| `/departments/[slug]` | one page per department (11): vision, mission, objectives, outcomes, laboratories |
| `/happenings` | "Happenings at SAS": eight real happenings told on a pinned stage where the big Sasurie arrow climbs and lights the matching layer as you scroll; records and documents listed beneath |
| `/life` | "Life at SAS": a day in six places, a filterable photo gallery with lightbox (34 photographs), and the college's YouTube uploads behind a click-to-play button |
| `/facilities` | library, hostels, 12 buses, canteen, dispensary and ambulance, ATM, sports and gym, seminar halls, incubation centre, R&D cell, Wi-Fi and power, accessibility |
| `/placements` | the DPCD office, its objectives and what it runs; recruiter contact |
| `/admissions` | TNEA and TANCET routes, UG and PG eligibility, scholarships (STE, sports, differently-abled, single parent), refund policy |
| `/blueprint` | "The Sasurie Blueprint": the four layers as a standalone page (`/leadership` redirects here) |
| `/disclosures` | NAAC (with DVV files), NIRF, AQAR, AICTE EOA for every year since 2001, IQAC, examinations, statutory committees, policies, circulars, accounts, committees and cells |
| `/contact` | phone numbers, emails, address, map link, department inboxes, online services and the call-back form |

## Where to edit

- `lib/site.js`                          seeded content: contacts, facilities, admissions, about, governing council
- `lib/departments.js`                   the 11 department detail pages
- `lib/documents.js`                     disclosures: year-wise documents, IQAC, examinations, committees
- `app/*/page.jsx`                       one file per page above
- `components/PageShell.jsx`             nav + footer for the inner pages (routes instead of anchors)
- `components/FactCards.jsx`             the card grid used by every inner page
- `components/PointList.jsx`             chevron bullet list
- `components/Hero.jsx`                  landing headline, intro, buttons, the climbing arrow
- `components/Facts.jsx`                 the four facts under the hero
- `components/Story.jsx`                 the four layers (years, lead, text, points)
- `components/Programmes.jsx`            landing "Choose the programme that fits your goals" finder: goal filter, one card per programme, each linking to `/departments/[slug]` (data in `lib/programmes.js`: `PROGRAMMES`, `PG_PROGRAMMES`, `GOALS`)
- `components/Happenings.jsx`             the scroll-scrubbed arrow stage on `/happenings` (content in `lib/happenings.js`; entries stay sorted by layer)
- `components/LifeGallery.jsx`            gallery, filters and lightbox on `/life` (photos and captions in `lib/life.js`, files in `public/life/`)
- `components/VideoReel.jsx`              click-to-play YouTube player on `/life` (channel id in `lib/life.js`)
- `components/Admissions.jsx`            landing steps; the call-back form is `AdmissionForm.jsx`
- `components/Family.jsx`                the six Sasurie institutions
- `components/Footer.jsx`                footer, contact details, "Create your future." watermark
- `components/Nav.jsx`                   nav; takes `links`, `logoHref`, `ctaHref`, `ctaLabel` props
- `app/layout.jsx`                       title, description, Open Graph card, canonical URL
- `app/robots.js`, `app/sitemap.js`      crawler files (sitemap lists every route)
- `app/globals.css`                      layout and motion — unchanged by the content work
- `lib/layers.js`                        geometry and colours of the stacked-arrow mark
- `public/brand/`                        institutional logos + `sasurie-og.png` (social card)
- `public/campus/`                       three campus photographs (library, seminar hall, sports)

## Environment

| variable | what it does |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | canonical origin used by metadata, `robots.txt` and `sitemap.xml` (defaults to `https://sasurie.com`, set once in `lib/siteUrl.js`). Every page sets its own canonical URL in its `metadata` |
| `NEXT_PUBLIC_ADMISSION_ENDPOINT` | URL that accepts a JSON `POST` for call-back requests (form relay, CRM webhook, Apps Script). If it is unset or fails, the form hands the details to the admissions desk on WhatsApp instead |
| `NEXT_PUBLIC_ADMISSION_WHATSAPP` | WhatsApp number for that hand-off (defaults to `919442593828`, an admissions line) |

## Content: where every fact comes from

The copy was transferred from the live site (`sasurieengg.com`, crawled 17 Oct 2026) rather than invented.
Spot-check before publishing:

- **Autonomous** — UGC and Anna University conferred autonomous status in January 2026; the Controller of Examinations office was set up in January 2026 and CGPA is still sent to Anna University, Chennai for degree certificates (site: home banner, `examinations`).
- **Founded 2001**, by the Ponmudi Muthusamy Gounder Trust, Tiruppur, founder Chairman Shri A.M. Kandaswami; Secretary Smt. K. Savitha Moganraj; Principal Dr. R. Kiruba Shankar (site: `about-us`, `management`, `principal-message`).
- **Campus** — 10.61 acres near Vijayamangalam, Coimbatore Bypass (NH544), Tiruppur district, Tamil Nadu – 638056 (site: `contact-us`, `about-us`).
- **Programmes** — eight B.E./B.Tech. departments plus Science and Humanities, with M.E. Computer Science and Engineering and MBA (HR / Finance / Marketing / Business Analytics) (site: `ug-courses`, `pg-courses`, department mega-menu). Establishment years are only given where the college states them (CSE/IT 2001, EEE 2002).
- **Eligibility** — UG: Physics + Chemistry + Maths 45% general, 40% BC/MBC/SC/ST, same for three-year diploma; PG: M.E. subject list, MBA degree and TANCET/Consortium CET (site: `admission`).
- **Scholarships** — Sasurie Talent Examination (up to 100% waiver), sports quota 100% waiver, differently-abled and single-parent scholarships; academic-year-wise fee refund policy (site: `admission`).
- **Facilities** — library 46,000+ volumes / 815 m² / 148 seats / DELNET; 12 GPS buses within 50 km; canteen 900 m² seating 600; dispensary with beds and an ambulance; 24-hour ATM; separate hostels; ramps and washrooms for differently-abled students; solar, UPS and inverters (site: `facilities`, `library`).
- **Industry** — 350+ industry partners, 100+ MoUs, Centres of Excellence in Industry 4.0, automation, smart manufacturing and IoT, ₹40 lakh in grants and ₹15 crore of R&D facilities (site: `principal-message`).
- **Placements** — Department of Placement and Career Development, its block with AV facilities, full-time aptitude and soft-skills trainers, campus and off-campus drives (site: `placement`). The college publishes no placement percentages, so none are claimed.
- **Documents** — NAAC (IIQA, SSR, certificate, extended profile), NIRF 2023-24 and 2024-25 with DCS, AQAR 2018-19 → 2023-24, AICTE EOA 2020-21 → 2025-26, IQAC, acts and statutes, Board of Studies, finance committee, admission brochure (site: `naac`, `nirf-ranking`, `aqar`, `eoa`, `policies-strategic-plan`).
- **Contact** — info@sasurie.com, sceprincipal@sasurie.com, 94888 91111 / 94888 92222 / 94888 93333, department inboxes (`scecse@`, `sceece@`, `sceeee@`, `scemech@`, `scecivil@`, `scesh@`, `scemba@`, `sceplacement@`, `coe@`), online application at admissions.sasurie.com, student portal at sasurie.kalvisalai.in.
- **Social** — [Instagram](https://www.instagram.com/sasurieinstitution/), [Facebook](https://www.facebook.com/sasurieinstitution), [LinkedIn](https://www.linkedin.com/company/sasurie-institution/), [YouTube](https://www.youtube.com/@sasurieinstitutions1919), [X](https://twitter.com/sasurie_inst).

### Still to do
- **Document files live on the old site.** The links on `/disclosures` point at `sasurieengg.com/wp-content/uploads/...`; copy the PDFs into `public/` and re-point them when the site moves.
- **Claim check.** The autonomy line, the AICTE approval years, the programme list and the scholarship percentages should be confirmed with the college before publishing.
- Not carried over from the old site: gallery, alumni, careers, faculty rosters (the old site's two faculty tables disagree), the research and industry pages (all "coming soon" there), and the NAAC/AQAR tables themselves.
- Committee member tables are linked, not copied: they hold personal mobile numbers and email addresses of students and outside members.
- The old site's own pages conflict in places. Open items to confirm with the college: library book count (46,468 in text vs 46,901 in its table; this site says "more than 46,000"), the IQAC and R&D Cell pages still naming a former Principal as chair, Civil's establishment year ("2011, along with the institute"), four departments listing the identical nine laboratories, and the AI and DS inbox being `scesh@`.

Claims that were on the old site as template filler (counters reading 0, "Established since 1900", "45 years", "2.4 million graduates") were deliberately left out; the figures above are the ones the college publishes.

### Review follow-ups (28 Oct 2026)
- **Figures still to confirm with the college.** The hero facts, `/placements`, `/about` and the Blueprint panels show 93.12% placement, 92%, 12,000+ alumni, 2,500+ students, 150+ recruiters and 25+ awards. The notes above say the college published none of these placement percentages. Keep only figures with a published source and year; the numbers also disagree across components (92% is a "graduation rate" in one place and a "placement rate" in another).
- **Establishment years** disagree between `lib/departments.js` and `lib/programmes.js` (Cyber Security 2021/2023, Mechanical 2003/2005); only CSE/IT 2001 and EEE 2002 are stated by the college.
- **MBA specialisations** differ between `lib/departments.js`, `lib/programmes.js` and `lib/site.js`.
- **`components/Family.jsx`**: the Coimbatore Arts & Science link is a temporary Hostinger URL, "Nursing and Research" points at the Education page, "Pharmacy and Research" repeats the Vijayamangalam URL, and Business School and Academy of Engineering reuse other institutions' logos.
- **Removed dead links** (404 on 28 Oct 2026): the 2022-23 annual accounts PDF, the IPR Cell PDF and 13 NAAC DVV files. Re-add them in `lib/documents.js` when they are re-published.
- The ambient video is now `public/sasori-lite.mp4` (3.7 MB, with a poster); the 11 MB original `public/sasori.mp4` is unused and can be deleted.
