import { useState, useRef, useEffect } from "react";
import {
  FaRobot, FaTimes, FaPaperPlane, FaChevronDown,
  FaRegCommentDots, FaPhone, FaEnvelope, FaWhatsapp
} from "react-icons/fa";

interface Message {
  role: "user" | "bot";
  text: string;
  time: string;
}

const now = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

// ─── Knowledge Base ───────────────────────────────────────────────────────────
const KB: { patterns: RegExp[]; answer: string }[] = [
  {
    patterns: [/hello|hi|hey|good (morning|afternoon|evening)|howdy/i],
    answer: "Hello! 👋 Welcome to Emoji Digitals — a Creative Technology Innovation Lab. I'm your AI assistant. How can I help you today? You can ask me about our services, pricing, courses, team, or how to get started.",
  },
  {
    patterns: [/what do you (do|offer)|services|what.*emoji digitals|tell me about/i],
    answer: "Emoji Digitals offers four core services:\n\n1. **Branding & Identity** — Logo design, brand strategy, visual identity systems, brand guidelines\n2. **Website Development** — High-performance, SEO-optimized, responsive websites\n3. **Application Development** — Web apps, mobile apps, SaaS platforms, business automation\n4. **Technology Education** — Coding bootcamps, corporate training, mentorship\n\nWould you like details on any specific service?",
  },
  {
    patterns: [/brand|logo|identity|visual/i],
    answer: "Our **Branding & Identity** service includes:\n• Logo & Visual Identity design\n• Brand Strategy & Positioning\n• Brand Guidelines & Style Guide\n• Social Media & Digital Assets\n• Business card, letterhead, stationery\n\nWe craft identities that communicate authority and innovation. Pricing starts from ₦50,000. Want to start a project?",
  },
  {
    patterns: [/website|web dev|web design|site/i],
    answer: "Our **Website Development** service delivers:\n• Fully responsive designs\n• SEO-optimized architecture\n• Conversion-focused UI/UX\n• Built on modern frameworks (React, Next.js, WordPress)\n• Speed-optimized & secure\n\nFrom landing pages to complex web platforms. Pricing starts from ₦80,000. Shall I connect you with our team?",
  },
  {
    patterns: [/app|application|mobile|software|saas|portal/i],
    answer: "Our **Application Development** service builds:\n• Business automation systems\n• Client portals & dashboards\n• SaaS platforms\n• Mobile applications (iOS & Android)\n• Startup MVPs\n• Internal management tools\n\nWe combine clean UI/UX with powerful backend architecture. Pricing from ₦150,000. Ready to build?",
  },
  {
    patterns: [/train|course|learn|academy|educat|bootcamp|class|program/i],
    answer: "Emoji Digitals Academy offers professional tech training:\n\n• **Web Development** — 12 weeks\n• **App Development** — 16 weeks\n• **AI Engineering** — 14 weeks\n• **Network Engineering** — 10 weeks\n• **Cybersecurity** — 12 weeks\n• **Data Science** — 14 weeks\n• **Video Editing** — 6 weeks\n• **UI/UX & Graphic Design** — 8 weeks\n• **Digital Marketing** — 6 weeks\n\nWe also prepare students for CCNA, CCNP, AWS, CompTIA certifications. Visit our Academy page or call us to enrol!",
  },
  {
    patterns: [/ai|artificial intelligence|machine learning|data science/i],
    answer: "We offer **AI Engineering** and **Data Science** training at our Academy! Our AI Engineering course covers:\n• Machine Learning fundamentals\n• Neural networks & deep learning\n• AI model deployment\n• Python for AI/ML\n• OpenAI API integration\n\nWe also integrate AI-driven workflows into client projects. Duration: 14 weeks. Interested in enrolling?",
  },
  {
    patterns: [/cyber|security|ethical hack|ceh|network/i],
    answer: "Our **Cybersecurity** programme (12 weeks) covers:\n• Ethical Hacking fundamentals\n• Network security & firewalls\n• Penetration testing\n• Security auditing\n• CEH certification prep\n\nOur **Network Engineering** course (10 weeks) prepares you for:\n• CCNA & CCNP certification\n• Cisco networking\n• Network design & architecture\n\nCall us on +234 806 951 1029 to register!",
  },
  {
    patterns: [/price|cost|how much|fee|charge|budget|rate|pricing/i],
    answer: "Our pricing ranges:\n\n• **Branding Package** — from ₦50,000\n• **Website Development** — from ₦80,000\n• **Web Application** — from ₦150,000\n• **Mobile App** — from ₦200,000\n• **Academy Courses** — contact us for tuition fees\n• **Corporate Training** — custom quote\n\nPricing depends on project scope and complexity. Contact us for a free consultation and custom quote!",
  },
  {
    patterns: [/contact|reach|talk|speak|call|phone|email|whatsapp/i],
    answer: "You can reach Emoji Digitals through:\n\n📞 **Phone:** +234 806 951 1029 / +234 810 298 2020\n📧 **Email:** admin@emojidigitals.com\n💬 **WhatsApp:** +234 810 298 2020\n📍 **Address:** No 13 Rear Admiral Ozojiofor Street, Awka 420110, Anambra, Nigeria\n\n**Office Hours:**\nMon–Fri: 8:00 AM – 6:00 PM\nSaturday: 10:00 AM – 4:00 PM\n\nOr fill our contact form on the Contact page!",
  },
  {
    patterns: [/location|address|where|awka|anambra|nigeria|office|find/i],
    answer: "Emoji Digitals is located at:\n\n📍 **No 13 Rear Admiral Ozojiofor Street**\nAwka 420110, Anambra State, Nigeria\n\nWe're open:\n• Monday – Friday: 8:00 AM – 6:00 PM\n• Saturday: 10:00 AM – 4:00 PM\n• Sunday: Closed\n\nYou can also find us on Google Maps by searching 'Emoji Digitals Awka'.",
  },
  {
    patterns: [/who are you|about emoji|founded|company|team|history/i],
    answer: "**Emoji Digitals** is a Creative Technology Innovation Lab based in Awka, Anambra State, Nigeria.\n\nWe were founded with one mission — to bridge creativity and technology. We are a team of creatives, developers, and tech educators committed to:\n• Excellence & Innovation\n• Measurable Impact\n• Future-ready Solutions\n\nOur vision: To become a leading creative technology innovation lab in Africa, building intelligent digital systems and empowering the next generation of tech leaders.",
  },
  {
    patterns: [/portfolio|work|project|case stud|previous|past/i],
    answer: "We've delivered projects across multiple industries including:\n• FinTech dashboards & financial platforms\n• Brand identity systems for startups\n• E-learning & education platforms\n• Healthcare CRM systems\n• E-commerce stores\n• Corporate websites\n\nVisit our **Portfolio** and **Case Studies** pages to see detailed breakdowns of our work with real metrics and results!",
  },
  {
    patterns: [/process|how.*work|steps|approach|methodology/i],
    answer: "Our proven 5-step process:\n\n1. **Discover** — We analyse your vision, goals & challenges\n2. **Design** — We prototype creative & technical solutions\n3. **Develop** — We engineer scalable systems with clean architecture\n4. **Deploy** — We launch, test & go live\n5. **Scale** — We optimise & support your growth\n\nVisit our Process page for a detailed breakdown of each phase!",
  },
  {
    patterns: [/tech stack|technology|tools|framework|language|react|wordpress/i],
    answer: "Our technology stack includes:\n\n**Frontend:** React, Next.js, TypeScript, Tailwind CSS, Vue.js\n**Backend:** Node.js, Python, PHP, Express, Django\n**Design:** Figma, Adobe Suite, Canva Pro\n**AI Tools:** OpenAI, TensorFlow, Hugging Face\n**Cloud & DevOps:** AWS, Docker, Vercel, Netlify, Git\n\nVisit our Tech Stack page for the complete list of 40+ technologies we work with!",
  },
  {
    patterns: [/certif|ccna|ccnp|aws|comptia|google cert|microsoft/i],
    answer: "Our Academy prepares students for these professional certifications:\n\n• **CCNA & CCNP** — Cisco Networking\n• **CompTIA Security+** — Cybersecurity\n• **CompTIA A+** — IT Fundamentals\n• **AWS Cloud Practitioner** — Amazon Cloud\n• **Google Data Analytics** — Data Science\n• **Meta Front-End Developer** — Web Dev\n• **Microsoft AZ-900** — Azure Cloud\n• **CEH** — Certified Ethical Hacker\n• **Google UX Design** — UI/UX\n• **Certified ScrumMaster** — Agile\n\nEnrol today to start your certification journey!",
  },
  {
    patterns: [/start|begin|get started|project|hire|work with/i],
    answer: "Ready to start? Here's how:\n\n1. **Fill our Contact Form** — Tell us about your project\n2. **Book a Consultation** — Free 30-minute discovery call\n3. **Get a Proposal** — We send a detailed quote within 24 hours\n4. **We Begin Building** — Project kicks off after approval\n\nCall us: **+234 806 951 1029**\nEmail: **admin@emojidigitals.com**\nWhatsApp: **+234 810 298 2020**",
  },
  {
    patterns: [/timeline|how long|duration|deadline|delivery/i],
    answer: "Our typical project timelines:\n\n• **Logo & Branding** — 5–14 days\n• **Website** — 2–6 weeks\n• **Web Application** — 4–16 weeks\n• **Mobile App** — 8–20 weeks\n• **Academy Courses** — 6–16 weeks\n\nTimelines depend on project complexity and scope. We always discuss and agree on deadlines before starting. Contact us for your specific project timeline!",
  },
  {
    patterns: [/social|instagram|facebook|twitter|linkedin|youtube|tiktok/i],
    answer: "Follow Emoji Digitals on social media:\n\n• **Instagram:** @emojidigitals\n• **Facebook:** /emojidigitals\n• **Twitter/X:** @emojidigitals\n• **LinkedIn:** /company/emojidigitals\n• **YouTube:** @emojidigitals\n• **TikTok:** @emojidigitals\n\nStay updated with our latest projects, training announcements, and digital insights!",
  },
  {
    patterns: [/thank|thanks|appreciate|great|awesome|perfect/i],
    answer: "You're welcome! 😊 It's our pleasure to help. At Emoji Digitals, we're passionate about building intelligent digital systems and empowering businesses. Is there anything else I can help you with?",
  },
  {
    patterns: [/bye|goodbye|see you|later|done|exit/i],
    answer: "Thank you for chatting with Emoji Digitals! 🚀 Feel free to return anytime. You can also reach us at admin@emojidigitals.com or call +234 806 951 1029. Have a great day!",
  },
];

function getAnswer(input: string): string {
  const lower = input.toLowerCase().trim();
  for (const entry of KB) {
    if (entry.patterns.some(p => p.test(lower))) {
      return entry.answer;
    }
  }
  return "I'm not sure about that specific question, but I'd love to help! You can:\n\n• **Call us:** +234 806 951 1029\n• **Email:** admin@emojidigitals.com\n• **WhatsApp:** +234 810 298 2020\n\nOr try asking me about our services, pricing, courses, location, or how to start a project!";
}

function formatText(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    const parts = line.split(/\*\*(.*?)\*\*/g);
    return (
      <span key={i} className="block" style={{ marginBottom: line === "" ? "6px" : "2px" }}>
        {parts.map((part, j) =>
          j % 2 === 1 ? <strong key={j} style={{ color: "#60a5fa" }}>{part}</strong> : part
        )}
      </span>
    );
  });
}

const QUICK = [
  "What services do you offer?",
  "What are your prices?",
  "Tell me about the Academy",
  "How do I contact you?",
  "How long does a project take?",
];

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi there! 👋 I'm the Emoji Digitals AI Assistant. I can answer questions about our services, pricing, courses, location, and more. How can I help you today?",
      time: now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = (text: string) => {
    const msg = text.trim();
    if (!msg) return;
    const userMsg: Message = { role: "user", text: msg, time: now() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const answer = getAnswer(msg);
      setMessages(prev => [...prev, { role: "bot", text: answer, time: now() }]);
      setTyping(false);
      if (!open) setUnread(n => n + 1);
    }, 800 + Math.random() * 600);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          position: "fixed", bottom: "28px", right: "28px", zIndex: 99999,
          width: "60px", height: "60px", borderRadius: "50%",
          background: open ? "#8b5cf6" : "#3b82f6",
          border: "2px solid rgba(255,255,255,0.15)",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", boxShadow: `0 0 24px ${open ? "rgba(139,92,246,0.5)" : "rgba(59,130,246,0.5)"}`,
          transition: "all 0.3s ease", color: "white", fontSize: "22px",
        }}
        aria-label="AI Assistant"
      >
        {open ? <FaChevronDown /> : <FaRegCommentDots />}
        {!open && unread > 0 && (
          <span style={{
            position: "absolute", top: "-4px", right: "-4px",
            background: "#ef4444", color: "white", borderRadius: "50%",
            width: "20px", height: "20px", fontSize: "11px", fontWeight: "bold",
            display: "flex", alignItems: "center", justifyContent: "center",
            border: "2px solid #050510",
          }}>{unread}</span>
        )}
      </button>

      {/* Chat Window */}
      <div style={{
        position: "fixed", bottom: "100px", right: "28px", zIndex: 99998,
        width: "min(400px, calc(100vw - 40px))",
        borderRadius: "20px",
        background: "#0a0a1e",
        border: "1px solid rgba(59,130,246,0.3)",
        boxShadow: "0 24px 80px rgba(0,0,0,0.8), 0 0 40px rgba(59,130,246,0.15)",
        display: "flex", flexDirection: "column",
        maxHeight: "520px",
        transform: open ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "all" : "none",
        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        overflow: "hidden",
      }}>
        {/* Header */}
        <div style={{
          background: "#3b82f6", padding: "16px 20px",
          display: "flex", alignItems: "center", gap: "12px",
          flexShrink: 0,
        }}>
          <div style={{
            width: "40px", height: "40px", borderRadius: "50%",
            background: "rgba(255,255,255,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "18px", color: "white", flexShrink: 0,
            border: "2px solid rgba(255,255,255,0.3)",
          }}>
            <FaRobot />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ color: "white", fontWeight: 700, fontSize: "14px" }}>Emoji Digitals AI</div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
              <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "11px" }}>Online • Typically replies instantly</span>
            </div>
          </div>
          <button onClick={() => setOpen(false)} style={{
            background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "8px",
            color: "white", cursor: "pointer", padding: "6px 8px", fontSize: "14px",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <FaTimes />
          </button>
        </div>

        {/* Messages */}
        <div style={{
          flex: 1, overflowY: "auto", padding: "16px",
          display: "flex", flexDirection: "column", gap: "12px",
          scrollbarWidth: "thin", scrollbarColor: "#3b82f620 transparent",
        }}>
          {messages.map((m, i) => (
            <div key={i} style={{
              display: "flex", flexDirection: m.role === "user" ? "row-reverse" : "row",
              gap: "8px", alignItems: "flex-end",
            }}>
              {m.role === "bot" && (
                <div style={{
                  width: "28px", height: "28px", borderRadius: "50%",
                  background: "#3b82f6", display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "12px", color: "white", flexShrink: 0,
                }}>
                  <FaRobot />
                </div>
              )}
              <div style={{ maxWidth: "80%", display: "flex", flexDirection: "column", gap: "2px",
                alignItems: m.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  padding: "10px 14px", borderRadius: m.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                  background: m.role === "user" ? "#3b82f6" : "rgba(255,255,255,0.06)",
                  border: m.role === "bot" ? "1px solid rgba(59,130,246,0.2)" : "none",
                  color: "white", fontSize: "13px", lineHeight: "1.6",
                }}>
                  {m.role === "bot" ? formatText(m.text) : m.text}
                </div>
                <span style={{ color: "#4b5563", fontSize: "10px", padding: "0 4px" }}>{m.time}</span>
              </div>
            </div>
          ))}

          {typing && (
            <div style={{ display: "flex", gap: "8px", alignItems: "flex-end" }}>
              <div style={{
                width: "28px", height: "28px", borderRadius: "50%",
                background: "#3b82f6", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "12px", color: "white", flexShrink: 0,
              }}>
                <FaRobot />
              </div>
              <div style={{
                padding: "12px 16px", borderRadius: "18px 18px 18px 4px",
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(59,130,246,0.2)",
                display: "flex", gap: "4px", alignItems: "center",
              }}>
                {[0, 1, 2].map(d => (
                  <span key={d} style={{
                    width: "6px", height: "6px", borderRadius: "50%",
                    background: "#3b82f6", display: "inline-block",
                    animation: "bounce 1.2s infinite",
                    animationDelay: `${d * 0.2}s`,
                  }} />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick Replies */}
        {messages.length <= 2 && (
          <div style={{ padding: "0 16px 12px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {QUICK.map((q, i) => (
              <button key={i} onClick={() => send(q)} style={{
                padding: "5px 12px", borderRadius: "20px", fontSize: "11px",
                background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.3)",
                color: "#93c5fd", cursor: "pointer", whiteSpace: "nowrap",
                transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(59,130,246,0.25)"; e.currentTarget.style.color = "white"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(59,130,246,0.12)"; e.currentTarget.style.color = "#93c5fd"; }}
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Contact Quick Links */}
        <div style={{
          padding: "8px 16px", borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex", gap: "6px", justifyContent: "center",
        }}>
          {[
            { icon: <FaPhone />, href: "tel:+2348069511029", tip: "Call" },
            { icon: <FaWhatsapp />, href: "https://wa.me/2348102982020", tip: "WhatsApp" },
            { icon: <FaEnvelope />, href: "mailto:admin@emojidigitals.com", tip: "Email" },
          ].map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noopener noreferrer"
              title={l.tip}
              style={{
                width: "32px", height: "32px", borderRadius: "50%",
                background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#3b82f6", fontSize: "13px", transition: "all 0.2s", textDecoration: "none",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#3b82f6"; e.currentTarget.style.color = "white"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(59,130,246,0.1)"; e.currentTarget.style.color = "#3b82f6"; }}
            >
              {l.icon}
            </a>
          ))}
        </div>

        {/* Input */}
        <div style={{
          padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex", gap: "8px", alignItems: "center", flexShrink: 0,
        }}>
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && !e.shiftKey && send(input)}
            placeholder="Ask me anything…"
            style={{
              flex: 1, background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(59,130,246,0.25)", borderRadius: "12px",
              padding: "10px 14px", color: "white", fontSize: "13px",
              outline: "none", fontFamily: "inherit",
            }}
            onFocus={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.6)"; }}
            onBlur={e => { e.currentTarget.style.borderColor = "rgba(59,130,246,0.25)"; }}
          />
          <button onClick={() => send(input)} style={{
            width: "40px", height: "40px", borderRadius: "12px",
            background: input.trim() ? "#3b82f6" : "rgba(59,130,246,0.2)",
            border: "none", color: "white", cursor: input.trim() ? "pointer" : "default",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "15px", transition: "all 0.2s", flexShrink: 0,
          }}>
            <FaPaperPlane />
          </button>
        </div>

        {/* Branding */}
        <div style={{
          padding: "6px 16px 10px", textAlign: "center",
          color: "#374151", fontSize: "10px",
        }}>
          Powered by <span style={{ color: "#3b82f6", fontWeight: 600 }}>Emoji Digitals AI</span>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  );
}
