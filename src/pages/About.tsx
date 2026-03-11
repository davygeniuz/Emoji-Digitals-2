import { useState } from "react";
import { Link } from "react-router-dom";
import { IMGS, gd } from "../utils/images";
import {
  FaSearch, FaPaintBrush, FaCog, FaRocket,
  FaFlask, FaBullseye, FaLayerGroup, FaBookOpen,
  FaEye, FaArrowRight,
} from "react-icons/fa";

function GImg({ ids, alt, className }: { ids: string[]; alt: string; className?: string }) {
  const urls = ids.flatMap(id => [gd(id, 800), gd(id, 600)]);
  const [idx, setIdx] = useState(0);
  if (idx < urls.length)
    return <img src={urls[idx]} alt={alt} className={className} onError={() => setIdx(i => i + 1)} />;
  return <div className={className} style={{ background: "rgba(59,130,246,0.1)" }} />;
}

const reasons = [
  { title: "Creative Innovation",   desc: "We approach every project like a tech lab — experimenting, optimising, and refining until it's exceptional.", ids: [IMGS.img01, IMGS.port1], tag: "01", icon: <FaFlask />, accent: "#3b82f6" },
  { title: "Engineering Precision", desc: "Every product we build is structured for long-term scalability and performance.",                             ids: [IMGS.img02, IMGS.img06], tag: "02", icon: <FaLayerGroup />, accent: "#8b5cf6" },
  { title: "Future-Focused",        desc: "We integrate modern technologies and AI-driven workflows to keep you ahead of the curve.",                    ids: [IMGS.img03, IMGS.img07], tag: "03", icon: <FaBullseye />, accent: "#3b82f6" },
  { title: "Education-Driven",      desc: "We empower clients and students with knowledge, not just products.",                                          ids: [IMGS.img04, IMGS.img08], tag: "04", icon: <FaBookOpen />, accent: "#8b5cf6" },
];

const processSteps = [
  { num: "01", title: "Discover", icon: <FaSearch />,     color: "#3b82f6", desc: "We analyse your vision, goals, and challenges through deep discovery sessions to fully understand your business landscape." },
  { num: "02", title: "Design",   icon: <FaPaintBrush />, color: "#8b5cf6", desc: "We prototype creative and technical solutions, crafting experiences that balance aesthetics with functionality." },
  { num: "03", title: "Develop",  icon: <FaCog />,        color: "#3b82f6", desc: "We engineer scalable systems with clean architecture, cutting-edge frameworks, and attention to every detail." },
  { num: "04", title: "Deploy",   icon: <FaRocket />,     color: "#8b5cf6", desc: "We launch, optimise, and support your growth — ensuring your digital systems perform at peak at all times." },
];

export default function About() {
  return (
    <div className="min-h-screen pt-28 pb-20 relative" style={{ background: "#050510" }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px]" style={{ background: "rgba(59,130,246,0.08)" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[120px]" style={{ background: "rgba(139,92,246,0.08)" }} />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#3b82f6" }}>About Us</div>
          <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ color: "#ffffff" }}>
            About <span style={{ color: "#8b5cf6" }}>Emoji Digitals</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#94a3b8" }}>
            Founded with one clear mission — to bridge creativity and technology.
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#3b82f6" }}>Our Story</div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: "#ffffff" }}>
              Bridging Creativity<br /><span style={{ color: "#8b5cf6" }}>& Technology</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#94a3b8" }}>
              Emoji Digitals was founded with one clear mission — to bridge creativity and technology.
              In a world where digital presence defines relevance, we help brands build intelligent systems
              that are not only visually compelling but technically powerful.
            </p>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#94a3b8" }}>
              We are a team of creatives, developers, and technology educators committed to excellence,
              innovation, and measurable impact.
            </p>
            <div
              className="p-6 rounded-2xl mb-8"
              style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.2)" }}
            >
              <p className="font-medium text-lg leading-relaxed" style={{ color: "#ffffff" }}>
                "We don't just create digital products.<br />
                <span style={{ color: "#8b5cf6" }} className="font-bold">We build platforms for growth.</span>"
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              style={{ background: "#3b82f6", color: "#ffffff" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#2563eb")}
              onMouseLeave={e => (e.currentTarget.style.background = "#3b82f6")}
            >
              Work With Us <FaArrowRight />
            </Link>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
              <GImg ids={[IMGS.img05, IMGS.img09, IMGS.port1]} alt="Emoji Digitals Team" className="w-full h-80 object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,16,0.8), transparent)" }} />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#3b82f6" }}>Our Vision</div>
                <p className="text-sm font-semibold leading-relaxed" style={{ color: "#ffffff" }}>
                  To become a leading creative technology innovation lab in Africa — building intelligent
                  digital systems and empowering the next generation of tech leaders.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div
          className="mb-24 p-10 md:p-16 rounded-3xl text-center"
          style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.2)" }}
        >
          <div className="flex justify-center mb-6">
            <FaEye style={{ color: "#8b5cf6", fontSize: "3rem" }} />
          </div>
          <div className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#3b82f6" }}>Our Vision</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "#ffffff" }}>The Future We're Building</h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: "#cbd5e1" }}>
            To become a leading creative technology innovation lab in Africa, building intelligent digital
            systems and empowering the next generation of tech leaders.
          </p>
        </div>

        {/* Why Us */}
        <div className="mb-24">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#3b82f6" }}>Why Us</div>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: "#ffffff" }}>
              Why <span style={{ color: "#8b5cf6" }}>Emoji Digitals?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${r.accent}33`,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${r.accent}66`;
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${r.accent}33`;
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                <div className="relative h-44 overflow-hidden">
                  <GImg ids={r.ids} alt={r.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #050510, rgba(0,0,0,0.3), transparent)" }} />
                  <div
                    className="absolute top-3 right-3 w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shadow-lg"
                    style={{ background: r.accent, color: "#ffffff" }}
                  >{r.tag}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span style={{ color: r.accent }}>{r.icon}</span>
                    <h3 className="font-bold text-base" style={{ color: "#ffffff" }}>{r.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>{r.desc}</p>
                  <div className="mt-4 h-0.5 w-10 rounded-full" style={{ background: r.accent }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-24">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#3b82f6" }}>How We Work</div>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: "#ffffff" }}>
              Our <span style={{ color: "#8b5cf6" }}>Process</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center group">
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
                  style={{ background: step.color, color: "#ffffff" }}
                >
                  {step.icon}
                </div>
                <div className="text-4xl font-black mb-2" style={{ color: step.color }}>{step.num}</div>
                <h3 className="text-xl font-bold mb-4" style={{ color: "#ffffff" }}>— {step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-black mb-4" style={{ color: "#ffffff" }}>
            Let's Build <span style={{ color: "#8b5cf6" }}>Together</span>
          </h2>
          <p className="mb-8" style={{ color: "#94a3b8" }}>Ready to start your digital transformation journey?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            style={{ background: "#3b82f6", color: "#ffffff" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#2563eb")}
            onMouseLeave={e => (e.currentTarget.style.background = "#3b82f6")}
          >
            Get In Touch <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
