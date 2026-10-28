import Link from "next/link";
import PageShell from "@/components/PageShell";
import FactCards from "@/components/FactCards";
import PointList from "@/components/PointList";
import Reveal, { Lines, Words } from "@/components/Reveal";
import { FACILITIES } from "@/lib/site";

export const metadata = {
  alternates: { canonical: "/facilities" },
  title: "Facilities | Sasurie Group of Institutions",
  description:
    "Campus facilities across Sasurie Group of Institutions: Central Library, CFRD research cell, Incubation Centre, hostels, sports arenas, GPS fleet and modern laboratories across Tamil Nadu.",
};

const LIBRARY_COLLECTION = [
  "Books: more than 46,000 volumes across basic sciences, engineering and technology, and humanities.",
  "Back volumes: 1,947.",
  "Theses: 1,799.",
  "Print journals: 66 national and 66 international.",
  "E-journals: 572 national and 140 international.",
  "Non-book materials: 3,661, with a digital library of CDs and DVDs and 10 desktops with internet access.",
];

const LIBRARY_SERVICES = [
  "Stock: books are shelved by subject on open-access shelves. Users can search by title, author or publisher on the OPAC, which shows shelf locations.",
  "Reference: encyclopaedias, yearbooks, dictionaries, directories, competitive-examination books, study-abroad guides, atlases and biographies.",
  "Circulation: issue, return, renewal and reservation are computerised with barcodes; students and staff carry barcode stickers on their ID cards.",
  "Technical processing: acquisition on requests from department heads, Dewey Decimal classification and AACR II cataloguing.",
];

const BORROWING = [
  "Teaching staff: up to 10 books for 30 days; reference and non-book materials for 15 days.",
  "UG students: up to 3 books for 15 days; reference and non-book materials for 3 days.",
  "PG students: up to 3 books for 15 days; reference and non-book materials for 3 days.",
];

const INCUBATION_OBJECTIVES = [
  "Build a culture of innovation on campus.",
  "Introduce students to start-ups and grow a lively start-up ecosystem on campus.",
  "Solve real-life problems through mentoring.",
  "Turn ideas into products and provide a platform for commercialisation at low cost.",
];

const INCUBATION_SERVICES = [
  "Access to a modern product innovation centre with an internet-enabled lab.",
  "Help preparing business plans and setting up a company.",
  "Business skills training and mentor support.",
  "Product promotion and help obtaining financial support.",
  "Networking with entrepreneurs, customers and support agencies.",
];

const RND_OBJECTIVES = [
  "Improve the institute's research ability by encouraging staff to publish in reputed conferences and refereed journals.",
  "Develop research skills among faculty and students.",
  "Stay in touch with industry needs to produce new or improved products, processes, systems or services.",
  "Foster research creativity among students and faculty.",
  "Identify budgetary resources and assets to fund research.",
];

const RND_BENEFITS = [
  "Excellence in R&D, technology innovation and business start-ups.",
  "An interdisciplinary culture, ethical research conduct and compliance.",
  "Knowledge and technology transfer with government agencies, research institutions and industry.",
  "Strong scientific results, well-managed projects and grants, and answers to regional economic and societal challenges.",
];

const RND_OUTCOMES = [
  "Better-quality UG and PG projects.",
  "More research proposals, publications and patents.",
  "Student awareness of recent advances in technology.",
  "Interaction with industries and research institutes.",
  "Improved student placements.",
];

const wrap = { display: "grid", gap: "clamp(32px, 5vw, 64px)", marginTop: "clamp(24px, 4vw, 48px)" };

export default function FacilitiesPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["Campus", "and facilities."]} />
            <Words
              className="lede"
              delay={0.2}
              text="Academic, residential and support facilities across our Vijayamangalam and Coimbatore campuses: central libraries, research cells, hostels, transport fleets, healthcare, sports arenas and innovation laboratories."
            />
          </div>
        </div>
        <FactCards
          minWidth={320}
          items={FACILITIES.map((f) => ({
            tag: f.tag,
            title: f.title,
            text: f.text,
            image: f.image,
            imageAlt: f.title,
          }))}
        />
      </section>

      <section className="section" style={{ background: "var(--mist)", borderBlock: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head">
            <Lines lines={["Central", "Library."]} />
            <Words
              className="lede"
              delay={0.2}
              text="The library provides information services and access to digital and printed resources for the institute community. Its housekeeping is computerised and run on library software."
            />
          </div>
        </div>
        <FactCards
          minWidth={300}
          items={[
            {
              tag: "Space and hours",
              title: "815 m², 148 seats",
              text: "Open from 9:00 a.m. to 5:00 p.m. on all working days.",
              color: "var(--blue)",
              rgb: "63, 107, 181",
            },
            {
              tag: "Digital access",
              title: "DELNET and NDL",
              text: "DELNET consortium database subscription, with about 500 e-journals through DELNET and inter-library loan through DELNET and the National Digital Library. Students and faculty can also use e-books, e-journals and NPTEL video courses.",
              color: "var(--green)",
              rgb: "148, 201, 61",
            },
          ]}
        />
        <div className="container" style={wrap}>
          <Reveal>
            <h3 style={{ fontSize: "1.3rem", marginBottom: 6 }}>Collection</h3>
            <PointList items={LIBRARY_COLLECTION} />
          </Reveal>
          <Reveal>
            <h3 style={{ fontSize: "1.3rem", marginBottom: 6 }}>Services and sections</h3>
            <PointList items={LIBRARY_SERVICES} />
          </Reveal>
          <Reveal>
            <h3 style={{ fontSize: "1.3rem", marginBottom: 6 }}>Borrowing rules</h3>
            <PointList items={BORROWING} />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["Incubation", "Centre."]} />
            <Words className="lede" delay={0.2} text="Training to develop business skills: a platform that helps students turn ideas into products." />
          </div>
          <div style={wrap}>
            <Reveal>
              <h3 style={{ fontSize: "1.3rem", marginBottom: 6 }}>Objectives</h3>
              <PointList items={INCUBATION_OBJECTIVES} />
            </Reveal>
            <Reveal>
              <h3 style={{ fontSize: "1.3rem", marginBottom: 6 }}>Pre-incubation services</h3>
              <PointList items={INCUBATION_SERVICES} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--mist)", borderBlock: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head">
            <Lines lines={["Research and", "Development Cell."]} />
            <Words
              className="lede"
              delay={0.2}
              text="The cell supports, coordinates and carries out research and development programmes, and builds the infrastructure and environment that encourage a research culture."
            />
          </div>
          <div style={wrap}>
            <Reveal>
              <h3 style={{ fontSize: "1.3rem", marginBottom: 6 }}>Objectives</h3>
              <PointList items={RND_OBJECTIVES} />
            </Reveal>
            <Reveal>
              <h3 style={{ fontSize: "1.3rem", marginBottom: 6 }}>Benefits</h3>
              <PointList items={RND_BENEFITS} />
            </Reveal>
            <Reveal>
              <h3 style={{ fontSize: "1.3rem", marginBottom: 6 }}>Outcomes</h3>
              <PointList items={RND_OUTCOMES} />
            </Reveal>
          </div>
          <div className="cta-row" style={{ marginTop: "clamp(40px, 6vw, 72px)" }}>
            <Link className="btn btn-primary" href="/admissions">Admissions</Link>
            <Link className="btn btn-ghost" href="/contact">Plan a visit</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
