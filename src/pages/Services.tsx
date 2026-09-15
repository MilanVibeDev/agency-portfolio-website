import { services } from "../data/content";
import { Button, CTA, Process } from "../components/UI";
import { ProjectVisual, ServiceIcon } from "../components/Visuals";

export default function Services() {
  return (
    <>
      <section className="container page-hero">
        <p className="eyebrow">
          <span />
          OUR SERVICES
        </p>
        <h1>
          Built for your business.
          <br />
          <span>Made for what’s next.</span>
        </h1>
        <p>
          From high-converting websites to sharp brand identities and digital
          campaigns,
          <br className="desktop-break" /> we help businesses look better and
          sell smarter.
        </p>
        <div className="service-jumps">
          {services.map((service) => (
            <a href={`#${service.id}`} key={service.id}>
              {service.number} / {service.title} ↓
            </a>
          ))}
        </div>
      </section>
      <div className="container service-details">
        {services.map((service, index) => (
          <section className="service-detail" id={service.id} key={service.id}>
            <div className="service-detail-copy">
              <p className="eyebrow">{service.number} / WHAT WE DO</p>
              <div className="service-title">
                <ServiceIcon type={service.icon} />
                <h2>{service.title}</h2>
              </div>
              <p>{service.description}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>
                    <span>↗</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                to={`/about?service=${encodeURIComponent(service.title)}#contact`}
              >
                {service.cta}
              </Button>
            </div>
            <ProjectVisual
              type={index === 0 ? "cafe" : index === 1 ? "brand" : "fitness"}
            />
          </section>
        ))}
      </div>
      <div className="process-wrap">
        <Process detailed />
      </div>
      <CTA services />
    </>
  );
}
