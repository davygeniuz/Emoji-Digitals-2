import { useState } from "react";
import { Link } from "react-router-dom";
import { IMGS, gd } from "../utils/images";

const ALL_IDS = [
  IMGS.port1, IMGS.img01, IMGS.img02, IMGS.img03,
  IMGS.img04, IMGS.img05, IMGS.img06, IMGS.img07,
  IMGS.img08, IMGS.img09, IMGS.img10, IMGS.img11, IMGS.img12,
];

function GImg({ ids, alt, className, style }: { ids: string[]; alt: string; className?: string; style?: React.CSSProperties }) {
  const urls = ids.flatMap(id => [gd(id, 1200), gd(id, 800), gd(id, 600)]);
  const [idx, setIdx] = useState(0);
  if (idx < urls.length)
    return <img src={urls[idx]} alt={alt} className={className} style={style} onError={() => setIdx(i => i + 1)} />;
  return <div className={className} style={{ ...style, background: "rgba(99,102,241,0.15)" }} />;
}

const portfolioItems = [
  { title: "Brand Identity System",    category: "Logo & Branding",    tags: ["Logo Design", "Brand Guidelines", "Visual Identity"], ids: [IMGS.port1, IMGS.img01], color: "from-blue-500 to-cyan-500" },
  { title: "Social Media Kit",         category: "Digital Assets",     tags: ["Social Media", "Graphics", "Content Design"],         ids: [IMGS.img02, IMGS.img06], color: "from-pink-500 to-purple-500" },
  { title: "Training Workshop",        category: "Academy",            tags: ["Training", "Workshop", "Education"],                  ids: [IMGS.img03, IMGS.img07], color: "from-orange-500 to-pink-500" },
  { title: "Corporate Branding",       category: "Brand Collateral",   tags: ["Stationery", "Business Cards", "Letterhead"],         ids: [IMGS.img04, IMGS.img08], color: "from-indigo-500 to-blue-500" },
  { title: "Digital Design System",    category: "Digital Design",     tags: ["UI Design", "Design System", "Figma"],                ids: [IMGS.img05, IMGS.img09], color: "from-violet-500 to-purple-500" },
  { title: "Poster & Flyer Design",    category: "Print Design",       tags: ["Poster", "Flyer", "Typography"],                      ids: [IMGS.img10, IMGS.img01], color: "from-emerald-500 to-teal-500" },
  { title: "Creative Campaign",        category: "Marketing",          tags: ["Campaign", "Creative", "Brand"],                      ids: [IMGS.img11, IMGS.img02], color: "from-rose-500 to-red-500" },
  { title: "Innovation Lab Designs",   category: "Innovation",         tags: ["Prototype", "Product", "Innovation"],                 ids: [IMGS.img12, IMGS.img03], color: "from-amber-500 to-orange-500" },
];

export default function Design() {
  const [heroIdx, setHeroIdx] = useState(0);
  const heroUrls = ALL_IDS.flatMap(id => [gd(id, 1200), gd(id, 800)]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen pt-28 pb-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">Creative Work</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Graphics Design <span className="gradient-text">Portfolio</span></h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">Bold visuals. Strategic design. Every pixel crafted with intent — here's a glimpse of our creative output.</p>
        </div>

        {/* Featured portfolio piece */}
        <div className="mb-16">
          <div className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-indigo-500/40" />
            Featured Work — Real Emoji Digitals Portfolio
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-indigo-500/40" />
          </div>
          <div className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-indigo-500/40 transition-all duration-500 cursor-pointer"
            style={{ background: "rgba(255,255,255,0.02)" }} onClick={() => setIsOpen(true)}>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden min-h-[400px] lg:min-h-[500px]">
                {heroIdx < heroUrls.length ? (
                  <img src={heroUrls[heroIdx]} alt="Emoji Digitals Portfolio"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    style={{ minHeight: "400px" }} onError={() => setHeroIdx(i => i + 1)} />
                ) : (
                  <div className="w-full h-full min-h-[400px] bg-gradient-to-br from-indigo-900/60 to-purple-900/60 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">🎨</div>
                      <p className="text-white font-bold mb-2">Emoji Digitals Design Portfolio</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050510]/80 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/90 via-transparent to-transparent lg:hidden" />
              </div>
              <div className="relative p-10 lg:p-14 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-6 w-fit">
                  ✦ Real Emoji Digitals Work
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                  Graphics Design<br /><span className="gradient-text">& Brand Showcase</span>
                </h3>
                <p className="text-gray-400 text-base leading-relaxed mb-8">
                  A comprehensive display of our graphics design capabilities — spanning brand identity creation,
                  visual storytelling, digital asset design, and creative production. Every piece is crafted with
                  purpose, precision, and a deep understanding of visual communication.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Brand Identity", "Logo Design", "Visual Design", "Digital Assets", "Creative Direction"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 font-medium">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="https://drive.google.com/drive/folders/1T4skg6tCXedZHQJqGlji27AFzNh0WpcH"
                    target="_blank" rel="noopener noreferrer"
                    className="btn-primary px-6 py-3 rounded-full text-white font-semibold text-sm"
                    onClick={e => e.stopPropagation()}>
                    View Full Portfolio →
                  </a>
                  <button onClick={e => { e.stopPropagation(); setIsOpen(true); }}
                    className="btn-outline px-6 py-3 rounded-full text-white font-semibold text-sm">
                    Expand Image
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional items */}
        <div className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-indigo-500/40" />
          More Creative Work
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-indigo-500/40" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {portfolioItems.map((item, i) => (
            <div key={i} className="card-hover group relative bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-indigo-500/30 transition-all duration-500">
              <div className="relative h-52 overflow-hidden">
                <GImg ids={item.ids} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className={`absolute top-3 left-3 px-2 py-1 rounded-md bg-gradient-to-r ${item.color} text-white text-[10px] font-bold`}>{item.category}</div>
              </div>
              <div className="p-5">
                <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-gray-500 bg-white/5 px-2 py-0.5 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-6">Interested in working with us on your next design project?</p>
          <Link to="/contact" className="btn-primary px-8 py-4 rounded-full text-white font-semibold">Start a Design Project →</Link>
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <div className="relative max-w-5xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white/70 hover:text-white text-sm flex items-center gap-2 transition-colors" onClick={() => setIsOpen(false)}>Close ✕</button>
            {heroIdx < heroUrls.length ? (
              <img src={heroUrls[heroIdx]} alt="Portfolio" className="w-full h-auto max-h-[85vh] object-contain rounded-2xl border border-white/10" />
            ) : (
              <div className="text-center text-white p-20"><div className="text-6xl mb-6">🎨</div></div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
