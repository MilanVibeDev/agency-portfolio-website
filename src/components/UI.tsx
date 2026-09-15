import { Link } from "react-router-dom";
import type { ReactNode } from "react";
export function Button({
  children,
  to = "/about#contact",
  secondary = false,
}: {
  children: ReactNode;
  to?: string;
  secondary?: boolean;
}) {
  return (
    <Link className={`button${secondary ? " button-secondary" : ""}`} to={to}>
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
export function SectionHeading({
  label,
  title,
  children,
}: {
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span />
          {label}
        </p>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}
export function CTA({ services = false }: { services?: boolean }) {
  return (
    <section className="container cta">
      <div>
        <p className="eyebrow">GOOD THINGS START WITH A CONVERSATION</p>
        <h2>
          {services ? (
            <>
              Not sure where
              <br />
              to start?
            </>
          ) : (
            <>
              Have a project
              <br />
              in mind<span>?</span>
            </>
          )}
        </h2>
        <p>
          {services
            ? "Explore how a project conversation could begin in this interactive demo."
            : "Try the concept contact flow. No messages or bookings are sent."}
        </p>
        <Button>
          {services ? "Explore the contact demo" : "Start a project"}
        </Button>
      </div>
      <span className="cta-flower" aria-hidden="true">
        ✳
      </span>
    </section>
  );
}
export function Process({ detailed = false }: { detailed?: boolean }) {
  const steps = detailed
    ? [
        [
          "Discovery",
          "We listen, ask the right questions, and get clear on your goals.",
        ],
        [
          "Proposal",
          "A clear scope, honest pricing, and a timeline you can plan around.",
        ],
        [
          "Creation",
          "We bring the strategy to life through design and development.",
        ],
        [
          "Review",
          "Your feedback helps us refine the details until they feel right.",
        ],
        [
          "Launch",
          "We test, polish, and hand over everything you need to move forward.",
        ],
      ]
    : [
        [
          "Discovery",
          "Your business, your audience, your big ambitions. We start by listening.",
        ],
        ["Strategy", "A clear direction and a practical plan. No guesswork."],
        [
          "Design",
          "Where thoughtful ideas become something you can see and feel.",
        ],
        ["Launch", "Tested, polished, and ready to make its mark."],
      ];
  return (
    <section className="container section">
      <SectionHeading
        label="OUR PROCESS"
        title={
          <>
            Good work.
            <br />A clear way forward.
          </>
        }
      >
        <p>
          No black boxes. No endless back-and-forth.
          <br />
          Just a simple, collaborative process.
        </p>
      </SectionHeading>
      <div className={`process-grid${detailed ? " five-steps" : ""}`}>
        {steps.map(([name, copy], i) => (
          <article key={name}>
            <div className="step-number">
              0{i + 1}
              <span aria-hidden="true">↗</span>
            </div>
            <h3>{name}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
