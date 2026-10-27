import Image from "next/image";
import Reveal from "./Reveal";

const WORDS = ["Create", "your", "future."];

const EXPLORE = [
  { href: "#programmes", label: "Programmes" },
  { href: "#admissions", label: "Admissions" },
  { href: "#group", label: "Sasurie group" },
];

export default function Footer({ exploreLinks = EXPLORE, homeHref = "#top" }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <Reveal className="footer-brand">
          <Image src="/brand/group-clear.png" alt="Sasurie Group of Institutions" width={1100} height={241} />
          <p>
            <strong>Vijayamangalam Campus:</strong> Coimbatore Bypass (NH544), Tiruppur Dt – 638056<br />
            <strong>Coimbatore Campus:</strong> Coimbatore, Tamil Nadu
          </p>
        </Reveal>
        <Reveal className="footer-links" delay={0.1}>
          <h3>Explore</h3>
          {exploreLinks.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {l.label}
            </a>
          ))}
        </Reveal>
        <Reveal className="footer-links" delay={0.2}>
          <h3>Connect & Services</h3>
          <a href="https://admissions.sasurie.com/?utm_source=google&utm_medium=online&utm_campaign=website%20" target="_blank" rel="noreferrer">Apply online ↗</a>
          <a href="https://formbuilder.ccavenue.com/live/sasurie-college-of-engineering" target="_blank" rel="noreferrer">Fee Payment (CCAvenue) ↗</a>
          <a href="https://sasurieengg.com/wp-content/uploads/2025/11/Flyer-college.pdf" target="_blank" rel="noreferrer">Admission Brochure (PDF) ↗</a>
          <a href="tel:9488891111">Call 94888 91111</a>
          <a href="tel:9488892222">Call 94888 92222</a>
          <a href="mailto:info@sasurie.com">info@sasurie.com</a>
          <a href="https://www.instagram.com/sasurieinstitution/" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="https://www.facebook.com/sasurieinstitution" target="_blank" rel="noreferrer">Facebook ↗</a>
          <a href="https://www.linkedin.com/company/sasurie-institution/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://www.youtube.com/@sasurieinstitutions1919" target="_blank" rel="noreferrer">YouTube ↗</a>
          <a href="https://twitter.com/sasurie_inst" target="_blank" rel="noreferrer">X (Twitter) ↗</a>
        </Reveal>
      </div>

      <Reveal as="div" variant="letters" className="watermark" aria-hidden="true">
        {WORDS.map((w, wi) => (
          <span className="word" key={w}>
            {[...w].map((ch, ci) => (
              <span className="letter" key={ci} style={{ "--i": wi * 6 + ci }}>
                {ch}
              </span>
            ))}
          </span>
        ))}
      </Reveal>

      <div className="container footer-base">
        <p>&copy; 2026 Sasurie Group of Institutions. All rights reserved.</p>
        <a href={homeHref} className="to-top">Back to top</a>
      </div>
    </footer>
  );
}
