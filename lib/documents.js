// Document and committee listings for the Disclosures page, transferred from the
// college's own pages on sasurieengg.com. Files still live on that site; each link
// points to the original. Committee member tables are not reproduced because they carry
// personal mobile numbers and email addresses; the live page is linked instead.

const B = "https://sasurieengg.com";
const U = (path) => `${B}${path}`;

export const STATUTORY_COMMITTEES = [
  {
    tag: "Statutory body",
    title: "Governing Body",
    text: "Ten members, chaired by Shri A.M. Kandaswami, with Dr. R. Kiruba Shankar as Member Secretary. It includes members from the Trust, a management nominee, two educationalists and an industry expert nominated by the Trust, and seats for State Government and Anna University nominees.",
    links: [{ label: "Members, on the About page", href: "/about" }],
  },
  {
    tag: "Statutory body",
    title: "Academic Council",
    text: "Chaired by the Principal, with university nominees, industry experts, an alumni special invitee and senior faculty. It frames regulations on sports and extracurricular activities, recommends new programmes, scholarships and awards, and advises the Governing Council on academic matters.",
    links: [{ label: "Academic Council (PDF) ↗", href: U("/wp-content/uploads/2026/02/Academic-Council.pdf.pdf") }],
  },
  {
    tag: "Statutory body",
    title: "Standing Committee, 2025–2028",
    text: "Chaired by the Principal, with the heads of the CSE, AI and Data Science, ECE, EEE, Civil, MBA, Mechanical and Science and Humanities departments and one further faculty member.",
    links: [{ label: "Standing Committee (PDF) ↗", href: U("/wp-content/uploads/2026/02/Standing-Committee.pdf.pdf") }],
  },
  {
    tag: "Statutory body",
    title: "Finance Committee",
    text: "Three members: the Principal as Chairman, an internal auditor from the Sasurie Group of Institutions, and the Head of the EEE department as senior faculty.",
    links: [{ label: "Finance Committee (PDF) ↗", href: U("/wp-content/uploads/2026/02/Finance-Committee.pdf.pdf") }],
  },
  {
    tag: "Statutory body",
    title: "Boards of Study",
    text: "Six boards covering Civil Engineering, Mechanical Engineering, EEE, ECE, Information Technology, and Science and Humanities, each with a university nominee.",
    links: [{ label: "Board of Study members (PDF) ↗", href: U("/wp-content/uploads/2026/02/Board-of-Study-Members-List-1.pdf") }],
  },
  {
    tag: "Statutory body",
    title: "Result Passing Board",
    text: "Six members: a Chairman, a Vice-Chairman, three staff members and one student member.",
  },
];

export const EOA = [
  ["2025-26", "EOA-Report-2025-26.pdf"],
  ["2024-25", "EOA-Report-2024-2025.pdf"],
  ["2023-24", "EOA-Report-2023-241.pdf"],
  ["2022-23", "AICTE-EOA-Report-22-23.pdf"],
  ["2021-22", "EOA-Report-21-22.pdf"],
  ["2020-21", "EOA_Report_2020-21.pdf"],
  ["2019-20", "EOA-Report_2019-20.pdf"],
  ["2018-19", "EOA-Report_2018-19.pdf"],
  ["2017-18", "EOA-Report-2017-18.pdf"],
  ["2016-17", "EOA-Report-2016-17-.pdf"],
  ["2015-16", "EOA_Report_Sasurie_2015-16.pdf"],
  ["2014-15", "EOA-Report-2014-15.pdf"],
  ["2013-14", "SASURIE-EOA-Report-2013-14.pdf"],
  ["2012-13", "EOA-Report-2012-13.pdf"],
  ["2011-12", "SASURIE-EOA-REPORT-11-12-.pdf"],
  ["2010-11", "AICTE_2010-11.pdf"],
  ["2009-10", "Aicte-2009.pdf"],
  ["2008-09", "Aicte-2008.pdf"],
  ["2007-08", "Aicte-2007.pdf"],
  ["2006-07", "Aicte-2006.pdf"],
  ["2005-06", "Aicte-2005.pdf"],
  ["2004-05", "Aicte-2004.pdf"],
  ["2003-04", "Aicte-2003.pdf"],
  ["2002-03", "Aicte-2002.pdf"],
  ["Approval 2001", "Aicte-2001.pdf"],
  ["Name change approval", "Name-Change-Approval.pdf"],
].map(([label, f]) => ({ label, href: U(`/wp-content/uploads/2025/11/${f}`) }));

export const NIRF = [
  { label: "NIRF 2024-25", href: U("/wp-content/uploads/2025/11/nirf_2025.pdf") },
  { label: "NIRF 2023-24", href: U("/wp-content/uploads/2025/11/nirf_2024.pdf") },
  { label: "Data Capture Sheet 2024-25: Overall", href: U("/wp-content/uploads/2026/04/NIRF-DCS-for-OVERALL.pdf") },
  { label: "Data Capture Sheet 2024-25: Innovation", href: U("/wp-content/uploads/2026/04/NIRF-DCS-for-INNOVATION.pdf") },
  { label: "Data Capture Sheet 2024-25: Engineering", href: U("/wp-content/uploads/2026/04/NIRF-DCS-for-ENGINEERING.pdf") },
  { label: "Data Capture Sheet 2024-25: Management", href: U("/wp-content/uploads/2026/04/NIRF-DCS-for-MANAGEMENT.pdf") },
];

export const AQAR_CRITERIA = [
  "Curricular Aspects",
  "Teaching, Learning and Evaluation",
  "Research, Consultancy and Extension",
  "Infrastructure and Learning Resources",
  "Student Support and Progression",
  "Governance, Leadership and Management",
  "Innovation and Best Practices",
].map((name, i) => ({ label: `Criterion ${i + 1}: ${name}`, href: U(`/aqar-criteria-${i + 1}/`) }));

// NAAC Data Validation and Verification (DVV) clarification files.
const dvv = (group, folder, ids, ext = "pdf") =>
  ids.map((id) => ({ label: id.replace(/_/g, "."), href: U(`/dvv/${folder}/${id}.${ext}`) }));

export const NAAC_DVV = [
  { group: "Extended profile", links: [
    { label: "1.1", href: U("/dvv/ep/1_1.pdf") },
    { label: "1.1a", href: U("/dvv/ep/1_1a.pdf") },
    { label: "1.2", href: U("/dvv/ep/1_2.pdf") },
    { label: "2.1", href: U("/dvv/ep/2_1.pdf") },
    { label: "3.1", href: U("/dvv/ep/3_1.pdf") },
  ] },
  { group: "Criterion 1", links: dvv("", "c1", ["1_2_1", "1_2_2", "1_3_2", "1_4_1"]) },
  { group: "Criterion 2", links: dvv("", "c2", ["2_1_1", "2_1_2", "2_2_1", "2_4_1", "2_4_2", "2_6_3"]) },
  { group: "Criterion 3", links: [
    ...dvv("", "c3", ["3_1_1", "3_2_2"]),
    { label: "3.3.1 (XLS)", href: U("/dvv/c3/3_3_1.xls") },
    ...dvv("", "c3", ["3_3_2", "3_4_3", "3_5_1"]),
  ] },
  { group: "Criterion 4", links: dvv("", "c4", ["4_1_2", "4_3_2", "4_4_1"]) },
  { group: "Criterion 5", links: dvv("", "c5", ["5_1_1", "5_1_2", "5_1_3", "5_1_4", "5_2_1", "5_2_2", "5_3_1", "5_3_2"]) },
  { group: "Criterion 6", links: dvv("", "c6", ["6_2_2", "6_2_2a", "6_2_2b", "6_3_2", "6_3_3", "6_5_2", "6_5_2a"]) },
  { group: "Criterion 7", links: dvv("", "c7", ["7_1_2", "7_1_3", "7_1_3a", "7_1_3b"]) },
];

export const IQAC = {
  vision: "To ensure a quality culture as the prime concern of Sasurie Group of Institutions.",
  mission:
    "To build a deliberate, consistent system that improves academic and administrative performance, and to promote a quality culture by making best practices standard.",
  functions: [
    "Create and apply quality benchmarks and parameters for academic and administrative work.",
    "Foster a learner-centred environment and help faculty adopt participatory teaching methods and technology.",
    "Collect and analyse feedback from stakeholders on quality processes.",
    "Share information on quality indicators with all stakeholders.",
    "Organise workshops and seminars on quality themes and encourage quality circles.",
    "Document programmes that improve quality.",
    "Coordinate quality activities across the institution and spread best practices.",
    "Maintain an institutional database through a management information system.",
    "Conduct academic and administrative audits periodically and follow them up.",
    "Prepare and submit the Annual Quality Assurance Report (AQAR).",
  ],
  documents: [
    {
      group: "IQAC meeting minutes",
      links: [
        ["2023-24", "2023-2024.pdf"], ["2022-23", "2022-2023-1.pdf"], ["2021-22", "2021-2022-1.pdf"],
        ["2020-21", "2020-2021-1.pdf"], ["2019-20", "2019-2020-1.pdf"], ["2018-19", "2018-2019-1.pdf"],
      ].map(([label, f]) => ({ label, href: U(`/wp-content/uploads/2025/10/${f}`) })),
    },
    {
      group: "AQAR by year",
      links: ["2023-2024", "2022-2023", "2021-2022", "2020-2021", "2019-2020", "2018-2019"].map((y) => ({
        label: y.replace(/(\d{4})-(\d{4})/, (_, a, b) => `${a}-${b.slice(2)}`),
        href: U(`/wp-content/uploads/2025/10/AQAR-${y}.pdf`),
      })),
    },
    {
      group: "Annual reports and other documents",
      links: [
        { label: "Annual report 2023-24", href: U("/wp-content/uploads/2025/10/2023-2024-1.pdf") },
        { label: "Annual report 2018-19", href: U("/wp-content/uploads/2025/10/2018-2019-2.pdf") },
        { label: "Organised events", href: U("/wp-content/uploads/2025/10/Organized-events.pdf") },
        { label: "MoUs", href: U("/wp-content/uploads/2025/10/mou-page.pdf") },
        { label: "Best practices I", href: U("/wp-content/uploads/2025/10/bestpract-1.pdf") },
        { label: "Best practices II", href: U("/wp-content/uploads/2025/10/bestpract-2.pdf") },
      ],
    },
  ],
};

export const EXAMS = {
  lede: "The Controller of Examinations office was set up in January 2026 after the college received autonomous status.",
  officers: [
    "Dr. P. Dhanapal, M.E., Ph.D. — Controller of Examinations.",
    "Ms. K. Brindhadevi — Deputy Controller of Examinations.",
  ],
  functions: [
    "Prepare timetables, examination hall arrangements and invigilator assignments for internal and end-semester examinations.",
    "Conduct Continuous Internal Assessment Tests (CIAT) and end-semester examinations.",
    "Process and publish results on time.",
    "Send the list of successful candidates with their CGPA to Anna University, Chennai for provisional and degree certificates.",
    "Issue grade sheets, consolidated statements of grades, transcripts, CGPA-to-percentage conversions, bonafide certificates and online genuineness verification.",
  ],
  documents: [
    {
      group: "Anna University Regulation 2021 (by semester)",
      links: ["I", "II", "III", "IV", "V", "VI", "VII"].map((s) => ({
        label: `Semester ${s}`,
        href: U(`/wp-content/uploads/2026/05/${s}-Semester-Regulation-2021.pdf`),
      })),
    },
    {
      group: "Anna University Regulation 2025 (by semester)",
      links: ["I", "II"].map((s) => ({
        label: `Semester ${s}`,
        href: U(`/wp-content/uploads/2026/05/${s}-Semester-Regulation-2025.pdf`),
      })),
    },
    {
      group: "Schedules, 2026",
      links: [
        { label: "CIAT-I schedule (28–31 July 2026)", href: U("/wp-content/uploads/2026/07/CIAT-I-Schedule.pdf") },
        { label: "End-semester theory hall chart (9 June 2026, forenoon)", href: U("/wp-content/uploads/2026/06/9-Jun-2026-FN.pdf") },
      ],
    },
    {
      group: "Model practical examination schedules",
      links: [
        { label: "Civil", href: U("/wp-content/uploads/2026/04/Civil.pdf") },
        { label: "EEE", href: U("/wp-content/uploads/2026/04/EEE.pdf") },
        { label: "Mechanical", href: U("/wp-content/uploads/2026/04/Mechanical.pdf") },
        { label: "ECE", href: U("/wp-content/uploads/2026/04/ECE.pdf") },
        { label: "CSE branches", href: U("/wp-content/uploads/2026/04/CSE-Branches.pdf") },
      ],
    },
    {
      group: "End-semester practical examination schedules",
      links: [
        { label: "Civil", href: U("/wp-content/uploads/2026/05/Civil-1.pdf") },
        { label: "CSE branches", href: U("/wp-content/uploads/2026/05/CSE-Branches-2.pdf") },
        { label: "ECE", href: U("/wp-content/uploads/2026/05/ECE-1.pdf") },
        { label: "EEE", href: U("/wp-content/uploads/2026/05/EEE-1.pdf") },
        { label: "Mechanical", href: U("/wp-content/uploads/2026/05/Mech.pdf") },
        { label: "I Year B.E./B.Tech.", href: U("/wp-content/uploads/2026/05/Schedule.pdf") },
        { label: "MBA", href: U("/wp-content/uploads/2026/05/MBA-End-Semester-Practical.pdf") },
      ],
    },
  ],
};

export const CIRCULARS = [
  ["Anti-ragging poster", "Anti-Ragging-Poster.pdf"],
  ["Revised procedure and compliance submission letter", "Revised-procedure-Compliance-submission-letter.pdf"],
  ["Invitation: UG VLSI workshop", "Invite_UGVLSI-workshop.pdf"],
  ["Academic calendar 2024-25", "Academic-Calandar-2024-25.pdf"],
  ["ATAL FDP scheme document 2024-25", "ATAL-FDP-Scheme-Document-2024-25.pdf"],
  ["Research guidelines", "Research_Guidelines_E.pdf"],
  ["Gujarat Council on Science and Technology", "Gujrat-Council-on-Science-and-Technology.pdf"],
].map(([label, f]) => ({ label, href: U(`/wp-content/uploads/2025/11/${f}`) }));

export const POLICIES = [
  "Green Campus Management Policy",
  "Health, Safety and Environment Policy",
  "ISR Policy",
  "IT SIM Policy",
  "Print and Media Policy",
  "Research Promotion Policy",
  "Start-up and Incubation Policy",
  "Quality Policy",
  "Carbon Net Zero Policy",
];

export const ANNUAL_ACCOUNTS = [
  { label: "Annual accounts 2022-23", href: U("/wp-content/uploads/2025/11/Annual_Accounts_2022-2023.pdf") },
];

export const COMMITTEES = [
  { label: "Anti-Ragging Committee", href: U("/arc-anti-ragging-committee/") },
  { label: "Anti-ragging complaint form", href: "https://docs.google.com/forms/d/e/1FAIpQLSfxjWUHhNIT_WdTwBgYz_0E3SdqVl83Gi2ZdcpOo1Q2KYmWpg/viewform" },
  { label: "Internal Complaints Committee", href: U("/icc-internal-compliance-committee/") },
  { label: "SC/ST Cell", href: U("/sc-st-committee-2026/") },
  { label: "Grievance Redressal Committee", href: U("/grc-grievance-redressal-committee/") },
  { label: "Students Grievance Redressal Committee", href: U("/sgrc-students-grievance-redressal-committee/") },
  { label: "Complaints cum Redressal Committee", href: U("/complaints-cum-redressal-committee/") },
  { label: "Ombudsperson Committee", href: U("/ombudsperson-committee/") },
  { label: "Women Development Cell", href: U("/committees/women-development-cell/") },
  { label: "Socio-Economically Disadvantaged Groups (SEDGs)", href: U("/committees/socio-economically-disadvantaged-groups/") },
  { label: "RRC / YRC / NSS", href: U("/committees/rrcyrcnss-national-service-scheme/") },
  { label: "Equal Opportunity Cell", href: U("/committees/equal-opportunity-cell/") },
  { label: "Institutional Development Plan", href: U("/committees/institutional-development-plan/") },
  { label: "IPR Cell (PDF)", href: U("/wp-content/uploads/2026/01/IPR-Cell.pdf") },
  { label: "Media Cell (PDF)", href: U("/wp-content/uploads/2026/01/Media-Cell.pdf") },
  { label: "Innovation Cell (PDF)", href: U("/wp-content/uploads/2026/01/Innovation-Cell.pdf") },
  { label: "Institution–Industry Cell (PDF)", href: U("/wp-content/uploads/2026/01/Institution-Industry-cell.pdf") },
  { label: "IQAC Cell (PDF)", href: U("/wp-content/uploads/2026/01/IQAC-Cell.pdf") },
];
