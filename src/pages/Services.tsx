import { useState } from "react";
import { Link } from "react-router-dom";
import { IMGS, gd } from "../utils/images";

function GImg({ ids, alt, className }: { ids: string[]; alt: string; className?: string }) {
  const urls = ids.flatMap(id => [gd(id, 900), gd(id, 600)]);
  const [idx, setIdx] = useState(0);
  if (idx < urls.length)
    return <img src={urls[idx]} alt={alt} className={className} onError={() => setIdx(i => i + 1)} />;
  return <div className={className} style={{ background: "rgba(99,102,241,0.15)" }} />;
}

const services = [
  {
    number: "01",
    ids: [IMGS.img01, IMGS.img06, IMGS.port1],
    title: "Branding & Identity Systems",
    description: "We craft powerful brand identities that communicate clarity, authority, and innovation. From logo systems to complete brand strategy, we help you stand out in a competitive digital world.",
    items: ["Logo & Visual Identity", "Brand Strategy", "Brand Guidelines", "Social & Digital Assets"],
    color: "from-blue-500 to-cyan-500", glow: "rgba(59,130,246,0.3)",
    borderColor: "hover:border-blue-500/40", overlayColor: "from-blue-900/60 via-blue-900/20 to-transparent",
  },
  {
    number: "02",
    ids: [IMGS.img02, IMGS.img07, IMGS.img11],
    title: "Website Development",
    description: "We design and engineer high-performance websites built for speed, scalability, and user experience. From corporate websites to advanced web platforms, we build systems that grow with your business.",
    items: ["Fully Responsive", "SEO Optimised", "Conversion-Focused", "Modern Frameworks", "WordPress Editable"],
    color: "from-purple-500 to-pink-500", glow: "rgba(168,85,247,0.3)",
    borderColor: "hover:border-purple-500/40", overlayColor: "from-purple-900/60 via-purple-900/20 to-transparent",
  },
  {
    number: "03",
    ids: [IMGS.img03, IMGS.img08, IMGS.img12],
    title: "Application Development",
    description: "We develop custom web and mobile applications tailored to your business needs. Our approach combines clean UI/UX design with powerful backend architecture.",
    items: ["Business Automation", "Client Portals", "SaaS Platforms", "Internal Tools", "Startup MVPs"],
    color: "from-indigo-500 to-blue-500", glow: "rgba(99,102,241,0.3)",
    borderColor: "hover:border-indigo-500/40", overlayColor: "from-indigo-900/60 via-indigo-900/20 to-transparent",
  },
  {
    number: "04",
    ids: [IMGS.img04, IMGS.img09, IMGS.img05],
    title: "Technology Education & Training",
    description: "We train individuals and organisations to thrive in the digital economy. We don't just teach theory — we build real-world skills.",
    items: ["Web Development", "App Development", "Digital Tools", "Career Mentorship", "Corporate Training"],
    color: "from-violet-500 to-purple-500", glow: "rgba(139,92,246,0.3)",
    borderColor: "hover:border-violet-500/40", overlayColor: "from-violet-900/60 via-violet-900/20 to-transparent",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-28 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">What We Do</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Our <span className="gradient-text">Services</span></h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">End-to-end digital solutions engineered for growth, impact, and excellence.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {services.map((svc, i) => (
            <div key={i} className={`card-hover group relative bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 ${svc.borderColor}`}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${svc.glow}, transparent 70%)` }} />
              <div className="relative w-full h-64 overflow-hidden">
                <GImg ids={svc.ids} alt={svc.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-t ${svc.overlayColor}`} />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#050510] to-transparent" />
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center text-white font-black text-base shadow-lg z-10`}>{svc.number}</div>
              </div>
              <div className="relative z-10 p-10 pt-4">
                <h3 className="text-2xl font-bold text-white mb-3">{svc.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{svc.description}</p>
                <div className="flex flex-wrap gap-2">
                  {svc.items.map((item, j) => (
                    <span key={j} className={`px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${svc.color} bg-opacity-10 text-white border border-white/10`}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 border border-white/10 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to Get <span className="gradient-text">Started?</span></h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">Let's discuss your project and find the perfect solution for your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg">Start a Project →</Link>
            <Link to="/portfolio" className="btn-outline px-8 py-4 rounded-full text-white font-semibold text-lg">View Our Work →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
