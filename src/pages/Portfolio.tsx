import { useState } from "react";
import { Link } from "react-router-dom";
import { IMGS, gd } from "../utils/images";
import { FaStar, FaArrowRight } from "react-icons/fa";

function GImg({ ids, alt, className }: { ids: string[]; alt: string; className?: string }) {
  const urls = ids.flatMap(id => [gd(id, 900), gd(id, 600), gd(id, 400)]);
  const [idx, setIdx] = useState(0);
  if (idx < urls.length)
    return <img src={urls[idx]} alt={alt} className={className} onError={() => setIdx(i => i + 1)} />;
  return <div className={className} style={{ background: "rgba(59,130,246,0.1)" }} />;
}

const projects = [
  {
    title: "Emoji Digitals — Brand Portfolio",
    category: "Branding & Design",
    description: "Our signature graphics design and brand identity showcase — real Emoji Digitals creative output spanning logos, visual systems, and digital assets.",
    tags: ["Brand Identity", "Logo Design", "Visual Assets"],
    ids: [IMGS.port1, IMGS.img01],
    accent: "#3b82f6", featured: true,
  },
  {
    title: "Creative Brand Campaign",
    category: "Branding",
    description: "A full brand campaign for a Nigerian creative agency — including visual identity, digital assets, and campaign materials.",
    tags: ["Branding", "Campaign", "Design"],
    ids: [IMGS.img02, IMGS.img06],
    accent: "#8b5cf6",
  },
  {
    title: "Tech Startup Identity",
    category: "Branding",
    description: "Complete brand identity system for a next-gen Nigerian startup — logo, guidelines, and digital assets.",
    tags: ["Branding", "Strategy", "Design"],
    ids: [IMGS.img03, IMGS.img07],
    accent: "#3b82f6",
  },
  {
    title: "Digital Training Programme",
    category: "Technology Education",
    description: "Built and launched a tech training institute, delivering courses to 500+ students across Anambra.",
    tags: ["Education", "Mentorship", "Dev"],
    ids: [IMGS.img04, IMGS.img08],
    accent: "#8b5cf6",
  },
  {
    title: "Corporate Training Workshop",
    category: "Tech Education",
    description: "Hands-on corporate training workshop equipping professionals with modern digital skills.",
    tags: ["Training", "Corporate", "Skills"],
    ids: [IMGS.img05, IMGS.img09],
    accent: "#3b82f6",
  },
  {
    title: "Design Studio Session",
    category: "Graphics Design",
    description: "In-studio design session showcasing the creative process behind brand identity and digital design.",
    tags: ["Design", "Studio", "Creative"],
    ids: [IMGS.img06, IMGS.img01],
    accent: "#8b5cf6",
  },
  {
    title: "Innovation Lab Project",
    category: "Application Development",
    description: "Custom SaaS application built for a Nigerian SME — full-stack development with modern UI/UX.",
    tags: ["React", "Node.js", "SaaS"],
    ids: [IMGS.img07, IMGS.img11],
    accent: "#3b82f6",
  },
  {
    title: "Youth Tech Bootcamp",
    category: "Academy",
    description: "Intensive youth coding bootcamp empowering the next generation of Nigerian tech innovators.",
    tags: ["Academy", "Youth", "Coding"],
    ids: [IMGS.img08, IMGS.img12],
    accent: "#8b5cf6",
  },
  {
    title: "Brand Visual System",
    category: "Branding",
    description: "Complete visual design system — logo, typography, colour palette, and digital asset suite.",
    tags: ["Visual System", "Brand Kit", "Assets"],
    ids: [IMGS.img09, IMGS.port1],
    accent: "#3b82f6",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-28 pb-20 relative" style={{ background: "#050510" }}>
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px]" style={{ background: "rgba(59,130,246,0.08)" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[120px]" style={{ background: "rgba(139,92,246,0.08)" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#3b82f6" }}>Our Work</div>
          <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ color: "#ffffff" }}>
            Featured <span style={{ color: "#8b5cf6" }}>Portfolio</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "#94a3b8" }}>
            A curated selection of projects where creativity meets engineering precision.
          </p>
        </div>

        {/* Featured */}
        {projects.filter(p => p.featured).map((proj, i) => (
          <div
            key={i}
            className="group relative rounded-3xl overflow-hidden mb-10 transition-all duration-500"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${proj.accent}33`,
            }}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <GImg ids={proj.ids} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 hidden lg:block" style={{ background: "linear-gradient(to right, transparent, #050510cc)" }} />
                <div className="absolute inset-0 lg:hidden" style={{ background: "linear-gradient(to top, #050510ee, transparent)" }} />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 w-fit"
                  style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.3)", color: "#3b82f6" }}
                >
                  <FaStar size={10} /> Featured Work
                </div>
                <span className="text-xs uppercase tracking-wider mb-2" style={{ color: "#64748b" }}>{proj.category}</span>
                <h3 className="text-3xl font-black mb-3 leading-tight" style={{ color: "#ffffff" }}>{proj.title}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#94a3b8" }}>{proj.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#cbd5e1" }}
                    >{tag}</span>
                  ))}
                </div>
                <Link
                  to="/design"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm w-fit transition-all duration-300"
                  style={{ background: "#3b82f6", color: "#ffffff" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#2563eb")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#3b82f6")}
                >
                  View Design Portfolio <FaArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {projects.filter(p => !p.featured).map((proj, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden transition-all duration-500"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${proj.accent}22`,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${proj.accent}55`;
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${proj.accent}22`;
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div className="relative w-full h-56 overflow-hidden">
                <GImg ids={proj.ids} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2), transparent)" }} />
                <div
                  className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs z-10"
                  style={{ background: "rgba(0,0,0,0.6)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.15)" }}
                >{proj.category}</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2" style={{ color: "#ffffff" }}>{proj.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#94a3b8" }}>{proj.description}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 rounded-md text-xs font-medium"
                      style={{ background: `${proj.accent}15`, color: proj.accent, border: `1px solid ${proj.accent}30` }}
                    >{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-black mb-4" style={{ color: "#ffffff" }}>Have a Project in Mind?</h2>
          <p className="mb-8" style={{ color: "#94a3b8" }}>Let's build something amazing together.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            style={{ background: "#3b82f6", color: "#ffffff" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#2563eb")}
            onMouseLeave={e => (e.currentTarget.style.background = "#3b82f6")}
          >
            Start Your Project <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
