import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IMGS, gd } from "../utils/images";
import {
  FaCode, FaMobileAlt, FaRobot, FaNetworkWired, FaShieldAlt,
  FaVideo, FaChartBar, FaPaintBrush, FaBullhorn,
  FaGraduationCap, FaBuilding, FaGlobe, FaChevronLeft, FaChevronRight,
  FaCertificate, FaArrowRight,
} from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";

const trainingImages = [
  { id: IMGS.port1, title: "Emoji Digitals — Brand Portfolio Showcase",  desc: "A display of our creative output — brand identities, digital assets and visual systems designed at Emoji Digitals", location: "Emoji Digitals HQ, Awka", year: "2024" },
  { id: IMGS.img01, title: "Creative Design Session",                     desc: "Our design team at work — crafting brand identities and digital experiences for clients across Nigeria", location: "Emoji Digitals Studio, Awka", year: "2024" },
  { id: IMGS.img02, title: "Web Development Bootcamp",                    desc: "Students learning full-stack development in an intensive hands-on session at our Awka training centre", location: "Awka Training Centre", year: "2024" },
  { id: IMGS.img03, title: "Collaborative Coding Session",                desc: "Team-based problem solving and collaborative software development workshop with our students", location: "Emoji Digitals Lab", year: "2024" },
  { id: IMGS.img04, title: "Design Thinking Workshop",                    desc: "Young Nigerian creatives learning UI/UX design principles and digital creativity", location: "Creative Hub, Awka", year: "2024" },
  { id: IMGS.img05, title: "Mobile App Development Training",             desc: "Students building real-world mobile applications from scratch using React Native", location: "Tech Training Centre, Awka", year: "2024" },
  { id: IMGS.img06, title: "Digital Marketing Masterclass",               desc: "Professionals gaining essential digital marketing and social media strategy skills", location: "Emoji Digitals Academy", year: "2024" },
  { id: IMGS.img07, title: "Youth Coding Programme",                      desc: "Empowering the next generation of Nigerian tech innovators and developers", location: "Emoji Digitals Academy", year: "2024" },
  { id: IMGS.img08, title: "Cybersecurity & Network Training",            desc: "Professionals gaining essential cybersecurity and network engineering skills", location: "Awka Training Centre", year: "2023" },
  { id: IMGS.img09, title: "Startup & Entrepreneurship Summit",           desc: "Tech founders and entrepreneurs sharing ideas, building networks and pitching", location: "Anambra Innovation Hub", year: "2024" },
  { id: IMGS.img10, title: "AI & Data Science Workshop",                  desc: "Students learning machine learning, data science and AI engineering fundamentals", location: "Emoji Digitals Lab", year: "2024" },
  { id: IMGS.img11, title: "Graduation & Certification Ceremony",         desc: "Celebrating our graduates who completed their digital skills transformation journey", location: "Emoji Digitals HQ, Awka", year: "2024" },
  { id: IMGS.img12, title: "Corporate Training — Digital Tools",          desc: "Corporate teams learning productivity tools, digital workflows and modern tech stacks", location: "Anambra State, Nigeria", year: "2024" },
];

const courses = [
  { icon: <FaCode />,         title: "Web Development",       duration: "12 Weeks", level: "Beginner–Advanced",    color: "#3b82f6", desc: "Build modern, responsive websites and web applications from scratch using industry-standard tools and frameworks.",                                  items: ["HTML, CSS & JavaScript", "React & Node.js", "Database & REST APIs", "Deployment & DevOps"] },
  { icon: <FaMobileAlt />,    title: "App Development",        duration: "16 Weeks", level: "Intermediate–Advanced", color: "#8b5cf6", desc: "Design and develop cross-platform mobile applications for iOS and Android with real-world project experience.",                                items: ["Mobile UI/UX Design", "React Native & Expo", "Backend Integration", "App Store Launch"] },
  { icon: <FaRobot />,        title: "AI Engineering",         duration: "14 Weeks", level: "Intermediate–Advanced", color: "#3b82f6", desc: "Master the tools and techniques behind modern artificial intelligence — from ML models to GPT-powered products.",                              items: ["Machine Learning Fundamentals", "Deep Learning & Neural Nets", "OpenAI & LLM Integration", "AI Product Development"] },
  { icon: <FaNetworkWired />, title: "Network Engineering",    duration: "10 Weeks", level: "Beginner–Intermediate", color: "#8b5cf6", desc: "Learn how networks are designed, configured and maintained using industry-standard Cisco tools and protocols.",                                items: ["Network Fundamentals & OSI", "Cisco Routing & Switching", "LAN/WAN Configuration", "Network Troubleshooting"] },
  { icon: <FaShieldAlt />,    title: "Cybersecurity",          duration: "12 Weeks", level: "Intermediate–Advanced", color: "#3b82f6", desc: "Protect systems and data from cyber threats. Learn ethical hacking, penetration testing, and digital security.",                               items: ["Ethical Hacking & Pentesting", "Network Security", "Digital Forensics", "Security Certifications Prep"] },
  { icon: <FaVideo />,        title: "Video Editing",          duration: "6 Weeks",  level: "Beginner–Intermediate", color: "#8b5cf6", desc: "Edit like a pro — from raw footage to cinematic productions. Learn video storytelling for brands and content creators.",                      items: ["Premiere Pro & DaVinci Resolve", "Colour Grading & Effects", "Motion Graphics & Titles", "Content Creation for Social"] },
  { icon: <FaChartBar />,     title: "Data Science",           duration: "14 Weeks", level: "Intermediate–Advanced", color: "#3b82f6", desc: "Turn raw data into powerful insights. Master Python, visualisation tools, and machine learning for data-driven decision making.",             items: ["Python & Pandas", "Data Visualisation", "Statistical Analysis", "ML & Predictive Models"] },
  { icon: <FaPaintBrush />,   title: "UI/UX & Graphic Design", duration: "8 Weeks",  level: "Beginner–Intermediate", color: "#8b5cf6", desc: "Design beautiful, user-centred interfaces and brand identities using Figma, Adobe tools, and modern design principles.",                     items: ["Figma Mastery", "Brand Identity Design", "Design Systems & Tokens", "Portfolio Building"] },
  { icon: <FaBullhorn />,     title: "Digital Marketing",      duration: "6 Weeks",  level: "Beginner–Intermediate", color: "#3b82f6", desc: "Grow brands online with proven digital marketing strategies — from social media and SEO to paid advertising and analytics.",                  items: ["Social Media Strategy", "SEO & Content Marketing", "Paid Ads (Meta & Google)", "Analytics & Growth"] },
];

const certifications = [
  { name: "CCNA",              full: "Cisco Certified Network Associate",         color: "#3b82f6", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/320px-Cisco_logo_blue_2016.svg.png" },
  { name: "CCNP",              full: "Cisco Certified Network Professional",      color: "#8b5cf6", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/320px-Cisco_logo_blue_2016.svg.png" },
  { name: "CompTIA Security+", full: "CompTIA Security+ Certification",           color: "#3b82f6", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/CompTIA_logo.svg/320px-CompTIA_logo.svg.png" },
  { name: "CompTIA A+",        full: "CompTIA A+ IT Certification",               color: "#8b5cf6", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/CompTIA_logo.svg/320px-CompTIA_logo.svg.png" },
  { name: "AWS Cloud",         full: "AWS Certified Cloud Practitioner",          color: "#3b82f6", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/320px-Amazon_Web_Services_Logo.svg.png" },
  { name: "Google Data",       full: "Google Data Analytics Certificate",         color: "#8b5cf6", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png" },
  { name: "Meta Frontend",     full: "Meta Front-End Developer Certificate",      color: "#3b82f6", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/320px-Meta_Platforms_Inc._logo.svg.png" },
  { name: "Microsoft AZ-900",  full: "Microsoft Azure Fundamentals",              color: "#8b5cf6", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png" },
  { name: "CEH",               full: "Certified Ethical Hacker",                  color: "#3b82f6", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/EC-Council_logo.svg/320px-EC-Council_logo.svg.png" },
  { name: "Google UX Design",  full: "Google UX Design Certificate",              color: "#8b5cf6", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png" },
  { name: "PMI CAPM",          full: "Certified Associate in Project Management", color: "#3b82f6", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/PMI_Logo.svg/320px-PMI_Logo.svg.png" },
  { name: "Scrum Master",      full: "Certified ScrumMaster (CSM)",               color: "#8b5cf6", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Scrum_Alliance_logo.svg/320px-Scrum_Alliance_logo.svg.png" },
];

function CertBanner() {
  const track = [...certifications, ...certifications];
  return (
    <div className="relative py-12 overflow-hidden">
      <div className="text-center mb-10">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4"
          style={{ background: "rgba(59,130,246,0.08)", borderColor: "rgba(59,130,246,0.25)" }}
        >
          <FaCertificate style={{ color: "#3b82f6", fontSize: "0.75rem" }} />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#3b82f6" }}>
            Industry Certifications We Prepare You For
          </span>
          <FaCertificate style={{ color: "#8b5cf6", fontSize: "0.75rem" }} />
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-white">
          Globally Recognised <span style={{ color: "#8b5cf6" }}>Certifications</span>
        </h2>
        <p className="text-gray-500 text-sm mt-2 max-w-lg mx-auto">
          Our courses are aligned with the most sought-after certifications in the global tech industry.
        </p>
      </div>

      {/* Left/right fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #050510 0%, transparent 100%)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #050510 0%, transparent 100%)" }} />

      <div className="flex overflow-hidden">
        <div
          className="flex gap-5 flex-shrink-0"
          style={{ animation: "certScroll 36s linear infinite", willChange: "transform" }}
          onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
          onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}
        >
          {track.map((cert, i) => (
            <div key={i} className="flex-shrink-0 cursor-default" style={{ width: "220px" }}>
              <div
                className="relative rounded-2xl p-5 h-full border transition-all duration-350"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = cert.color + "55";
                  el.style.boxShadow = `0 0 24px ${cert.color}22`;
                  el.style.background = `${cert.color}08`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                  el.style.boxShadow = "none";
                  el.style.background = "rgba(255,255,255,0.03)";
                }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full"
                  style={{ background: cert.color, opacity: 0.5 }} />

                <div className="flex items-center justify-center mb-4 h-10">
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className="h-8 max-w-[110px] object-contain"
                    style={{ filter: "brightness(0) invert(1)", opacity: 0.5, transition: "all 0.3s" }}
                    onMouseEnter={e => { (e.target as HTMLImageElement).style.filter = "none"; (e.target as HTMLImageElement).style.opacity = "1"; }}
                    onMouseLeave={e => { (e.target as HTMLImageElement).style.filter = "brightness(0) invert(1)"; (e.target as HTMLImageElement).style.opacity = "0.5"; }}
                    onError={e => {
                      const p = (e.target as HTMLImageElement).parentElement!;
                      (e.target as HTMLImageElement).style.display = "none";
                      p.innerHTML = `<span style="color:${cert.color};font-size:1.5rem"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' width='32' height='32'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/></svg></span>`;
                    }}
                  />
                </div>

                <div className="text-center font-black text-sm mb-1 tracking-wide" style={{ color: cert.color }}>
                  {cert.name}
                </div>
                <div className="text-center text-xs leading-snug" style={{ color: "#6b7280" }}>{cert.full}</div>
                <div className="mt-3 flex justify-center">
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold border"
                    style={{ color: cert.color, borderColor: cert.color + "44", background: cert.color + "11" }}
                  >
                    Prep Available
                  </span>
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
        <div className="w-full h-full min-h-[520px]" style={{ background: "rgba(59,130,246,0.1)" }} />
      )}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,16,0.92), rgba(5,5,16,0.3), rgba(5,5,16,0.1))" }} />
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-white text-xs font-bold" style={{ background: "rgba(59,130,246,0.8)" }}>
              {img.location}
            </span>
            <span className="px-3 py-1 rounded-full text-white text-xs font-medium" style={{ background: "rgba(255,255,255,0.1)" }}>
              {img.year}
            </span>
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
    <button
      onClick={onClick}
      className="relative rounded-xl overflow-hidden aspect-square transition-all duration-300"
      style={{
        outline: isActive ? "2px solid #3b82f6" : "none",
        outlineOffset: "2px",
        transform: isActive ? "scale(1.05)" : "scale(1)",
        opacity: isActive ? 1 : 0.4,
        boxShadow: isActive ? "0 0 16px rgba(59,130,246,0.4)" : "none",
      }}
    >
      {idx < urls.length ? (
        <img src={urls[idx]} alt={img.title} className="w-full h-full object-cover" onError={() => setIdx(i => i + 1)} />
      ) : (
        <div className="w-full h-full" style={{ background: "rgba(59,130,246,0.15)" }} />
      )}
      {isActive && (
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(59,130,246,0.2)" }}>
          <div className="w-3 h-3 bg-white rounded-full shadow-lg" />
        </div>
      )}
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
    <div className="min-h-screen pt-28 pb-20 relative" style={{ background: "#050510" }}>
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#3b82f6" }}>
            Emoji Digitals Academy
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Tech Education <span style={{ color: "#8b5cf6" }}>& Training</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            We don't just teach theory — we build real-world skills. Empowering individuals and organisations across Nigeria to thrive in the digital economy.
          </p>
        </div>

        {/* Courses */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1" style={{ background: "rgba(59,130,246,0.2)" }} />
            <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#3b82f6" }}>Our Courses</div>
            <div className="h-px flex-1" style={{ background: "rgba(59,130,246,0.2)" }} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c, i) => (
              <div
                key={i}
                className="group border rounded-2xl p-6 transition-all duration-300 flex flex-col"
                style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.08)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = c.color + "55";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${c.color}15`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 shadow-lg text-white transition-transform duration-300 group-hover:scale-110"
                    style={{ background: c.color }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight mb-1">{c.title}</h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs px-2 py-0.5 rounded" style={{ color: "#6b7280", background: "rgba(255,255,255,0.05)" }}>{c.duration}</span>
                      <span className="text-xs px-2 py-0.5 rounded" style={{ color: "#6b7280", background: "rgba(255,255,255,0.05)" }}>{c.level}</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs leading-relaxed mb-4" style={{ color: "#6b7280" }}>{c.desc}</p>
                <ul className="space-y-1.5 flex-1">
                  {c.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "#9ca3af" }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: c.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="h-0.5 w-10 rounded-full" style={{ background: c.color }} />
                  <Link to="/contact" className="text-xs font-medium flex items-center gap-1 transition-colors" style={{ color: "#3b82f6" }}>
                    Enrol <FaArrowRight style={{ fontSize: "0.6rem" }} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cert Banner */}
        <div className="mb-16 -mx-6 px-0">
          <div className="border-y py-2" style={{ background: "rgba(255,255,255,0.015)", borderColor: "rgba(255,255,255,0.06)" }}>
            <CertBanner />
          </div>
        </div>

        {/* Training Gallery Carousel */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#3b82f6" }}>Training In Action</div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Our Training <span style={{ color: "#8b5cf6" }}>Gallery</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Pictorial excerpts from concluded training exercises — real people, real skills, real impact.
            </p>
          </div>

          <div
            className="relative rounded-3xl overflow-hidden border shadow-2xl"
            style={{ minHeight: "520px", borderColor: "rgba(255,255,255,0.08)" }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {trainingImages.map((img, i) => <TrainingSlide key={i} img={img} isCurrent={i === current} />)}

            {/* Counter */}
            <div className="absolute top-6 right-6 px-4 py-2 rounded-full border text-white text-sm font-bold z-10"
              style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(12px)", borderColor: "rgba(255,255,255,0.2)" }}>
              {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </div>

            {/* Prev */}
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border flex items-center justify-center text-white transition-all hover:scale-110"
              style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(12px)", borderColor: "rgba(255,255,255,0.2)" }}
            >
              <FaChevronLeft />
            </button>

            {/* Next */}
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border flex items-center justify-center text-white transition-all hover:scale-110"
              style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(12px)", borderColor: "rgba(255,255,255,0.2)" }}
            >
              <FaChevronRight />
            </button>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 z-10" style={{ background: "rgba(255,255,255,0.1)" }}>
              <div
                key={current}
                className="h-full rounded-full"
                style={{
                  background: "#3b82f6",
                  animation: isAutoPlaying ? "slideProgress 4.5s linear forwards" : "none",
                  width: isAutoPlaying ? "0%" : "100%",
                }}
              />
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {trainingImages.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setIsAutoPlaying(false); }}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === current ? "2rem" : "0.625rem",
                  height: "0.625rem",
                  background: i === current ? "#3b82f6" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>

          {/* Thumbnails */}
          <div className="mt-8 grid grid-cols-5 md:grid-cols-13 gap-2">
            {trainingImages.map((img, i) => (
              <Thumbnail key={i} img={img} isActive={i === current} onClick={() => { setCurrent(i); setIsAutoPlaying(false); }} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <FaGraduationCap />, value: "500+", label: "Students Trained",    color: "#3b82f6" },
            { icon: <FaCalendarCheck />, value: "30+",  label: "Training Exercises",   color: "#8b5cf6" },
            { icon: <FaBuilding />,      value: "15+",  label: "Corporate Clients",    color: "#3b82f6" },
            { icon: <FaGlobe />,         value: "5+",   label: "States Reached",       color: "#8b5cf6" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl border transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.08)" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = stat.color + "55"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"}
            >
              <div className="flex justify-center mb-2 text-2xl" style={{ color: stat.color }}>{stat.icon}</div>
              <div className="text-3xl font-black mb-1 text-white">{stat.value}</div>
              <div className="text-sm" style={{ color: "#6b7280" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="border rounded-3xl p-10 md:p-16 text-center"
          style={{ background: "rgba(59,130,246,0.05)", borderColor: "rgba(59,130,246,0.2)" }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to <span style={{ color: "#8b5cf6" }}>Level Up?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Join our next training cohort and transform your career with real-world digital skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg">
              Enrol Now
            </Link>
            <Link to="/contact" className="btn-outline px-8 py-4 rounded-full text-white font-semibold text-lg">
              Corporate Training
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
