import { useState } from "react";
import { Link } from "react-router-dom";
import { IMGS, gd } from "../utils/images";
import { FaCheck, FaArrowRight } from "react-icons/fa";

function GImg({ ids, alt, className }: { ids: string[]; alt: string; className?: string }) {
  const urls = ids.flatMap(id => [gd(id, 900), gd(id, 600)]);
  const [idx, setIdx] = useState(0);
  if (idx < urls.length)
    return <img src={urls[idx]} alt={alt} className={className} onError={() => setIdx(i => i + 1)} />;
  return <div className={className} style={{ background: "rgba(59,130,246,0.1)" }} />;
}

const services = [
  {
    number: "01",
    ids: [IMGS.img01, IMGS.img06, IMGS.port1],
    title: "Branding & Identity Systems",
    description: "We craft powerful brand identities that communicate clarity, authority, and innovation. From logo systems to complete brand strategy, we help you stand out in a competitive digital world.",
    items: ["Logo & Visual Identity", "Brand Strategy", "Brand Guidelines", "Social & Digital Assets"],
    accent: "#3b82f6",
  },
  {
    number: "02",
    ids: [IMGS.img02, IMGS.img07, IMGS.img11],
    title: "Website Development",
    description: "We design and engineer high-performance websites built for speed, scalability, and user experience. From corporate websites to advanced web platforms, we build systems that grow with your business.",
    items: ["Fully Responsive", "SEO Optimised", "Conversion-Focused", "Modern Frameworks", "WordPress Editable"],
    accent: "#8b5cf6",
  },
  {
    number: "03",
    ids: [IMGS.img03, IMGS.img08, IMGS.img12],
    title: "Application Development",
    description: "We develop custom web and mobile applications tailored to your business needs. Our approach combines clean UI/UX design with powerful backend architecture.",
    items: ["Business Automation", "Client Portals", "SaaS Platforms", "Internal Tools", "Startup MVPs"],
    accent: "#3b82f6",
  },
  {
    number: "04",
    ids: [IMGS.img04, IMGS.img09, IMGS.img05],
    title: "Technology Education & Training",
    description: "We train individuals and organisations to thrive in the digital economy. We don't just teach theory — we build real-world skills.",
    items: ["Web Development", "App Development", "Digital Tools", "Career Mentorship", "Corporate Training"],
    accent: "#8b5cf6",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-28 pb-20 relative" style={{ background: "#050510" }}>
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px]" style={{ background: "rgba(59,130,246,0.08)" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[120px]" style={{ background: "rgba(139,92,246,0.08)" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#3b82f6" }}>
            What We Do
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ color: "#ffffff" }}>
            Our <span style={{ color: "#8b5cf6" }}>Services</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "#94a3b8" }}>
            End-to-end digital solutions engineered for growth, impact, and excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {services.map((svc, i) => (
            <div
              key={i}
              className="group relative rounded-3xl overflow-hidden transition-all duration-500"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.border = `1px solid ${svc.accent}44`;
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px ${svc.accent}22`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <GImg
                  ids={svc.ids}
                  alt={svc.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0" style={{ background: "rgba(5,5,16,0.45)" }} />
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-20" style={{ background: "linear-gradient(to top, #050510, transparent)" }} />
                {/* Number badge */}
                <div
                  className="absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center font-black text-base z-10"
                  style={{ background: svc.accent, color: "#ffffff" }}
                >
                  {svc.number}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-10 pt-6">
                <h3 className="text-2xl font-bold mb-3" style={{ color: "#ffffff" }}>
                  {svc.title}
                </h3>
                <p className="leading-relaxed mb-6" style={{ color: "#94a3b8" }}>
                  {svc.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {svc.items.map((item, j) => (
                    <span
                      key={j}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{
                        background: `${svc.accent}18`,
                        color: svc.accent,
                        border: `1px solid ${svc.accent}33`,
                      }}
                    >
                      <FaCheck size={9} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#3b82f6" }}>
              Our Advantage
            </div>
            <h2 className="text-4xl font-black" style={{ color: "#ffffff" }}>
              Why Choose <span style={{ color: "#8b5cf6" }}>Emoji Digitals?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Creative Innovation", desc: "We approach every project like a tech lab — experimenting, optimising, and refining until it's exceptional." },
              { title: "Engineering Precision", desc: "Every product we build is structured for long-term scalability and performance." },
              { title: "Future-Focused", desc: "We integrate modern technologies and AI-driven workflows to keep you ahead of the curve." },
              { title: "Education-Driven", desc: "We empower clients and students with knowledge, not just products." },
              { title: "African Excellence", desc: "Proudly built in Nigeria, serving businesses across Africa and beyond with world-class standards." },
              { title: "End-to-End Delivery", desc: "From concept to launch and beyond — we stay with you at every stage of your digital journey." },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${i % 2 === 0 ? "rgba(59,130,246,0.15)" : "rgba(139,92,246,0.15)"}`,
                }}
                onMouseEnter={e => {
                  const accent = i % 2 === 0 ? "#3b82f6" : "#8b5cf6";
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${accent}44`;
                  (e.currentTarget as HTMLDivElement).style.background = `${accent}0a`;
                }}
                onMouseLeave={e => {
                  const accent = i % 2 === 0 ? "#3b82f6" : "#8b5cf6";
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${accent}26`;
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)";
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm mb-5"
                  style={{
                    background: i % 2 === 0 ? "rgba(59,130,246,0.15)" : "rgba(139,92,246,0.15)",
                    color: i % 2 === 0 ? "#3b82f6" : "#8b5cf6",
                    border: `1px solid ${i % 2 === 0 ? "rgba(59,130,246,0.3)" : "rgba(139,92,246,0.3)"}`,
                  }}
                >
                  0{i + 1}
                </div>
                <h4 className="text-lg font-bold mb-3" style={{ color: "#ffffff" }}>{item.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="rounded-3xl p-10 md:p-16 text-center"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(59,130,246,0.2)",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "#ffffff" }}>
            Ready to Get <span style={{ color: "#8b5cf6" }}>Started?</span>
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "#94a3b8" }}>
            Let's discuss your project and find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              style={{ background: "#3b82f6", color: "#ffffff" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#2563eb")}
              onMouseLeave={e => (e.currentTarget.style.background = "#3b82f6")}
            >
              Start a Project <FaArrowRight />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              style={{ background: "transparent", color: "#ffffff", border: "1px solid rgba(139,92,246,0.4)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#8b5cf6";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(139,92,246,0.1)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(139,92,246,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              View Our Work <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
