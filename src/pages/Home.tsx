import { Link } from 'react-router-dom'
import { Button, CTA, Process, SectionHeading } from '../components/UI'
import { HeroVisual, ProjectVisual, ServiceIcon } from '../components/Visuals'
import { services } from '../data/content'

export default function Home() {
  return (
    <>
      <section className="container hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span />
            INDEPENDENT STUDIO. SHARED AMBITION.
          </p>

          <h1>
            Big ideas.
            <br />
            Bold design.
            <br />
            <span>Real impact.</span>
          </h1>

          <p className="hero-description">
            We turn ambitious businesses into brands people
            <br className="desktop-break" /> love. Through thoughtful design,
            standout websites,
            <br className="desktop-break" /> and digital strategies that move you
            forward.
          </p>

          <div className="hero-buttons">
            <Button>Start a project</Button>
            <Button to="/#work" secondary>
              View our work
            </Button>
          </div>

          <div className="hero-proof">
            <p>3 responsive pages · Original mockups · Demo contact flow</p>
          </div>
        </div>

        <HeroVisual />
      </section>

      <section className="container trust" aria-label="Fictional brand concepts">
        <p>FICTIONAL BRANDS, CREATED FOR THIS CONCEPT</p>

        <div className="client-logos">
          <span className="luma-logo">
            luma<span>café</span>
          </span>
          <span className="north-logo">◩ NORTHLINE</span>
          <span className="atlas-logo">✳ atlas dental</span>
          <span className="forma-logo">
            forma<span>®</span>
          </span>
          <span className="bright-logo">⌂ BrightNest</span>
        </div>

        <span className="trust-note">
          Original brand examples for a design portfolio. No client relationships implied.
        </span>
      </section>

      <section className="container section">
        <SectionHeading
          label="WHAT WE DO"
          title={
            <>
              Everything you need.
              <br />
              <span className="muted-heading">Nothing you don’t.</span>
            </>
          }
        >
          <div>
            <p>
              From the first impression to the next conversion,
              <br />
              we help your business make its mark.
            </p>
            <Link className="text-link" to="/services">
              Explore our services <span>↗</span>
            </Link>
          </div>
        </SectionHeading>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.id}>
              <div className="service-card-top">
                <ServiceIcon type={service.icon} />
                <span>{service.number} /</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-tags">{service.tags}</span>
              <Link
                to={`/services#${service.id}`}
                className="service-link"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn more <span>↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="container section">
          <SectionHeading
            label="SELECTED WORK"
            title={
              <>
                A little of what
                <br />
                we’ve put into the world.
              </>
            }
          >
            <p>
              Different businesses. Shared ambition.
              <br />A few imagined projects to show what’s possible.
            </p>
          </SectionHeading>

          <div className="projects-grid">
            <article className="project-card">
              <ProjectVisual type="cafe" />

              <div className="project-meta">
                <div>
                  <p>HOSPITALITY · WEB DESIGN · LOCAL SEO</p>
                  <h3>Luma Café</h3>
                </div>
                <Link
                  to="/about?service=Web%20Design#contact"
                  className="circle-link"
                  aria-label="Discuss a project like Luma Café"
                >
                  ↗
                </Link>
              </div>

              <p>
                A fresh digital home for a local café chain, with a mobile menu
                and an easier path to the next reservation.
              </p>
              <span className="result-tag">
                ↗ Designed to simplify the reservation journey
              </span>
            </article>

            <article className="project-card">
              <ProjectVisual type="fitness" />

              <div className="project-meta">
                <div>
                  <p>FITNESS · LANDING PAGE · PAID CAMPAIGN</p>
                  <h3>Northline Fitness</h3>
                </div>
                <Link
                  to="/about?service=Digital%20Marketing#contact"
                  className="circle-link"
                  aria-label="Discuss a project like Northline Fitness"
                >
                  ↗
                </Link>
              </div>

              <p>
                A bold campaign, focused landing page, and simple lead form to
                turn local interest into a growing community.
              </p>
              <span className="result-tag">
                ↗ Designed to make trial signups easier
              </span>
            </article>
          </div>

          <p className="project-disclaimer">
            Concept projects showing design intentions, not measured business outcomes.
          </p>
        </div>
      </section>

      <section className="container section why-section">
        <div>
          <p className="eyebrow">
            <span />
            THE NOVAHAUS DIFFERENCE
          </p>
          <h2>
            Your goals.
            <br />
            Our sleeves,
            <br />
            <span className="accent-text">rolled up.</span>
          </h2>
          <p>
            We’re a small, hands-on team that cares about your business as much
            as the work we make for it.
          </p>
          <Link to="/about" className="text-link">
            Get to know us ↗
          </Link>
        </div>

        <div className="benefit-grid">
          {[
            [
              '◎',
              'Strategy before pixels',
              'Every creative choice starts with your business goals. Looking good should do good, too.',
            ],
            [
              '↗',
              'Momentum, not meetings',
              'Focused timelines and an agile team. We keep your project moving without cutting corners.',
            ],
            [
              '☏',
              'Actual conversations',
              'Straight answers, regular updates, and a direct line to the people doing the work.',
            ],
            [
              '✳',
              'Built to make a difference',
              'Thoughtful experiences that earn trust and make taking the next step feel natural.',
            ],
          ].map(([icon, title, copy]) => (
            <article key={title}>
              <span className="benefit-icon">{icon}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="process-wrap">
        <Process />
      </div>

      <section className="container section">
        <SectionHeading
          label="FICTIONAL TESTIMONIAL LAYOUT"
          title={
            <>
              Good work starts with
              <br />
              good relationships.
            </>
          }
        >
          <p>
            A glimpse of the partnerships
            <br />
            our fictional studio is built for.
          </p>
        </SectionHeading>

        <div className="testimonial-grid">
          {[
            [
              '“NovaHaus turned our outdated site into our strongest sales tool. The process was fast, clear, and collaborative.”',
              'Elena Moore',
              'Founder, Luma Café',
              'EM',
            ],
            [
              '“They understood our energy from day one. The new campaign feels like us, and gave our community a brilliant new way to connect.”',
              'James Reed',
              'Owner, Northline Fitness',
              'JR',
            ],
            [
              '“Thoughtful design, clear communication, and attention to every detail. Exactly the kind of creative partner a small business needs.”',
              'Anna Lewis',
              'Founder, Forma Studio',
              'AL',
            ],
          ].map(([quote, name, role, initials]) => (
            <figure className="testimonial" key={name}>
              <span className="demo-label">Sample quote · Fictional person</span>
              <blockquote>{quote}</blockquote>
              <figcaption>
                <span className="person-avatar">{initials}</span>
                <div>
                  <b>{name}</b>
                  <span>{role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="project-disclaimer">
          Fictional testimonials created for this portfolio concept.
        </p>
      </section>

      <CTA />
    </>
  )
}
