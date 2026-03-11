import { useState } from "react";
import { Link } from "react-router-dom";
import { IMGS, gd } from "../utils/images";
import {
  FaPalette, FaExpand, FaExternalLinkAlt, FaTimes,
  FaTag, FaArrowRight,
} from "react-icons/fa";

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
  return <div className={className} style={{ ...style, background: "rgba(59,130,246,0.15)" }} />;
}

const portfolioItems = [
  { title: "Brand Identity System",  category: "Logo & Branding",   tags: ["Logo Design", "Brand Guidelines", "Visual Identity"], ids: [IMGS.port1, IMGS.img01] },
  { title: "Social Media Kit",       category: "Digital Assets",    tags: ["Social Media", "Graphics", "Content Design"],         ids: [IMGS.img02, IMGS.img06] },
  { title: "Training Workshop",      category: "Academy",           tags: ["Training", "Workshop", "Education"],                  ids: [IMGS.img03, IMGS.img07] },
  { title: "Corporate Branding",     category: "Brand Collateral",  tags: ["Stationery", "Business Cards", "Letterhead"],         ids: [IMGS.img04, IMGS.img08] },
  { title: "Digital Design System",  category: "Digital Design",    tags: ["UI Design", "Design System", "Figma"],                ids: [IMGS.img05, IMGS.img09] },
  { title: "Poster & Flyer Design",  category: "Print Design",      tags: ["Poster", "Flyer", "Typography"],                      ids: [IMGS.img10, IMGS.img01] },
  { title: "Creative Campaign",      category: "Marketing",         tags: ["Campaign", "Creative", "Brand"],                      ids: [IMGS.img11, IMGS.img02] },
  { title: "Innovation Lab Designs", category: "Innovation",        tags: ["Prototype", "Product", "Innovation"],                 ids: [IMGS.img12, IMGS.img03] },
];

export default function Design() {
  const [heroIdx, setHeroIdx] = useState(0);
  const heroUrls = ALL_IDS.flatMap(id => [gd(id, 1200), gd(id, 800)]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen pt-28 pb-20 relative" style={{ background: "#050510" }}>
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#3b82f6" }}>
            Creative Work
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Graphics Design <span style={{ color: "#8b5cf6" }}>Portfolio</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Bold visuals. Strategic design. Every pixel crafted with intent — here's a glimpse of our creative output.
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1" style={{ background: "rgba(59,130,246,0.2)" }} />
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase" style={{ color: "#3b82f6" }}>
            <FaPalette />
            <span>Featured Work — Real Emoji Digitals Portfolio</span>
          </div>
          <div className="h-px flex-1" style={{ background: "rgba(59,130,246,0.2)" }} />
        </div>

        {/* Featured portfolio piece */}
        <div className="mb-16">
          <div
            className="group relative rounded-3xl overflow-hidden border transition-all duration-500 cursor-pointer"
            style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.08)" }}
            onClick={() => setIsOpen(true)}
          >
            <div className="relative grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden min-h-[400px] lg:min-h-[500px]">
                {heroIdx < heroUrls.length ? (
                  <img
                    src={heroUrls[heroIdx]}
                    alt="Emoji Digitals Portfolio"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    style={{ minHeight: "400px" }}
                    onError={() => setHeroIdx(i => i + 1)}
                  />
                ) : (
                  <div className="w-full h-full min-h-[400px] flex items-center justify-center" style={{ background: "rgba(59,130,246,0.1)" }}>
                    <FaPalette style={{ fontSize: "4rem", color: "#3b82f6", opacity: 0.5 }} />
                  </div>
                )}
                <div className="absolute inset-0 hidden lg:block" style={{ background: "linear-gradient(to right, transparent, rgba(5,5,16,0.85))" }} />
                <div className="absolute inset-0 lg:hidden" style={{ background: "linear-gradient(to top, rgba(5,5,16,0.95), transparent)" }} />
              </div>

              <div className="relative p-10 lg:p-14 flex flex-col justify-center">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 w-fit border"
                  style={{ color: "#3b82f6", borderColor: "rgba(59,130,246,0.3)", background: "rgba(59,130,246,0.08)" }}
                >
                  <FaTag style={{ fontSize: "0.65rem" }} /> Real Emoji Digitals Work
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                  Graphics Design<br />
                  <span style={{ color: "#8b5cf6" }}>& Brand Showcase</span>
                </h3>
                <p className="text-gray-400 text-base leading-relaxed mb-8">
                  A comprehensive display of our graphics design capabilities — spanning brand identity creation,
                  visual storytelling, digital asset design, and creative production. Every piece is crafted with
                  purpose, precision, and a deep understanding of visual communication.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Brand Identity", "Logo Design", "Visual Design", "Digital Assets", "Creative Direction"].map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border"
                      style={{ color: "#9ca3af", borderColor: "rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://drive.google.com/drive/folders/1T4skg6tCXedZHQJqGlji27AFzNh0WpcH"
                    target="_blank" rel="noopener noreferrer"
                    className="btn-primary px-6 py-3 rounded-full text-white font-semibold text-sm flex items-center gap-2"
                    onClick={e => e.stopPropagation()}
                  >
                    View Full Portfolio <FaExternalLinkAlt style={{ fontSize: "0.65rem" }} />
                  </a>
                  <button
                    onClick={e => { e.stopPropagation(); setIsOpen(true); }}
                    className="btn-outline px-6 py-3 rounded-full text-white font-semibold text-sm flex items-center gap-2"
                  >
                    <FaExpand style={{ fontSize: "0.75rem" }} /> Expand Image
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More Creative Work */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1" style={{ background: "rgba(139,92,246,0.2)" }} />
          <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#8b5cf6" }}>More Creative Work</div>
          <div className="h-px flex-1" style={{ background: "rgba(139,92,246,0.2)" }} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {portfolioItems.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 border"
              style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.08)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.4)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div className="relative h-52 overflow-hidden">
                <GImg ids={item.ids} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,16,0.9), rgba(5,5,16,0.2))" }} />
                <div
                  className="absolute top-3 left-3 px-2 py-1 rounded-md text-white text-[10px] font-bold"
                  style={{ background: i % 2 === 0 ? "rgba(59,130,246,0.8)" : "rgba(139,92,246,0.8)" }}
                >
                  {item.category}
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                <div className="flex flex-wrap gap-1">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded" style={{ color: "#6b7280", background: "rgba(255,255,255,0.05)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">Interested in working with us on your next design project?</p>
          <Link to="/contact" className="btn-primary px-8 py-4 rounded-full text-white font-semibold inline-flex items-center gap-2">
            Start a Design Project <FaArrowRight style={{ fontSize: "0.8rem" }} />
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.96)", backdropFilter: "blur(20px)" }}
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: "rgba(255,255,255,0.6)" }}
              onClick={() => setIsOpen(false)}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
            >
              <FaTimes /> Close
            </button>
            {heroIdx < heroUrls.length ? (
              <img
                src={heroUrls[heroIdx]}
                alt="Portfolio"
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl border"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              />
            ) : (
              <div className="text-center text-white p-20">
                <FaPalette style={{ fontSize: "4rem", color: "#3b82f6", marginBottom: "1rem", opacity: 0.5 }} />
                <p className="text-gray-400">Image unavailable</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
