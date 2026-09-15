import { useState, useRef } from "react";
import type { FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
const serviceOptions = [
  "Web Design",
  "Branding",
  "Digital Marketing",
  "Full Project",
  "Not Sure Yet",
];
type Fields = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};
export default function ContactForm() {
  const [params] = useSearchParams();
  const initialService = params.get("service") || "";
  const [form, setForm] = useState<Fields>({
    name: "",
    email: "",
    company: "",
    service: serviceOptions.includes(initialService) ? initialService : "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  function submit(event: FormEvent) {
    event.preventDefault();
    const nextErrors: Partial<Fields> = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      nextErrors.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10)
      nextErrors.message = "Tell us a little more (at least 10 characters).";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      requestAnimationFrame(() =>
        formRef.current
          ?.querySelector<HTMLElement>('[aria-invalid="true"]')
          ?.focus(),
      );
      return;
    }
    setSuccess(true);
  }
  function update(key: keyof Fields, value: string) {
    setForm({ ...form, [key]: value });
    if (errors[key]) setErrors({ ...errors, [key]: undefined });
  }
  return success ? (
    <div className="form-success" role="status">
      <span>✓</span>
      <h3>Demo complete. Looking good!</h3>
      <p>
        You’ve reached the end of the sample contact flow. Your entries passed
        validation. No inquiry was sent, no call was booked, and nothing was saved.
      </p>
      <button className="button" onClick={() => setSuccess(false)}>
        Edit the demo brief ↗
      </button>
    </div>
  ) : (
    <form ref={formRef} className="contact-form" onSubmit={submit} noValidate>
      <div className="form-intro">
        <span className="demo-label">Interactive demo</span>
        <h3>Try a sample project brief</h3>
        <p>Use made-up details to explore the contact experience.</p>
      </div>
      <div className="form-grid">
        {(["name", "email", "company"] as const).map((field) => (
          <label key={field} htmlFor={field}>
            {field === "company"
              ? "Company (optional)"
              : `${field === "name" ? "Your name" : "Email address"} *`}
            <input
              id={field}
              name={field}
              type={field === "email" ? "email" : "text"}
              autoComplete={
                field === "name"
                  ? "name"
                  : field === "email"
                    ? "email"
                    : "organization"
              }
              required={field !== "company"}
              value={form[field]}
              placeholder={
                field === "name"
                  ? "Alex Morgan"
                  : field === "email"
                    ? "alex@company.com"
                    : "Your business name"
              }
              onChange={(event) => update(field, event.target.value)}
              aria-invalid={Boolean(errors[field])}
              aria-describedby={errors[field] ? `${field}-error` : undefined}
            />
            {errors[field] && (
              <span className="field-error" id={`${field}-error`}>
                {errors[field]}
              </span>
            )}
          </label>
        ))}
        <label htmlFor="service">
          What can we help with?
          <select
            id="service"
            value={form.service}
            onChange={(event) => update("service", event.target.value)}
          >
            <option value="">Choose a service</option>
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label htmlFor="budget" className="full-width">
          Your budget
          <select
            id="budget"
            value={form.budget}
            onChange={(event) => update("budget", event.target.value)}
          >
            <option value="">Select a budget range</option>
            {["Under €250", "€250–€500", "€500–€1,000", "€1,000+"].map(
              (option) => (
                <option key={option}>{option}</option>
              ),
            )}
          </select>
        </label>
        <label htmlFor="message" className="full-width">
          A little about your project *
          <textarea
            id="message"
            required
            rows={5}
            value={form.message}
            placeholder="Your idea, your goals, or just what’s on your mind…"
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <span className="field-error" id="message-error">
              {errors.message}
            </span>
          )}
        </label>
      </div>
      <div className="form-bottom">
        <p>
          Demo form. No messages are sent.
          <br />* Required fields
        </p>
        <button className="button" type="submit">
          Preview demo confirmation <span>↗</span>
        </button>
      </div>
    </form>
  );
}
