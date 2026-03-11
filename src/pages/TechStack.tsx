import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaDesktop, FaServer, FaPaintBrush, FaRobot, FaCloud,
  FaCode, FaLayerGroup, FaTools, FaCalendarAlt, FaArrowRight,
} from "react-icons/fa";

const categories = [
  {
    id: "frontend", label: "Frontend", icon: <FaDesktop />, accentRaw: "#3b82f6",
    tools: [
      { name: "React",         abbr: "Re",  desc: "Component-based UI library for building interactive, high-performance web interfaces",                level: 98 },
      { name: "Next.js",       abbr: "Nx",  desc: "Full-stack React framework with SSR, SSG, and edge functions for production-grade apps",              level: 90 },
      { name: "TypeScript",    abbr: "TS",  desc: "Strongly-typed JavaScript for scalable, maintainable, and bug-resistant codebases",                   level: 95 },
      { name: "Tailwind CSS",  abbr: "Tw",  desc: "Utility-first CSS framework for building beautiful, responsive designs at speed",                     level: 98 },
      { name: "Framer Motion", abbr: "Fr",  desc: "Production-ready animation library for smooth, physics-based UI animations",                          level: 85 },
      { name: "Redux Toolkit", abbr: "Rx",  desc: "Efficient state management for complex React applications with minimal boilerplate",                   level: 88 },
      { name: "React Native",  abbr: "RN",  desc: "Cross-platform mobile app development using React and native device APIs",                            level: 87 },
      { name: "Three.js",      abbr: "3J",  desc: "WebGL-powered 3D graphics and immersive visual experiences in the browser",                           level: 75 },
    ],
  },
  {
    id: "backend", label: "Backend", icon: <FaServer />, accentRaw: "#8b5cf6",
    tools: [
      { name: "Node.js",     abbr: "Nd",  desc: "Scalable, event-driven JavaScript runtime for building fast APIs and real-time systems",                level: 95 },
      { name: "Express.js",  abbr: "Ex",  desc: "Minimal and flexible Node.js web framework for building robust REST APIs",                             level: 95 },
      { name: "Python",      abbr: "Py",  desc: "Versatile language powering our AI, automation, data science, and backend systems",                    level: 90 },
      { name: "Django",      abbr: "Dj",  desc: "High-level Python web framework for rapid development and secure web applications",                    level: 85 },
      { name: "FastAPI",     abbr: "FA",  desc: "Modern, fast Python framework for building APIs with automatic OpenAPI documentation",                  level: 88 },
      { name: "GraphQL",     abbr: "GQ",  desc: "Query language and runtime for flexible, efficient API data fetching",                                 level: 80 },
      { name: "PostgreSQL",  abbr: "PG",  desc: "Advanced open-source relational database with JSON support and powerful querying",                     level: 92 },
      { name: "MongoDB",     abbr: "Mg",  desc: "NoSQL document database for flexible, scalable data storage and fast iteration",                       level: 90 },
    ],
  },
  {
    id: "design", label: "Design", icon: <FaPaintBrush />, accentRaw: "#3b82f6",
    tools: [
      { name: "Figma",               abbr: "Fi",  desc: "Collaborative interface design tool for wireframes, prototypes, and design systems",            level: 98 },
      { name: "Adobe Illustrator",   abbr: "Ai",  desc: "Industry-standard vector graphics tool for logo design and brand identity work",               level: 95 },
      { name: "Adobe Photoshop",     abbr: "Ps",  desc: "Professional image editing and digital art creation for rich visual content",                  level: 93 },
      { name: "Adobe Premiere Pro",  abbr: "Pr",  desc: "Professional video editing suite for cinematic productions and brand content",                 level: 85 },
      { name: "After Effects",       abbr: "Ae",  desc: "Motion graphics and visual effects software for animated brand assets",                        level: 80 },
      { name: "Canva Pro",           abbr: "Cv",  desc: "Rapid design tool for social media graphics, presentations, and marketing collateral",         level: 95 },
      { name: "Blender",             abbr: "Bl",  desc: "Open-source 3D modelling and animation for product visualisation and mockups",                 level: 70 },
      { name: "Spline",              abbr: "Sp",  desc: "Real-time 3D design and animation tool for interactive web experiences",                       level: 75 },
    ],
  },
  {
    id: "ai", label: "AI Tools", icon: <FaRobot />, accentRaw: "#8b5cf6",
    tools: [
      { name: "OpenAI GPT-4",         abbr: "AI",  desc: "Large language model for content generation, code assistance, and intelligent chat systems",  level: 95 },
      { name: "LangChain",            abbr: "LC",  desc: "Framework for building LLM-powered applications with chains, agents, and memory",             level: 88 },
      { name: "TensorFlow",           abbr: "TF",  desc: "Open-source ML framework for building and training custom neural network models",             level: 82 },
      { name: "PyTorch",              abbr: "PT",  desc: "Dynamic deep learning framework favoured for research and production ML deployment",          level: 80 },
      { name: "Hugging Face",         abbr: "HF",  desc: "Library of pre-trained models for NLP, computer vision, and audio tasks",                    level: 85 },
      { name: "Pinecone / Weaviate",  abbr: "VD",  desc: "Vector databases for semantic search, AI memory, and Retrieval Augmented Generation (RAG)", level: 82 },
      { name: "Midjourney / DALL-E",  abbr: "MJ",  desc: "AI image generation for conceptual design, mockups, and creative visualisation",             level: 90 },
      { name: "Whisper / ElevenLabs", abbr: "EL",  desc: "AI audio transcription and voice synthesis for multimedia and accessibility features",       level: 78 },
    ],
  },
  {
    id: "devops", label: "DevOps & Cloud", icon: <FaCloud />, accentRaw: "#3b82f6",
    tools: [
      { name: "AWS",              abbr: "AW",  desc: "Amazon Web Services — EC2, S3, Lambda, RDS, CloudFront, and more for cloud infrastructure",     level: 88 },
      { name: "Docker",           abbr: "Dk",  desc: "Containerisation platform for consistent, portable application environments",                   level: 90 },
      { name: "Kubernetes",       abbr: "K8",  desc: "Container orchestration for automated scaling, self-healing, and deployment management",        level: 80 },
      { name: "GitHub Actions",   abbr: "GA",  desc: "CI/CD automation for testing, building, and deploying code on every commit",                   level: 92 },
      { name: "Vercel / Netlify", abbr: "VN",  desc: "Serverless deployment platforms for frontend and full-stack applications at the edge",         level: 96 },
      { name: "Nginx",            abbr: "Nx",  desc: "High-performance web server and reverse proxy for production deployments",                     level: 85 },
      { name: "Terraform",        abbr: "Tf",  desc: "Infrastructure as Code tool for provisioning and managing cloud resources declaratively",       level: 78 },
      { name: "Linux / Bash",     abbr: "Lx",  desc: "Unix command line proficiency for server administration, scripting, and automation",           level: 90 },
    ],
  },
];

const stats = [
  { icon: <FaTools />,       value: "40+",  label: "Tools & Technologies", color: "#3b82f6" },
  { icon: <FaLayerGroup />,  value: "5",    label: "Tech Categories",      color: "#8b5cf6" },
  { icon: <FaCode />,        value: "120+", label: "Projects Shipped",     color: "#3b82f6" },
  { icon: <FaCalendarAlt />, value: "5+",   label: "Years in Production",  color: "#8b5cf6" },
];

function SkillBar({ level, accent }: { level: number; accent: string }) {
  return (
    <div className="w-full h-1.5 rounded-full overflow-hidden mt-3" style={{ background: "rgba(255,255,255,0.08)" }}>
      <div className="h-full rounded-full" style={{ width: `${level}%`, background: accent }} />
    </div>
  );
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);
  const active = categories.find(c => c.id === activeCategory)!;

  return (
    <div className="min-h-screen pt-28 pb-20 relative" style={{ background: "#050510" }}>
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#3b82f6" }}>
            Our Toolset
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Technology <span style={{ color: "#8b5cf6" }}>Stack</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            We build with the best. Every tool in our stack is chosen for performance, scalability, and developer experience.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 border"
              style={{
                background: activeCategory === cat.id ? cat.accentRaw + "18" : "rgba(255,255,255,0.02)",
                borderColor: activeCategory === cat.id ? cat.accentRaw + "55" : "rgba(255,255,255,0.08)",
                color: activeCategory === cat.id ? "#fff" : "#6b7280",
                boxShadow: activeCategory === cat.id ? `0 0 20px ${cat.accentRaw}20` : "none",
              }}
            >
              <span style={{ color: activeCategory === cat.id ? cat.accentRaw : "#4b5563" }}>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {active.tools.map((tool, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl border transition-all duration-300 cursor-default overflow-hidden"
              style={{
                background: hoveredTool === i ? active.accentRaw + "10" : "rgba(255,255,255,0.02)",
                borderColor: hoveredTool === i ? active.accentRaw + "50" : "rgba(255,255,255,0.08)",
                transform: hoveredTool === i ? "translateY(-4px)" : "translateY(0)",
                boxShadow: hoveredTool === i ? `0 12px 40px ${active.accentRaw}18` : "none",
              }}
              onMouseEnter={() => setHoveredTool(i)}
              onMouseLeave={() => setHoveredTool(null)}
            >
              {/* Radial glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${active.accentRaw}12, transparent 60%)` }}
              />

              {/* Abbr badge */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-black mb-4 transition-transform duration-300 group-hover:scale-110 text-white"
                style={{
                  background: active.accentRaw + "25",
                  border: `1px solid ${active.accentRaw}30`,
                  letterSpacing: "0.05em",
                }}
              >
                {tool.abbr}
              </div>

              <h3 className="text-white font-bold text-base mb-2">{tool.name}</h3>
              <p className="text-xs leading-relaxed mb-1" style={{ color: "#6b7280" }}>{tool.desc}</p>

              <SkillBar level={tool.level} accent={active.accentRaw} />
              <div className="text-right mt-1">
                <span className="text-[10px] font-mono" style={{ color: active.accentRaw + "cc" }}>{tool.level}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl border transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.08)" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = s.color + "44"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"}
            >
              <div className="flex justify-center mb-2 text-2xl" style={{ color: s.color }}>{s.icon}</div>
              <div className="text-3xl font-black mb-1" style={{ color: s.color }}>{s.value}</div>
              <div className="text-xs" style={{ color: "#6b7280" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="border rounded-3xl p-10 md:p-16 text-center"
          style={{ background: "rgba(59,130,246,0.05)", borderColor: "rgba(59,130,246,0.2)" }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Need the Right <span style={{ color: "#8b5cf6" }}>Tech for Your Project?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            We'll recommend the best stack for your specific goals, budget, and scale — then build it right.
          </p>
          <Link to="/contact" className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg inline-flex items-center gap-2">
            Discuss Your Tech Needs <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
