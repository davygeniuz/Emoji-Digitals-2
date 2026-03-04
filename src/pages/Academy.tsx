import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IMGS, gd } from "../utils/images";

/* Training gallery — 100% Google Drive images */
const trainingImages = [
  { id: IMGS.port1, title: "Emoji Digitals — Brand Portfolio Showcase",   desc: "A display of our creative output — brand identities, digital assets and visual systems designed at Emoji Digitals", location: "Emoji Digitals HQ, Awka", year: "2024" },
  { id: IMGS.img01, title: "Creative Design Session",                      desc: "Our design team at work — crafting brand identities and digital experiences for clients across Nigeria", location: "Emoji Digitals Studio, Awka", year: "2024" },
  { id: IMGS.img02, title: "Web Development Bootcamp",                     desc: "Students learning full-stack development in an intensive hands-on session at our Awka training centre", location: "Awka Training Centre", year: "2024" },
  { id: IMGS.img03, title: "Collaborative Coding Session",                 desc: "Team-based problem solving and collaborative software development workshop with our students", location: "Emoji Digitals Lab", year: "2024" },
  { id: IMGS.img04, title: "Design Thinking Workshop",                     desc: "Young Nigerian creatives learning UI/UX design principles and digital creativity", location: "Creative Hub, Awka", year: "2024" },
  { id: IMGS.img05, title: "Mobile App Development Training",              desc: "Students building real-world mobile applications from scratch using React Native", location: "Tech Training Centre, Awka", year: "2024" },
  { id: IMGS.img06, title: "Digital Marketing Masterclass",                desc: "Professionals gaining essential digital marketing and social media strategy skills", location: "Emoji Digitals Academy", year: "2024" },
  { id: IMGS.img07, title: "Youth Coding Programme",                       desc: "Empowering the next generation of Nigerian tech innovators and developers", location: "Emoji Digitals Academy", year: "2024" },
  { id: IMGS.img08, title: "Cybersecurity & Network Training",             desc: "Professionals gaining essential cybersecurity and network engineering skills", location: "Awka Training Centre", year: "2023" },
  { id: IMGS.img09, title: "Startup & Entrepreneurship Summit",            desc: "Tech founders and entrepreneurs sharing ideas, building networks and pitching", location: "Anambra Innovation Hub", year: "2024" },
  { id: IMGS.img10, title: "AI & Data Science Workshop",                   desc: "Students learning machine learning, data science and AI engineering fundamentals", location: "Emoji Digitals Lab", year: "2024" },
  { id: IMGS.img11, title: "Graduation & Certification Ceremony",          desc: "Celebrating our graduates who completed their digital skills transformation journey", location: "Emoji Digitals HQ, Awka", year: "2024" },
  { id: IMGS.img12, title: "Corporate Training — Digital Tools",           desc: "Corporate teams learning productivity tools, digital workflows and modern tech stacks", location: "Anambra State, Nigeria", year: "2024" },
];

const courses = [
  { icon: "💻", title: "Web Development",       duration: "12 Weeks", level: "Beginner–Advanced",    color: "from-blue-500 to-cyan-500",     desc: "Build modern, responsive websites and web applications from scratch using industry-standard tools and frameworks.",                                                     items: ["HTML, CSS & JavaScript", "React & Node.js", "Database & REST APIs", "Deployment & DevOps"] },
  { icon: "📱", title: "App Development",        duration: "16 Weeks", level: "Intermediate–Advanced", color: "from-purple-500 to-pink-500",   desc: "Design and develop cross-platform mobile applications for iOS and Android with real-world project experience.",                                                     items: ["Mobile UI/UX Design", "React Native & Expo", "Backend Integration", "App Store Launch"] },
  { icon: "🤖", title: "AI Engineering",         duration: "14 Weeks", level: "Intermediate–Advanced", color: "from-cyan-500 to-blue-600",     desc: "Master the tools and techniques behind modern artificial intelligence — from ML models to GPT-powered products.",                                                     items: ["Machine Learning Fundamentals", "Deep Learning & Neural Nets", "OpenAI & LLM Integration", "AI Product Development"] },
  { icon: "🌐", title: "Network Engineering",    duration: "10 Weeks", level: "Beginner–Intermediate", color: "from-teal-500 to-cyan-500",     desc: "Learn how networks are designed, configured and maintained using industry-standard Cisco tools and protocols.",                                                       items: ["Network Fundamentals & OSI", "Cisco Routing & Switching", "LAN/WAN Configuration", "Network Troubleshooting"] },
  { icon: "🛡️", title: "Cybersecurity",          duration: "12 Weeks", level: "Intermediate–Advanced", color: "from-red-500 to-rose-600",      desc: "Protect systems and data from cyber threats. Learn ethical hacking, penetration testing, and digital security.",                                                      items: ["Ethical Hacking & Pentesting", "Network Security", "Digital Forensics", "Security Certifications Prep"] },
  { icon: "🎬", title: "Video Editing",           duration: "6 Weeks",  level: "Beginner–Intermediate", color: "from-orange-500 to-amber-500",  desc: "Edit like a pro — from raw footage to cinematic productions. Learn video storytelling for brands and content creators.",                                            items: ["Premiere Pro & DaVinci Resolve", "Colour Grading & Effects", "Motion Graphics & Titles", "Content Creation for Social"] },
  { icon: "📊", title: "Data Science",            duration: "14 Weeks", level: "Intermediate–Advanced", color: "from-emerald-500 to-green-600", desc: "Turn raw data into powerful insights. Master Python, visualisation tools, and machine learning for data-driven decision making.",                                    items: ["Python & Pandas", "Data Visualisation", "Statistical Analysis", "ML & Predictive Models"] },
  { icon: "🎨", title: "UI/UX & Graphic Design", duration: "8 Weeks",  level: "Beginner–Intermediate", color: "from-indigo-500 to-violet-500", desc: "Design beautiful, user-centred interfaces and brand identities using Figma, Adobe tools, and modern design principles.",                                          items: ["Figma Mastery", "Brand Identity Design", "Design Systems & Tokens", "Portfolio Building"] },
  { icon: "📣", title: "Digital Marketing",       duration: "6 Weeks",  level: "Beginner–Intermediate", color: "from-violet-500 to-purple-500", desc: "Grow brands online with proven digital marketing strategies — from social media and SEO to paid advertising and analytics.", items: ["Social Media Strategy", "SEO & Content Marketing", "Paid Ads (Meta & Google)", "Analytics & Growth"] },
];

const certifications = [
  { name: "CCNA",              full: "Cisco Certified Network Associate",           icon: "🔵", color: "#1BA0D7", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/320px-Cisco_logo_blue_2016.svg.png" },
  { name: "CCNP",              full: "Cisco Certified Network Professional",        icon: "🔷", color: "#1BA0D7", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/320px-Cisco_logo_blue_2016.svg.png" },
  { name: "CompTIA Security+", full: "CompTIA Security+ Certification",             icon: "🛡️", color: "#C8202F", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/CompTIA_logo.svg/320px-CompTIA_logo.svg.png" },
  { name: "CompTIA A+",        full: "CompTIA A+ IT Certification",                 icon: "💻", color: "#C8202F", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/CompTIA_logo.svg/320px-CompTIA_logo.svg.png" },
  { name: "AWS Cloud",         full: "AWS Certified Cloud Practitioner",            icon: "☁️", color: "#FF9900", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/320px-Amazon_Web_Services_Logo.svg.png" },
  { name: "Google Data",       full: "Google Data Analytics Certificate",           icon: "📊", color: "#4285F4", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png" },
  { name: "Meta Frontend",     full: "Meta Front-End Developer Certificate",        icon: "⚛️", color: "#0082FB", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/320px-Meta_Platforms_Inc._logo.svg.png" },
  { name: "Microsoft AZ-900",  full: "Microsoft Azure Fundamentals",                icon: "🪟", color: "#00A4EF", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png" },
  { name: "CEH",               full: "Certified Ethical Hacker",                   icon: "🔐", color: "#E74C3C", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/EC-Council_logo.svg/320px-EC-Council_logo.svg.png" },
  { name: "Google UX Design",  full: "Google UX Design Certificate",               icon: "🎨", color: "#FBBC04", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png" },
  { name: "PMI CAPM",          full: "Certified Associate in Project Management",   icon: "📋", color: "#003087", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/PMI_Logo.svg/320px-PMI_Logo.svg.png" },
  { name: "Scrum Master",      full: "Certified ScrumMaster (CSM)",                icon: "🔄", color: "#009FDA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Scrum_Alliance_logo.svg/320px-Scrum_Alliance_logo.svg.png" },
];

function CertBanner() {
  const track = [...certifications, ...certifications];
  return (
    <div className="relative py-12 overflow-hidden">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-indigo-400 text-xs font-semibold tracking-widest uppercase">Industry Certifications We Prepare You For</span>
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-white">Globally Recognised <span className="gradient-text">Certifications</span></h2>
        <p className="text-gray-500 text-sm mt-2 max-w-lg mx-auto">Our courses are aligned with the most sought-after certifications in the global tech industry.</p>
      </div>
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #050510 0%, transparent 100%)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #050510 0%, transparent 100%)" }} />
      <div className="flex overflow-hidden">
        <div className="flex gap-5 flex-shrink-0" style={{ animation: "certScroll 36s linear infinite", willChange: "transform" }}
          onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
          onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}>
          {track.map((cert, i) => (
            <div key={i} className="flex-shrink-0 group relative cursor-default" style={{ width: "220px" }}>
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 h-full" style={{ transition: "all 0.35s ease" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = cert.color + "66"; el.style.boxShadow = `0 0 30px ${cert.color}22`; el.style.background = `${cert.color}08`; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.1)"; el.style.boxShadow = "none"; el.style.background = "rgba(255,255,255,0.03)"; }}>
                <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-60" style={{ background: `linear-gradient(to right, transparent, ${cert.color}, transparent)` }} />
                <div className="flex items-center justify-center mb-4 h-10">
                  <img src={cert.logo} alt={cert.name} className="h-8 max-w-[110px] object-contain"
                    style={{ filter: "brightness(0) invert(1)", opacity: 0.5, transition: "all 0.3s" }}
                    onMouseEnter={e => { (e.target as HTMLImageElement).style.filter = "none"; (e.target as HTMLImageElement).style.opacity = "1"; }}
                    onMouseLeave={e => { (e.target as HTMLImageElement).style.filter = "brightness(0) invert(1)"; (e.target as HTMLImageElement).style.opacity = "0.5"; }}
                    onError={e => { const p = (e.target as HTMLImageElement).parentElement!; (e.target as HTMLImageElement).style.display = "none"; p.innerHTML = `<span style="font-size:28px">${cert.icon}</span>`; }} />
                </div>
                <div className="text-center font-black text-sm mb-1 tracking-wide" style={{ color: cert.color }}>{cert.name}</div>
                <div className="text-center text-gray-500 text-xs leading-snug">{cert.full}</div>
                <div className="mt-3 flex justify-center">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold border" style={{ color: cert.color, borderColor: cert.color + "44", background: cert.color + "11" }}>Prep Available</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TrainingSlide({ img, isCurrent }: { img: typeof trainingImages[0]; isCurrent: boolean }) {
  const urls = [gd(img.id, 1200), gd(img.id, 800), gd(img.id, 600)];
  const [idx, setIdx] = useState(0);
  const src = idx < urls.length ? urls[idx] : null;
  return (
    <div className="absolute inset-0 transition-all duration-700 ease-in-out" style={{ opacity: isCurrent ? 1 : 0, zIndex: isCurrent ? 2 : 1 }}>
      {src ? (
        <img src={src} alt={img.title} className="w-full h-full object-cover" style={{ minHeight: "520px" }} onError={() => setIdx(i => i + 1)} />
      ) : (
        <div className="w-full h-full min-h-[520px] bg-gradient-to-br from-indigo-900/60 to-purple-900/60" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-indigo-500/80 backdrop-blur-sm rounded-full text-white text-xs font-bold">📍 {img.location}</span>
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs font-medium">{img.year}</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">{img.title}</h3>
          <p className="text-gray-300 text-base leading-relaxed">{img.desc}</p>
        </div>
      </div>
    </div>
  );
}

function Thumbnail({ img, isActive, onClick }: { img: typeof trainingImages[0]; isActive: boolean; onClick: () => void }) {
  const urls = [gd(img.id, 400), gd(img.id, 200)];
  const [idx, setIdx] = useState(0);
  return (
    <button onClick={onClick}
      className={`relative rounded-xl overflow-hidden aspect-square transition-all duration-300 ${isActive ? "ring-2 ring-indigo-500 scale-105 shadow-lg shadow-indigo-500/30" : "opacity-40 hover:opacity-70"}`}>
      {idx < urls.length ? (
        <img src={urls[idx]} alt={img.title} className="w-full h-full object-cover" onError={() => setIdx(i => i + 1)} />
      ) : (
        <div className="w-full h-full bg-indigo-900/40" />
      )}
      {isActive && <div className="absolute inset-0 bg-indigo-500/20 flex items-center justify-center"><div className="w-3 h-3 bg-white rounded-full shadow-lg" /></div>}
    </button>
  );
}

export default function Academy() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = trainingImages.length;
  const goNext = () => setCurrent(c => (c + 1) % total);
  const goPrev = () => setCurrent(c => (c - 1 + total) % total);
  useEffect(() => {
    if (isAutoPlaying) intervalRef.current = setInterval(goNext, 4500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isAutoPlaying, current]);

  return (
    <div className="min-h-screen pt-28 pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#080818] to-[#050510]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">Emoji Digitals Academy</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Tech Education <span className="gradient-text">& Training</span></h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">We don't just teach theory — we build real-world skills. Empowering individuals and organisations across Nigeria to thrive in the digital economy.</p>
        </div>

        {/* Courses */}
        <div className="mb-20">
          <div className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-indigo-500/40" />Our Courses
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-indigo-500/40" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c, i) => (
              <div key={i} className="card-hover group bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300 flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center text-2xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>{c.icon}</div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight mb-1">{c.title}</h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded">{c.duration}</span>
                      <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded">{c.level}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{c.desc}</p>
                <ul className="space-y-1.5 flex-1">
                  {c.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${c.color} flex-shrink-0`} />{item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className={`h-0.5 w-10 rounded-full bg-gradient-to-r ${c.color}`} />
                  <Link to="/contact" className="text-xs text-indigo-400 font-medium hover:text-indigo-300 transition-colors">Enrol →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cert Banner */}
        <div className="mb-16 -mx-6 px-0">
          <div className="bg-white/[0.02] border-y border-white/10 py-2"><CertBanner /></div>
        </div>

        {/* Training Gallery Carousel */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">Training In Action</div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Our Training <span className="gradient-text">Gallery</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Pictorial excerpts from concluded training exercises — real people, real skills, real impact.</p>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)} style={{ minHeight: "520px" }}>
            {trainingImages.map((img, i) => <TrainingSlide key={i} img={img} isCurrent={i === current} />)}
            <div className="absolute top-6 right-6 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-bold z-10">
              {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </div>
            <button onClick={goPrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 hover:border-indigo-500/50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={goNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 hover:border-indigo-500/50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-10">
              <div key={current} className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                style={{ animation: isAutoPlaying ? "slideProgress 4.5s linear forwards" : "none", width: isAutoPlaying ? "0%" : "100%" }} />
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {trainingImages.map((_, i) => (
              <button key={i} onClick={() => { setCurrent(i); setIsAutoPlaying(false); }}
                className={`transition-all duration-300 rounded-full ${i === current ? "w-8 h-2.5 bg-gradient-to-r from-blue-500 to-purple-500" : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"}`} />
            ))}
          </div>
          <div className="mt-8 grid grid-cols-5 md:grid-cols-13 gap-2">
            {trainingImages.map((img, i) => (
              <Thumbnail key={i} img={img} isActive={i === current} onClick={() => { setCurrent(i); setIsAutoPlaying(false); }} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: "🎓", value: "500+", label: "Students Trained" },
            { icon: "📅", value: "30+",  label: "Training Exercises" },
            { icon: "🏢", value: "15+",  label: "Corporate Clients" },
            { icon: "🌍", value: "5+",   label: "States Reached" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-indigo-500/30 transition-all duration-300">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 border border-white/10 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to <span className="gradient-text">Level Up?</span></h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">Join our next training cohort and transform your career with real-world digital skills.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg">Enrol Now →</Link>
            <Link to="/contact" className="btn-outline px-8 py-4 rounded-full text-white font-semibold text-lg">Corporate Training</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
