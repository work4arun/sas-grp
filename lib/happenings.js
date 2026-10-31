// Content for /happenings. Every entry comes from something the college has published:
// the department pages, the facilities and R&D pages, the circulars and the documents list.
// Dates are given only where the source gives one; the rest are marked as ongoing activity.
//
// `level` ties each entry to one of the four layers of the Sasurie mark (see lib/layers.js):
// 0 Foundation (green), 1 Skills & Competencies (blue), 2 Applied Capability (gold), 3 Career Direction & Impact (red). Entries must stay
// sorted by level, because the arrow climbs from the bottom layer to the top as you scroll.

const SITE = "https://sasurieengg.com";

export const CHAPTERS = [
  { level: 0, layer: "Foundation", name: "Campus and culture" },
  { level: 1, layer: "Skills & Competencies", name: "Learning beyond the syllabus" },
  { level: 2, layer: "Applied Capability", name: "Industry and immersion" },
  { level: 3, layer: "Career Direction & Impact", name: "Milestones and leadership" },
];

export const EVENTS = [
  {
    id: "pongal",
    level: 0,
    kicker: "Culture",
    when: "Festival season",
    title: "Pongal, celebrated on campus",
    text: "Students in traditional dress cook Pongal in the open air and take part in competitions, with prizes presented on stage in front of the whole community.",
    image: "/life/pongal.webp",
    alt: "Students in traditional sarees gathered around a Pongal pot",
    links: [{ label: "See campus life", href: "/life" }],
  },
  {
    id: "sports",
    level: 0,
    kicker: "Sports",
    when: "Through the year",
    title: "Kabaddi, volleyball, football and track",
    text: "Teams train and play on the college grounds, with a gym and indoor games such as carrom for everyone else. A sports-quota scholarship is available to admitted students.",
    image: "/life/sports-kabaddi.webp",
    alt: "Two kabaddi teams in play on the college ground",
    links: [
      { label: "Sports and gym", href: "/facilities" },
      { label: "Scholarships", href: "/admissions" },
    ],
  },
  {
    id: "lectures",
    level: 1,
    kicker: "Workshops",
    when: "Regular",
    title: "Guest lectures, seminars and workshops",
    text: "Departments host lectures by academicians and industry professionals in the air-conditioned seminar halls and auditorium. The invitation to the UG VLSI workshop is published among the college circulars.",
    image: "/life/seminar-hall.webp",
    alt: "The seminar hall set out for a lecture, with a red carpet down the aisle",
    links: [{ label: "UG VLSI workshop invitation (PDF)", href: `${SITE}/wp-content/uploads/2025/11/Invite_UGVLSI-workshop.pdf`, external: true }],
  },
  {
    id: "iitb",
    level: 1,
    kicker: "Research",
    when: "Ongoing",
    title: "IIT Bombay laboratory, and the R&D Cell",
    text: "The computing departments run a laboratory, workshops and seminars in partnership with IIT Bombay. The R&D Cell builds a research culture around it, including Smart India Hackathon participation and patent and IPR programmes.",
    image: "/life/lab-mentor.webp",
    alt: "A faculty member guiding a student at a computer in the laboratory",
    links: [
      { label: "Computer Science and Engineering", href: "/departments/cse" },
      { label: "AI and Data Science", href: "/departments/ai-and-data-science" },
    ],
  },
  {
    id: "conclave",
    level: 2,
    kicker: "Entrepreneurship",
    when: "15 February 2024",
    title: "National Youth Entrepreneurship Conclave",
    text: "Sasurie Institutions hosted the Youth Entrepreneurship Conclave 2024 under the theme Viksit Bharat @2047. The college's Entrepreneurship Development Cell nurtures entrepreneurial skills in students.",
    image: "/life/conclave.webp",
    alt: "The conclave stage, with a banner reading Viksit Bharat at 2047, National Level Youth Entrepreneurship Conclave 2024",
    links: [{ label: "Facilities and incubation", href: "/facilities" }],
  },
  {
    id: "visits",
    level: 2,
    kicker: "Industry",
    when: "Ongoing",
    title: "Industrial visits and industry partners",
    text: "Visits give students practical exposure to emerging technologies, backed by more than 350 industry partners and over 100 MoUs through the Institution–Industry Cell.",
    image: "/life/industrial-visit.webp",
    alt: "A large group of students and staff gathered together on an industrial visit",
    links: [{ label: "Placements and industry", href: "/placements" }],
  },
  {
    id: "autonomy",
    level: 3,
    kicker: "Milestone",
    when: "January 2026",
    title: "Autonomous status conferred",
    text: "The UGC, New Delhi and Anna University, Chennai conferred autonomous status on the college. It now designs its own curriculum and conducts its own examinations, and set up its Controller of Examinations office the same month.",
    image: "/life/campus-avenue.webp",
    alt: "The tree-lined avenue running through the Sasurie campus",
    links: [{ label: "About the college", href: "/about" }],
  },
  {
    id: "alumni",
    level: 3,
    kicker: "Community",
    when: "2022-23 and 2023-24",
    title: "Ceremonies, and the alumni record",
    text: "The college marks occasions with ceremonies on campus and keeps a register of the events it has organised. The Alumni Association publishes a record of its activities each year.",
    image: "/life/ceremony.webp",
    alt: "Staff and guests gathered around a plaque at a ceremony on campus",
    links: [
      { label: "Alumni activities 2022-23 (PDF)", href: `${SITE}/wp-content/uploads/2025/11/5_4_1_aam_2022-2023-1.pdf`, external: true },
      { label: "Alumni activities 2023-24 (PDF)", href: `${SITE}/wp-content/uploads/2025/11/5_4_1_aam_2023-2024-1.pdf`, external: true },
    ],
  },
];

// Published records, listed under the animation so that every happening is reachable without scrolling the stage.
export const RECORDS = [
  { label: "Organised events register", note: "The college's own list of events it has organised.", href: `${SITE}/wp-content/uploads/2025/10/Organized-events.pdf` },
  { label: "Alumni Association activities, 2022-23", note: "Year record from the Alumni Association.", href: `${SITE}/wp-content/uploads/2025/11/5_4_1_aam_2022-2023-1.pdf` },
  { label: "Alumni Association activities, 2023-24", note: "Year record from the Alumni Association.", href: `${SITE}/wp-content/uploads/2025/11/5_4_1_aam_2023-2024-1.pdf` },
  { label: "UG VLSI workshop invitation", note: "Circular for the undergraduate VLSI workshop.", href: `${SITE}/wp-content/uploads/2025/11/Invite_UGVLSI-workshop.pdf` },
  { label: "Computer Science newsletter", note: "Department newsletter from CSE.", href: `${SITE}/wp-content/uploads/2025/10/NEWSLETTER-CSE.pdf` },
  { label: "MoUs", note: "The college's industry and academic MoUs.", href: `${SITE}/wp-content/uploads/2025/10/mou-page.pdf` },
];
