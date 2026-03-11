import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FooterCodeBg } from "./FooterCodeBg";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

/* ─────────────────────────────────────────────────────────────────────────────
   LOGO
───────────────────────────────────────────────────────────────────────────── */
const NEW_LOGO_ID = "182UVO8BPxiSt5cJGF-yw9IUPbZhmFYwN";
const LOGO_URLS = [
  `https://drive.google.com/thumbnail?id=${NEW_LOGO_ID}&sz=w800`,
  `https://drive.google.com/thumbnail?id=${NEW_LOGO_ID}&sz=w400`,
  `https://drive.google.com/thumbnail?id=${NEW_LOGO_ID}&sz=w200`,
  `https://lh3.googleusercontent.com/d/${NEW_LOGO_ID}=w400`,
  `https://lh3.googleusercontent.com/d/${NEW_LOGO_ID}=w800`,
  `https://lh3.googleusercontent.com/d/${NEW_LOGO_ID}`,
  `https://drive.google.com/uc?export=view&id=${NEW_LOGO_ID}`,
  `https://drive.google.com/uc?id=${NEW_LOGO_ID}`,
  "/logo.svg",
];

export function LogoMark({ height = 40, className = "" }: { height?: number; className?: string }) {
  const [urlIndex, setUrlIndex] = useState(0);

  if (urlIndex < LOGO_URLS.length) {
    return (
      <img
        src={LOGO_URLS[urlIndex]}
        alt="Emoji Digitals Logo"
        height={height}
        style={{
          height: `${height}px`,
          width: "auto",
          objectFit: "contain",
          display: "block",
          mixBlendMode: "screen",
          filter: "brightness(1.4) contrast(1.1) saturate(1.1)",
          transition: "filter 0.4s ease",
        }}
        className={className}
        onError={() => setUrlIndex((i) => i + 1)}
      />
    );
  }

  return (
    <svg viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={className} style={{ height: `${height}px`, width: "auto" }}>
      <rect x="2" y="2" width="66" height="66" rx="16" fill="#3b82f6" opacity="0.15" />
      <rect x="2" y="2" width="66" height="66" rx="16" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="35" y="50" textAnchor="middle" fontFamily="Arial Black, sans-serif"
        fontWeight="900" fontSize="36" fill="#3b82f6">ED</text>
      <text x="115" y="30" textAnchor="middle" fontFamily="'Space Grotesk', Arial, sans-serif"
        fontWeight="800" fontSize="18" fill="#3b82f6" letterSpacing="1">EMOJI</text>
      <text x="115" y="52" textAnchor="middle" fontFamily="'Space Grotesk', Arial, sans-serif"
        fontWeight="800" fontSize="18" fill="#8b5cf6" letterSpacing="1">DIGITALS</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   NAV DATA
───────────────────────────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Home",      path: "/" },
  { label: "Services",  path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Design",    path: "/design" },
  { label: "Academy",   path: "/academy" },
  { label: "About",     path: "/about" },
  { label: "Contact",   path: "/contact" },
];

const MORE_LINKS = [
  { label: "Innovation Lab",  path: "/lab",          desc: "Experiments, AI concepts & prototypes" },
  { label: "Case Studies",    path: "/case-studies", desc: "Real projects & measurable results" },
  { label: "Tech Stack",      path: "/stack",        desc: "Tools & technologies we build with" },
  { label: "Our Process",     path: "/process",      desc: "How we take ideas to production" },
  { label: "FAQ",             path: "/faq",          desc: "Pricing, timelines, support & training" },
];

/* ─────────────────────────────────────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────────────────────────────────────── */
export function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [moreOpen,  setMoreOpen]  = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1024);
  const moreRef  = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMoreOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);
  const isMoreActive = MORE_LINKS.some((l) => location.pathname.startsWith(l.path));

  const navBg     = scrolled ? "rgba(5,5,16,0.97)"          : "transparent";
  const navBorder = scrolled ? "1px solid rgba(59,130,246,0.18)" : "1px solid transparent";
  const linkColor = "#d1d5db";
  const activeColor = "#3b82f6";

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999,
      transition: "all 0.4s ease",
      background: navBg,
      backdropFilter: scrolled ? "blur(24px)" : "none",
      borderBottom: navBorder,
    }}>
      <div style={{
        maxWidth: "1400px", margin: "0 auto", padding: "0 24px",
        height: "80px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", flexShrink: 0 }}>
          <div style={{ flexShrink: 0, borderRadius: "10px", overflow: "hidden", lineHeight: 0 }}>
            <LogoMark height={44} />
          </div>
          <div>
            <div style={{
              fontWeight: 800, fontSize: "16px", lineHeight: 1,
              letterSpacing: "0.05em", fontFamily: "'Space Grotesk', sans-serif",
              color: "#3b82f6",
            }}>EMOJI DIGITALS</div>
            <div style={{ fontSize: "9px", color: "#6b7280", letterSpacing: "0.2em", marginTop: "2px" }}>
              CREATIVE TECH LAB
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div style={{ display: isDesktop ? "flex" : "none", alignItems: "center", gap: "4px" }}>
          {NAV_LINKS.map((link) => (
            <Link key={link.path} to={link.path}
              style={{
                textDecoration: "none", fontSize: "13px", fontWeight: 500,
                letterSpacing: "0.02em", transition: "all 0.2s ease",
                color: isActive(link.path) ? activeColor : linkColor,
                borderBottom: isActive(link.path) ? `2px solid ${activeColor}` : "2px solid transparent",
                padding: "6px 12px", borderRadius: "8px",
              }}
              onMouseEnter={(e) => {
                if (!isActive(link.path)) {
                  (e.currentTarget as HTMLElement).style.color = "#3b82f6";
                  (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.08)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(link.path)) {
                  (e.currentTarget as HTMLElement).style.color = linkColor;
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }
              }}
            >{link.label}</Link>
          ))}

          {/* More dropdown */}
          <div ref={moreRef} style={{ position: "relative" }}>
            <button onClick={() => setMoreOpen(!moreOpen)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: "13px", fontWeight: 500, letterSpacing: "0.02em",
                color: isMoreActive ? activeColor : linkColor,
                borderBottom: isMoreActive ? `2px solid ${activeColor}` : "2px solid transparent",
                padding: "6px 12px", borderRadius: "8px",
                display: "flex", alignItems: "center", gap: "4px", transition: "all 0.2s ease",
              }}
            >
              More
              <svg style={{ width: "12px", height: "12px", transition: "transform 0.2s", transform: moreOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {moreOpen && (
              <div style={{
                position: "absolute", top: "calc(100% + 12px)", right: "50%", transform: "translateX(50%)",
                background: "rgba(8,8,28,0.98)", backdropFilter: "blur(24px)",
                border: "1px solid rgba(59,130,246,0.25)", borderRadius: "16px",
                padding: "10px", minWidth: "260px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                zIndex: 100,
              }}>
                {MORE_LINKS.map((link) => (
                  <Link key={link.path} to={link.path}
                    style={{
                      display: "block", textDecoration: "none", padding: "10px 14px",
                      borderRadius: "10px",
                      background: location.pathname === link.path ? "rgba(59,130,246,0.12)" : "transparent",
                      border: `1px solid ${location.pathname === link.path ? "rgba(59,130,246,0.25)" : "transparent"}`,
                      transition: "all 0.2s ease", marginBottom: "3px",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = location.pathname === link.path
                        ? "rgba(59,130,246,0.12)" : "transparent";
                    }}
                  >
                    <div style={{
                      color: location.pathname === link.path ? "#3b82f6" : "#f9fafb",
                      fontWeight: 600, fontSize: "13px", marginBottom: "2px",
                    }}>{link.label}</div>
                    <div style={{ color: "#9ca3af", fontSize: "11px" }}>{link.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: CTA + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {isDesktop && (
            <Link to="/contact"
              style={{
                padding: "10px 20px", borderRadius: "999px", color: "#fff",
                fontWeight: 600, fontSize: "13px", textDecoration: "none", whiteSpace: "nowrap",
                display: "inline-block", background: "#3b82f6", transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#2563eb";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(59,130,246,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#3b82f6";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >Start a Project →</Link>
          )}

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              display: isDesktop ? "none" : "flex",
              background: "none", border: "none", cursor: "pointer",
              padding: "8px", flexDirection: "column", gap: "5px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: "block", width: "24px", height: "2px",
                background: "#ffffff",
                borderRadius: "2px", transition: "all 0.3s ease",
                transform: i === 0 && menuOpen ? "rotate(45deg) translate(5px, 5px)"
                  : i === 2 && menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
                opacity: i === 1 && menuOpen ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div style={{
        display: (!isDesktop && menuOpen) ? "flex" : "none",
        flexDirection: "column", gap: "2px",
        padding: "12px 24px 24px",
        background: "rgba(8,8,28,0.99)", backdropFilter: "blur(24px)",
        borderTop: "1px solid rgba(59,130,246,0.15)",
        maxHeight: "80vh", overflowY: "auto",
      }}>
        {[...NAV_LINKS, ...MORE_LINKS.map((l) => ({ label: l.label, path: l.path }))].map((link) => (
          <Link key={link.path} to={link.path}
            style={{
              textDecoration: "none", padding: "13px 8px", fontSize: "15px", fontWeight: 500,
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              color: isActive(link.path) ? activeColor : "#d1d5db",
              transition: "color 0.2s",
            }}
          >{link.label}</Link>
        ))}
        <Link to="/contact"
          style={{
            marginTop: "12px", padding: "14px 24px", borderRadius: "999px",
            color: "#fff", fontWeight: 600, fontSize: "15px",
            textDecoration: "none", textAlign: "center", background: "#3b82f6",
          }}
        >Start a Project →</Link>
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   FOOTER — Always dark
───────────────────────────────────────────────────────────────────────────── */
export function Footer() {
  const navigate = useNavigate();

  const footerMuted = "#94a3b8";
  const footerHead  = "#ffffff";
  const accentBlue  = "#3b82f6";
  const accentPurp  = "#8b5cf6";

  return (
    <footer style={{
      position: "relative",
      background: "#050510",
      borderTop: "1px solid rgba(59,130,246,0.18)",
      overflow: "hidden",
    }}>
      {/* Live animated background */}
      <FooterCodeBg />
      {/* Dark overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(5,5,16,0.82)", zIndex: 1 }} />

      <div style={{ position: "relative", zIndex: 2, padding: "64px 0 32px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "48px", marginBottom: "48px",
          }}>

            {/* Brand column */}
            <div style={{ gridColumn: "span 2" }}>
              <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none", marginBottom: "20px" }}>
                <div style={{ flexShrink: 0, borderRadius: "12px", overflow: "hidden", lineHeight: 0 }}>
                  <LogoMark height={52} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "17px", lineHeight: 1, letterSpacing: "0.05em", fontFamily: "'Space Grotesk', sans-serif", color: accentBlue }}>
                    EMOJI DIGITALS
                  </div>
                  <div style={{ fontSize: "10px", color: footerMuted, letterSpacing: "0.2em", marginTop: "2px" }}>
                    CREATIVE TECH LAB
                  </div>
                </div>
              </Link>

              <p style={{ color: footerMuted, fontSize: "13px", lineHeight: "1.7", maxWidth: "300px", marginBottom: "24px" }}>
                A Creative Technology Innovation Lab. Engineering brands, building digital futures, and empowering the next generation of tech leaders across Africa.
              </p>

              {/* Contact info — proper react-icons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

                {/* Location */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{ color: accentBlue, fontSize: "16px", marginTop: "2px", flexShrink: 0 }}>
                    <FaMapMarkerAlt />
                  </span>
                  <span style={{ color: footerMuted, fontSize: "12px", lineHeight: "1.6" }}>
                    No 13 Rear Admiral Ozojiofor Street,<br />
                    Awka 420110, Anambra State, Nigeria
                  </span>
                </div>

                {/* Phone numbers */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{ color: accentBlue, fontSize: "16px", marginTop: "2px", flexShrink: 0 }}>
                    <FaPhone />
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <a href="tel:+2348069511029"
                      style={{ color: footerMuted, fontSize: "12px", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = accentBlue)}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = footerMuted)}
                    >+234 806 951 1029</a>
                    <a href="tel:+2348102982020"
                      style={{ color: footerMuted, fontSize: "12px", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = accentBlue)}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = footerMuted)}
                    >+234 810 298 2020</a>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: accentBlue, fontSize: "16px", flexShrink: 0 }}>
                    <FaEnvelope />
                  </span>
                  <a href="mailto:admin@emojidigitals.com"
                    style={{ color: footerMuted, fontSize: "12px", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = accentBlue)}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = footerMuted)}
                  >admin@emojidigitals.com</a>
                </div>

              </div>
            </div>

            {/* Services */}
            <div>
              <div style={{ color: footerHead, fontWeight: 700, fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "20px" }}>
                Services
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
                {[
                  ["Branding & Identity", "/services"],
                  ["Website Development", "/services"],
                  ["App Development",     "/services"],
                  ["Tech Education",      "/academy"],
                  ["Graphics Design",     "/design"],
                ].map(([label, path]) => (
                  <li key={label}>
                    <Link to={path} style={{ color: footerMuted, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = accentBlue)}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = footerMuted)}
                    >{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <div style={{ color: footerHead, fontWeight: 700, fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "20px" }}>
                Company
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
                {[
                  ["About Us",     "/about"],
                  ["Portfolio",    "/portfolio"],
                  ["Academy",      "/academy"],
                  ["Contact",      "/contact"],
                  ["Case Studies", "/case-studies"],
                ].map(([label, path]) => (
                  <li key={label}>
                    <Link to={path} style={{ color: footerMuted, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = accentBlue)}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = footerMuted)}
                    >{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore */}
            <div>
              <div style={{ color: footerHead, fontWeight: 700, fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "20px" }}>
                Explore
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
                {[
                  ["Innovation Lab", "/lab"],
                  ["Tech Stack",     "/stack"],
                  ["Our Process",    "/process"],
                  ["FAQ",            "/faq"],
                  ["Design Studio",  "/design"],
                ].map(([label, path]) => (
                  <li key={label}>
                    <Link to={path} style={{ color: footerMuted, fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = accentBlue)}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = footerMuted)}
                    >{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA + Social */}
            <div>
              <div style={{ color: footerHead, fontWeight: 700, fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "20px" }}>
                Get Started
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <button onClick={() => navigate("/contact")}
                  style={{
                    border: "none", cursor: "pointer", padding: "12px 20px",
                    borderRadius: "12px", color: "#fff", fontWeight: 600, fontSize: "13px",
                    width: "100%", textAlign: "center",
                    background: accentBlue, transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#2563eb")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = accentBlue)}
                >
                  Start a Project
                </button>
                <button onClick={() => navigate("/contact")}
                  style={{
                    cursor: "pointer", padding: "12px 20px", borderRadius: "12px",
                    color: accentBlue, fontWeight: 600, fontSize: "13px",
                    width: "100%", textAlign: "center",
                    background: "transparent",
                    border: `1.5px solid ${accentBlue}`,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  Book a Call
                </button>
              </div>

              {/* Social links */}
              <div style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {[
                  { name: "Instagram", href: "https://instagram.com/emojidigitals" },
                  { name: "LinkedIn",  href: "https://linkedin.com/company/emojidigitals" },
                  { name: "Facebook",  href: "https://facebook.com/emojidigitals" },
                  { name: "Twitter",   href: "https://twitter.com/emojidigitals" },
                ].map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{
                      padding: "6px 12px",
                      background: "rgba(59,130,246,0.08)",
                      border: "1px solid rgba(59,130,246,0.2)",
                      borderRadius: "8px", color: footerMuted, fontSize: "11px",
                      cursor: "pointer", textDecoration: "none", transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#fff";
                      (e.currentTarget as HTMLElement).style.borderColor = accentBlue;
                      (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = footerMuted;
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.2)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.08)";
                    }}
                  >{s.name}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: "1px solid rgba(59,130,246,0.12)",
            paddingTop: "28px", display: "flex", flexDirection: "column", gap: "8px",
            alignItems: "center", textAlign: "center",
          }}>
            <p style={{ color: footerMuted, fontSize: "12px", margin: 0 }}>
              © {new Date().getFullYear()} Emoji Digitals. All rights reserved. Awka, Anambra State, Nigeria.
            </p>
            <p style={{ fontSize: "13px", fontWeight: 600, color: accentPurp, margin: 0 }}>
              Emoji Digitals — A Creative Technology Innovation Lab.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
