import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaComments, FaDollarSign, FaClock, FaLifeRing,
  FaGraduationCap, FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaWhatsapp, FaQuestionCircle, FaChevronDown,
} from "react-icons/fa";

const faqCategories = [
  {
    id: "general", label: "General", icon: <FaComments />,
    faqs: [
      { q: "What exactly does Emoji Digitals do?", a: "Emoji Digitals is a Creative Technology Innovation Lab based in Awka, Anambra, Nigeria. We specialise in four core areas: Branding & Identity Systems, Website Development, Application Development, and Technology Education. We help businesses, startups, and organisations build powerful digital presences and intelligent digital systems." },
      { q: "Where are you located and do you work with clients outside Anambra?", a: "Our physical studio is at No 13 Rear Admiral Ozojiofor Street, Awka 420110, Anambra State, Nigeria. However, we work with clients across Nigeria and internationally. All project phases — from discovery to delivery — can be managed remotely via digital collaboration tools, with optional in-person sessions for Anambra-based clients." },
      { q: "How long has Emoji Digitals been in operation?", a: "Emoji Digitals has been operating as a creative technology company for over 5 years, during which we've delivered 120+ projects, transformed 80+ brands, trained 500+ students, and built a strong reputation as one of Anambra's leading tech companies." },
      { q: "What industries do you work with?", a: "We work across all industries — FinTech, HealthTech, EdTech, Real Estate, E-commerce, Hospitality, NGOs, Government agencies, Startups, and SMEs. Our approach adapts to every sector's unique needs while maintaining the same standard of quality and innovation." },
    ],
  },
  {
    id: "pricing", label: "Pricing", icon: <FaDollarSign />,
    faqs: [
      { q: "How much does a website cost?", a: "Website pricing depends on scope, complexity, and features required. Our range:\n\n• Basic Landing Page: ₦80,000 – ₦150,000\n• Corporate Website (5–10 pages): ₦200,000 – ₦450,000\n• E-commerce Website: ₦350,000 – ₦800,000\n• Custom Web Platform: ₦600,000+\n\nWe provide detailed quotes after a free discovery call to understand your exact requirements." },
      { q: "How much does branding cost?", a: "Branding packages start from:\n\n• Logo Only: ₦50,000 – ₦120,000\n• Starter Brand Kit (Logo + Business Card + Letterhead): ₦120,000 – ₦200,000\n• Full Brand Identity System: ₦250,000 – ₦500,000\n• Complete Brand Strategy + Identity: ₦500,000+\n\nAll packages include multiple concept revisions and source files delivery." },
      { q: "Do you offer payment plans?", a: "Yes. For projects above ₦200,000, we offer structured payment milestones:\n\n• 50% deposit at project kick-off\n• 25% at design/development midpoint\n• 25% at final delivery and sign-off\n\nFor certain long-term projects, we can discuss monthly instalment arrangements." },
      { q: "Are there any hidden fees?", a: "Absolutely not. We provide a clear, itemised quote before any work begins. The quote covers design, development, testing, and delivery. Third-party costs like domain registration, hosting, and premium plugins are clearly listed separately so there are no surprises." },
    ],
  },
  {
    id: "timelines", label: "Timelines", icon: <FaClock />,
    faqs: [
      { q: "How long does it take to build a website?", a: "Timelines depend on project complexity:\n\n• Landing Page: 5–10 working days\n• Corporate Website: 3–5 weeks\n• E-commerce Site: 4–8 weeks\n• Custom Web Platform: 8–16 weeks\n\nNote: Timelines assume prompt client feedback and content provision." },
      { q: "How long does a branding project take?", a: "Brand projects typically take:\n\n• Logo Design: 5–10 working days\n• Starter Brand Kit: 2–3 weeks\n• Full Brand Identity System: 3–5 weeks\n• Complete Brand Strategy Package: 5–8 weeks" },
      { q: "Can you deliver projects faster if urgent?", a: "Yes, we offer expedited delivery for time-sensitive projects. Rush projects are typically delivered 40–60% faster than standard timelines and attract a rush fee of 25–40% of the project cost depending on urgency." },
      { q: "What happens if the project runs over schedule?", a: "We take our delivery commitments seriously. If delays originate on our side, we extend the delivery at no additional cost and communicate proactively. We maintain weekly progress updates throughout all projects." },
    ],
  },
  {
    id: "support", label: "Support", icon: <FaLifeRing />,
    faqs: [
      { q: "Do you offer post-launch support?", a: "Yes. All projects include a free 30-day post-launch support period for bug fixes and minor adjustments. After that, we offer three support tiers:\n\n• Basic Support: ₦15,000/month\n• Standard Support: ₦35,000/month\n• Premium Support: ₦75,000/month (priority response + monthly strategy calls)" },
      { q: "What if I want to make changes to my website after launch?", a: "You can request changes through our support portal at any time. Minor text/image changes are typically free within the first 30 days. For larger changes, we provide a clear quote before proceeding." },
      { q: "Can I edit my website myself?", a: "Absolutely. For clients who want full content control, we build WordPress-based websites with custom admin panels that make updating content straightforward — no technical knowledge required. We also provide personalised training sessions and documentation after delivery." },
      { q: "How do I reach you if there's an urgent issue?", a: "For urgent issues, contact us via:\n\nPhone: +234 806 951 1029 or +234 810 298 2020\nWhatsApp: +234 810 298 2020\nEmail: admin@emojidigitals.com\n\nWe maintain business hours Monday–Friday 8AM–6PM and Saturday 10AM–4PM." },
    ],
  },
  {
    id: "training", label: "Academy", icon: <FaGraduationCap />,
    faqs: [
      { q: "What courses does Emoji Digitals Academy offer?", a: "Our Academy currently offers 9 courses:\n\n• Web Development (12 Weeks)\n• App Development (16 Weeks)\n• AI Engineering (14 Weeks)\n• Network Engineering (10 Weeks)\n• Cybersecurity (12 Weeks)\n• Video Editing (6 Weeks)\n• Data Science (14 Weeks)\n• UI/UX & Graphic Design (8 Weeks)\n• Digital Marketing (6 Weeks)\n\nAll courses include hands-on projects, mentorship, and a completion certificate." },
      { q: "Are the courses online or in-person?", a: "We offer a flexible hybrid model:\n\n• 3 days physical (at our Awka training centre)\n• 2 days online per week\n\nFor corporate training programmes, we can deploy entirely on-site at your organisation. We also offer fully online cohorts for students outside Awka." },
      { q: "What certifications will I receive upon completion?", a: "Graduates receive an Emoji Digitals Academy Certificate of Completion. Our courses are also aligned with industry certifications you can pursue independently, including CCNA, CompTIA Security+, AWS Cloud Practitioner, Google Data Analytics, Meta Front-End Developer, and more." },
      { q: "Do you offer corporate tech training?", a: "Yes, corporate training is one of our specialisations. We design custom training programmes for teams and organisations — covering tools like Microsoft 365, digital marketing, software development, cybersecurity awareness, data analytics, and more." },
      { q: "What is the cost of training?", a: "Course fees vary by programme:\n\n• Short Courses (6–8 weeks): ₦35,000 – ₦60,000\n• Standard Courses (10–12 weeks): ₦65,000 – ₦95,000\n• Advanced Courses (14–16 weeks): ₦100,000 – ₦140,000\n\nGroup discounts and instalment payment plans are available." },
    ],
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300 border"
      style={{
        borderColor: isOpen ? "rgba(59,130,246,0.4)" : "rgba(255,255,255,0.06)",
        background: isOpen ? "rgba(59,130,246,0.05)" : "rgba(255,255,255,0.02)",
      }}
    >
      <button onClick={onToggle} className="w-full flex items-start justify-between gap-4 p-6 text-left group">
        <span
          className="font-semibold text-base leading-snug transition-colors duration-200"
          style={{ color: isOpen ? "#fff" : "#d1d5db" }}
        >
          {q}
        </span>
        <div
          className="w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 mt-0.5"
          style={{
            borderColor: isOpen ? "#3b82f6" : "rgba(255,255,255,0.15)",
            background: isOpen ? "rgba(59,130,246,0.2)" : "transparent",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            color: isOpen ? "#60a5fa" : "#6b7280",
          }}
        >
          <FaChevronDown style={{ fontSize: "0.7rem" }} />
        </div>
      </button>
      <div style={{ maxHeight: isOpen ? "600px" : "0", overflow: "hidden", transition: "max-height 0.4s ease" }}>
        <div className="px-6 pb-6">
          <div className="w-full h-px mb-5" style={{ background: "rgba(255,255,255,0.06)" }} />
          <p className="text-sm leading-relaxed" style={{ color: "#9ca3af", whiteSpace: "pre-line" }}>{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const active = faqCategories.find(c => c.id === activeCategory)!;

  return (
    <div className="min-h-screen pt-28 pb-20 relative" style={{ background: "#050510" }}>
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#3b82f6" }}>
            Got Questions?
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Frequently Asked <span style={{ color: "#8b5cf6" }}>Questions</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Everything you need to know about working with Emoji Digitals — pricing, timelines, support, and our Academy.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {faqCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setOpenIndex(0); }}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 border"
              style={{
                background: activeCategory === cat.id ? "rgba(59,130,246,0.15)" : "rgba(255,255,255,0.02)",
                borderColor: activeCategory === cat.id ? "rgba(59,130,246,0.5)" : "rgba(255,255,255,0.08)",
                color: activeCategory === cat.id ? "#fff" : "#6b7280",
                boxShadow: activeCategory === cat.id ? "0 0 20px rgba(59,130,246,0.2)" : "none",
              }}
            >
              <span style={{ color: activeCategory === cat.id ? "#3b82f6" : "#4b5563" }}>{cat.icon}</span>
              <span>{cat.label}</span>
              <span
                className="text-xs rounded-full px-2 py-0.5"
                style={{
                  background: activeCategory === cat.id ? "rgba(59,130,246,0.25)" : "rgba(255,255,255,0.08)",
                  color: activeCategory === cat.id ? "#93c5fd" : "#4b5563",
                }}
              >
                {cat.faqs.length}
              </span>
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-3 mb-20">
          {active.faqs.map((faq, i) => (
            <FAQItem
              key={`${activeCategory}-${i}`}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Still have questions */}
        <div
          className="rounded-3xl p-10 md:p-16 text-center border"
          style={{ background: "rgba(59,130,246,0.05)", borderColor: "rgba(59,130,246,0.2)" }}
        >
          <div className="flex justify-center mb-6">
            <FaQuestionCircle style={{ color: "#8b5cf6", fontSize: "3rem" }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Still Have <span style={{ color: "#8b5cf6" }}>Questions?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Can't find what you're looking for? Reach out directly — we respond to every message within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link to="/contact" className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg">
              Send Us a Message
            </Link>
            <a
              href="https://wa.me/2348102982020"
              target="_blank" rel="noopener noreferrer"
              className="btn-outline px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center gap-2 justify-center"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: <FaPhone />,         label: "Call Us",   value: "+234 806 951 1029",              href: "tel:+2348069511029" },
              { icon: <FaEnvelope />,       label: "Email",    value: "admin@emojidigitals.com",         href: "mailto:admin@emojidigitals.com" },
              { icon: <FaMapMarkerAlt />,   label: "Visit Us", value: "No 13 Rear Admiral Ozojiofor St", href: "https://maps.google.com/?q=Emoji+Digitals+Awka" },
            ].map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl border transition-all hover:scale-105 text-left"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
              >
                <span style={{ color: "#3b82f6", fontSize: "1.25rem" }}>{c.icon}</span>
                <div>
                  <div className="text-xs uppercase tracking-wider" style={{ color: "#6b7280" }}>{c.label}</div>
                  <div className="text-white text-sm font-medium">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
