import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "🖥️",
    color: "from-blue-500 to-cyan-500",
    accentRaw: "#3b82f6",
    tools: [
      { name: "React", icon: "⚛️", desc: "Component-based UI library for building interactive, high-performance web interfaces", level: 98 },
      { name: "Next.js", icon: "▲", desc: "Full-stack React framework with SSR, SSG, and edge functions for production-grade apps", level: 90 },
      { name: "TypeScript", icon: "TS", desc: "Strongly-typed JavaScript for scalable, maintainable, and bug-resistant codebases", level: 95 },
      { name: "Tailwind CSS", icon: "🎨", desc: "Utility-first CSS framework for building beautiful, responsive designs at speed", level: 98 },
      { name: "Framer Motion", icon: "🎬", desc: "Production-ready animation library for smooth, physics-based UI animations", level: 85 },
      { name: "Redux Toolkit", icon: "🔄", desc: "Efficient state management for complex React applications with minimal boilerplate", level: 88 },
      { name: "React Native", icon: "📱", desc: "Cross-platform mobile app development using React and native device APIs", level: 87 },
      { name: "Three.js", icon: "🌐", desc: "WebGL-powered 3D graphics and immersive visual experiences in the browser", level: 75 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "⚙️",
    color: "from-purple-500 to-pink-500",
    accentRaw: "#a855f7",
    tools: [
      { name: "Node.js", icon: "🟩", desc: "Scalable, event-driven JavaScript runtime for building fast APIs and real-time systems", level: 95 },
      { name: "Express.js", icon: "🚂", desc: "Minimal and flexible Node.js web framework for building robust REST APIs", level: 95 },
      { name: "Python", icon: "🐍", desc: "Versatile language powering our AI, automation, data science, and backend systems", level: 90 },
      { name: "Django", icon: "🎯", desc: "High-level Python web framework for rapid development and secure web applications", level: 85 },
      { name: "FastAPI", icon: "⚡", desc: "Modern, fast Python framework for building APIs with automatic OpenAPI documentation", level: 88 },
      { name: "GraphQL", icon: "◆", desc: "Query language and runtime for flexible, efficient API data fetching", level: 80 },
      { name: "PostgreSQL", icon: "🐘", desc: "Advanced open-source relational database with JSON support and powerful querying", level: 92 },
      { name: "MongoDB", icon: "🍃", desc: "NoSQL document database for flexible, scalable data storage and fast iteration", level: 90 },
    ],
  },
  {
    id: "design",
    label: "Design",
    icon: "🎨",
    color: "from-pink-500 to-rose-500",
    accentRaw: "#ec4899",
    tools: [
      { name: "Figma", icon: "🖼️", desc: "Collaborative interface design tool for wireframes, prototypes, and design systems", level: 98 },
      { name: "Adobe Illustrator", icon: "Ai", desc: "Industry-standard vector graphics tool for logo design and brand identity work", level: 95 },
      { name: "Adobe Photoshop", icon: "Ps", desc: "Professional image editing and digital art creation for rich visual content", level: 93 },
      { name: "Adobe Premiere Pro", icon: "Pr", desc: "Professional video editing suite for cinematic productions and brand content", level: 85 },
      { name: "After Effects", icon: "Ae", desc: "Motion graphics and visual effects software for animated brand assets", level: 80 },
      { name: "Canva Pro", icon: "🎪", desc: "Rapid design tool for social media graphics, presentations, and marketing collateral", level: 95 },
      { name: "Blender", icon: "🫙", desc: "Open-source 3D modelling and animation for product visualisation and mockups", level: 70 },
      { name: "Spline", icon: "✨", desc: "Real-time 3D design and animation tool for interactive web experiences", level: 75 },
    ],
  },
  {
    id: "ai",
    label: "AI Tools",
    icon: "🤖",
    color: "from-cyan-500 to-indigo-500",
    accentRaw: "#06b6d4",
    tools: [
      { name: "OpenAI GPT-4", icon: "🧠", desc: "Large language model for content generation, code assistance, and intelligent chat systems", level: 95 },
      { name: "LangChain", icon: "⛓️", desc: "Framework for building LLM-powered applications with chains, agents, and memory", level: 88 },
      { name: "TensorFlow", icon: "🔶", desc: "Open-source ML framework for building and training custom neural network models", level: 82 },
      { name: "PyTorch", icon: "🔥", desc: "Dynamic deep learning framework favoured for research and production ML deployment", level: 80 },
      { name: "Hugging Face", icon: "🤗", desc: "Library of pre-trained models for NLP, computer vision, and audio tasks", level: 85 },
      { name: "Pinecone / Weaviate", icon: "📌", desc: "Vector databases for semantic search, AI memory, and Retrieval Augmented Generation (RAG)", level: 82 },
      { name: "Midjourney / DALL·E", icon: "🎨", desc: "AI image generation for conceptual design, mockups, and creative visualisation", level: 90 },
      { name: "Whisper / ElevenLabs", icon: "🎙️", desc: "AI audio transcription and voice synthesis for multimedia and accessibility features", level: 78 },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Cloud",
    icon: "☁️",
    color: "from-indigo-500 to-violet-500",
    accentRaw: "#6366f1",
    tools: [
      { name: "AWS", icon: "☁️", desc: "Amazon Web Services — EC2, S3, Lambda, RDS, CloudFront, and more for cloud infrastructure", level: 88 },
      { name: "Docker", icon: "🐳", desc: "Containerisation platform for consistent, portable application environments", level: 90 },
      { name: "Kubernetes", icon: "⎈", desc: "Container orchestration for automated scaling, self-healing, and deployment management", level: 80 },
      { name: "GitHub Actions", icon: "🔄", desc: "CI/CD automation for testing, building, and deploying code on every commit", level: 92 },
      { name: "Vercel / Netlify", icon: "▲", desc: "Serverless deployment platforms for frontend and full-stack applications at the edge", level: 96 },
      { name: "Nginx", icon: "🟩", desc: "High-performance web server and reverse proxy for production deployments", level: 85 },
      { name: "Terraform", icon: "🏗️", desc: "Infrastructure as Code tool for provisioning and managing cloud resources declaratively", level: 78 },
      { name: "Linux / Bash", icon: "🐧", desc: "Unix command line proficiency for server administration, scripting, and automation", level: 90 },
    ],
  },
];

function SkillBar({ level, color }: { level: number; color: string }) {
  return (
    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mt-3">
      <div
        className="h-full rounded-full"
        style={{
          width: `${level}%`,
          background: `linear-gradient(to right, ${color.includes("blue") ? "#3b82f6" : color.includes("purple") ? "#a855f7" : color.includes("pink") ? "#ec4899" : color.includes("cyan") ? "#06b6d4" : "#6366f1"}, #c084fc)`,
        }}
      />
    </div>
  );
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);

  const active = categories.find((c) => c.id === activeCategory)!;

  return (
    <div className="min-h-screen pt-28 pb-20 relative" style={{ background: "#050510" }}>
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/8 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">Our Toolset</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Technology <span className="gradient-text">Stack</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            We build with the best. Every tool in our stack is chosen for performance, scalability, and developer experience.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 border"
              style={{
                background: activeCategory === cat.id
                  ? `linear-gradient(135deg, ${cat.accentRaw}30, ${cat.accentRaw}15)`
                  : "rgba(255,255,255,0.02)",
                borderColor: activeCategory === cat.id ? cat.accentRaw + "60" : "rgba(255,255,255,0.1)",
                color: activeCategory === cat.id ? "#fff" : "#6b7280",
                boxShadow: activeCategory === cat.id ? `0 0 20px ${cat.accentRaw}30` : "none",
              }}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {active.tools.map((tool, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl border transition-all duration-400 cursor-default overflow-hidden"
              style={{
                background: hoveredTool === i ? active.accentRaw + "10" : "rgba(255,255,255,0.02)",
                borderColor: hoveredTool === i ? active.accentRaw + "50" : "rgba(255,255,255,0.1)",
                transform: hoveredTool === i ? "translateY(-4px)" : "translateY(0)",
                boxShadow: hoveredTool === i ? `0 12px 40px ${active.accentRaw}20, 0 0 0 1px ${active.accentRaw}20` : "none",
              }}
              onMouseEnter={() => setHoveredTool(i)}
              onMouseLeave={() => setHoveredTool(null)}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${active.accentRaw}15, transparent 60%)` }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-black mb-4 transition-transform duration-300 group-hover:scale-110 text-white"
                style={{
                  background: `linear-gradient(135deg, ${active.accentRaw}30, ${active.accentRaw}15)`,
                  border: `1px solid ${active.accentRaw}30`,
                  fontSize: tool.icon.length > 2 ? "14px" : "24px",
                }}
              >
                {tool.icon}
              </div>

              {/* Name & Desc */}
              <h3 className="text-white font-bold text-base mb-2">{tool.name}</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-1">{tool.desc}</p>

              {/* Proficiency bar */}
              <SkillBar level={tool.level} color={active.color} />
              <div className="text-right mt-1">
                <span className="text-[10px] font-mono" style={{ color: active.accentRaw + "cc" }}>{tool.level}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { icon: "🛠️", value: "40+", label: "Tools & Technologies" },
            { icon: "🏗️", value: "5", label: "Tech Categories Mastered" },
            { icon: "🚀", value: "120+", label: "Projects Shipped" },
            { icon: "📅", value: "5+", label: "Years in Production" },
          ].map((s, i) => (
            <div key={i} className="text-center p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-indigo-500/30 transition-all duration-300">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-3xl font-black gradient-text mb-1">{s.value}</div>
              <div className="text-gray-500 text-xs">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 border border-white/10 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Need the Right <span className="gradient-text">Tech for Your Project?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            We'll recommend the best stack for your specific goals, budget, and scale — then build it right.
          </p>
          <Link to="/contact" className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg">
            Discuss Your Tech Needs →
          </Link>
        </div>
      </div>
    </div>
  );
}
