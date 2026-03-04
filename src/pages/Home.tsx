import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { LiveCodeBg } from "../LiveCodeBg";
import { IMGS, gd } from "../utils/images";

/* ── Reusable Google Drive image with multi-URL fallback chain ─────────────── */
function GImg({
  ids, alt, className, style,
}: {
  ids: string[]; alt: string; className?: string; style?: React.CSSProperties;
}) {
  const urls = ids.flatMap(id => [gd(id, 900), gd(id, 600), gd(id, 400)]);
  const [idx, setIdx] = useState(0);
  if (idx < urls.length)
    return (
      <img src={urls[idx]} alt={alt} className={className} style={style}
        onError={() => setIdx(i => i + 1)} />
    );
  return <div className={className} style={{ ...style, background: "rgba(99,102,241,0.1)" }} />;
}

/* ── HERO ───────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#050510" }}>
      <LiveCodeBg opacity={1} />
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 55% 50% at 50% 50%, rgba(5,5,16,0.96) 0%, rgba(5,5,16,0.88) 40%, rgba(5,5,16,0.55) 75%, rgba(5,5,16,0.25) 100%)",
        zIndex: 2,
      }} />
      <div className="absolute top-20 left-10 w-80 h-80 bg-blue-600/15 rounded-full blur-[120px] pulse-glow" style={{ zIndex: 3 }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pulse-glow" style={{ animationDelay: "1.5s", zIndex: 3 }} />
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 3 }}>
        <div className="scan-line absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent" />
      </div>
      {[...Array(22)].map((_, i) => (
        <div key={i} className="particle" style={{
          width: `${Math.random() * 3 + 1}px`, height: `${Math.random() * 3 + 1}px`,
          background: i % 2 === 0 ? "#3b82f6" : "#8b5cf6",
          left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
          animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 3}s`, zIndex: 3,
        }} />
      ))}
      <div className="relative max-w-6xl mx-auto px-6 text-center" style={{ zIndex: 10 }}>
        <div style={{
          position: "absolute", inset: "-60px -80px",
          background: "radial-gradient(ellipse at center, rgba(5,5,16,0.90) 0%, rgba(5,5,16,0.70) 50%, transparent 80%)",
          pointerEvents: "none", zIndex: -1,
        }} />
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Creative Technology Innovation Lab
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">
          <span className="text-white block" style={{ textShadow: "0 0 40px rgba(5,5,16,1), 0 2px 20px rgba(5,5,16,1), -2px 0 15px rgba(5,5,16,1), 2px 0 15px rgba(5,5,16,1)" }}>
            Engineering Brands.
          </span>
          <span className="gradient-text block">Building Digital</span>
          <span className="text-white block" style={{ textShadow: "0 0 40px rgba(5,5,16,1), 0 2px 20px rgba(5,5,16,1), -2px 0 15px rgba(5,5,16,1), 2px 0 15px rgba(5,5,16,1)" }}>
            Futures.
          </span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          style={{ textShadow: "0 0 30px rgba(5,5,16,1), 0 2px 12px rgba(5,5,16,0.9)" }}>
          Emoji Digitals is a creative technology lab specialising in branding, website engineering,
          application development, and technology education. We design intelligent digital systems
          that help businesses scale with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact" className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg w-full sm:w-auto">Start a Project →</Link>
          <Link to="/portfolio" className="btn-outline px-8 py-4 rounded-full text-white font-semibold text-lg w-full sm:w-auto">Explore Our Work →</Link>
        </div>
        <div className="mt-20 flex justify-center">
          <div className="w-6 h-10 border-2 border-indigo-500/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-indigo-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── TECH BANNER ────────────────────────────────────────────────────────────── */
function TechBanner() {
  const techLogos = [
    { name: "Google",     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" },
    { name: "Cisco",      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png" },
    { name: "Canva",      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Canva_Logo.png/600px-Canva_Logo.png" },
    { name: "Microsoft",  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1200px-Microsoft_logo_%282012%29.svg.png" },
    { name: "Meta",       url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png" },
    { name: "AWS",        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png" },
    { name: "Apple",      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png" },
    { name: "Figma",      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/400px-Figma-logo.svg.png" },
    { name: "Shopify",    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/1200px-Shopify_logo_2018.svg.png" },
    { name: "Slack",      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/400px-Slack_icon_2019.svg.png" },
    { name: "HubSpot",    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/1200px-HubSpot_Logo.svg.png" },
    { name: "Zoom",       url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zoom_Communications_Logo.svg/1200px-Zoom_Communications_Logo.svg.png" },
    { name: "Salesforce", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png" },
    { name: "Adobe",      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/1200px-Adobe_Corporate_logo.svg.png" },
  ];
  const doubled = [...techLogos, ...techLogos];
  return (
    <section className="py-14 relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-indigo-900/10 to-purple-900/10" />
      <div className="relative max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase">Trusted tools & technologies we work with</p>
      </div>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {doubled.map((logo, i) => (
            <div key={i} className="flex items-center justify-center mx-10 flex-shrink-0" style={{ minWidth: "120px" }}>
              <img src={logo.url} alt={logo.name} title={logo.name}
                className="h-7 w-auto object-contain opacity-40 hover:opacity-100 transition-all duration-300 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                style={{ maxWidth: "130px" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── WHO WE ARE ─────────────────────────────────────────────────────────────── */
function WhoWeAre() {
  const pillars = [
    { label: "Intelligent",    desc: "AI-driven workflows and smart systems",       ids: [IMGS.img01, IMGS.img05], color: "from-blue-600/80 to-cyan-600/80" },
    { label: "Beautiful",      desc: "Pixel-perfect design that captivates",        ids: [IMGS.port1, IMGS.img02], color: "from-pink-600/80 to-purple-600/80" },
    { label: "Scalable",       desc: "Architecture built to grow with you",         ids: [IMGS.img03, IMGS.img07], color: "from-indigo-600/80 to-blue-600/80" },
    { label: "Future-ready",   desc: "Modern tech stack for tomorrow's world",      ids: [IMGS.img04, IMGS.img08], color: "from-violet-600/80 to-purple-600/80" },
  ];
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">Who We Are</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              We are not just designers.<br />
              <span className="gradient-text">We are builders of</span><br />
              digital ecosystems.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Emoji Digitals blends creativity with engineering precision to transform ideas into
              scalable digital solutions. From brand identity systems to complex web and application
              platforms, we help businesses move from concept to impact.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
              Learn more about us →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <div key={i} className="card-hover group relative rounded-2xl overflow-hidden border border-white/10 aspect-square cursor-default">
                <GImg ids={p.ids} alt={p.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-t ${p.color} opacity-70 group-hover:opacity-80 transition-opacity duration-300`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-white font-black text-xl mb-1">{p.label}</div>
                  <div className="text-white/70 text-xs leading-relaxed">{p.desc}</div>
                  <div className="mt-2 w-8 h-0.5 bg-white rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── SERVICES PREVIEW ───────────────────────────────────────────────────────── */
function ServicesPreview() {
  const services = [
    { number: "01", ids: [IMGS.img01, IMGS.img06], title: "Branding & Identity",      color: "from-blue-500 to-cyan-500",   glow: "rgba(59,130,246,0.3)",   borderColor: "hover:border-blue-500/40",   overlayColor: "from-blue-900/60 via-blue-900/20 to-transparent" },
    { number: "02", ids: [IMGS.port1, IMGS.img02], title: "Website Development",      color: "from-purple-500 to-pink-500", glow: "rgba(168,85,247,0.3)",  borderColor: "hover:border-purple-500/40", overlayColor: "from-purple-900/60 via-purple-900/20 to-transparent" },
    { number: "03", ids: [IMGS.img03, IMGS.img07], title: "Application Development",  color: "from-indigo-500 to-blue-500", glow: "rgba(99,102,241,0.3)",  borderColor: "hover:border-indigo-500/40", overlayColor: "from-indigo-900/60 via-indigo-900/20 to-transparent" },
    { number: "04", ids: [IMGS.img04, IMGS.img08], title: "Tech Education",           color: "from-violet-500 to-purple-500", glow: "rgba(139,92,246,0.3)", borderColor: "hover:border-violet-500/40", overlayColor: "from-violet-900/60 via-violet-900/20 to-transparent" },
  ];
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">What We Do</div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Our <span className="gradient-text">Services</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-6">End-to-end digital solutions engineered for growth, impact, and excellence.</p>
          <Link to="/services" className="btn-outline px-6 py-3 rounded-full text-white font-semibold text-sm inline-block">View All Services →</Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <Link to="/services" key={i}
              className={`card-hover group relative bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 ${svc.borderColor}`}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${svc.glow}, transparent 70%)` }} />
              <div className="relative w-full h-44 overflow-hidden">
                <GImg ids={svc.ids} alt={svc.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-t ${svc.overlayColor}`} />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#050510] to-transparent" />
                <div className={`absolute top-3 right-3 w-8 h-8 rounded-lg bg-gradient-to-br ${svc.color} flex items-center justify-center text-white font-black text-xs shadow-lg z-10`}>{svc.number}</div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-white">{svc.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── IMPACT ─────────────────────────────────────────────────────────────────── */
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function ImpactStat({ value, suffix, label, icon, inView }: { value: number; suffix: string; label: string; icon: string; inView: boolean }) {
  const count = useCountUp(value, 2000, inView);
  return (
    <div className="text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <div className="text-5xl md:text-6xl font-black gradient-text mb-2">{count}{suffix}</div>
      <div className="text-gray-400 font-medium">{label}</div>
    </div>
  );
}

function Impact() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const stats = [
    { value: 120, suffix: "+", label: "Projects Delivered",  icon: "🚀" },
    { value: 80,  suffix: "+", label: "Brands Transformed",  icon: "✨" },
    { value: 500, suffix: "+", label: "Students Trained",    icon: "🎓" },
    { value: 95,  suffix: "%", label: "Client Satisfaction", icon: "⭐" },
  ];
  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">Our Impact</div>
          <h2 className="text-4xl md:text-5xl font-black text-white">Numbers That <span className="gradient-text">Speak</span></h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => <ImpactStat key={i} {...s} inView={inView} />)}
        </div>
      </div>
    </section>
  );
}

/* ── PROCESS PREVIEW ────────────────────────────────────────────────────────── */
function ProcessPreview() {
  const steps = [
    { num: "01", title: "Discover", icon: "🔍", color: "from-blue-500 to-cyan-500" },
    { num: "02", title: "Design",   icon: "🎨", color: "from-purple-500 to-pink-500" },
    { num: "03", title: "Develop",  icon: "⚙️", color: "from-indigo-500 to-blue-500" },
    { num: "04", title: "Deploy",   icon: "🚀", color: "from-violet-500 to-purple-500" },
  ];
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">How We Work</div>
          <h2 className="text-4xl font-black text-white">Our <span className="gradient-text">Process</span></h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center group">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl shadow-lg`}>{step.icon}</div>
              <div className={`text-3xl font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent mb-1`}>{step.num}</div>
              <h3 className="text-lg font-bold text-white">— {step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ────────────────────────────────────────────────────────────────────── */
function CTABanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-indigo-900/40 to-purple-900/30" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="text-5xl mb-6">🎯</div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Build Something <span className="gradient-text">Exceptional?</span></h2>
        <p className="text-gray-300 text-xl mb-10 leading-relaxed">Let's transform your idea into a powerful digital experience.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg">Start Your Project</Link>
          <Link to="/contact" className="btn-outline px-8 py-4 rounded-full text-white font-semibold text-lg">Book a Consultation</Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <TechBanner />
      <WhoWeAre />
      <ServicesPreview />
      <Impact />
      <ProcessPreview />
      <CTABanner />
    </>
  );
}
