import { useLocation } from "react-router-dom";
import { SectionHeading } from "../components/UI";
import { team } from "../data/content";
import ContactForm from "../components/ContactForm";
export default function About() {
  const location = useLocation();
  return (
    <>
      <section className="container page-hero about-hero">
        <div>
          <p className="eyebrow">
            <span />A SMALL STUDIO WITH A BIG HEART
          </p>
          <h1>
            Small team.
            <br />
            <span>Big focus on results.</span>
          </h1>
          <p>
            Designers, thinkers, and your next creative partners.
            <br />
            Based in Belgrade. Building for businesses everywhere.
          </p>
        </div>
        <span className="about-flower" aria-hidden="true">
          ✳
        </span>
      </section>
      <section className="container story-section">
        <p className="eyebrow">THE FICTIONAL STUDIO STORY</p>
        <div>
          <h2>
            Good design shouldn’t
            <br />
            be out of reach.
          </h2>
          <p>
            NovaHaus started with a simple idea: growing businesses deserve the
            same care, creativity, and strategic thinking as the big names.
            We’re a focused creative team helping small businesses find their
            voice and build a better online presence.
          </p>
          <p>
            Our mission is to make professional digital design accessible,
            strategic, and effective. We bring our different perspectives to the
            same table, working closely with you from the first conversation to
            the final detail.
          </p>
        </div>
      </section>
      <section
        className="container stats-grid"
        aria-label="Website project facts"
      >
        {[
          ["3", "Responsive pages"],
          ["Mobile", "Responsive interface"],
          ["Accessible", "Demo contact flow"],
          ["Original", "Brand and website mockups"],
        ].map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>
      <section className="container section">
        <SectionHeading
          label="WHAT MATTERS TO US"
          title="Small words. Big commitments."
        />
        <div className="values-grid">
          {[
            [
              "Clarity",
              "Simple ideas. Straight conversations. A clear direction at every step.",
            ],
            [
              "Speed",
              "Thoughtful momentum, with respect for your time and your deadlines.",
            ],
            [
              "Craft",
              "Care in every interaction, every word, and every last pixel.",
            ],
            [
              "Results",
              "Work that serves your business and helps you take the next step.",
            ],
          ].map(([name, description], index) => (
            <article key={name}>
              <span className="eyebrow">0{index + 1}</span>
              <h3>{name}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="team-section">
        <div className="container section">
          <SectionHeading
            label="MEET THE FICTIONAL TEAM"
            title={
              <>
                Nice to meet you.
                <br />
                Even nicer to work together.
              </>
            }
          />
          <div className="team-grid">
            {team.map((person, index) => (
              <article key={person.name}>
                <div className={`team-portrait portrait-${index}`}>
                  <span className="portrait-decoration" aria-hidden="true">
                    {index === 0 ? "✳" : index === 1 ? "↗" : "◎"}
                  </span>
                  <strong>{person.initials}</strong>
                  <small>NOVAHAUS / 0{index + 1}</small>
                </div>
                <h3>{person.name}</h3>
                <span className="demo-label">Fictional team member</span>
                <span className="team-role">{person.role}</span>
                <p>{person.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container section contact-section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">
            <span />
            INTERACTIVE CONTACT DEMO
          </p>
          <h2>
            Your next chapter
            <br />
            starts with <span className="accent-text">hello.</span>
          </h2>
          <p>
            Try a sample project brief to explore the form and its confirmation.
            This is a portfolio demonstration; nothing is sent, booked, or stored.
          </p>
          <div className="contact-details">
            <div>
              <span>DEMO EMAIL · NOT A CONTACT CHANNEL</span>
              <p>hello@novahaus.example</p>
            </div>
            <div>
              <span>PHONE PLACEHOLDER · NOT A REAL NUMBER</span>
              <p>+381 XX XXX XXXX</p>
            </div>
            <div>
              <span>FICTIONAL STUDIO LOCATION</span>
              <p>Belgrade, Serbia</p>
            </div>
          </div>
          <p className="contact-note">
            All agency identities and contact details are fictional.
            <br />
            Made as a creative agency portfolio concept.
          </p>
        </div>
        <ContactForm key={location.search} />
      </section>
    </>
  );
}
