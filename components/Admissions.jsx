import Reveal, { Lines } from "./Reveal";
import Tilt from "./Tilt";
import Drift from "./Drift";
import AdmissionForm from "./AdmissionForm";

const STEPS = [
  { title: "Share your details", text: "Submit your name, phone number and preferred programme, or apply directly online at admissions.sasurie.com." },
  { title: "Speak to a counsellor", text: "A counsellor calls you back from 94888 91111, 94888 92222, 94425 93828 or 94888 93333 to explain programmes, autonomous curriculum, fees, and the Sasurie Talent Examination (STE) scholarship." },
  { title: "Confirm your seat", text: "Confirm your admission across our Engineering (Autonomous), Arts & Science, Management, Pharmacy, Nursing, or Education programmes across Vijayamangalam & Coimbatore campuses." },
];

export default function Admissions() {
  return (
    <section className="admissions section" id="admissions">
      <div className="container">
        <Reveal className="adm-panel" variant="scale">
          <Drift rise="760px" count={8} />
          <div className="adm-copy">
            <Lines lines={["Begin your admission", "with a conversation."]} />
            <p className="lede">Admissions are open. The process has three steps.</p>
            <ol className="steps">
              {STEPS.map((s, i) => (
                <Reveal as="li" key={s.title} delay={0.15 + i * 0.12}>
                  <span className="step-n" aria-hidden="true">{i + 1}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <Tilt className="adm-form-wrap" max={5}>
            <AdmissionForm />
          </Tilt>
        </Reveal>
      </div>
    </section>
  );
}
