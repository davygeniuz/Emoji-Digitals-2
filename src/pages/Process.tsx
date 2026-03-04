import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const phases = [
  {
    num: "01",
    title: "Discover",
    icon: "🔍",
    color: "from-blue-500 to-cyan-500",
    accentRaw: "#3b82f6",
    glow: "rgba(59,130,246,0.3)",
    duration: "Days 1–5",
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
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
  },
  {
    num: "02",
    title: "Design",
    icon: "🎨",
    color: "from-purple-500 to-pink-500",
    accentRaw: "#a855f7",
    glow: "rgba(168,85,247,0.3)",
    duration: "Days 6–14",
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
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
  },
  {
    num: "03",
    title: "Develop",
    icon: "⚙️",
    color: "from-indigo-500 to-blue-500",
    accentRaw: "#6366f1",
    glow: "rgba(99,102,241,0.3)",
    duration: "Days 15–45",
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
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
  },
  {
    num: "04",
    title: "Deploy",
    icon: "🚀",
    color: "from-violet-500 to-purple-500",
    accentRaw: "#8b5cf6",
    glow: "rgba(139,92,246,0.3)",
    duration: "Days 46–52",
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
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
  },
  {
    num: "05",
    title: "Scale",
    icon: "📈",
    color: "from-emerald-500 to-teal-500",
    accentRaw: "#10b981",
    glow: "rgba(16,185,129,0.3)",
    duration: "Ongoing",
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
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
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

export default function Process() {
  const [activePhase, setActivePhase] = useState(0);
  const { ref: timelineRef, inView: timelineInView } = useInView(0.1);

  return (
    <div className="min-h-screen pt-28 pb-20 relative" style={{ background: "#050510" }}>
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/8 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">How We Work</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Our <span className="gradient-text">Process</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            A proven 5-phase framework that transforms your vision into a production-ready digital system — consistently, reliably, beautifully.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div ref={timelineRef} className="mb-20">
          {/* Phase Number Navigator */}
          <div className="relative flex items-center justify-center mb-16">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-white/10" />
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 transition-all duration-700 ease-in-out"
              style={{
                width: `${(activePhase / (phases.length - 1)) * 100}%`,
                background: "linear-gradient(to right, #3b82f6, #8b5cf6, #10b981)",
              }}
            />

            <div className="relative flex items-center justify-between w-full max-w-2xl mx-auto">
              {phases.map((phase, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhase(i)}
                  className="relative flex flex-col items-center gap-2 group"
                  style={{ zIndex: 10 }}
                >
                  <div
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center text-lg font-black transition-all duration-400"
                    style={{
                      background: i <= activePhase
                        ? `linear-gradient(135deg, ${phase.accentRaw}, #c084fc)`
                        : "#0a0a1e",
                      borderColor: i <= activePhase ? phase.accentRaw : "rgba(255,255,255,0.15)",
                      transform: i === activePhase ? "scale(1.25)" : "scale(1)",
                      boxShadow: i === activePhase ? `0 0 20px ${phase.glow}` : "none",
                      color: "#fff",
                    }}
                  >
                    {i < activePhase ? "✓" : phase.icon}
                  </div>
                  <span
                    className="text-xs font-bold tracking-wide hidden md:block"
                    style={{ color: i === activePhase ? "#fff" : "#4b5563" }}
                  >
                    {phase.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Phase Detail */}
          {phases.map((phase, i) => (
            <div
              key={i}
              className="transition-all duration-500"
              style={{
                display: i === activePhase ? "block" : "none",
                opacity: i === activePhase && timelineInView ? 1 : 0,
              }}
            >
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                {/* Left: Content */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${phase.accentRaw}40, ${phase.accentRaw}20)`, border: `1px solid ${phase.accentRaw}40` }}
                    >
                      {phase.icon}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest mb-1" style={{ color: phase.accentRaw }}>
                        Phase {phase.num} · {phase.duration}
                      </div>
                      <h2 className="text-3xl font-black text-white">{phase.title}</h2>
                    </div>
                  </div>

                  <div
                    className="text-lg font-semibold mb-4 italic"
                    style={{ color: phase.accentRaw }}
                  >
                    "{phase.tagline}"
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-8">{phase.desc}</p>

                  {/* Activities */}
                  <div className="mb-8">
                    <div className="text-white font-bold text-sm uppercase tracking-wider mb-4">Key Activities</div>
                    <div className="space-y-2.5">
                      {phase.activities.map((act, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-3 p-3 rounded-xl border border-white/8 bg-white/[0.02]"
                          style={{
                            animationDelay: `${j * 0.08}s`,
                          }}
                        >
                          <div
                            className="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ background: `linear-gradient(135deg, ${phase.accentRaw}, #c084fc)` }}
                          >
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
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
                      {phase.deliverables.map((d) => (
                        <span
                          key={d}
                          className="px-4 py-2 rounded-full text-xs font-semibold border"
                          style={{
                            color: phase.accentRaw,
                            borderColor: phase.accentRaw + "40",
                            background: phase.accentRaw + "12",
                          }}
                        >
                          📄 {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Image */}
                <div className="relative">
                  <div
                    className="absolute -inset-2 rounded-3xl blur-xl opacity-30"
                    style={{ background: `linear-gradient(135deg, ${phase.accentRaw}, #c084fc)` }}
                  />
                  <div className="relative rounded-2xl overflow-hidden border border-white/10" style={{ height: "420px" }}>
                    <img src={phase.image} alt={phase.title} className="w-full h-full object-cover" />
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(to top, #050510 10%, ${phase.accentRaw}20 100%)` }}
                    />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div
                        className="inline-block px-4 py-2 rounded-full text-sm font-bold"
                        style={{ background: phase.accentRaw + "30", color: phase.accentRaw, border: `1px solid ${phase.accentRaw}50` }}
                      >
                        {phase.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase nav buttons */}
              <div className="flex justify-between items-center mt-10 pt-8 border-t border-white/10">
                <button
                  onClick={() => setActivePhase(i - 1)}
                  disabled={i === 0}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed text-sm font-medium"
                >
                  ← Previous Phase
                </button>
                <div className="text-gray-600 text-sm">{i + 1} of {phases.length}</div>
                <button
                  onClick={() => setActivePhase(i + 1)}
                  disabled={i === phases.length - 1}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed btn-primary"
                >
                  Next Phase →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* All phases quick view */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white">
              The Full <span className="gradient-text">Journey at a Glance</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {phases.map((phase, i) => (
              <button
                key={i}
                onClick={() => setActivePhase(i)}
                className="group text-center p-6 rounded-2xl border transition-all duration-300"
                style={{
                  background: activePhase === i ? phase.accentRaw + "15" : "rgba(255,255,255,0.02)",
                  borderColor: activePhase === i ? phase.accentRaw + "50" : "rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl mx-auto mb-3 flex items-center justify-center text-2xl"
                  style={{ background: `linear-gradient(135deg, ${phase.accentRaw}40, ${phase.accentRaw}20)` }}
                >
                  {phase.icon}
                </div>
                <div className="text-xs font-black mb-0.5" style={{ color: phase.accentRaw }}>{phase.num}</div>
                <div className="text-white font-bold text-sm mb-1">{phase.title}</div>
                <div className="text-gray-600 text-xs">{phase.duration}</div>
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 border border-white/10 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Start <span className="gradient-text">Phase 01?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Every great product starts with a conversation. Let's begin your discovery session today.
          </p>
          <Link to="/contact" className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg">
            Book a Discovery Session →
          </Link>
        </div>
      </div>
    </div>
  );
}
