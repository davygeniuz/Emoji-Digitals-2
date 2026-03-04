import { useState } from "react";
import { Link } from "react-router-dom";
import { IMGS, gd } from "../utils/images";

function GImg({ ids, alt, className }: { ids: string[]; alt: string; className?: string }) {
  const urls = ids.flatMap(id => [gd(id, 800), gd(id, 600)]);
  const [idx, setIdx] = useState(0);
  if (idx < urls.length)
    return <img src={urls[idx]} alt={alt} className={className} onError={() => setIdx(i => i + 1)} />;
  return <div className={className} style={{ background: "rgba(99,102,241,0.15)" }} />;
}

const experiments = [
  { tag: "AI / Machine Learning", title: "AI Brand Intelligence Engine",       desc: "An experimental AI system that analyses competitor brands and generates positioning recommendations, colour palettes, and messaging frameworks automatically.", status: "In Development",  statusColor: "#f59e0b", ids: [IMGS.img01, IMGS.port1], tech: ["Python", "OpenAI API", "Vector DB", "React"],      icon: "🤖", accent: "from-cyan-500 to-blue-600",     glow: "rgba(6,182,212,0.2)" },
  { tag: "Web Innovation",        title: "No-Code Site Builder v2",            desc: "A drag-and-drop website builder tailored for Nigerian SMEs — with local payment integrations, Naira pricing, and WhatsApp contact widgets built in.",            status: "Prototyping",     statusColor: "#8b5cf6", ids: [IMGS.img02, IMGS.img06], tech: ["React", "Node.js", "Supabase", "Stripe"],         icon: "🌐", accent: "from-violet-500 to-purple-600", glow: "rgba(139,92,246,0.2)" },
  { tag: "EdTech",                title: "Adaptive Learning Platform",         desc: "A smart e-learning system that adjusts course content and pacing based on each student's progress, quiz performance, and learning style patterns.",              status: "Beta Testing",    statusColor: "#10b981", ids: [IMGS.img03, IMGS.img07], tech: ["React", "FastAPI", "ML", "PostgreSQL"],           icon: "📚", accent: "from-emerald-500 to-teal-600", glow: "rgba(16,185,129,0.2)" },
  { tag: "Automation",            title: "Business Process Automator",         desc: "Workflow automation tool that connects Nigerian businesses to automated invoicing, inventory tracking, customer follow-ups, and report generation.",               status: "Live",            statusColor: "#22d3ee", ids: [IMGS.img04, IMGS.img08], tech: ["Node.js", "Zapier API", "MongoDB", "WhatsApp API"], icon: "⚙️", accent: "from-blue-500 to-indigo-600",   glow: "rgba(59,130,246,0.2)" },
  { tag: "Cybersecurity",         title: "Digital Threat Scanner",             desc: "A lightweight cybersecurity audit tool that scans Nigerian SME websites for common vulnerabilities, expired SSL, open ports, and misconfigured DNS.",              status: "Research Phase",  statusColor: "#f87171", ids: [IMGS.img05, IMGS.img09], tech: ["Python", "nmap", "OpenSSL", "Django"],            icon: "🛡️", accent: "from-red-500 to-rose-600",     glow: "rgba(239,68,68,0.2)" },
  { tag: "Data Science",          title: "African Market Analytics Dashboard", desc: "A data aggregation and visualisation platform pulling real-time market signals, trends, and consumer behaviour patterns across West Africa.",                     status: "In Development",  statusColor: "#f59e0b", ids: [IMGS.img10, IMGS.img11], tech: ["Python", "Pandas", "D3.js", "BigQuery"],          icon: "📊", accent: "from-amber-500 to-orange-600", glow: "rgba(245,158,11,0.2)" },
];

const emergingTech = [
  { icon: "🤖", name: "Generative AI",           desc: "GPT-4, Claude, image generation and AI-powered content workflows",                    color: "from-cyan-500 to-blue-500" },
  { icon: "⛓️", name: "Web3 & Blockchain",       desc: "Smart contracts, NFT utility, and decentralised application architecture",           color: "from-purple-500 to-indigo-500" },
  { icon: "☁️", name: "Cloud Infrastructure",    desc: "AWS, GCP, and Azure deployments with zero-downtime CI/CD pipelines",                 color: "from-blue-500 to-sky-500" },
  { icon: "📡", name: "IoT Systems",             desc: "Internet of Things device connectivity, sensor data, and real-time dashboards",       color: "from-green-500 to-teal-500" },
  { icon: "🧠", name: "Machine Learning",        desc: "Custom ML models for prediction, classification, NLP, and computer vision",           color: "from-violet-500 to-purple-500" },
  { icon: "🔐", name: "Zero-Trust Security",     desc: "Identity-first security architectures, penetration testing, and hardened deployments", color: "from-red-500 to-rose-500" },
  { icon: "⚡", name: "Edge Computing",          desc: "Distributed compute at the network edge for ultra-low latency applications",           color: "from-yellow-500 to-amber-500" },
  { icon: "🎮", name: "Extended Reality (XR)",   desc: "Augmented and virtual reality experiences for training and product demos",            color: "from-pink-500 to-fuchsia-500" },
];

export default function Lab() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-28 pb-20 relative overflow-hidden" style={{ background: "#050510" }}>
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[150px]" />
      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" /> Innovation Lab — Awka, Nigeria
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">Inside the <span className="gradient-text">Innovation Lab</span></h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Where curiosity meets code. Our lab is a living space of experiments, prototypes, and emerging digital concepts —
            built by a team obsessed with what technology can do next.
          </p>
        </div>

        {/* Experiments Grid */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <div className="text-white font-black text-lg tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> Live Experiments & Prototypes
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiments.map((exp, i) => (
              <div key={i} className="group relative rounded-2xl border border-white/10 overflow-hidden cursor-default transition-all duration-500"
                style={{ background: "rgba(255,255,255,0.02)", boxShadow: hovered === i ? `0 0 40px ${exp.glow}, 0 0 80px ${exp.glow}` : "none", borderColor: hovered === i ? exp.glow.replace("0.2", "0.4") : "rgba(255,255,255,0.1)", transform: hovered === i ? "translateY(-6px)" : "translateY(0)" }}
                onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
                <div className="relative h-48 overflow-hidden">
                  <GImg ids={exp.ids} alt={exp.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-black/40 to-transparent" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(to bottom, ${exp.glow}, transparent)` }} />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold border" style={{ color: exp.statusColor, borderColor: exp.statusColor + "44", background: exp.statusColor + "15", backdropFilter: "blur(8px)" }}>● {exp.status}</div>
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-xs text-gray-300 border border-white/10">{exp.tag}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.accent} flex items-center justify-center text-lg`}>{exp.icon}</div>
                    <h3 className="text-white font-bold text-base leading-tight">{exp.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map(t => <span key={t} className="px-2.5 py-1 text-xs font-mono text-gray-400 bg-white/5 border border-white/10 rounded-md">{t}</span>)}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(to right, transparent, ${exp.statusColor}, transparent)` }} />
              </div>
            ))}
          </div>
        </div>

        {/* Emerging Technologies */}
        <div className="mb-24">
          <div className="text-center mb-14">
            <div className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">Research Areas</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Emerging Technologies <span className="gradient-text">We Explore</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We don't just follow trends — we experiment with them.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {emergingTech.map((tech, i) => (
              <div key={i} className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 cursor-default overflow-hidden">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>{tech.icon}</div>
                <h3 className="text-white font-bold text-sm mb-2">{tech.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center border border-white/10"
          style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(99,102,241,0.15) 50%, rgba(139,92,246,0.1) 100%)" }}>
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative">
            <div className="text-6xl mb-6">🔬</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Want to Build the <span className="gradient-text">Future With Us?</span></h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you have a bold idea, a complex problem, or want to explore what emerging technology can do for your business —
              our lab is open. Let's experiment together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg">Start a Lab Project →</Link>
              <Link to="/services" className="btn-outline px-8 py-4 rounded-full text-white font-semibold text-lg">Explore Our Services →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
