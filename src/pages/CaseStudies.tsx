import { useState } from "react";
import { Link } from "react-router-dom";
import { IMGS, gd } from "../utils/images";
import {
  FaExclamationTriangle, FaBrain, FaCog, FaRocket,
  FaArrowRight, FaUser, FaClock, FaCalendarAlt,
} from "react-icons/fa";

function GImg({ ids, alt, className, style }: { ids: string[]; alt: string; className?: string; style?: React.CSSProperties }) {
  const urls = ids.flatMap(id => [gd(id, 900), gd(id, 600)]);
  const [idx, setIdx] = useState(0);
  if (idx < urls.length)
    return <img src={urls[idx]} alt={alt} className={className} style={style} onError={() => setIdx(i => i + 1)} />;
  return <div className={className} style={{ ...style, background: "rgba(59,130,246,0.12)" }} />;
}

const caseStudies = [
  {
    id: 1,
    category: "Application Development",
    title: "Building a FinTech Dashboard for Nigerian SMEs",
    client: "FinTrack Nigeria",
    duration: "8 Weeks",
    year: "2024",
    ids: [IMGS.img01, IMGS.img05],
    accentRaw: "#3b82f6",
    tags: ["React", "Node.js", "MongoDB", "AI Analytics"],
    problem: "FinTrack Nigeria had no centralised system to track cash flow, invoices, customer payments, and revenue reports. Business owners relied on spreadsheets and paper records, causing financial blind spots and missed growth opportunities.",
    strategy: "We recommended a custom SaaS dashboard built on React + Node.js, with real-time Naira payment integration via Paystack, automated invoice generation, and an AI insights layer that flags unusual spending patterns.",
    execution: [
      "Discovery workshops with 12 SME owners to map their financial workflows",
      "Designed intuitive dashboard UI with mobile-first approach for field teams",
      "Built RESTful API backend with secure JWT authentication and role-based access",
      "Integrated Paystack and Flutterwave for dual-payment gateway support",
      "Deployed AI micro-service using Python + scikit-learn for anomaly detection",
    ],
    results: [
      { metric: "300%", label: "Faster invoice processing" },
      { metric: "₦4.2M", label: "Recovered in unpaid invoices" },
      { metric: "98%", label: "Client retention at 6 months" },
      { metric: "2.4×", label: "Average revenue growth" },
    ],
  },
  {
    id: 2,
    category: "Branding & Identity",
    title: "Complete Brand Transformation for an Anambra Startup",
    client: "NovaTech Anambra",
    duration: "4 Weeks",
    year: "2024",
    ids: [IMGS.port1, IMGS.img02],
    accentRaw: "#8b5cf6",
    tags: ["Logo Design", "Brand Strategy", "Visual Identity", "Guidelines"],
    problem: "NovaTech was an ambitious tech startup operating in Anambra with no consistent visual identity. Their logo was created in Microsoft Word, their brand colours changed per project, and potential investors were not taking them seriously.",
    strategy: "A complete brand overhaul starting with brand strategy, competitor analysis, and positioning workshop. We developed a premium visual identity system that communicated innovation, trust, and authority.",
    execution: [
      "Brand audit and competitor analysis across 15 Nigerian tech companies",
      "3-day brand strategy workshop to define positioning, voice, and values",
      "Developed 3 logo concept directions with full rationale and presentation",
      "Created comprehensive brand guidelines (87-page document)",
      "Designed complete suite: business cards, letterheads, social templates, pitch deck",
    ],
    results: [
      { metric: "3×", label: "Investor meetings secured post-rebrand" },
      { metric: "₦25M", label: "Seed funding raised within 60 days" },
      { metric: "4.8★", label: "Client satisfaction rating" },
      { metric: "6", label: "Partnership deals closed" },
    ],
  },
  {
    id: 3,
    category: "Technology Education",
    title: "Deploying a 500-Student Tech Training Programme",
    client: "Anambra State Youth Initiative",
    duration: "16 Weeks",
    year: "2023",
    ids: [IMGS.img03, IMGS.img07],
    accentRaw: "#3b82f6",
    tags: ["Web Dev Training", "Corporate Education", "Certification", "Mentorship"],
    problem: "Youth unemployment in Anambra State was at critical levels. A state-aligned youth empowerment initiative needed a trusted tech training partner capable of training 500 youths in digital skills within 4 months — with measurable employment outcomes.",
    strategy: "We designed a structured 4-month coding and digital skills bootcamp with three learning tracks: Web Development, Digital Marketing, and Graphic Design. All tracks included job-readiness coaching, portfolio building, and employer introductions.",
    execution: [
      "Curriculum design and learning pathway mapping for 3 specialisations",
      "Recruited and trained 12 facilitators using our Teaching Excellence Framework",
      "Deployed hybrid learning model: 3 days physical, 2 days online per week",
      "Built custom learning portal with progress tracking and assignment submission",
      "Coordinated graduation ceremony, certificate issuance, and employer job fair",
    ],
    results: [
      { metric: "500+", label: "Students trained & certified" },
      { metric: "73%", label: "Employment rate at 3 months" },
      { metric: "92%", label: "Course completion rate" },
      { metric: "₦18M", label: "Collective student earnings (6-month)" },
    ],
  },
];

function MetricCard({ metric, label, accent }: { metric: string; label: string; accent: string }) {
  return (
    <div
      className="text-center p-5 rounded-2xl border"
      style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
    >
      <div className="text-3xl md:text-4xl font-black mb-1" style={{ color: accent }}>
        {metric}
      </div>
      <div className="text-xs leading-snug" style={{ color: "#9ca3af" }}>{label}</div>
    </div>
  );
}

const phaseCards = [
  { label: "The Problem",  icon: <FaExclamationTriangle />, phase: "01", key: "problem"   as const },
  { label: "The Strategy", icon: <FaBrain />,               phase: "02", key: "strategy"  as const },
];

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0);
  const cs = caseStudies[activeCase];

  return (
    <div className="min-h-screen pt-28 pb-20 relative" style={{ background: "#050510" }}>
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#3b82f6" }}>
            Proven Results
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Case <span style={{ color: "#8b5cf6" }}>Studies</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">Real projects. Real challenges. Real outcomes.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-12 justify-center">
          {caseStudies.map((c, i) => (
            <button
              key={i}
              onClick={() => setActiveCase(i)}
              className="flex-1 max-w-xs px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 border text-left"
              style={{
                background: activeCase === i ? `${c.accentRaw}15` : "rgba(255,255,255,0.02)",
                borderColor: activeCase === i ? c.accentRaw + "55" : "rgba(255,255,255,0.08)",
                color: activeCase === i ? "#fff" : "#6b7280",
                boxShadow: activeCase === i ? `0 0 20px ${c.accentRaw}20` : "none",
              }}
            >
              <div className="text-[10px] uppercase tracking-widest mb-1" style={{ color: activeCase === i ? c.accentRaw : "#4b5563" }}>
                {c.category}
              </div>
              <div className="leading-tight text-sm">{c.title.split(" ").slice(0, 5).join(" ")}...</div>
            </button>
          ))}
        </div>

        {/* Active Case */}
        <div key={cs.id} className="mb-20">

          {/* Hero image */}
          <div className="relative rounded-3xl overflow-hidden border mb-12" style={{ height: "400px", borderColor: "rgba(255,255,255,0.08)" }}>
            <GImg ids={cs.ids} alt={cs.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #050510, rgba(5,5,16,0.6), transparent)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold border"
                  style={{ background: cs.accentRaw + "25", color: cs.accentRaw, borderColor: cs.accentRaw + "44" }}
                >
                  {cs.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs border flex items-center gap-1.5" style={{ background: "rgba(255,255,255,0.08)", color: "#d1d5db", borderColor: "rgba(255,255,255,0.1)" }}>
                  <FaClock style={{ fontSize: "0.6rem" }} /> {cs.duration}
                </span>
                <span className="px-3 py-1 rounded-full text-xs border flex items-center gap-1.5" style={{ background: "rgba(255,255,255,0.08)", color: "#d1d5db", borderColor: "rgba(255,255,255,0.1)" }}>
                  <FaCalendarAlt style={{ fontSize: "0.6rem" }} /> {cs.year}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">{cs.title}</h2>
              <div className="text-sm flex items-center gap-1.5" style={{ color: "#9ca3af" }}>
                <FaUser style={{ fontSize: "0.65rem" }} />
                Client: <span className="text-white font-semibold ml-1">{cs.client}</span>
              </div>
            </div>
          </div>

          {/* Problem & Strategy */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {phaseCards.map(card => (
              <div
                key={card.label}
                className="p-8 rounded-2xl border"
                style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-base text-white"
                    style={{ background: cs.accentRaw + "25", border: `1px solid ${cs.accentRaw}30` }}
                  >
                    <span style={{ color: cs.accentRaw }}>{card.icon}</span>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest" style={{ color: "#6b7280" }}>Phase {card.phase}</div>
                    <div className="text-white font-bold text-lg">{card.label}</div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                  {card.key === "problem" ? cs.problem : cs.strategy}
                </p>
              </div>
            ))}
          </div>

          {/* Execution */}
          <div className="p-8 rounded-2xl border mb-8" style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-base"
                style={{ background: cs.accentRaw + "25", border: `1px solid ${cs.accentRaw}30` }}
              >
                <FaCog style={{ color: cs.accentRaw }} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest" style={{ color: "#6b7280" }}>Phase 03</div>
                <div className="text-white font-bold text-lg">The Execution</div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {cs.execution.map((step, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl border"
                  style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5 text-white"
                    style={{ background: cs.accentRaw }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div
            className="p-8 md:p-12 rounded-2xl border"
            style={{ background: `${cs.accentRaw}08`, borderColor: cs.accentRaw + "25" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-base"
                style={{ background: cs.accentRaw + "30", border: `1px solid ${cs.accentRaw}44` }}
              >
                <FaRocket style={{ color: cs.accentRaw }} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest" style={{ color: "#6b7280" }}>Phase 04</div>
                <div className="text-white font-bold text-lg">The Results</div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cs.results.map((r, i) => (
                <MetricCard key={i} metric={r.metric} label={r.label} accent={cs.accentRaw} />
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2 items-center">
            <span className="text-xs mt-1" style={{ color: "#6b7280" }}>Tech used:</span>
            {cs.tags.map(t => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-mono border"
                style={{ color: "#9ca3af", background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="border rounded-3xl p-10 md:p-16 text-center"
          style={{ background: "rgba(59,130,246,0.05)", borderColor: "rgba(59,130,246,0.2)" }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Become Our Next <span style={{ color: "#8b5cf6" }}>Success Story?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Let's craft a strategy, execute with precision, and deliver measurable results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg inline-flex items-center gap-2">
              Start Your Project <FaArrowRight />
            </Link>
            <Link to="/portfolio" className="btn-outline px-8 py-4 rounded-full text-white font-semibold text-lg">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
