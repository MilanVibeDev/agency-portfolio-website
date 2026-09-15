import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export function Logo() {
  return (
    <span className="logo">
      <span className="logo-symbol" aria-hidden="true">
        ✳
      </span>{" "}
      novahaus<span className="logo-dot">®</span>
    </span>
  );
}
export function Navbar() {
  const [openAt, setOpenAt] = useState<string | null>(null);
  const location = useLocation();
  const toggle = useRef<HTMLButtonElement>(null);
  const open = openAt === location.key;
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpenAt(null);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="navbar">
        <div className="container nav-inner">
          <Link to="/" aria-label="NovaHaus Studio home">
            <Logo />
          </Link>
          <button
            ref={toggle}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpenAt(open ? null : location.key)}
          >
            {open ? "Close ✕" : "Menu ☰"}
          </button>
          <nav
            id="primary-nav"
            className={open ? "navigation is-open" : "navigation"}
            aria-label="Main navigation"
          >
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">About</NavLink>
            <Link to="/about#contact" className="button nav-cta">
              Contact us <span>↗</span>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link to="/">
              <Logo />
            </Link>
            <p>
              Good people. Bold ideas.
              <br />
              Better things, together.
            </p>
          </div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About & contact</Link>
          </div>
          <div className="footer-contact">
            <strong>Explore the contact demo</strong>
            <span>No bookings or messages are sent.</span>
            <Link to="/about#contact" className="text-link">Try the demo ↗</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} NovaHaus Studio</span>
          <span>Independent by design.</span>
          <span>Fictional studio · Portfolio concept</span>
        </div>
      </div>
    </footer>
  );
}
