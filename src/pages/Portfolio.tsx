import { useState } from "react";
import { Link } from "react-router-dom";
import { IMGS, gd } from "../utils/images";

function GImg({ ids, alt, className }: { ids: string[]; alt: string; className?: string }) {
  const urls = ids.flatMap(id => [gd(id, 900), gd(id, 600), gd(id, 400)]);
  const [idx, setIdx] = useState(0);
  if (idx < urls.length)
    return <img src={urls[idx]} alt={alt} className={className} onError={() => setIdx(i => i + 1)} />;
  return <div className={className} style={{ background: "rgba(99,102,241,0.15)" }} />;
}

const projects = [
  {
    title: "Emoji Digitals — Brand Portfolio",
    category: "Branding & Design",
    description: "Our signature graphics design and brand identity showcase — real Emoji Digitals creative output spanning logos, visual systems, and digital assets.",
    tags: ["Brand Identity", "Logo Design", "Visual Assets"],
    ids: [IMGS.port1, IMGS.img01],
    accentColor: "border-blue-500/30", featured: true,
  },
  {
    title: "Creative Brand Campaign",
    category: "Branding",
    description: "A full brand campaign for a Nigerian creative agency — including visual identity, digital assets, and campaign materials.",
    tags: ["Branding", "Campaign", "Design"],
    ids: [IMGS.img02, IMGS.img06],
    accentColor: "border-purple-500/30",
  },
  {
    title: "Tech Startup Identity",
    category: "Branding",
    description: "Complete brand identity system for a next-gen Nigerian startup — logo, guidelines, and digital assets.",
    tags: ["Branding", "Strategy", "Design"],
    ids: [IMGS.img03, IMGS.img07],
    accentColor: "border-indigo-500/30",
  },
  {
    title: "Digital Training Programme",
    category: "Technology Education",
    description: "Built and launched a tech training institute, delivering courses to 500+ students across Anambra.",
    tags: ["Education", "Mentorship", "Dev"],
    ids: [IMGS.img04, IMGS.img08],
    accentColor: "border-cyan-500/30",
  },
  {
    title: "Corporate Training Workshop",
    category: "Tech Education",
    description: "Hands-on corporate training workshop equipping professionals with modern digital skills.",
    tags: ["Training", "Corporate", "Skills"],
    ids: [IMGS.img05, IMGS.img09],
    accentColor: "border-violet-500/30",
  },
  {
    title: "Design Studio Session",
    category: "Graphics Design",
    description: "In-studio design session showcasing the creative process behind brand identity and digital design.",
    tags: ["Design", "Studio", "Creative"],
    ids: [IMGS.img06, IMGS.img01],
    accentColor: "border-pink-500/30",
  },
  {
    title: "Innovation Lab Project",
    category: "Application Development",
    description: "Custom SaaS application built for a Nigerian SME — full-stack development with modern UI/UX.",
    tags: ["React", "Node.js", "SaaS"],
    ids: [IMGS.img07, IMGS.img11],
    accentColor: "border-blue-500/30",
  },
  {
    title: "Youth Tech Bootcamp",
    category: "Academy",
    description: "Intensive youth coding bootcamp empowering the next generation of Nigerian tech innovators.",
    tags: ["Academy", "Youth", "Coding"],
    ids: [IMGS.img08, IMGS.img12],
    accentColor: "border-green-500/30",
  },
  {
    title: "Brand Visual System",
    category: "Branding",
    description: "Complete visual design system — logo, typography, colour palette, and digital asset suite.",
    tags: ["Visual System", "Brand Kit", "Assets"],
    ids: [IMGS.img09, IMGS.port1],
    accentColor: "border-rose-500/30",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-28 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">Our Work</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Featured <span className="gradient-text">Portfolio</span></h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">A curated selection of projects where creativity meets engineering precision.</p>
        </div>

        {/* Featured */}
        {projects.filter(p => p.featured).map((proj, i) => (
          <div key={i} className={`card-hover group relative bg-white/[0.03] border ${proj.accentColor} rounded-3xl overflow-hidden mb-10 cursor-pointer transition-all duration-500`}>
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <GImg ids={proj.ids} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050510]/80 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/90 via-transparent to-transparent lg:hidden" />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-4 w-fit">⭐ Featured Work</div>
                <span className="text-xs text-gray-500 uppercase tracking-wider mb-2">{proj.category}</span>
                <h3 className="text-3xl font-black text-white mb-3 leading-tight">{proj.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 font-medium">{tag}</span>
                  ))}
                </div>
                <Link to="/design" className="btn-primary px-6 py-3 rounded-full text-white font-semibold text-sm w-fit">View Design Portfolio →</Link>
              </div>
            </div>
          </div>
        ))}

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {projects.filter(p => !p.featured).map((proj, i) => (
            <div key={i} className={`card-hover group relative bg-white/[0.03] border ${proj.accentColor} rounded-2xl overflow-hidden cursor-pointer transition-all duration-500`}>
              <div className="relative w-full h-56 overflow-hidden">
                <GImg ids={proj.ids} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs text-white border border-white/15 z-10">{proj.category}</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{proj.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{proj.description}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag, j) => (
                    <span key={j} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300 font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-black text-white mb-4">Have a Project in Mind?</h2>
          <p className="text-gray-400 mb-8">Let's build something amazing together.</p>
          <Link to="/contact" className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg">Start Your Project →</Link>
        </div>
      </div>
    </div>
  );
}
