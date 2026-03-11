import { useState } from "react";
import { Link } from "react-router-dom";
import { IMGS, gd } from "../utils/images";
import {
  FaRobot, FaGlobe, FaBook, FaCog, FaShieldAlt, FaChartBar,
  FaBrain, FaLink, FaCloud, FaBroadcastTower, FaBolt, FaVrCardboard,
  FaFlask, FaArrowRight,
} from "react-icons/fa";

function GImg({ ids, alt, className }: { ids: string[]; alt: string; className?: string }) {
  const urls = ids.flatMap(id => [gd(id, 800), gd(id, 600)]);
  const [idx, setIdx] = useState(0);
  if (idx < urls.length)
    return <img src={urls[idx]} alt={alt} className={className} onError={() => setIdx(i => i + 1)} />;
  return <div className={className} style={{ background: "rgba(59,130,246,0.12)" }} />;
}

const experiments = [
  {
    tag: "AI / Machine Learning",
    title: "AI Brand Intelligence Engine",
    desc: "An experimental AI system that analyses competitor brands and generates positioning recommendations, colour palettes, and messaging frameworks automatically.",
    status: "In Development",
    statusColor: "#3b82f6",
    ids: [IMGS.img01, IMGS.port1],
    tech: ["Python", "OpenAI API", "Vector DB", "React"],
    icon: <FaRobot />,
    accentColor: "#3b82f6",
  },
  {
    tag: "Web Innovation",
    title: "No-Code Site Builder v2",
    desc: "A drag-and-drop website builder tailored for Nigerian SMEs — with local payment integrations, Naira pricing, and WhatsApp contact widgets built in.",
    status: "Prototyping",
    statusColor: "#8b5cf6",
    ids: [IMGS.img02, IMGS.img06],
    tech: ["React", "Node.js", "Supabase", "Stripe"],
    icon: <FaGlobe />,
    accentColor: "#8b5cf6",
  },
  {
    tag: "EdTech",
    title: "Adaptive Learning Platform",
    desc: "A smart e-learning system that adjusts course content and pacing based on each student's progress, quiz performance, and learning style patterns.",
    status: "Beta Testing",
    statusColor: "#3b82f6",
    ids: [IMGS.img03, IMGS.img07],
    tech: ["React", "FastAPI", "ML", "PostgreSQL"],
    icon: <FaBook />,
    accentColor: "#3b82f6",
  },
  {
    tag: "Automation",
    title: "Business Process Automator",
    desc: "Workflow automation tool that connects Nigerian businesses to automated invoicing, inventory tracking, customer follow-ups, and report generation.",
    status: "Live",
    statusColor: "#8b5cf6",
    ids: [IMGS.img04, IMGS.img08],
    tech: ["Node.js", "Zapier API", "MongoDB", "WhatsApp API"],
    icon: <FaCog />,
    accentColor: "#8b5cf6",
  },
  {
    tag: "Cybersecurity",
    title: "Digital Threat Scanner",
    desc: "A lightweight cybersecurity audit tool that scans Nigerian SME websites for common vulnerabilities, expired SSL, open ports, and misconfigured DNS.",
    status: "Research Phase",
    statusColor: "#3b82f6",
    ids: [IMGS.img05, IMGS.img09],
    tech: ["Python", "nmap", "OpenSSL", "Django"],
    icon: <FaShieldAlt />,
    accentColor: "#3b82f6",
  },
  {
    tag: "Data Science",
    title: "African Market Analytics Dashboard",
    desc: "A data aggregation and visualisation platform pulling real-time market signals, trends, and consumer behaviour patterns across West Africa.",
    status: "In Development",
    statusColor: "#8b5cf6",
    ids: [IMGS.img10, IMGS.img11],
    tech: ["Python", "Pandas", "D3.js", "BigQuery"],
    icon: <FaChartBar />,
    accentColor: "#8b5cf6",
  },
];

const emergingTech = [
  { icon: <FaRobot />,          name: "Generative AI",        desc: "GPT-4, Claude, image generation and AI-powered content workflows",                    color: "#3b82f6" },
  { icon: <FaLink />,           name: "Web3 & Blockchain",    desc: "Smart contracts, NFT utility, and decentralised application architecture",             color: "#8b5cf6" },
  { icon: <FaCloud />,          name: "Cloud Infrastructure", desc: "AWS, GCP, and Azure deployments with zero-downtime CI/CD pipelines",                   color: "#3b82f6" },
  { icon: <FaBroadcastTower />, name: "IoT Systems",          desc: "Internet of Things device connectivity, sensor data, and real-time dashboards",         color: "#8b5cf6" },
  { icon: <FaBrain />,          name: "Machine Learning",     desc: "Custom ML models for prediction, classification, NLP, and computer vision",             color: "#3b82f6" },
  { icon: <FaShieldAlt />,      name: "Zero-Trust Security",  desc: "Identity-first security architectures, penetration testing, and hardened deployments",  color: "#8b5cf6" },
  { icon: <FaBolt />,           name: "Edge Computing",       desc: "Distributed compute at the network edge for ultra-low latency applications",             color: "#3b82f6" },
  { icon: <FaVrCardboard />,    name: "Extended Reality (XR)", desc: "Augmented and virtual reality experiences for training and product demos",             color: "#8b5cf6" },
];

export default function Lab() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-28 pb-20 relative overflow-hidden" style={{ background: "#050510" }}>
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold mb-6"
            style={{ background: "rgba(59,130,246,0.08)", borderColor: "rgba(59,130,246,0.3)", color: "#3b82f6" }}
          >
            <FaFlask style={{ fontSize: "0.75rem" }} />
            Innovation Lab — Awka, Nigeria
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Inside the <span style={{ color: "#8b5cf6" }}>Innovation Lab</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Where curiosity meets code. Our lab is a living space of experiments, prototypes, and emerging digital concepts —
            built by a team obsessed with what technology can do next.
          </p>
        </div>

        {/* Experiments Grid */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="text-white font-black text-lg tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#3b82f6" }} />
              Live Experiments & Prototypes
            </div>
            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiments.map((exp, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border overflow-hidden cursor-default transition-all duration-500"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderColor: hovered === i ? exp.accentColor + "66" : "rgba(255,255,255,0.08)",
                  boxShadow: hovered === i ? `0 0 40px ${exp.accentColor}20` : "none",
                  transform: hovered === i ? "translateY(-6px)" : "translateY(0)",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <GImg ids={exp.ids} alt={exp.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #050510, rgba(5,5,16,0.4), transparent)" }} />
                  <div
                    className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold border"
                    style={{
                      color: exp.statusColor,
                      borderColor: exp.statusColor + "44",
                      background: exp.statusColor + "15",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {exp.status}
                  </div>
                  <div
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs border"
                    style={{ color: "#9ca3af", background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", borderColor: "rgba(255,255,255,0.1)" }}
                  >
                    {exp.tag}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-base text-white"
                      style={{ background: exp.accentColor }}
                    >
                      {exp.icon}
                    </div>
                    <h3 className="text-white font-bold text-base leading-tight">{exp.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>{exp.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map(t => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-mono rounded-md border"
                        style={{ color: "#9ca3af", background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to right, transparent, ${exp.accentColor}, transparent)`,
                    opacity: hovered === i ? 1 : 0,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Emerging Technologies */}
        <div className="mb-24">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#3b82f6" }}>Research Areas</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Emerging Technologies <span style={{ color: "#8b5cf6" }}>We Explore</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We don't just follow trends — we experiment with them.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {emergingTech.map((tech, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border cursor-default overflow-hidden transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.08)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLElement).style.borderColor = tech.color + "44";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4 shadow-lg text-white transition-transform duration-300 group-hover:scale-110"
                  style={{ background: tech.color }}
                >
                  {tech.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{tech.name}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center border"
          style={{ background: "rgba(59,130,246,0.05)", borderColor: "rgba(59,130,246,0.2)" }}
        >
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative">
            <div className="flex justify-center mb-6">
              <div
                className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl text-white"
                style={{ background: "rgba(59,130,246,0.2)", border: "1px solid rgba(59,130,246,0.4)" }}
              >
                <FaFlask />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Want to Build the <span style={{ color: "#8b5cf6" }}>Future With Us?</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you have a bold idea, a complex problem, or want to explore what emerging technology can do for your business —
              our lab is open. Let's experiment together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg inline-flex items-center gap-2">
                Start a Lab Project <FaArrowRight />
              </Link>
              <Link to="/services" className="btn-outline px-8 py-4 rounded-full text-white font-semibold text-lg">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
