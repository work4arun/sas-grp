import Image from "next/image";
import Reveal, { Lines, Words } from "./Reveal";
import Tilt from "./Tilt";

const INSTITUTIONS = [
  { src: "/brand/engg.png", name: "Sasurie College of Engineering", campus: "Vijayamangalam", url: "https://sasurieengg.com/" },
  { src: "/brand/arts.png", name: "Sasurie College of Arts and Science", campus: "Vijayamangalam", url: "http://sasuriearts.com" },
  { src: "/brand/pharmacy.png", name: "Sasurie College of Pharmacy", campus: "Vijayamangalam", url: "https://sasurie.com/college-of-pharmacy/" },
  { src: "/brand/nursing.png", name: "Sasurie College of Nursing", campus: "Vijayamangalam", url: "https://sasurie.com/college-of-nursing/" },
  { src: "/brand/group.png", name: "Sasurie College of Business School", campus: "Vijayamangalam", url: "https://sasurie.com/college-of-business-school/" },
  { src: "/brand/engg.png", name: "Sasurie Academy of Engineering", campus: "Coimbatore", url: "https://sasurie.com/sae/" },
  { src: "/brand/arts.png", name: "Sasurie College of Arts, Science & Research", campus: "Coimbatore", url: "https://mediumaquamarine-eagle-903191.hostingersite.com/" },
  { src: "/brand/pharmacy-research.png", name: "Sasurie College of Pharmacy and Research", campus: "Coimbatore", url: "https://sasurie.com/college-of-pharmacy/" },
  { src: "/brand/nursing-research.png", name: "Sasurie College Nursing and Research", campus: "Coimbatore", url: "https://sasurie.com/college-of-education/" },
];

export default function Family() {
  return (
    <section className="family section" id="group">
      <div className="container">
        <div className="section-head">
          <Lines lines={["Our Institutions across", "two vibrant campuses."]} />
          <Words
            className="lede"
            delay={0.2}
            text="Sasurie Group of Institutions brings together world-class colleges in Engineering, Arts & Science, Management, Pharmacy, Nursing, and Education across Vijayamangalam (Tiruppur) and Coimbatore."
          />
        </div>

        <ul className="family-grid">
          {INSTITUTIONS.map((c, i) => (
            <Reveal as="li" key={c.name} variant="scale" delay={(i % 3) * 0.1 + Math.floor(i / 3) * 0.12} className="family-cell">
              <a href={c.url} target="_blank" rel="noopener noreferrer" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                <Tilt max={10} className="logo-tilt">
                  <Image src={c.src} alt={c.name} width={1100} height={268} sizes="(max-width: 700px) 80vw, 360px" />
                </Tilt>
                <span className="here">{c.campus}</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
