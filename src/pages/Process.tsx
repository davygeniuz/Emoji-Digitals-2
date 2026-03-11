import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch, FaPaintBrush, FaCog, FaRocket, FaChartLine,
  FaCheck, FaFileAlt, FaArrowLeft, FaArrowRight,
} from "react-icons/fa";
import { IMGS, gd } from "../utils/images";

const phases = [
  {
    num: "01", title: "Discover", icon: <FaSearch />, accentRaw: "#3b82f6", duration: "Days 1–5",
    tagline: "We listen before we act.",
    desc: "Every successful project starts with deep understanding. We immerse ourselves in your business, your goals, your audience, and your challenges. No assumptions — only discovery.",
    activities: [
      "Stakeholder interviews & discovery sessions",
      "Competitor & market landscape analysis",
      "Technical requirements gathering",
      "User persona mapping",
      "Project scope & constraint definition",
      "Risk assessment & mitigation planning",
    ],
    deliverables: ["Project Brief", "Discovery Report", "Scope Document", "Timeline Estimate"],
    imgId: IMGS.img01,
  },
  {
    num: "02", title: "Design", icon: <FaPaintBrush />, accentRaw: "#8b5cf6", duration: "Days 6–14",
    tagline: "We prototype before we build.",
    desc: "Before a single line of code is written, our design team creates detailed wireframes, high-fidelity mockups, and interactive prototypes. You see exactly what you're getting.",
    activities: [
      "Wireframing & low-fidelity prototyping",
      "Brand alignment & visual direction",
      "High-fidelity UI design in Figma",
      "Interactive prototype development",
      "Design system & component library creation",
      "Client review & revision cycles",
    ],
    deliverables: ["Wireframes", "UI Design Files", "Interactive Prototype", "Design System"],
    imgId: IMGS.img02,
  },
  {
    num: "03", title: "Develop", icon: <FaCog />, accentRaw: "#3b82f6", duration: "Days 15–45",
    tagline: "We engineer with precision.",
    desc: "Our developers build using modern frameworks, clean architecture, and industry best practices. Every component is tested, every API is documented, every deployment is automated.",
    activities: [
      "Agile sprint planning & task breakdown",
      "Frontend & backend development in parallel",
      "Database architecture & API development",
      "Third-party integrations & services",
      "Unit, integration & end-to-end testing",
      "Code reviews & security audits",
    ],
    deliverables: ["Functional Application", "Technical Documentation", "Test Reports", "Staging Environment"],
    imgId: IMGS.img03,
  },
  {
    num: "04", title: "Deploy", icon: <FaRocket />, accentRaw: "#8b5cf6", duration: "Days 46–52",
    tagline: "We launch with confidence.",
    desc: "Going live is never just pressing a button. We set up CI/CD pipelines, configure production environments, run final acceptance tests, and monitor your system live at launch.",
    activities: [
      "Production environment configuration",
      "CI/CD pipeline setup (GitHub Actions)",
      "DNS, SSL, and domain configuration",
      "Performance & load testing",
      "User acceptance testing (UAT) sign-off",
      "Soft launch & real-time monitoring",
    ],
    deliverables: ["Live System", "Launch Report", "Monitoring Dashboard", "Admin Training"],
    imgId: IMGS.img04,
  },
  {
    num: "05", title: "Scale", icon: <FaChartLine />, accentRaw: "#3b82f6", duration: "Ongoing",
    tagline: "We grow with you.",
    desc: "Launch is the beginning, not the end. We offer continuous support, performance optimisation, feature development, and strategic digital consulting to help you scale beyond launch.",
    activities: [
      "Ongoing performance monitoring & optimisation",
      "Feature development & iteration sprints",
      "SEO, analytics & conversion optimisation",
      "Security patches & system updates",
      "User feedback analysis & UX improvements",
      "Strategic digital growth consulting",
    ],
    deliverables: ["Monthly Reports", "Update Releases", "Growth Strategy", "Dedicated Support"],
    imgId: IMGS.img05,
  },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function PhaseImage({ imgId }: { imgId: string }) {
  const urls = [gd(imgId, 800), gd(imgId, 600)];
  const [idx, setIdx] = useState(0);
  if (idx < urls.length)
    return <img src={urls[idx]} alt="Phase" className="w-full h-full object-cover" onError={() => setIdx(i => i + 1)} />;
  return <div className="w-full h-full" style={{ background: "rgba(59,130,246,0.12)" }} />;
}

export default function Process() {
  const [activePhase, setActivePhase] = useState(0);
  const { ref: timelineRef, inView: timelineInView } = useInView(0.1);



  return (
    <div className="min-h-screen pt-28 pb-20 relative" style={{ background: "#050510" }}>
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#3b82f6" }}>
            How We Work
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Our <span style={{ color: "#8b5cf6" }}>Process</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            A proven 5-phase framework that transforms your vision into a production-ready digital system — consistently, reliably, beautifully.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div ref={timelineRef} className="mb-20">

          {/* Phase Navigator */}
          <div className="relative flex items-center justify-center mb-16">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 transition-all duration-700 ease-in-out"
              style={{
                width: `${(activePhase / (phases.length - 1)) * 100}%`,
                background: "#3b82f6",
              }}
            />
            <div className="relative flex items-center justify-between w-full max-w-2xl mx-auto">
              {phases.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhase(i)}
                  className="relative flex flex-col items-center gap-2 group"
                  style={{ zIndex: 10 }}
                >
                  <div
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center text-base font-black transition-all duration-300 text-white"
                    style={{
                      background: i <= activePhase ? p.accentRaw : "#0a0a1e",
                      borderColor: i <= activePhase ? p.accentRaw : "rgba(255,255,255,0.15)",
                      transform: i === activePhase ? "scale(1.25)" : "scale(1)",
                      boxShadow: i === activePhase ? `0 0 20px ${p.accentRaw}55` : "none",
                    }}
                  >
                    {i < activePhase ? <FaCheck style={{ fontSize: "0.8rem" }} /> : p.icon}
                  </div>
                  <span
                    className="text-xs font-bold tracking-wide hidden md:block"
                    style={{ color: i === activePhase ? "#fff" : "#4b5563" }}
                  >
                    {p.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Phase Detail */}
          {phases.map((p, i) => (
            <div
              key={i}
              style={{
                display: i === activePhase ? "block" : "none",
                opacity: i === activePhase && timelineInView ? 1 : 0,
                transition: "opacity 0.5s ease",
              }}
            >
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                {/* Left: Content */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-lg text-white"
                      style={{ background: p.accentRaw + "30", border: `1px solid ${p.accentRaw}44` }}
                    >
                      {p.icon}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest mb-1" style={{ color: p.accentRaw }}>
                        Phase {p.num} · {p.duration}
                      </div>
                      <h2 className="text-3xl font-black text-white">{p.title}</h2>
                    </div>
                  </div>

                  <div className="text-lg font-semibold mb-4 italic" style={{ color: p.accentRaw }}>
                    "{p.tagline}"
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-8">{p.desc}</p>

                  {/* Activities */}
                  <div className="mb-8">
                    <div className="text-white font-bold text-sm uppercase tracking-wider mb-4">Key Activities</div>
                    <div className="space-y-2.5">
                      {p.activities.map((act, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-3 p-3 rounded-xl border"
                          style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                        >
                          <div
                            className="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 text-white"
                            style={{ background: p.accentRaw }}
                          >
                            <FaCheck style={{ fontSize: "0.5rem" }} />
                          </div>
                          <span className="text-gray-300 text-sm">{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <div className="text-white font-bold text-sm uppercase tracking-wider mb-4">Deliverables</div>
                    <div className="flex flex-wrap gap-2">
                      {p.deliverables.map(d => (
                        <span
                          key={d}
                          className="px-4 py-2 rounded-full text-xs font-semibold border flex items-center gap-1.5"
                          style={{ color: p.accentRaw, borderColor: p.accentRaw + "40", background: p.accentRaw + "12" }}
                        >
                          <FaFileAlt style={{ fontSize: "0.55rem" }} /> {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Image */}
                <div className="relative">
                  <div
                    className="absolute -inset-2 rounded-3xl blur-xl opacity-20"
                    style={{ background: p.accentRaw }}
                  />
                  <div className="relative rounded-2xl overflow-hidden border" style={{ height: "420px", borderColor: "rgba(255,255,255,0.08)" }}>
                    <PhaseImage imgId={p.imgId} />
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(to top, #050510 8%, ${p.accentRaw}15 100%)` }}
                    />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div
                        className="inline-block px-4 py-2 rounded-full text-sm font-bold"
                        style={{ background: p.accentRaw + "30", color: p.accentRaw, border: `1px solid ${p.accentRaw}44` }}
                      >
                        {p.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase nav buttons */}
              <div className="flex justify-between items-center mt-10 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <button
                  onClick={() => setActivePhase(i - 1)}
                  disabled={i === 0}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                  style={{ borderColor: "rgba(255,255,255,0.1)", color: "#9ca3af" }}
                >
                  <FaArrowLeft /> Previous Phase
                </button>
                <div className="text-sm" style={{ color: "#6b7280" }}>{i + 1} of {phases.length}</div>
                <button
                  onClick={() => setActivePhase(i + 1)}
                  disabled={i === phases.length - 1}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed btn-primary"
                >
                  Next Phase <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* All phases quick view */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white">
              The Full <span style={{ color: "#8b5cf6" }}>Journey at a Glance</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {phases.map((p, i) => (
              <button
                key={i}
                onClick={() => setActivePhase(i)}
                className="group text-center p-6 rounded-2xl border transition-all duration-300"
                style={{
                  background: activePhase === i ? p.accentRaw + "12" : "rgba(255,255,255,0.02)",
                  borderColor: activePhase === i ? p.accentRaw + "44" : "rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl mx-auto mb-3 flex items-center justify-center text-xl text-white"
                  style={{ background: activePhase === i ? p.accentRaw : "rgba(255,255,255,0.06)" }}
                >
                  {p.icon}
                </div>
                <div className="text-xs font-black mb-0.5" style={{ color: p.accentRaw }}>{p.num}</div>
                <div className="text-white font-bold text-sm mb-1">{p.title}</div>
                <div className="text-xs" style={{ color: "#6b7280" }}>{p.duration}</div>
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border rounded-3xl p-10 md:p-16 text-center" style={{ background: "rgba(59,130,246,0.05)", borderColor: "rgba(59,130,246,0.2)" }}>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Start <span style={{ color: "#8b5cf6" }}>Phase 01?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Every great product starts with a conversation. Let's begin your discovery session today.
          </p>
          <Link to="/contact" className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg">
            Book a Discovery Session
          </Link>
        </div>
      </div>
    </div>
  );
}
