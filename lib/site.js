// Content for the Sasurie Group of Institutions website, drawn from the group's
// published portal (sasurie.com) and constituent institutions.

export const SITE = {
  name: "Sasurie Group of Institutions",
  tagline: "Best Educational Institutions in Tamil Nadu",
  autonomy: "Conferred Autonomous Status by UGC & Anna University",
  addressLines: [
    "Coimbatore Bypass (NH544), Vijayamangalam,",
    "Tiruppur district, Tamil Nadu – 638056",
  ],
  campuses: [
    {
      name: "Vijayamangalam Campus",
      address: "Coimbatore Bypass (NH544), Vijayamangalam, Tiruppur Dt, Tamil Nadu – 638056",
      phone: "94888 91111 / 94888 92222 / 94425 93828",
    },
    {
      name: "Coimbatore Campus",
      address: "Coimbatore, Tamil Nadu",
      phone: "94888 91111 / 94888 92222",
    },
  ],
  phones: ["94888 91111", "94888 92222", "94425 93828", "94888 93333"],
  admissionPhones: ["94888 91111", "94888 92222", "94425 93828", "94888 93333"],
  emails: ["info@sasurie.com"],
  applyUrl: "https://admissions.sasurie.com/?utm_source=google&utm_medium=online&utm_campaign=website%20",
  studentLogin: "https://sasurie.kalvisalai.in/mob/#/",
  feePayment: "https://formbuilder.ccavenue.com/live/sasurie-college-of-engineering",
  adminPayment: "https://formbuilder.ccavenue.com/live/admin/",
  admissionBrochure: "https://sasurieengg.com/wp-content/uploads/2025/11/Flyer-college.pdf",
  actsAndStatutes: "https://sasurieengg.com/wp-content/uploads/2025/11/acts-statutes.pdf",
  nirfRanking: "https://sasurieengg.com/nirf-ranking/",
  feedback: {
    student: "https://docs.google.com/forms/d/e/1FAIpQLSejAeUO9HgS6foUt-aq7TrQwimbxjvOjpakGagSU2Nfrg3rhg/viewform",
    faculty: "https://docs.google.com/forms/d/e/1FAIpQLSccO21Rc4hvuNIyL_fwa9GxeJcDyVscsP97jbFefCYxZxrEYA/viewform",
    grievance: "https://docs.google.com/forms/d/e/1FAIpQLSeQdc2f2Ys48T3gQhOt8zK-YH_ST1A4jfh3TWtPq_xhVL3TGQ/viewform",
    antiRagging: "https://docs.google.com/forms/d/e/1FAIpQLSfxjWUHhNIT_WdTwBgYz_0E3SdqVl83Gi2ZdcpOo1Q2KYmWpg/viewform",
    alumniRegistration: "https://forms.gle/iGDtU279swDFtHST6",
  },
  social: [
    { label: "Instagram", href: "https://www.instagram.com/sasurieinstitution/" },
    { label: "Facebook", href: "https://www.facebook.com/sasurieinstitution" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/sasurie-institution/" },
    { label: "YouTube", href: "https://www.youtube.com/@sasurieinstitutions1919" },
    { label: "X", href: "https://twitter.com/sasurie_inst" },
  ],
};

// Slimmed-down header: five primary links, with the rest under "More".
export const NAV_PRIMARY = [
  { href: "/about", label: "About" },
  { href: "/departments", label: "Programmes" },
  { href: "/admissions", label: "Admissions" },
  { href: "/placements", label: "Placements" },
  { href: "/contact", label: "Contact" },
];

export const NAV_MORE = [
  { href: "/blueprint", label: "The Blueprint", note: "True leaders built in layers" },
  { href: "/happenings", label: "Happenings", note: "Events and milestones" },
  { href: "/life", label: "Life at SAS", note: "Campus in photographs" },
  { href: "/facilities", label: "Facilities", note: "Libraries, hostels, research" },
  { href: "/disclosures", label: "Disclosures", note: "NAAC, NIRF, AQAR, approvals" },
];

// Vertical tabs under the landing hero.
export const EXPLORE_TABS = [
  {
    href: "/happenings",
    label: "Happenings",
    kicker: "What's on",
    text: "Conclaves, festivals, sports meets and industrial visits: the moments that shape a year at SAS.",
    image: "/life/conclave.webp",
    color: "var(--red)",
  },
  {
    href: "/life",
    label: "Life at SAS",
    kicker: "Campus",
    text: "Classrooms, labs, hostels, sports grounds and the walk between them, across our campuses.",
    image: "/life/campus-avenue.webp",
    color: "var(--gold)",
  },
  {
    href: "/facilities",
    label: "Facilities",
    kicker: "Infrastructure",
    text: "A 46,000-volume central library, Incubation Centre, CFRD research lab, hostels, GPS fleet and more.",
    image: "/campus/library.webp",
    color: "var(--blue)",
  },
  {
    href: "/disclosures",
    label: "Disclosures",
    kicker: "Accreditation",
    text: "UGC autonomous orders, NAAC, NIRF, AICTE approvals, IQAC and institutional policies.",
    image: "/life/campus-sign.webp",
    color: "var(--green)",
  },
];

// Landing footer: the in-page anchors plus the inner pages.
export const EXPLORE_LANDING = [
  { href: "/", label: "Home" },
  { href: "/blueprint", label: "The Sasurie Blueprint" },
  { href: "/departments", label: "Programmes" },
  { href: "/happenings", label: "Happenings at SAS" },
  { href: "/life", label: "Life at SAS" },
  { href: "/admissions", label: "Admissions" },
  { href: "/#group", label: "Sasurie Group" },
  { href: "/about", label: "About the Group" },
  { href: "/facilities", label: "Facilities" },
  { href: "/placements", label: "Placements" },
  { href: "/disclosures", label: "Disclosures" },
  { href: "/contact", label: "Contact" },
];

export const ABOUT = {
  lede: "Sasurie Group of Institutions was established in 2001 by the Ponmudi Muthusamy Gounder Trust, Tiruppur, under its founder Chairman Shri A.M. Kandaswami, a philanthropist and industrialist. Recognized among the top educational institutions in Tamil Nadu, Sasurie delivers world-class learning across Engineering, Arts & Science, Management, Pharmacy, Nursing, and Education.",
  facts: [
    {
      tag: "Since 2001",
      title: "25+ years of excellence",
      color: "var(--red)",
      rgb: "224, 31, 38",
      text: "Founded by the Ponmudi Muthusamy Gounder Trust, Tiruppur, with more than 350 industry partners and over 100 MoUs across Tamil Nadu.",
    },
    {
      tag: "Campuses",
      title: "Vijayamangalam & Coimbatore",
      color: "var(--green)",
      rgb: "148, 201, 61",
      text: "Two vibrant campuses with advanced laboratories, smart classrooms, hostels, sports arenas, and research centres of excellence.",
    },
    {
      tag: "Accreditations",
      title: "Autonomous & Approved",
      color: "var(--blue)",
      rgb: "63, 107, 181",
      text: "UGC autonomous status for engineering, Anna University & Bharathiar University affiliations, and AICTE, PCI & INC approvals.",
    },
    {
      tag: "Placements",
      title: "93.12% Placement Record",
      color: "var(--gold)",
      rgb: "253, 185, 19",
      text: "Over 1,500 students placed across 150+ recruiting companies, with 100+ stipend internships.",
    },
    {
      tag: "Students",
      title: "Multi-Disciplinary",
      color: "var(--blue)",
      rgb: "63, 107, 181",
      text: "Comprehensive undergraduate and postgraduate programmes spanning Engineering, Arts & Science, Management, Pharmacy, Nursing, and Education.",
    },
    {
      tag: "Alumni",
      title: "12,000+ Alumni",
      color: "var(--gold)",
      rgb: "253, 185, 19",
      text: "An active global alumni network of more than 12,000 successful professionals leading across corporate and public sectors.",
    },
  ],
  vision:
    "To be a premier group of educational institutions fostering academic excellence, innovation, and practical research that meets modern industry challenges and contributes to societal empowerment.",
  mission:
    "To produce innovative professionals with sound subject knowledge, research experience and social character, and to develop their leadership qualities through adequate training, for the sustainable growth of the nation.",
  values: [
    "Academic integrity",
    "Quiet excellence",
    "Collaborative spirit",
    "Critical thinking",
    "Inclusive culture",
    "Social impact",
  ],
  qualityPolicy:
    "Eminence in teaching through quality programmes, to produce self-sustained, adaptable young professionals with social relevance.",
  leadership: [
    {
      role: "Chairman",
      name: "Shri A.M. Kandaswami",
      text: "Founder Chairman of the Ponmudi Muthusamy Gounder Trust. “Education is not merely the acquisition of knowledge, but the transformation of young minds into responsible, skilled and value-driven professionals.” His message links the institution's mission to India's Viksit Bharat 2047 vision, with a focus on innovation, sustainability, entrepreneurship and technology.",
    },
    {
      role: "Secretary",
      name: "Smt. K. Savitha Moganraj",
      text: "“We strive to bridge the gap between classroom learning and real-world application through industry collaboration, internships, skill certification programmes and innovation-driven initiatives.” Her message describes holistic education that builds intellectual growth, professional competence and ethical values.",
    },
    {
      role: "Academic Leadership",
      name: "Distinguished Principals & Faculty",
      text: "Led by eminent academic leaders, PhD supervisors, and AICTE Margadarshak members with over two decades of experience in academia and industry, driving NEP 2020 curriculum, research grants, and industry-institution partnerships.",
    },
  ],
};

export const GOVERNING_COUNCIL = {
  roles: [
    "Approves merit-based scholarships, fellowships, studentships, medals, prizes and certificates.",
    "Approves new degree and diploma programmes across disciplines.",
    "Approves recruitment of teaching faculty and institutional heads following UGC, AICTE and State Government policies.",
    "Approves annual budgets and infrastructure expansions.",
    "Oversees academic excellence, research initiatives and campus governance.",
  ],
  members: [
    "Shri A.M. Kandaswami, Chairman, Sasurie Group of Institutions — Chairman.",
    "Smt. K. Savitha, Secretary, Sasurie Group of Institutions — member from the Trust.",
    "Smt. A.K. Swathi, Trustee — member from the Trust.",
    "Mr. S. Moganraj, eminent professional — nominated by the management.",
    "Prof. Dr. S. Kuppuswami, former Dean and Vice-Chancellor (i/c), Pondicherry University — educationalist nominated by the Trust.",
    "Prof. Dr. E. Balagurusamy, former Vice-Chancellor, Anna University, Chennai — educationalist nominated by the Trust.",
    "Mr. S. M. Sampth Kumar, cyber security expert, formerly of Accenture — industry expert nominated by the Trust.",
    "Dr. R. Kiruba Shankar, Principal, Sasurie College of Engineering — Member Secretary.",
  ],
};

export const FACILITIES = [
  {
    tag: "Library",
    title: "Central Library & Digital Hub",
    text: "A collection of more than 46,000 volumes across 815 m² with 148 reading seats, and DELNET consortium access to scholarly databases and full-text journals.",
    image: "/campus/library.webp",
  },
  {
    tag: "Hostel",
    title: "Hostels",
    text: "Separate on-campus hostels for boys and girls, with hygienic dining, Wi-Fi, and 24/7 security and discipline.",
  },
  {
    tag: "Transport",
    title: "Campus Transport",
    text: "A fleet of 12 GPS-enabled buses serving Tiruppur, Coimbatore, Erode and nearby areas within a 50 km radius.",
  },
  {
    tag: "Canteen",
    title: "Canteen & Dining",
    text: "A 900 m² cafeteria seating 600, with hygienic multi-cuisine food, purified drinking water and modern cooking equipment.",
  },
  {
    tag: "Health",
    title: "Dispensary and Ambulance",
    text: "A campus dispensary with inpatient beds, qualified medical staff, and an ambulance on standby 24/7.",
  },
  {
    tag: "Banking",
    title: "24-hour ATM",
    text: "An on-campus ATM, available to hostellers and day scholars alike.",
  },
  {
    tag: "Sports",
    title: "Sports and Gymnasium",
    text: "Coaching in sports and athletics under qualified Physical Directors, with cricket, football, basketball grounds, gymnasiums and indoor sports halls.",
    image: "/campus/sports.webp",
  },
  {
    tag: "Laboratories",
    title: "Seminar Halls & Modern Labs",
    text: "Air-conditioned seminar halls, auditoriums, departmental laboratories, and high-performance computing centres with gigabit internet.",
    image: "/campus/seminar-hall.webp",
  },
  {
    tag: "Innovation",
    title: "Incubation Centre",
    text: "A platform for transforming student ideas into viable products and start-ups, with mentorship and networking opportunities.",
  },
  {
    tag: "Research",
    title: "Research & Development Cell (CFRD)",
    text: "Set up to promote, coordinate and implement R&D programmes, funded research projects, Smart India Hackathons, and patent filings.",
  },
  {
    tag: "Infrastructure",
    title: "Connectivity, Power & Accessibility",
    text: "Campus-wide high-speed Wi-Fi, solar power generation, backup generators, and barrier-free ramps and washrooms for differently-abled students.",
  },
  {
    tag: "Enterprise",
    title: "Centres of Excellence & Industry Tie-ups",
    text: "Centres of Excellence in Industry 4.0, IoT, automation, and IBM partnerships that give students hands-on exposure to emerging technologies.",
  },
];

export const PLACEMENT = {
  lede: "With a strong industry network, Sasurie Group of Institutions prepares its graduates for placements and career pathways. Rigorous training, Centres of Excellence, and corporate tie-ups build readiness for global success.",
  stats: [
    { value: "150+", label: "Recruiting Companies" },
    { value: "1,500+", label: "Students Placed" },
    { value: "93.12%", label: "Placement Percentage" },
    { value: "100+", label: "Internships with Stipend" },
    { value: "12,000+", label: "Global Alumni Network" },
  ],
  overview: [
    "The Department of Placement and Career Development (DPCD) is led by seasoned Directors and full-time coordinators with dedicated corporate relations blocks for presentations, written tests, group discussions and interviews.",
    "The department systematically develops students' technical competence, problem-solving skills, and soft skills from the first year onwards.",
  ],
  objectives: [
    "Develop technical knowledge and corporate-readiness skills through continuous training.",
    "Build interpersonal skills, self-presentation, professional attitude, and career planning.",
    "Place students with top multinational corporations, Fortune 500 companies, and emerging start-ups.",
  ],
  highlights: [
    "150+ recruiting companies visiting campus annually.",
    "1,500+ successful placements.",
    "Full-time trainers for aptitude, coding, soft skills and interview simulations.",
    "Over 100 paid internships with industry stipends.",
  ],
  contact: { email: "sceplacement@sasurie.com", phone: "+91 94425 93803" },
  note: "For corporate recruitment drives, campus placements and internship enquiries, please contact the placement office.",
};

export const ADMISSION = {
  lede: "Admissions are open across all colleges of the Sasurie Group of Institutions. Submit your application online or speak to our admission counsellors.",
  steps: [
    {
      title: "Choose your programme and institution",
      text: "Select from our wide spectrum of programmes in Engineering, Arts & Science, Management, Pharmacy, Nursing, or Education across our Vijayamangalam and Coimbatore campuses.",
    },
    {
      title: "Apply online or visit campus",
      text: "Apply online at admissions.sasurie.com, or register directly at the admissions desk. Counselling seats are filled as per university norms.",
    },
    {
      title: "Submit your documents",
      text: "Submit your Class 10/12 mark sheets, transfer certificate, and relevant credentials for quick verification.",
    },
    {
      title: "Confirm your seat & scholarship",
      text: "Take advantage of the Sasurie Talent Examination (STE) for merit scholarships up to 100% fee waiver, plus sports-quota, differently-abled, and single-parent scholarships.",
    },
  ],
  ugEligibility: [
    { category: "Engineering (B.E. / B.Tech.)", hsc: "TNEA counselling / Class 12 PCM minimum 45% (40% for reserved categories)", diploma: "Lateral entry available for polytechnic diploma holders" },
    { category: "Arts, Science & Computing", hsc: "Class 12 pass in relevant stream as per university norms", diploma: "Direct entry" },
    { category: "Pharmacy (B.Pharm)", hsc: "Class 12 with Physics, Chemistry and Biology / Mathematics", diploma: "D.Pharm lateral entry available" },
    { category: "Nursing (B.Sc. Nursing)", hsc: "Class 12 with Physics, Chemistry and Biology with minimum 45%", diploma: "Recognised board" },
  ],
  ugNote: "These are minimum eligibility requirements. Seats are allotted under government counselling and institutional quota.",
  pgEligibility: [
    { course: "M.E. Computer Science and Engineering", requirement: "B.E./B.Tech. in relevant engineering branches or MCA / M.Sc. IT with valid qualifying score." },
    { course: "MBA (Digital Marketing / Logistics / Finance / HR / Marketing)", requirement: "Any recognised Bachelor's degree (10+2+3 or equivalent) with minimum percentage of marks." },
  ],
  scholarships: [
    { title: "Sasurie Talent Examination (STE)", text: "An all-India admission test offering merit scholarships with up to a 100% tuition fee waiver." },
    { title: "Sports Quota", text: "100% fee waiver for state and national-level sports achievers." },
    { title: "Differently-abled Students", text: "Special scholarships supported by barrier-free campus infrastructure." },
    { title: "Single Parent Support", text: "Need-based scholarships for students from single-parent households." },
  ],
  refund: "Fee refunds on withdrawal follow statutory university and regulatory guidelines.",
  refundPolicyUrl: "https://sasurieengg.com/wp-content/uploads/2025/11/Refund-policy-SCE-final.pdf",
  brochureUrl: "https://sasurie.com/wp-content/uploads/2025/11/Flyer-college.pdf",
};

export const DISCLOSURES = [
  {
    group: "NAAC",
    note: "National Assessment and Accreditation Council documents: the IIQA (Institutional Information for Quality Assessment), the SSR (Self Study Report), the accreditation certificate and the extended profile.",
    href: "https://sasurieengg.com/naac/",
  },
  {
    group: "NIRF",
    note: "National Institutional Ranking Framework submissions for 2023-24 and 2024-25, with Data Capture Sheets for the overall and innovation categories.",
    href: "https://sasurieengg.com/nirf-ranking/",
  },
  {
    group: "AQAR",
    note: "Annual Quality Assurance Reports for 2018-19 to 2023-24, covering criteria 1 to 7.",
    href: "https://sasurieengg.com/aqar/",
  },
  {
    group: "AICTE Extension of Approval",
    note: "Extension of Approval documents for 2020-21 to 2025-26.",
    href: "https://sasurieengg.com/eoa/",
  },
  {
    group: "Policies and Strategic Plan",
    note: "Institutional policies and the strategic plan.",
    href: "https://sasurieengg.com/policies-strategic-plan/",
  },
  {
    group: "IQAC",
    note: "The Internal Quality Assurance Cell: composition, minutes and quality initiatives.",
    href: "https://sasurieengg.com/internal-quality-assurance-cell/",
    file: { label: "IQAC Cell (PDF)", href: "https://sasurieengg.com/wp-content/uploads/2026/01/IQAC-Cell.pdf" },
  },
  {
    group: "Acts and Statutes",
    note: "The college's acts and statutes.",
    href: "https://sasurieengg.com/wp-content/uploads/2025/11/acts-statutes.pdf",
  },
  {
    group: "Board of Studies",
    note: "List of Board of Studies members.",
    file: { label: "Board of Studies Members List (PDF)", href: "https://sasurieengg.com/wp-content/uploads/2026/02/Board-of-Study-Members-List-1.pdf" },
  },
  {
    group: "Finance Committee",
    note: "Finance Committee records.",
    file: { label: "Finance Committee (PDF)", href: "https://sasurieengg.com/wp-content/uploads/2026/02/Finance-Committee.pdf.pdf" },
  },
  {
    group: "Institution–Industry Cell",
    note: "The cell that manages industry partnerships, internships and MoUs.",
    file: { label: "Institution–Industry Cell (PDF)", href: "https://sasurieengg.com/wp-content/uploads/2026/01/Institution-Industry-cell.pdf" },
  },
  {
    group: "Examinations",
    note: "The Controller of Examinations office, established in January 2026 after the college received autonomous status. Results are compiled here and sent to Anna University, Chennai for provisional and degree certificates.",
    href: "https://sasurieengg.com/examinations/",
  },
  {
    group: "Admission brochure",
    note: "The college's admission brochure (PDF).",
    href: "https://sasurieengg.com/wp-content/uploads/2025/11/Flyer-college.pdf",
  },
];

export const DEPARTMENT_CONTACTS = [
  { name: "Group Admissions Office", email: "info@sasurie.com", scope: "Admissions across all institutions and campuses." },
  { name: "Sasurie College of Engineering", email: "sceprincipal@sasurie.com", scope: "Engineering and autonomous institution enquiries." },
  { name: "Sasurie College of Arts & Science", email: "info@sasurie.com", scope: "Arts, Science and Commerce programme enquiries." },
  { name: "Sasurie College of Pharmacy", email: "info@sasurie.com", scope: "B.Pharm and pharmacy research admissions." },
  { name: "Sasurie College of Nursing", email: "info@sasurie.com", scope: "B.Sc. Nursing and healthcare programme enquiries." },
  { name: "Sasurie College of Business School", email: "scemba@sasurie.com", scope: "MBA and executive management programmes." },
  { name: "Placement & Corporate Relations (DPCD)", email: "sceplacement@sasurie.com", scope: "Campus recruitment and corporate partnerships." },
  { name: "Controller of Examinations", email: "coe@sasurie.com", scope: "Examination, evaluation and results enquiries." },
  { name: "Computer Science and Engineering", email: "scecse@sasurie.com", scope: "Academic enquiries for CSE & AI programmes." },
  { name: "Electronics & Communication", email: "sceece@sasurie.com", scope: "Academic enquiries for ECE department." },
  { name: "Electrical & Electronics", email: "sceeee@sasurie.com", scope: "Academic enquiries for EEE department." },
  { name: "Mechanical Engineering", email: "scemech@sasurie.com", scope: "Academic enquiries for Mechanical department." },
];
