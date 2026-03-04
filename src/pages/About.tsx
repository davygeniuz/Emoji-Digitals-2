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

const reasons = [
  { title: "Creative Innovation",    desc: "We approach every project like a tech lab — experimenting, optimising, and refining until it's exceptional.", ids: [IMGS.img01, IMGS.port1], accent: "from-blue-500 to-cyan-500",   border: "border-blue-500/30",   tag: "01" },
  { title: "Engineering Precision",  desc: "Every product we build is structured for long-term scalability and performance.",                             ids: [IMGS.img02, IMGS.img06], accent: "from-purple-500 to-pink-500", border: "border-purple-500/30", tag: "02" },
  { title: "Future-Focused",         desc: "We integrate modern technologies and AI-driven workflows to keep you ahead of the curve.",                    ids: [IMGS.img03, IMGS.img07], accent: "from-indigo-500 to-violet-500", border: "border-indigo-500/30", tag: "03" },
  { title: "Education-Driven",       desc: "We empower clients and students with knowledge, not just products.",                                          ids: [IMGS.img04, IMGS.img08], accent: "from-violet-500 to-purple-500", border: "border-violet-500/30", tag: "04" },
];

const processSteps = [
  { num: "01", title: "Discover", icon: "🔍", color: "from-blue-500 to-cyan-500",     desc: "We analyse your vision, goals, and challenges through deep discovery sessions to fully understand your business landscape." },
  { num: "02", title: "Design",   icon: "🎨", color: "from-purple-500 to-pink-500",   desc: "We prototype creative and technical solutions, crafting experiences that balance aesthetics with functionality." },
  { num: "03", title: "Develop",  icon: "⚙️", color: "from-indigo-500 to-blue-500",   desc: "We engineer scalable systems with clean architecture, cutting-edge frameworks, and attention to every detail." },
  { num: "04", title: "Deploy",   icon: "🚀", color: "from-violet-500 to-purple-500", desc: "We launch, optimise, and support your growth — ensuring your digital systems perform at peak at all times." },
];

export default function About() {
  return (
    <div className="min-h-screen pt-28 pb-20 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <div className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">About Us</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">About <span className="gradient-text">Emoji Digitals</span></h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">Founded with one clear mission — to bridge creativity and technology.</p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">Our Story</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Bridging Creativity<br /><span className="gradient-text">& Technology</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Emoji Digitals was founded with one clear mission — to bridge creativity and technology.
              In a world where digital presence defines relevance, we help brands build intelligent systems
              that are not only visually compelling but technically powerful.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              We are a team of creatives, developers, and technology educators committed to excellence,
              innovation, and measurable impact.
            </p>
            <div className="p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl mb-8">
              <p className="text-white font-medium text-lg leading-relaxed">
                "We don't just create digital products.<br />
                <span className="gradient-text font-bold">We build platforms for growth.</span>"
              </p>
            </div>
            <Link to="/contact" className="btn-primary px-8 py-4 rounded-full text-white font-semibold inline-block">Work With Us →</Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-lg opacity-30" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <GImg ids={[IMGS.img05, IMGS.img09, IMGS.port1]} alt="Emoji Digitals Team" className="w-full h-80 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-1">Our Vision</div>
                <p className="text-white text-sm font-semibold leading-relaxed">
                  To become a leading creative technology innovation lab in Africa — building intelligent
                  digital systems and empowering the next generation of tech leaders.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="mb-24 p-10 md:p-16 bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-3xl text-center">
          <div className="text-5xl mb-6">🔮</div>
          <div className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">Our Vision</div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">The Future We're Building</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            To become a leading creative technology innovation lab in Africa, building intelligent digital
            systems and empowering the next generation of tech leaders.
          </p>
        </div>

        {/* Why Us */}
        <div className="mb-24">
          <div className="text-center mb-14">
            <div className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">Why Us</div>
            <h2 className="text-4xl md:text-5xl font-black text-white">Why <span className="gradient-text">Emoji Digitals?</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <div key={i} className={`card-hover group relative bg-white/[0.03] border ${r.border} rounded-2xl overflow-hidden`}>
                <div className="relative h-44 overflow-hidden">
                  <GImg ids={r.ids} alt={r.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-black/30 to-transparent" />
                  <div className={`absolute top-3 right-3 w-8 h-8 rounded-lg bg-gradient-to-br ${r.accent} flex items-center justify-center text-white font-black text-xs shadow-lg`}>{r.tag}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold text-base mb-2">{r.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
                  <div className={`mt-4 h-0.5 w-10 rounded-full bg-gradient-to-r ${r.accent}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-24">
          <div className="text-center mb-14">
            <div className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">How We Work</div>
            <h2 className="text-4xl md:text-5xl font-black text-white">Our <span className="gradient-text">Process</span></h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500 opacity-30" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <div key={i} className="card-hover text-center group relative">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl shadow-lg`}>{step.icon}</div>
                  <div className={`text-4xl font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent mb-2`}>{step.num}</div>
                  <h3 className="text-xl font-bold text-white mb-4">— {step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-black text-white mb-4">Let's Build <span className="gradient-text">Together</span></h2>
          <p className="text-gray-400 mb-8">Ready to start your digital transformation journey?</p>
          <Link to="/contact" className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg">Get In Touch →</Link>
        </div>
      </div>
    </div>
  );
}
