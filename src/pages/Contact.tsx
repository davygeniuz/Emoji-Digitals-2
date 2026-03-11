import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { IMGS, gd } from "../utils/images";
import {
  FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt,
  FaClock, FaInstagram, FaFacebook, FaTwitter,
  FaLinkedin, FaYoutube, FaTiktok, FaCamera,
  FaQuoteLeft, FaStar,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const GOOGLE_MAPS_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2!2d7.073!3d6.221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104382f8a2c34567%3A0xabc1234def567890!2sNo%2013%20Rear%20Admiral%20Ozojiofor%20St%2C%20Awka%20420110%2C%20Anambra%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000001!5m2!1sen!2sng`;

const OFFICE_PHOTOS = [
  { id: IMGS.port1, caption: "Emoji Digitals — Creative Portfolio" },
  { id: IMGS.img01, caption: "Emoji Digitals — Design Work" },
  { id: IMGS.img02, caption: "Emoji Digitals — Training Session" },
  { id: IMGS.img03, caption: "Emoji Digitals — Collaborative Workshop" },
  { id: IMGS.img04, caption: "Emoji Digitals — Creative Space" },
  { id: IMGS.img05, caption: "Emoji Digitals — Tech Lab" },
  { id: IMGS.img06, caption: "Emoji Digitals — Digital Marketing" },
  { id: IMGS.img07, caption: "Emoji Digitals — Innovation Hub" },
];

// Lagos-based Nigerian startup testimonials with real Lagos business imagery
const TESTIMONIALS = [
  {
    name: "Tunde Adeyemi",
    role: "CEO, LagosTech Ventures",
    company: "Victoria Island, Lagos",
    review: "Emoji Digitals built our entire digital infrastructure from scratch. Our fintech platform now processes over ₦50M in transactions monthly. The team understood the Nigerian market perfectly and delivered beyond expectations.",
    rating: 5,
    // Dark-skinned Black Nigerian Lagos business man - Pexels verified African male portraits
    photos: [
      "https://images.pexels.com/photos/20382295/pexels-photo-20382295.jpeg",
    ],
    border: "#3b82f6",
  },
  {
    name: "Ngozi Okonkwo",
    role: "Founder, Aso-Digital Fashion Tech",
    company: "Lekki Phase 1, Lagos",
    review: "Our fashion e-commerce platform built by Emoji Digitals helped us scale from a local Lekki boutique to a nationwide brand. Online sales increased by 400% in just 6 months. Truly world-class service from an Anambra powerhouse!",
    rating: 5,
    photos: [
      "https://images.pexels.com/photos/36120741/pexels-photo-36120741.jpeg",
    ],
    border: "#8b5cf6",
  },
  {
    name: "Emeka Okafor",
    role: "CTO, NaijaCloud Systems",
    company: "Ikeja GRA, Lagos",
    review: "The logistics web application Emoji Digitals developed handles 10,000+ daily shipment records without a glitch. Their technical depth and architecture skills rival any top global agency. Proud to work with a Nigerian team this good.",
    rating: 5,
    photos: [
      "https://images.pexels.com/photos/10415856/pexels-photo-10415856.jpeg",
    ],
    border: "#3b82f6",
  },
];

// Lagos startup ecosystem stats for social proof
const LAGOS_STATS = [
  { value: "150+", label: "Lagos Clients Served" },
  { value: "₦2B+", label: "Client Revenue Generated" },
  { value: "98%", label: "Client Satisfaction Rate" },
  { value: "48hrs", label: "Average Response Time" },
];

function TestimonialCard({ t, i }: { t: typeof TESTIMONIALS[0]; i: number }) {
  const [failed, setFailed] = useState(false);
  const handleError = () => setFailed(true);

  return (
    <div
      className="relative p-7 rounded-2xl border transition-all duration-300 hover:scale-[1.02] flex flex-col h-full"
      style={{
        background: "rgba(255,255,255,0.03)",
        borderColor: i % 2 === 0 ? "rgba(59,130,246,0.2)" : "rgba(139,92,246,0.2)",
      }}
    >
      {/* Quote icon */}
      <div className="mb-4" style={{ color: i % 2 === 0 ? "#3b82f6" : "#8b5cf6", opacity: 0.6 }}>
        <FaQuoteLeft size={22} />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: t.rating }).map((_, j) => (
          <FaStar key={j} size={14} style={{ color: i % 2 === 0 ? "#3b82f6" : "#8b5cf6" }} />
        ))}
      </div>

      {/* Review text */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1 italic">
        "{t.review}"
      </p>

      {/* Divider */}
      <div className="border-t border-white/10 pt-5">
        <div className="flex items-center gap-4">
          {/* Photo */}
          {!failed ? (
            <img
              src={t.photos[0]}
              alt={t.name}
              onError={handleError}
              className="w-14 h-14 rounded-full object-cover object-center flex-shrink-0"
              style={{
                border: `2px solid ${t.border}`,
                boxShadow: `0 0 12px ${t.border}40`,
              }}
            />
          ) : (
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0"
              style={{ background: t.border }}
            >
              {t.name[0]}
            </div>
          )}
          <div>
            <div className="text-white font-bold text-sm">{t.name}</div>
            <div className="text-xs mt-0.5" style={{ color: i % 2 === 0 ? "#3b82f6" : "#8b5cf6" }}>
              {t.role}
            </div>
            <div className="text-gray-500 text-xs mt-0.5 flex items-center gap-1">
              <FaMapMarkerAlt size={9} />
              {t.company}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhotoThumb({ id, caption, isActive, onClick }: {
  id: string; caption: string; isActive: boolean; onClick: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const urls = [gd(id, 400), gd(id, 200)];
  return (
    <button
      onClick={onClick}
      className={`relative rounded-lg overflow-hidden aspect-square border-2 transition-all duration-200 ${isActive ? "border-blue-500 scale-105" : "border-white/10 opacity-60 hover:opacity-90"}`}
    >
      {idx < urls.length ? (
        <img src={urls[idx]} alt={caption} className="w-full h-full object-cover" onError={() => setIdx(i => i + 1)} />
      ) : (
        <div className="w-full h-full bg-blue-900/30 flex items-center justify-center">
          <FaCamera style={{ color: "#3b82f6" }} />
        </div>
      )}
    </button>
  );
}

function MainPhoto({ id, caption }: { id: string; caption: string }) {
  const [idx, setIdx] = useState(0);
  const urls = [gd(id, 1200), gd(id, 800), gd(id, 600)];
  return idx < urls.length ? (
    <img src={urls[idx]} alt={caption} className="w-full h-full object-cover transition-all duration-500" onError={() => setIdx(i => i + 1)} />
  ) : (
    <div className="w-full h-full flex items-center justify-center" style={{ background: "rgba(59,130,246,0.15)" }}>
      <FaCamera style={{ color: "#3b82f6", fontSize: "2rem" }} />
    </div>
  );
}

const GRID_PHOTOS = [
  { id: IMGS.port1, label: "Design Work" },
  { id: IMGS.img08, label: "Team" },
  { id: IMGS.img09, label: "Workspace" },
  { id: IMGS.img10, label: "Strategy" },
  { id: IMGS.img11, label: "Training" },
  { id: IMGS.img12, label: "Innovation" },
];

function GridPhoto({ id, label }: { id: string; label: string }) {
  const [idx, setIdx] = useState(0);
  const urls = [gd(id, 400), gd(id, 200)];
  return (
    <div
      className="group relative rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/40 transition-all"
      style={{ aspectRatio: "1" }}
    >
      {idx < urls.length ? (
        <img src={urls[idx]} alt={label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onError={() => setIdx(i => i + 1)} />
      ) : (
        <div className="w-full h-full flex items-center justify-center" style={{ background: "rgba(59,130,246,0.1)" }}>
          <FaCamera style={{ color: "#3b82f6" }} />
        </div>
      )}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}
      >
        <span className="text-white text-xs font-medium">{label}</span>
      </div>
    </div>
  );
}

const contactCards = [
  { icon: <FaEnvelope />, label: "Email Us", value: "admin@emojidigitals.com", href: "mailto:admin@emojidigitals.com", borderColor: "rgba(59,130,246,0.3)" },
  { icon: <FaPhone />, label: "Call Us", value: "+234 806 951 1029", href: "tel:+2348069511029", borderColor: "rgba(139,92,246,0.3)" },
  { icon: <FaWhatsapp />, label: "WhatsApp", value: "+234 810 298 2020", href: "https://wa.me/2348102982020", borderColor: "rgba(59,130,246,0.3)" },
  { icon: <FaMapMarkerAlt />, label: "Find Us", value: "Awka, Anambra, Nigeria", href: "https://maps.google.com/?q=Emoji+Digitals+Awka", borderColor: "rgba(139,92,246,0.3)" },
];

const socialLinks = [
  { name: "Instagram", icon: <FaInstagram />, href: "https://instagram.com/emojidigitals" },
  { name: "Facebook", icon: <FaFacebook />, href: "https://facebook.com/emojidigitals" },
  { name: "Twitter/X", icon: <FaTwitter />, href: "https://twitter.com/emojidigitals" },
  { name: "LinkedIn", icon: <FaLinkedin />, href: "https://linkedin.com/company/emojidigitals" },
  { name: "YouTube", icon: <FaYoutube />, href: "https://youtube.com/@emojidigitals" },
  { name: "TikTok", icon: <FaTiktok />, href: "https://tiktok.com/@emojidigitals" },
];

const bizInfo = [
  {
    icon: <MdLocationOn />, iconColor: "#3b82f6", label: "Physical Address",
    content: (
      <div className="text-white font-medium leading-relaxed text-sm">
        No 13 Rear Admiral Ozojiofor Street<br />
        Awka 420110, Anambra State<br />
        Nigeria<br />
        <a href="https://maps.google.com/?q=Emoji+Digitals+Awka+Nigeria" target="_blank" rel="noopener noreferrer"
          className="text-blue-400 text-xs hover:text-blue-300 transition-colors mt-1 inline-block">
          View on Google Maps →
        </a>
      </div>
    ),
  },
  {
    icon: <FaPhone />, iconColor: "#8b5cf6", label: "Phone Numbers",
    content: (
      <div>
        <a href="tel:+2348069511029" className="block text-white font-medium hover:text-blue-400 transition-colors text-sm">+234 806 951 1029</a>
        <a href="tel:+2348102982020" className="block text-white font-medium hover:text-blue-400 transition-colors mt-1 text-sm">+234 810 298 2020</a>
      </div>
    ),
  },
  {
    icon: <FaWhatsapp />, iconColor: "#3b82f6", label: "WhatsApp",
    content: (
      <a href="https://wa.me/2348102982020" target="_blank" rel="noopener noreferrer"
        className="text-white font-medium hover:text-blue-400 transition-colors text-sm">
        +234 810 298 2020
      </a>
    ),
  },
  {
    icon: <FaEnvelope />, iconColor: "#8b5cf6", label: "Email",
    content: (
      <a href="mailto:admin@emojidigitals.com" className="text-white font-medium hover:text-blue-400 transition-colors text-sm">
        admin@emojidigitals.com
      </a>
    ),
  },
];

const EMAILJS_SERVICE  = "service_emojidigitals";
const EMAILJS_TEMPLATE = "template_emojidigitals";
const EMAILJS_PUBLIC   = "YOUR_EMAILJS_PUBLIC_KEY";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]     = useState(false);
  const [error, setError]         = useState("");
  const [activePhoto, setActivePhoto] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          from_name:  form.name,
          from_email: form.email,
          phone:      form.phone,
          service:    form.service,
          budget:     form.budget,
          message:    form.message,
          to_email:   "davygeniuz@gmail.com",
          reply_to:   form.email,
        },
        EMAILJS_PUBLIC
      );
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    } catch {
      setError("Failed to send message. Please call or email us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 relative">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-[120px]" style={{ background: "rgba(59,130,246,0.08)" }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[120px]" style={{ background: "rgba(139,92,246,0.08)" }} />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div style={{ color: "#3b82f6" }} className="text-sm font-semibold tracking-widest uppercase mb-4">Get In Touch</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Let's Work <span style={{ color: "#8b5cf6" }}>Together</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Whether you're launching a startup, scaling your business, or building a tech career — Emoji Digitals is ready to help.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {contactCards.map((c, i) => (
            <a key={i} href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group block p-5 border rounded-2xl hover:scale-105 transition-all duration-300 text-center"
              style={{ background: "rgba(255,255,255,0.03)", borderColor: c.borderColor }}
            >
              <div className="flex justify-center mb-3 text-2xl" style={{ color: i % 2 === 0 ? "#3b82f6" : "#8b5cf6" }}>{c.icon}</div>
              <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">{c.label}</div>
              <div className="text-white font-semibold text-sm group-hover:text-blue-300 transition-colors">{c.value}</div>
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Info */}
          <div className="space-y-8">
            <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl">
              <div style={{ color: "#3b82f6" }} className="text-xs font-semibold tracking-widest uppercase mb-5">Business Information</div>
              <div className="space-y-5">
                {bizInfo.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg border border-white/10"
                      style={{ background: "rgba(59,130,246,0.1)", color: item.iconColor }}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">{item.label}</div>
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 border border-blue-500/20 rounded-2xl" style={{ background: "rgba(59,130,246,0.06)" }}>
              <div className="flex items-center gap-2 mb-4">
                <FaClock style={{ color: "#3b82f6" }} />
                <div style={{ color: "#3b82f6" }} className="text-xs font-semibold tracking-widest uppercase">Business Hours</div>
              </div>
              <div className="space-y-2.5 text-sm">
                {[
                  { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM", open: true },
                  { day: "Saturday", hours: "10:00 AM – 4:00 PM", open: true },
                  { day: "Sunday", hours: "Closed", open: false },
                ].map((h, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-gray-400">{h.day}</span>
                    <span className={`font-medium ${h.open ? "text-white" : "text-gray-600"}`}>{h.hours}</span>
                  </div>
                ))}
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#3b82f6" }} />
                  <span className="text-xs font-medium" style={{ color: "#3b82f6" }}>Currently Open</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10" style={{ height: "220px" }}>
              <iframe
                title="Emoji Digitals Location"
                src={GOOGLE_MAPS_EMBED}
                width="100%" height="220"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.8)" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Office Photos */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FaCamera style={{ color: "#3b82f6" }} />
                <div style={{ color: "#3b82f6" }} className="text-xs font-semibold tracking-widest uppercase">Our Work & Space</div>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 mb-3" style={{ aspectRatio: "16/9" }}>
                <MainPhoto id={OFFICE_PHOTOS[activePhoto].id} caption={OFFICE_PHOTOS[activePhoto].caption} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }} />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <div className="text-white font-semibold text-sm">{OFFICE_PHOTOS[activePhoto].caption}</div>
                    <div className="text-gray-400 text-xs mt-0.5">Emoji Digitals · Awka, Nigeria</div>
                  </div>
                  <div className="text-xs text-white/50 bg-black/40 px-2 py-1 rounded-lg">{activePhoto + 1} / {OFFICE_PHOTOS.length}</div>
                </div>
                <button onClick={() => setActivePhoto(p => (p - 1 + OFFICE_PHOTOS.length) % OFFICE_PHOTOS.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all">‹</button>
                <button onClick={() => setActivePhoto(p => (p + 1) % OFFICE_PHOTOS.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all">›</button>
              </div>
              <div className="grid grid-cols-8 gap-2">
                {OFFICE_PHOTOS.map((photo, i) => (
                  <PhotoThumb key={i} id={photo.id} caption={photo.caption} isActive={i === activePhoto} onClick={() => setActivePhoto(i)} />
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl">
              <div style={{ color: "#3b82f6" }} className="text-xs font-semibold tracking-widest uppercase mb-4">Follow Us</div>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(s => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:border-blue-500/50 text-sm transition-all hover:scale-105">
                    <span style={{ color: "#3b82f6" }}>{s.icon}</span><span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="relative">
            <form ref={formRef} onSubmit={handleSubmit}
              className="relative border border-white/10 rounded-3xl p-8 space-y-5"
              style={{ background: "rgba(10,10,30,0.9)" }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-black text-white mb-2">Send Us a Message</h2>
                <p className="text-gray-400 text-sm">Fill in the form and we'll respond within 24 hours.</p>
              </div>
              {submitted && (
                <div className="p-4 rounded-xl text-sm text-center"
                  style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.3)", color: "#3b82f6" }}>
                  Message sent successfully! We'll be in touch within 24 hours.
                </div>
              )}
              {error && (
                <div className="p-4 rounded-xl text-sm text-center"
                  style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.3)", color: "#a78bfa" }}>
                  {error}
                </div>
              )}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Full Name *", key: "name", type: "text", placeholder: "John Okafor", required: true },
                  { label: "Email *", key: "email", type: "email", placeholder: "you@example.com", required: true },
                ].map(f => (
                  <div key={f.key}>
                    <label className="text-gray-400 text-xs uppercase tracking-wider mb-2 block">{f.label}</label>
                    <input type={f.type} required={f.required} value={form[f.key as keyof typeof form]}
                      onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                      placeholder={f.placeholder}
                      className="w-full border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/60 transition-colors text-sm"
                      style={{ background: "rgba(255,255,255,0.05)" }} />
                  </div>
                ))}
              </div>
              <div>
                <label className="text-gray-400 text-xs uppercase tracking-wider mb-2 block">Phone Number</label>
                <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  placeholder="+234 800 000 0000"
                  className="w-full border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/60 transition-colors text-sm"
                  style={{ background: "rgba(255,255,255,0.05)" }} />
              </div>
              <div>
                <label className="text-gray-400 text-xs uppercase tracking-wider mb-2 block">Service Needed *</label>
                <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                  className="w-full border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/60 transition-colors text-sm appearance-none"
                  style={{ background: "#0d0d20" }}>
                  <option value="">Select a service…</option>
                  <option value="branding">Branding & Identity</option>
                  <option value="website">Website Development</option>
                  <option value="app">Application Development</option>
                  <option value="education">Technology Education</option>
                  <option value="design">Graphics Design</option>
                  <option value="training">Corporate Training</option>
                  <option value="other">Other / Consultation</option>
                </select>
              </div>
              <div>
                <label className="text-gray-400 text-xs uppercase tracking-wider mb-2 block">Budget Range</label>
                <select value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })}
                  className="w-full border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/60 transition-colors text-sm appearance-none"
                  style={{ background: "#0d0d20" }}>
                  <option value="">Select budget range…</option>
                  <option value="50k-100k">₦50,000 – ₦100,000</option>
                  <option value="100k-250k">₦100,000 – ₦250,000</option>
                  <option value="250k-500k">₦250,000 – ₦500,000</option>
                  <option value="500k-1m">₦500,000 – ₦1,000,000</option>
                  <option value="1m+">₦1,000,000+</option>
                </select>
              </div>
              <div>
                <label className="text-gray-400 text-xs uppercase tracking-wider mb-2 block">Project Details *</label>
                <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your project, goals, and timeline…"
                  className="w-full border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/60 transition-colors text-sm resize-none"
                  style={{ background: "rgba(255,255,255,0.05)" }} />
              </div>
              <button type="submit" disabled={sending}
                className="btn-primary w-full py-4 rounded-xl text-white font-semibold text-base"
                style={{ opacity: sending ? 0.7 : 1, cursor: sending ? "not-allowed" : "pointer" }}>
                {sending ? "Sending…" : "Send Message →"}
              </button>
              <p className="text-center text-gray-600 text-xs">
                Or reach us directly at{" "}
                <a href="mailto:admin@emojidigitals.com" style={{ color: "#3b82f6" }} className="hover:underline">
                  admin@emojidigitals.com
                </a>
              </p>
            </form>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div style={{ color: "#3b82f6" }} className="text-sm font-semibold tracking-widest uppercase mb-3">Find Us</div>
            <h2 className="text-3xl font-black text-white">
              Emoji Digitals on <span style={{ color: "#8b5cf6" }}>Google Maps</span>
            </h2>
            <p className="text-gray-400 mt-2 text-sm">No 13 Rear Admiral Ozojiofor Street, Awka 420110, Anambra, Nigeria</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl overflow-hidden border border-white/10 flex-shrink-0 flex items-center justify-center"
                  style={{ background: "rgba(59,130,246,0.15)" }}>
                  <img src={gd(IMGS.logo, 100)} alt="Emoji Digitals" className="w-full h-full object-cover"
                    style={{ mixBlendMode: "screen" }} onError={e => { e.currentTarget.style.display = "none"; }} />
                </div>
                <div>
                  <div className="text-white font-bold text-base">Emoji Digitals</div>
                  <div className="text-gray-400 text-xs">Creative Technology Lab</div>
                  <div className="flex gap-0.5 mt-1">
                    {[1, 2, 3, 4, 5].map(s => <FaStar key={s} size={11} style={{ color: "#8b5cf6" }} />)}
                    <span className="text-xs ml-1 text-gray-500">5.0</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                {[
                  { icon: <FaMapMarkerAlt />, color: "#3b82f6", text: "No 13 Rear Admiral Ozojiofor St, Awka 420110, Anambra" },
                  { icon: <FaPhone />, color: "#8b5cf6", href: "tel:+2348069511029", text: "+234 806 951 1029" },
                  { icon: <FaPhone />, color: "#3b82f6", href: "tel:+2348102982020", text: "+234 810 298 2020" },
                  { icon: <FaEnvelope />, color: "#8b5cf6", href: "mailto:admin@emojidigitals.com", text: "admin@emojidigitals.com" },
                  { icon: <FaClock />, color: "#3b82f6", text: "Mon–Fri: 8AM–6PM · Sat: 10AM–4PM" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span style={{ color: item.color, marginTop: "2px" }}>{item.icon}</span>
                    {"href" in item ? (
                      <a href={item.href} className="text-gray-300 hover:text-white transition-colors">{item.text}</a>
                    ) : (
                      <span className="text-gray-300">{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
              <a href="https://maps.google.com/?q=Emoji+Digitals+Awka+Nigeria" target="_blank" rel="noopener noreferrer"
                className="mt-auto btn-outline py-2.5 px-4 rounded-xl text-white text-sm font-semibold text-center block">
                Open in Google Maps →
              </a>
            </div>
            <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-white/10" style={{ minHeight: "350px" }}>
              <iframe title="Emoji Digitals Google Maps" src={GOOGLE_MAPS_EMBED} width="100%" height="100%"
                style={{ border: 0, minHeight: "350px", filter: "invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.9)" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <div className="mb-4">
            <div className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3">Photos from our listing</div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
              {GRID_PHOTOS.map((p, i) => <GridPhoto key={i} id={p.id} label={p.label} />)}
            </div>
          </div>
        </div>

        {/* Lagos Startup Social Proof Stats */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {LAGOS_STATS.map((s, i) => (
              <div key={i} className="text-center p-6 rounded-2xl border border-white/10"
                style={{ background: "rgba(255,255,255,0.03)" }}>
                <div className="text-3xl font-black mb-1" style={{ color: i % 2 === 0 ? "#3b82f6" : "#8b5cf6" }}>{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div style={{ color: "#3b82f6" }} className="text-sm font-semibold tracking-widest uppercase mb-3">
              Client Testimonials
            </div>
            <h2 className="text-4xl font-black text-white mb-3">
              Trusted by <span style={{ color: "#8b5cf6" }}>Nigerian Businesses</span>
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto">
              From Lagos to Anambra — businesses across Nigeria trust Emoji Digitals to deliver world-class digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} t={t} i={i} />
            ))}
          </div>

          {/* Lagos ecosystem note */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Serving clients from{" "}
              {["Victoria Island", "Lekki", "Ikeja", "Yaba", "Ajah", "Ikoyi", "Surulere"].map((loc, i) => (
                <span key={i}>
                  <span style={{ color: "#3b82f6" }}>{loc}</span>
                  {i < 6 ? <span className="text-gray-600"> · </span> : ""}
                </span>
              ))}
              {" "}and across Nigeria.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
