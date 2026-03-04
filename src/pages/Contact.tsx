import { useState } from "react";
import { IMGS, gd } from "../utils/images";

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

function PhotoThumb({ id, caption, isActive, onClick }: { id: string; caption: string; isActive: boolean; onClick: () => void }) {
  const [idx, setIdx] = useState(0);
  const urls = [gd(id, 400), gd(id, 200)];
  return (
    <button onClick={onClick}
      className={`relative rounded-lg overflow-hidden aspect-square border-2 transition-all duration-200 ${isActive ? "border-blue-500 scale-105" : "border-white/10 opacity-60 hover:opacity-90"}`}>
      {idx < urls.length ? (
        <img src={urls[idx]} alt={caption} className="w-full h-full object-cover" onError={() => setIdx(i => i + 1)} />
      ) : (
        <div className="w-full h-full bg-indigo-900/30 flex items-center justify-center text-2xl">🎨</div>
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
    <div className="w-full h-full bg-gradient-to-br from-indigo-900/60 to-purple-900/60 flex items-center justify-center text-4xl">🎨</div>
  );
}

const GRID_PHOTOS = [
  { id: IMGS.port1,  label: "Design Work" },
  { id: IMGS.img08,  label: "Team" },
  { id: IMGS.img09,  label: "Workspace" },
  { id: IMGS.img10,  label: "Strategy" },
  { id: IMGS.img11,  label: "Training" },
  { id: IMGS.img12,  label: "Innovation" },
];

function GridPhoto({ id, label }: { id: string; label: string }) {
  const [idx, setIdx] = useState(0);
  const urls = [gd(id, 400), gd(id, 200)];
  return (
    <div className="group relative rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/40 transition-all" style={{ aspectRatio: "1" }}>
      {idx < urls.length ? (
        <img src={urls[idx]} alt={label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onError={() => setIdx(i => i + 1)} />
      ) : (
        <div className="w-full h-full bg-indigo-900/30 flex items-center justify-center text-2xl">🎨</div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
        <span className="text-white text-xs font-medium">{label}</span>
      </div>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-28 pb-20 relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <div className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">Get In Touch</div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Let's Work <span className="gradient-text">Together</span></h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">Whether you're launching a startup, scaling your business, or building a tech career — Emoji Digitals is ready to help.</p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: "📧", label: "Email Us",   value: "admin@emojidigitals.com", href: "mailto:admin@emojidigitals.com", color: "from-blue-500/20 to-indigo-500/20",   border: "border-blue-500/30" },
            { icon: "📱", label: "Call Us",    value: "+234 806 951 1029",        href: "tel:+2348069511029",            color: "from-purple-500/20 to-pink-500/20",   border: "border-purple-500/30" },
            { icon: "💬", label: "WhatsApp",   value: "+234 810 298 2020",        href: "https://wa.me/2348102982020",   color: "from-green-500/20 to-emerald-500/20", border: "border-green-500/30" },
            { icon: "🌐", label: "Website",    value: "emojidigitals.com",        href: "https://emojidigitals.com",     color: "from-cyan-500/20 to-blue-500/20",     border: "border-cyan-500/30" },
          ].map((c, i) => (
            <a key={i} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              className={`group block p-5 bg-gradient-to-br ${c.color} border ${c.border} rounded-2xl hover:scale-105 transition-all duration-300 text-center`}>
              <div className="text-3xl mb-3">{c.icon}</div>
              <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">{c.label}</div>
              <div className="text-white font-semibold text-sm group-hover:text-blue-300 transition-colors">{c.value}</div>
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Info */}
          <div className="space-y-8">
            <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl">
              <div className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-5">Business Information</div>
              <div className="space-y-5">
                {[
                  { icon: "📍", bg: "from-blue-500/20 to-indigo-500/20", border: "border-blue-500/30", label: "Physical Address", content: <div className="text-white font-medium leading-relaxed text-sm">No 13 Rear Admiral Ozojiofor Street<br />Awka 420110, Anambra State<br />Nigeria<br /><a href="https://maps.google.com/?q=Emoji+Digitals+Awka+Nigeria" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-xs hover:text-blue-300 transition-colors mt-1 inline-block">View on Google Maps →</a></div> },
                  { icon: "📱", bg: "from-purple-500/20 to-pink-500/20", border: "border-purple-500/30", label: "Phone Numbers", content: <div><a href="tel:+2348069511029" className="block text-white font-medium hover:text-blue-400 transition-colors text-sm">+234 806 951 1029</a><a href="tel:+2348102982020" className="block text-white font-medium hover:text-blue-400 transition-colors mt-1 text-sm">+234 810 298 2020</a></div> },
                  { icon: "💬", bg: "from-green-500/20 to-emerald-500/20", border: "border-green-500/30", label: "WhatsApp", content: <a href="https://wa.me/2348102982020" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-green-400 transition-colors text-sm">+234 810 298 2020</a> },
                  { icon: "📧", bg: "from-indigo-500/20 to-violet-500/20", border: "border-indigo-500/30", label: "Email", content: <a href="mailto:admin@emojidigitals.com" className="text-white font-medium hover:text-blue-400 transition-colors text-sm">admin@emojidigitals.com</a> },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${item.bg} border ${item.border} rounded-xl flex items-center justify-center text-lg flex-shrink-0`}>{item.icon}</div>
                    <div><div className="text-gray-500 text-xs uppercase tracking-wider mb-1">{item.label}</div>{item.content}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl">
              <div className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-4">Business Hours</div>
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
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-xs font-medium">Currently Open</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-white/10" style={{ height: "220px" }}>
              <iframe title="Emoji Digitals Location" src={GOOGLE_MAPS_EMBED} width="100%" height="220"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.8)" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>

            {/* Office Photos */}
            <div>
              <div className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-4">📸 Emoji Digitals — Our Work & Space</div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 mb-3" style={{ aspectRatio: "16/9" }}>
                <MainPhoto id={OFFICE_PHOTOS[activePhoto].id} caption={OFFICE_PHOTOS[activePhoto].caption} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
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
              <div className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-4">Follow Us</div>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Instagram", icon: "📸", href: "https://instagram.com/emojidigitals" },
                  { name: "Facebook",  icon: "👤", href: "https://facebook.com/emojidigitals" },
                  { name: "Twitter/X", icon: "🐦", href: "https://twitter.com/emojidigitals" },
                  { name: "LinkedIn",  icon: "💼", href: "https://linkedin.com/company/emojidigitals" },
                  { name: "YouTube",   icon: "▶️", href: "https://youtube.com/@emojidigitals" },
                  { name: "TikTok",    icon: "🎵", href: "https://tiktok.com/@emojidigitals" },
                ].map(s => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:border-indigo-500/50 text-sm transition-all hover:scale-105">
                    <span>{s.icon}</span><span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl blur-lg" />
            <form onSubmit={handleSubmit} className="relative bg-[#0a0a1e] border border-white/10 rounded-3xl p-8 space-y-5">
              <div className="mb-6">
                <h2 className="text-2xl font-black text-white mb-2">Send Us a Message</h2>
                <p className="text-gray-400 text-sm">Fill in the form and we'll respond within 24 hours.</p>
              </div>
              {submitted && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm text-center">
                  ✅ Message sent successfully! We'll be in touch shortly.
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
                      onChange={e => setForm({ ...form, [f.key]: e.target.value })} placeholder={f.placeholder}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/60 transition-colors text-sm" />
                  </div>
                ))}
              </div>
              <div>
                <label className="text-gray-400 text-xs uppercase tracking-wider mb-2 block">Phone Number</label>
                <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+234 800 000 0000"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/60 transition-colors text-sm" />
              </div>
              <div>
                <label className="text-gray-400 text-xs uppercase tracking-wider mb-2 block">Service Needed *</label>
                <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/60 transition-colors text-sm appearance-none" style={{ background: "#0d0d20" }}>
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
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/60 transition-colors text-sm appearance-none" style={{ background: "#0d0d20" }}>
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
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/60 transition-colors text-sm resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full py-4 rounded-xl text-white font-semibold text-base">Send Message →</button>
              <p className="text-center text-gray-600 text-xs">Or reach us directly at{" "}
                <a href="mailto:admin@emojidigitals.com" className="text-indigo-400 hover:text-indigo-300">admin@emojidigitals.com</a>
              </p>
            </form>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Find Us</div>
            <h2 className="text-3xl font-black text-white">Emoji Digitals on <span className="gradient-text">Google Maps</span></h2>
            <p className="text-gray-400 mt-2 text-sm">No 13 Rear Admiral Ozojiofor Street, Awka 420110, Anambra, Nigeria</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Business Card */}
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl overflow-hidden border border-white/10 flex-shrink-0 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <img src={gd(IMGS.logo, 100)} alt="Emoji Digitals" className="w-full h-full object-cover"
                    style={{ mixBlendMode: "screen" }} onError={e => { e.currentTarget.style.display = "none"; }} />
                </div>
                <div>
                  <div className="text-white font-bold text-base">Emoji Digitals</div>
                  <div className="text-gray-400 text-xs">Creative Technology Lab</div>
                  <div className="flex gap-0.5 mt-1">{[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-xs">★</span>)}<span className="text-gray-500 text-xs ml-1">5.0</span></div>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">📍</span><span className="text-gray-300">No 13 Rear Admiral Ozojiofor St, Awka 420110, Anambra</span></div>
                <div className="flex items-center gap-2"><span className="text-green-400">📞</span><a href="tel:+2348069511029" className="text-gray-300 hover:text-white transition-colors">+234 806 951 1029</a></div>
                <div className="flex items-center gap-2"><span className="text-purple-400">📞</span><a href="tel:+2348102982020" className="text-gray-300 hover:text-white transition-colors">+234 810 298 2020</a></div>
                <div className="flex items-center gap-2"><span className="text-cyan-400">🌐</span><a href="https://emojidigitals.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">emojidigitals.com</a></div>
                <div className="flex items-center gap-2"><span className="text-yellow-400">📧</span><a href="mailto:admin@emojidigitals.com" className="text-gray-300 hover:text-blue-400 transition-colors">admin@emojidigitals.com</a></div>
                <div className="flex items-center gap-2"><span className="text-emerald-400">🕐</span><span className="text-gray-300">Mon–Fri: 8AM–6PM · Sat: 10AM–4PM</span></div>
              </div>
              <a href="https://maps.google.com/?q=Emoji+Digitals+Awka+Nigeria" target="_blank" rel="noopener noreferrer"
                className="mt-auto btn-outline py-2.5 px-4 rounded-xl text-white text-sm font-semibold text-center block">
                Open in Google Maps →
              </a>
            </div>
            {/* Map */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-white/10" style={{ minHeight: "350px" }}>
              <iframe title="Emoji Digitals Google Maps" src={GOOGLE_MAPS_EMBED} width="100%" height="100%"
                style={{ border: 0, minHeight: "350px", filter: "invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.9)" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>

          {/* Photo Grid — all from Google Drive */}
          <div className="mb-4">
            <div className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3">Photos from our listing</div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
              {GRID_PHOTOS.map((p, i) => <GridPhoto key={i} id={p.id} label={p.label} />)}
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Client Testimonials</div>
            <h2 className="text-3xl font-black text-white">What People Say <span className="gradient-text">About Us</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Chukwuemeka O.", role: "Business Owner, Awka",        photoId: IMGS.img09, rating: 5, review: "Emoji Digitals built us an incredible website that tripled our online enquiries. The team is professional, creative and truly understands the Nigerian market. Highly recommended!" },
              { name: "Adaeze N.",       role: "Startup Founder, Anambra",   photoId: IMGS.img10, rating: 5, review: "The branding package they created for my business was absolutely stunning. From the logo to the brand guide — everything was perfect. They delivered ahead of schedule too!" },
              { name: "Ifeanyi M.",      role: "Tech Student, Awka",         photoId: IMGS.img11, rating: 5, review: "The tech training at Emoji Digitals Academy changed my life. I went from zero coding knowledge to building full web apps in 3 months. The instructors are world-class." },
            ].map((r, i) => {
              const [idx, setIdx] = useState(0);
              const urls = [gd(r.photoId, 200), gd(r.photoId, 100)];
              return (
                <div key={i} className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-indigo-500/30 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    {idx < urls.length ? (
                      <img src={urls[idx]} alt={r.name} className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500/30" onError={() => setIdx(j => j + 1)} />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">{r.name[0]}</div>
                    )}
                    <div>
                      <div className="text-white font-semibold text-sm">{r.name}</div>
                      <div className="text-gray-500 text-xs">{r.role}</div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">{Array.from({ length: r.rating }).map((_, j) => <span key={j} className="text-yellow-400 text-sm">★</span>)}</div>
                  <p className="text-gray-400 text-sm leading-relaxed italic">"{r.review}"</p>
                  <div className="mt-3 flex items-center gap-1">
                    <span className="text-xs text-gray-600">via</span>
                    <span className="text-xs text-blue-400 font-medium">Google Reviews</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
