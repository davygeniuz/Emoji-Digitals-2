import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FooterCodeBg } from "./FooterCodeBg";
import { useTheme } from "../context/ThemeContext";

/* ─────────────────────────────────────────────────────────────────────────────
   LOGO
───────────────────────────────────────────────────────────────────────────── */
const NEW_LOGO_ID  = "182UVO8BPxiSt5cJGF-yw9IUPbZhmFYwN";
const LOGO_URLS = [
  /* ── New logo — all Google Drive serving strategies ── */
  `https://drive.google.com/thumbnail?id=${NEW_LOGO_ID}&sz=w800`,
  `https://drive.google.com/thumbnail?id=${NEW_LOGO_ID}&sz=w400`,
  `https://drive.google.com/thumbnail?id=${NEW_LOGO_ID}&sz=w200`,
  `https://lh3.googleusercontent.com/d/${NEW_LOGO_ID}=w400`,
  `https://lh3.googleusercontent.com/d/${NEW_LOGO_ID}=w800`,
  `https://lh3.googleusercontent.com/d/${NEW_LOGO_ID}`,
  `https://drive.google.com/uc?export=view&id=${NEW_LOGO_ID}`,
  `https://drive.google.com/uc?id=${NEW_LOGO_ID}`,
  /* ── Website fallback ── */
  "https://emojidigitals.com/wp-content/uploads/2023/07/Emoji-Digitals-Logo.png",
  "/logo.svg",
];

export function LogoMark({ height = 40, className = "" }: { height?: number; className?: string }) {
  const [urlIndex, setUrlIndex] = useState(0);
  const { isDark } = useTheme();

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
          /* ── Transparency trick ──
             screen   → white pixels vanish on dark backgrounds (night mode)
             multiply → white pixels vanish on light backgrounds (day mode)  */
          mixBlendMode: isDark ? "screen" : "multiply",
          filter: isDark
            ? "brightness(1.4) contrast(1.1) saturate(1.1)"
            : "brightness(0.85) contrast(1.15) saturate(1.2)",
          transition: "filter 0.4s ease",
        }}
        className={className}
        onError={() => setUrlIndex((i) => i + 1)}
        crossOrigin="anonymous"
      />
    );
  }

  /* SVG fallback — only shown when ALL URLs fail */
  return (
    <svg viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={className} style={{ height: `${height}px`, width: "auto" }}>
      <defs>
        <linearGradient id="edGradFb" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#38bdf8" />
          <stop offset="50%"  stopColor="#818cf8" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="66" height="66" rx="16" fill="url(#edGradFb)" opacity="0.15" />
      <rect x="2" y="2" width="66" height="66" rx="16" stroke="url(#edGradFb)" strokeWidth="1.5" />
      <text x="35" y="50" textAnchor="middle" fontFamily="Arial Black, sans-serif"
        fontWeight="900" fontSize="36" fill="url(#edGradFb)">ED</text>
      <text x="115" y="30" textAnchor="middle" fontFamily="'Space Grotesk', Arial, sans-serif"
        fontWeight="800" fontSize="18" fill="url(#edGradFb)" letterSpacing="1">EMOJI</text>
      <text x="115" y="52" textAnchor="middle" fontFamily="'Space Grotesk', Arial, sans-serif"
        fontWeight="800" fontSize="18" fill="url(#edGradFb)" letterSpacing="1">DIGITALS</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   THEME TOGGLE BUTTON
───────────────────────────────────────────────────────────────────────────── */
function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={isDark ? "Switch to Day Mode" : "Switch to Night Mode"}
      style={{
        position: "relative",
        width: "56px",
        height: "28px",
        borderRadius: "999px",
        border: isDark
          ? "1.5px solid rgba(139,92,246,0.5)"
          : "1.5px solid rgba(99,102,241,0.4)",
        background: isDark
          ? "rgba(20,10,50,0.8)"
          : "rgba(219,234,254,0.9)",
        cursor: "pointer",
        transition: "all 0.4s ease",
        boxShadow: hovered
          ? isDark
            ? "0 0 16px rgba(139,92,246,0.6), 0 0 32px rgba(139,92,246,0.3)"
            : "0 0 16px rgba(251,191,36,0.5), 0 0 32px rgba(251,191,36,0.2)"
          : isDark
          ? "0 0 8px rgba(139,92,246,0.3)"
          : "0 0 8px rgba(251,191,36,0.2)",
        flexShrink: 0,
        padding: 0,
        display: "flex",
        alignItems: "center",
      }}
      aria-label="Toggle day/night theme"
    >
      {/* Track icons */}
      <span style={{
        position: "absolute", left: "6px", fontSize: "11px",
        opacity: isDark ? 0.9 : 0.3, transition: "opacity 0.3s",
      }}>🌙</span>
      <span style={{
        position: "absolute", right: "6px", fontSize: "11px",
        opacity: isDark ? 0.3 : 0.9, transition: "opacity 0.3s",
      }}>☀️</span>

      {/* Thumb */}
      <span style={{
        position: "absolute",
        width: "20px", height: "20px",
        borderRadius: "50%",
        background: isDark
          ? "linear-gradient(135deg, #818cf8, #c084fc)"
          : "linear-gradient(135deg, #fbbf24, #f97316)",
        boxShadow: isDark
          ? "0 0 8px rgba(139,92,246,0.8)"
          : "0 0 8px rgba(251,191,36,0.8)",
        transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        transform: isDark ? "translateX(4px)" : "translateX(30px)",
        top: "3px",
      }} />
    </button>
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
  { label: "🔬 Innovation Lab",   path: "/lab",          desc: "Experiments, AI concepts & prototypes" },
  { label: "📊 Case Studies",     path: "/case-studies", desc: "Real projects & measurable results" },
  { label: "🛠️ Tech Stack",       path: "/stack",        desc: "Tools & technologies we build with" },
  { label: "⚙️ Our Process",      path: "/process",      desc: "How we take ideas to production" },
  { label: "❓ FAQ",              path: "/faq",          desc: "Pricing, timelines, support & training" },
];

/* ─────────────────────────────────────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────────────────────────────────────── */
export function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [moreOpen, setMoreOpen]   = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1024);
  const moreRef  = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { isDark } = useTheme();

  /* Track viewport width */
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

  const navBg = scrolled
    ? isDark
      ? "rgba(5,5,16,0.97)"
      : "rgba(240,244,255,0.97)"
    : "transparent";

  const navBorder = scrolled
    ? isDark
      ? "1px solid rgba(99,102,241,0.18)"
      : "1px solid rgba(99,102,241,0.15)"
    : "1px solid transparent";

  const linkColor   = isDark ? "#d1d5db" : "#374151";
  const activeColor = "#60a5fa";
  const dropBg      = isDark ? "rgba(8,8,28,0.98)" : "rgba(240,244,255,0.98)";
  const dropBorder  = isDark ? "rgba(99,102,241,0.25)" : "rgba(99,102,241,0.2)";
  const mobileMenuBg = isDark ? "rgba(8,8,28,0.99)" : "rgba(240,244,255,0.99)";

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
        height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>

        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", flexShrink: 0 }}>
          <div style={{
            flexShrink: 0,
            background: isDark ? "transparent" : "transparent",
            borderRadius: "10px",
            overflow: "hidden",
            lineHeight: 0,
          }}>
            <LogoMark height={44} />
          </div>
          <div>
            <div className="gradient-text" style={{
              fontWeight: 800, fontSize: "16px", lineHeight: 1,
              letterSpacing: "0.05em", fontFamily: "'Space Grotesk', sans-serif",
            }}>EMOJI DIGITALS</div>
            <div style={{ fontSize: "9px", color: "var(--text-muted)", letterSpacing: "0.2em", marginTop: "2px" }}>
              CREATIVE TECH LAB
            </div>
          </div>
        </Link>

        {/* Desktop Nav — only visible on large screens */}
        <div style={{ display: isDesktop ? "flex" : "none", alignItems: "center", gap: "4px" }}>
          {NAV_LINKS.map((link) => (
            <Link key={link.path} to={link.path}
              style={{
                textDecoration: "none", fontSize: "13px", fontWeight: 500,
                letterSpacing: "0.02em", transition: "all 0.2s ease",
                color: isActive(link.path) ? activeColor : linkColor,
                borderBottom: isActive(link.path) ? `1.5px solid ${activeColor}` : "1.5px solid transparent",
                padding: "6px 12px", borderRadius: "8px",
              }}
              onMouseEnter={(e) => {
                if (!isActive(link.path)) {
                  (e.currentTarget as HTMLElement).style.color = "#93c5fd";
                  (e.currentTarget as HTMLElement).style.background = isDark
                    ? "rgba(255,255,255,0.05)" : "rgba(99,102,241,0.08)";
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
                borderBottom: isMoreActive ? `1.5px solid ${activeColor}` : "1.5px solid transparent",
                padding: "6px 12px", borderRadius: "8px",
                display: "flex", alignItems: "center", gap: "4px", transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (!isMoreActive)
                  (e.currentTarget as HTMLElement).style.background = isDark
                    ? "rgba(255,255,255,0.05)" : "rgba(99,102,241,0.08)";
              }}
              onMouseLeave={(e) => {
                if (!isMoreActive)
                  (e.currentTarget as HTMLElement).style.background = "transparent";
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
                background: dropBg, backdropFilter: "blur(24px)",
                border: `1px solid ${dropBorder}`, borderRadius: "20px",
                padding: "12px", minWidth: "280px",
                boxShadow: isDark
                  ? "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(99,102,241,0.1)"
                  : "0 20px 60px rgba(99,102,241,0.15)",
                zIndex: 100,
              }}>
                <div style={{
                  position: "absolute", top: "-6px", left: "50%", transform: "translateX(-50%)",
                  width: "12px", height: "12px", background: dropBg,
                  border: `1px solid ${dropBorder}`,
                  borderBottom: "none", borderRight: "none", rotate: "45deg",
                }} />
                {MORE_LINKS.map((link) => (
                  <Link key={link.path} to={link.path}
                    style={{
                      display: "block", textDecoration: "none", padding: "12px 16px",
                      borderRadius: "12px",
                      background: location.pathname === link.path
                        ? "rgba(99,102,241,0.15)" : "transparent",
                      border: `1px solid ${location.pathname === link.path ? "rgba(99,102,241,0.3)" : "transparent"}`,
                      transition: "all 0.2s ease", marginBottom: "4px",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = isDark
                        ? "rgba(255,255,255,0.06)" : "rgba(99,102,241,0.08)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = location.pathname === link.path
                        ? "rgba(99,102,241,0.15)" : "transparent";
                      (e.currentTarget as HTMLElement).style.borderColor = location.pathname === link.path
                        ? "rgba(99,102,241,0.3)" : "transparent";
                    }}
                  >
                    <div style={{
                      color: location.pathname === link.path ? "#a5b4fc" : "var(--text-primary)",
                      fontWeight: 600, fontSize: "13px", marginBottom: "2px",
                    }}>{link.label}</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "11px" }}>{link.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right side: Theme Toggle + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ThemeToggle />
          {/* CTA button — desktop only */}
          {isDesktop && (
            <Link to="/contact"
              className="btn-primary"
              style={{
                padding: "10px 20px", borderRadius: "999px", color: "#fff",
                fontWeight: 600, fontSize: "13px", textDecoration: "none", whiteSpace: "nowrap",
                display: "inline-block",
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
                background: isDark ? "#fff" : "#1e2340",
                borderRadius: "2px", transition: "all 0.3s ease",
                transform: i === 0 && menuOpen ? "rotate(45deg) translate(5px, 5px)"
                  : i === 2 && menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
                opacity: i === 1 && menuOpen ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu — only render on small screens */}
      <div style={{
        display: (!isDesktop && menuOpen) ? "flex" : "none",
        flexDirection: "column", gap: "2px",
        padding: "12px 24px 24px",
        background: mobileMenuBg, backdropFilter: "blur(24px)",
        borderTop: `1px solid ${dropBorder}`,
        maxHeight: "80vh", overflowY: "auto",
      }}>
        {[...NAV_LINKS, ...MORE_LINKS.map((l) => ({ label: l.label, path: l.path }))].map((link) => (
          <Link key={link.path} to={link.path}
            style={{
              textDecoration: "none", padding: "12px 8px", fontSize: "15px", fontWeight: 500,
              borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)"}`,
              color: isActive(link.path) ? activeColor : "var(--text-secondary)",
              transition: "color 0.2s",
            }}
          >{link.label}</Link>
        ))}
        {/* Mobile theme toggle row */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 8px",
          borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)"}`,
        }}>
          <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>
            {isDark ? "🌙 Night Mode" : "☀️ Day Mode"}
          </span>
          <ThemeToggle />
        </div>
        <Link to="/contact" className="btn-primary"
          style={{
            marginTop: "12px", padding: "14px 24px", borderRadius: "999px",
            color: "#fff", fontWeight: 600, fontSize: "15px",
            textDecoration: "none", textAlign: "center",
          }}
        >Start a Project →</Link>
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────────────────────────────────────── */
export function Footer() {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  return (
    <footer style={{
      position: "relative",
      borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.05)" : "rgba(99,102,241,0.12)"}`,
      overflow: "hidden",
    }}>
      {isDark && <FooterCodeBg />}
      {!isDark && (
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, #e8eeff 0%, #f0f4ff 50%, #ede9fe 100%)",
          zIndex: 0,
        }} />
      )}
      <div style={{ position: "absolute", inset: 0, background: "var(--footer-overlay)", zIndex: 1 }} />

      <div style={{ position: "relative", zIndex: 2, padding: "64px 0 32px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "48px", marginBottom: "48px",
          }}>

            {/* Brand */}
            <div style={{ gridColumn: "span 2" }}>
              <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none", marginBottom: "20px" }}>
                <div style={{
                  flexShrink: 0,
                  borderRadius: "12px",
                  overflow: "hidden",
                  lineHeight: 0,
                  background: "transparent",
                }}>
                  <LogoMark height={52} />
                </div>
                <div>
                  <div className="gradient-text" style={{ fontWeight: 800, fontSize: "17px", lineHeight: 1, letterSpacing: "0.05em", fontFamily: "'Space Grotesk', sans-serif" }}>
                    EMOJI DIGITALS
                  </div>
                  <div style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.2em", marginTop: "2px" }}>
                    CREATIVE TECH LAB
                  </div>
                </div>
              </Link>
              <p style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: "1.7", maxWidth: "300px", marginBottom: "20px" }}>
                A Creative Technology Innovation Lab. Engineering brands, building digital futures, and empowering the next generation of tech leaders across Africa.
              </p>
              {[
                { emoji: "📍", text: "No 13 Rear Admiral Ozojiofor Street,\nAwka 420110, Anambra State, Nigeria" },
                { emoji: "📱", links: [{ href: "tel:+2348069511029", text: "+234 806 951 1029" }, { href: "tel:+2348102982020", text: "+234 810 298 2020" }] },
                { emoji: "📧", links: [{ href: "mailto:admin@emojidigitals.com", text: "admin@emojidigitals.com" }] },
                { emoji: "🌐", links: [{ href: "https://emojidigitals.com", text: "www.emojidigitals.com", external: true }] },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                  <span style={{ fontSize: "14px", marginTop: "1px" }}>{item.emoji}</span>
                  {item.text ? (
                    <span style={{ color: "var(--text-muted)", fontSize: "12px", lineHeight: "1.6", whiteSpace: "pre-line" }}>{item.text}</span>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      {item.links?.map((l) => (
                        <a key={l.text} href={l.href}
                          target={"external" in l && l.external ? "_blank" : undefined}
                          rel={"external" in l && l.external ? "noopener noreferrer" : undefined}
                          style={{ color: "var(--text-muted)", fontSize: "12px", textDecoration: "none", transition: "color 0.2s" }}
                          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#818cf8")}
                          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
                        >{l.text}</a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Services */}
            <div>
              <div style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "20px" }}>Services</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
                {[["Branding & Identity", "/services"], ["Website Development", "/services"], ["App Development", "/services"], ["Tech Education", "/academy"], ["Graphics Design", "/design"]].map(([label, path]) => (
                  <li key={label}>
                    <Link to={path} style={{ color: "var(--text-muted)", fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#818cf8")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
                    >{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <div style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "20px" }}>Company</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
                {[["About Us", "/about"], ["Portfolio", "/portfolio"], ["Academy", "/academy"], ["Contact", "/contact"], ["Case Studies", "/case-studies"]].map(([label, path]) => (
                  <li key={label}>
                    <Link to={path} style={{ color: "var(--text-muted)", fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#818cf8")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
                    >{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore */}
            <div>
              <div style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "20px" }}>Explore</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
                {[["Innovation Lab", "/lab"], ["Tech Stack", "/stack"], ["Our Process", "/process"], ["FAQ", "/faq"], ["Design Studio", "/design"]].map(([label, path]) => (
                  <li key={label}>
                    <Link to={path} style={{ color: "var(--text-muted)", fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#818cf8")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
                    >{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div>
              <div style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "20px" }}>Get Started</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <button onClick={() => navigate("/contact")} className="btn-primary"
                  style={{ border: "none", cursor: "pointer", padding: "12px 20px", borderRadius: "12px", color: "#fff", fontWeight: 600, fontSize: "13px", width: "100%", textAlign: "center" }}>
                  Start a Project
                </button>
                <button onClick={() => navigate("/contact")} className="btn-outline"
                  style={{ cursor: "pointer", padding: "12px 20px", borderRadius: "12px", color: "var(--text-primary)", fontWeight: 600, fontSize: "13px", width: "100%", textAlign: "center", background: "transparent" }}>
                  Book a Call
                </button>
              </div>
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
                      background: isDark ? "rgba(255,255,255,0.04)" : "rgba(99,102,241,0.08)",
                      border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(99,102,241,0.15)"}`,
                      borderRadius: "8px", color: "var(--text-muted)", fontSize: "11px",
                      cursor: "pointer", textDecoration: "none", transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = isDark ? "#fff" : "#4f46e5";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                      (e.currentTarget as HTMLElement).style.borderColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(99,102,241,0.15)";
                    }}
                  >{s.name}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{
            borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.05)" : "rgba(99,102,241,0.1)"}`,
            paddingTop: "28px", display: "flex", flexDirection: "column", gap: "8px",
            alignItems: "center", textAlign: "center",
          }}>
            <p style={{ color: "var(--text-muted)", fontSize: "12px" }}>
              © {new Date().getFullYear()} Emoji Digitals. All rights reserved. Awka, Anambra State, Nigeria.
            </p>
            <p className="gradient-text" style={{ fontSize: "13px", fontWeight: 600 }}>
              Emoji Digitals — A Creative Technology Innovation Lab.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
