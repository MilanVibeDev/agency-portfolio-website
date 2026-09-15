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
        <p className="eyebrow">OUR STORY</p>
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
        aria-label="Fictional agency statistics"
      >
        {[
          ["75+", "Projects completed"],
          ["40+", "Clients"],
          ["5", "Years of experience"],
          ["98%", "Client satisfaction"],
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
            label="THE PEOPLE BEHIND THE PIXELS"
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
            LET’S MAKE SOMETHING GOOD
          </p>
          <h2>
            Your next chapter
            <br />
            starts with <span className="accent-text">hello.</span>
          </h2>
          <p>
            Have a clear brief or just the spark of an idea? Tell us a little
            about it. We’d love to hear what you’re thinking.
          </p>
          <div className="contact-details">
            <div>
              <span>WRITE TO US</span>
              <a href="mailto:hello@novahaus.studio">
                hello@novahaus.studio ↗
              </a>
            </div>
            <div>
              <span>GIVE US A CALL</span>
              <a href="tel:+381601234567">+381 60 123 4567 ↗</a>
            </div>
            <div>
              <span>OUR LITTLE CORNER OF THE WORLD</span>
              <p>Belgrade, Serbia</p>
            </div>
          </div>
          <p className="contact-note">
            Fictional team, contact details, and studio statistics.
            <br />
            Made as a creative agency portfolio concept.
          </p>
        </div>
        <ContactForm key={location.search} />
      </section>
    </>
  );
}
