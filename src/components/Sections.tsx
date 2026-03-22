import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronDown, Bot, Clock, XOctagon } from 'lucide-react';

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 glow-bg -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-secondary/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 -z-10"></div>

      <FadeUp>
        <div className="flex items-center gap-2 bg-brand-surface border border-brand-border rounded-full px-4 py-1.5 mb-8 mx-auto w-fit">
          <div className="w-2 h-2 rounded-full bg-brand-warning animate-pulse-fast"></div>
          <span className="text-sm text-brand-textSec font-medium">🔥 47 resumes built today — spots filling fast</span>
        </div>
      </FadeUp>

      <FadeUp delay={0.1}>
        <h1 className="text-4xl md:text-[72px] leading-[1.1] font-black tracking-[-0.03em] text-center max-w-4xl mx-auto mb-6">
          Your Resume Is Getting<br />
          Rejected By A Robot.<br />
          <span className="text-gradient">We Fix That In 30 Minutes.</span>
        </h1>
      </FadeUp>

      <FadeUp delay={0.2}>
        <p className="text-lg md:text-xl text-brand-textSec text-center max-w-[580px] mx-auto mb-10 leading-[1.6]">
          75% of resumes never reach a human. Our AI rewrites yours with the exact keywords, action verbs, and ATS formatting that gets you callbacks — not silence.
        </p>
      </FadeUp>

      <FadeUp delay={0.3}>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12 text-sm text-brand-muted font-medium">
          <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-secondary" /> 2,400+ resumes built</span>
          <div className="hidden md:block w-px h-4 bg-brand-border"></div>
          <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-secondary" /> 3x more interview callbacks</span>
          <div className="hidden md:block w-px h-4 bg-brand-border"></div>
          <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-secondary" /> Delivered in 30 minutes</span>
        </div>
      </FadeUp>

      <FadeUp delay={0.4}>
        <div className="flex flex-col items-center">
          <a href="#get-started" className="bg-gradient-cta hover:animate-shimmer text-white text-lg md:text-xl font-bold px-10 h-14 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(108,71,255,0.4)] hover:shadow-[0_0_50px_rgba(108,71,255,0.6)] hover:scale-[1.02] transition-all w-full md:w-auto">
            Get My ATS Resume — ₹199 &rarr;
          </a>
          <p className="mt-4 text-sm text-brand-textSec">Pay only after you see your resume. 2 free edits included.</p>
          <p className="mt-2 text-xs text-brand-muted">⚡ Average delivery: 23 minutes | 💳 GPay / PhonePe / UPI</p>
        </div>
      </FadeUp>

      <FadeUp delay={0.6}>
        <div className="mt-24 flex flex-col md:flex-row items-center gap-6 opacity-60">
          <span className="text-sm text-brand-textSec">Used by freshers from &rarr;</span>
          <div className="flex flex-wrap justify-center gap-3">
            {['IIT Delhi', 'Delhi University', 'Amity', 'BITS Pilani', 'VIT'].map(uni => (
              <span key={uni} className="px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs text-brand-textSec">
                {uni}
              </span>
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  );
};

export const Problem = () => (
  <section className="py-section px-6 max-w-[1200px] mx-auto">
    <FadeUp>
      <div className="text-brand-primary text-sm font-bold tracking-widest uppercase mb-4 text-center">The Painful Truth</div>
      <h2 className="text-3xl md:text-5xl font-black leading-[1.1] text-center mb-6">
        You're Not Getting Rejected<br />Because You're Underqualified.
      </h2>
      <p className="text-lg text-brand-textSec text-center max-w-2xl mx-auto mb-16">
        You're getting rejected because your resume fails the ATS scan before a human ever reads it.
      </p>
    </FadeUp>

    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {[
        { icon: <Bot className="w-8 h-8 text-brand-primary" />, title: "ATS Kills 75% of Resumes", desc: "Most companies use software to auto-reject resumes that don't match their keyword filters. Your beautifully designed resume? Invisible." },
        { icon: <Clock className="w-8 h-8 text-brand-primary" />, title: "Recruiters Read for 6 Seconds", desc: "If your bullet points don't immediately show impact with numbers and action verbs, you're gone. Most resumes bury the good stuff." },
        { icon: <XOctagon className="w-8 h-8 text-brand-primary" />, title: "Templates Are Traps", desc: "Canva, Word templates, fancy columns — all ATS killers. Multi-column layouts break machine parsing completely." }
      ].map((card, i) => (
        <FadeUp key={i} delay={i * 0.1}>
          <div className="glass-card p-10 rounded-2xl h-full">
            <div className="mb-6">{card.icon}</div>
            <h3 className="text-xl font-bold mb-4">{card.title}</h3>
            <p className="text-brand-textSec leading-relaxed">{card.desc}</p>
          </div>
        </FadeUp>
      ))}
    </div>

    <FadeUp delay={0.3}>
      <div className="glass-card border-brand-warning/30 bg-brand-warning/5 p-6 md:p-8 rounded-2xl text-center max-w-4xl mx-auto">
        <p className="text-brand-text md:text-lg leading-relaxed">
          The average job seeker applies to 50+ companies and hears back from 2-3. That's a <strong className="text-brand-warning">94% fail rate</strong>. Most of those failures happen at the ATS stage — before anyone reads a word.
        </p>
      </div>
    </FadeUp>
  </section>
);

export const HowItWorks = () => (
  <section className="py-section px-6 max-w-[1200px] mx-auto relative">
    <FadeUp>
      <div className="text-brand-primary text-sm font-bold tracking-widest uppercase mb-4 text-center">How It Works</div>
      <h2 className="text-3xl md:text-5xl font-black leading-[1.1] text-center mb-20">
        Resume Fixed.<br />In 3 Steps. In 30 Minutes.
      </h2>
    </FadeUp>

    <div className="grid md:grid-cols-3 gap-12 relative">
      <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-brand-border via-brand-primary/50 to-brand-border -z-10"></div>
      
      {[
        { num: "01", title: "Fill Our 4-Minute Form", desc: "Tell us your experience, target role, and skills. No account needed. No uploading old files. Just your info." },
        { num: "02", title: "Our AI Rewrites Everything", desc: "Mistral AI rewrites your bullets with action verbs and metrics, adds ATS keywords for your target role, and formats it clean." },
        { num: "03", title: "Pay ₹199. Get Your PDF.", desc: "You receive a preview. Pay only if you love it. Then get your ATS-ready PDF instantly. 2 free edits if you need changes." }
      ].map((step, i) => (
        <FadeUp key={i} delay={i * 0.1}>
          <div className="relative flex flex-col items-center text-center">
            <div className="absolute -top-10 text-[120px] font-black text-white/[0.02] -z-10 leading-none">{step.num}</div>
            <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-xl font-bold text-brand-primary mb-6 shadow-[0_0_20px_rgba(108,71,255,0.2)]">
              {step.num}
            </div>
            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
            <p className="text-brand-textSec leading-relaxed">{step.desc}</p>
          </div>
        </FadeUp>
      ))}
    </div>

    <FadeUp delay={0.4}>
      <div className="mt-20 text-center">
        <p className="text-xl text-brand-text">⏱️ Average time from form submission to PDF in your inbox: <strong className="text-brand-primary">23 minutes</strong></p>
      </div>
    </FadeUp>
  </section>
);

export const BeforeAfter = () => (
  <section className="py-section px-6 max-w-[1200px] mx-auto">
    <FadeUp>
      <div className="text-brand-primary text-sm font-bold tracking-widest uppercase mb-4 text-center">The Transformation</div>
      <h2 className="text-3xl md:text-5xl font-black leading-[1.1] text-center mb-16">
        Same Person.<br />Same Experience.<br />Completely Different Resume.
      </h2>
    </FadeUp>

    <div className="grid md:grid-cols-2 gap-6 mb-12">
      <FadeUp delay={0.1}>
        <div className="glass-card p-8 md:p-14 rounded-2xl bg-red-950/20 border-red-900/30 relative overflow-hidden h-full">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50"></div>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-red-400">❌ Before (Typical Resume)</h3>
          <ul className="space-y-4 text-brand-textSec list-disc pl-5 mb-8">
            <li>Responsible for managing social media accounts</li>
            <li>Helped with data entry tasks</li>
            <li>Worked on various projects</li>
            <li>Good communication skills</li>
            <li>Team player</li>
          </ul>
          <div className="mt-auto pt-6 border-t border-red-900/30 text-sm text-red-300/80 font-medium">
            ATS Score: 23% | Callbacks: 0/47 applications
          </div>
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="glass-card p-8 md:p-14 rounded-2xl bg-brand-secondary/10 border-brand-secondary/30 relative overflow-hidden h-full">
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-secondary/50"></div>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-brand-secondary">✅ After (ResumeAI)</h3>
          <ul className="space-y-4 text-brand-text list-disc pl-5 mb-8">
            <li>Grew Instagram followers 340% in 60 days, driving 12% increase in product enquiries</li>
            <li>Processed 2,000+ daily records with 99.8% accuracy, reducing errors by 40%</li>
            <li>Led 4-person team to deliver product launch 2 weeks ahead of schedule</li>
            <li>Presented market research findings to C-suite, securing ₹15L budget approval</li>
          </ul>
          <div className="mt-auto pt-6 border-t border-brand-secondary/30 text-sm text-brand-secondary/80 font-medium">
            ATS Score: 91% | Got callback from TCS, Infosys, Wipro
          </div>
        </div>
      </FadeUp>
    </div>

    <FadeUp delay={0.3}>
      <p className="text-center text-lg text-brand-textSec max-w-3xl mx-auto">
        Our AI doesn't just clean your resume. It <strong className="text-white">reverse-engineers job descriptions</strong> to extract exact keywords, then rewrites your experience to match — making you the obvious candidate.
      </p>
    </FadeUp>
  </section>
);

export const Testimonials = () => {
  const reviews = [
    { name: "Rahul S.", role: "CSE Graduate, Delhi University", text: "Applied to 60 companies, zero callbacks. ResumeAI fixed my resume. Got 4 interview calls in the first week. Got placed at Infosys.", badge: "📞 4 interviews in 7 days" },
    { name: "Priya M.", role: "B.Tech Graduate, Amity University", text: "I was a fresher with no work experience. They used my college projects and made it look like real professional experience. TCS called within 3 days.", badge: "🏢 Placed at TCS" },
    { name: "Arjun K.", role: "MBA Graduate, Pune", text: "₹199 for something that got me a ₹8 LPA job? Best money I ever spent. The resume looked premium and the bullet points were exactly what HR wanted.", badge: "💼 ₹8 LPA package" },
    { name: "Sneha R.", role: "BCA Graduate, Bangalore", text: "Was struggling for 4 months. Used their service, resume was ready in 20 minutes. Had 3 interview calls the following week. Simple process, huge results.", badge: "⚡ Ready in 20 minutes" },
    { name: "Vikram T.", role: "Engineering Graduate, Hyderabad", text: "The AI added keywords I wouldn't have thought of. HR at my dream company told me my resume stood out from 200+ applicants. I'm hired.", badge: "🎯 Dream company achieved" }
  ];

  return (
    <section className="py-section px-6 max-w-[1200px] mx-auto">
      <FadeUp>
        <div className="text-brand-primary text-sm font-bold tracking-widest uppercase mb-4 text-center">Real Results</div>
        <h2 className="text-3xl md:text-5xl font-black leading-[1.1] text-center mb-16">
          From Rejected to Hired.<br />Here's What They Said.
        </h2>
      </FadeUp>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {reviews.slice(0, 3).map((r, i) => (
          <FadeUp key={i} delay={i * 0.1}>
            <div className="glass-card p-8 rounded-2xl h-full hover:-translate-y-1 transition-transform duration-300 flex flex-col">
              <div className="text-brand-warning mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-brand-text mb-6 flex-grow">"{r.text}"</p>
              <div>
                <div className="font-bold">{r.name}</div>
                <div className="text-sm text-brand-textSec mb-3">{r.role}</div>
                <div className="inline-block px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs text-brand-secondary font-medium">
                  {r.badge}
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {reviews.slice(3, 5).map((r, i) => (
          <FadeUp key={i} delay={i * 0.1}>
            <div className="glass-card p-8 rounded-2xl h-full hover:-translate-y-1 transition-transform duration-300 flex flex-col">
              <div className="text-brand-warning mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-brand-text mb-6 flex-grow">"{r.text}"</p>
              <div>
                <div className="font-bold">{r.name}</div>
                <div className="text-sm text-brand-textSec mb-3">{r.role}</div>
                <div className="inline-block px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs text-brand-secondary font-medium">
                  {r.badge}
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
};

export const Pricing = () => (
  <section className="py-section px-6 max-w-[1200px] mx-auto">
    <FadeUp>
      <div className="text-brand-primary text-sm font-bold tracking-widest uppercase mb-4 text-center">Pricing</div>
      <h2 className="text-3xl md:text-5xl font-black leading-[1.1] text-center mb-16">
        One Resume. One Price.<br />No Subscriptions. No Tricks.
      </h2>
    </FadeUp>

    <FadeUp delay={0.2}>
      <div className="max-w-[560px] mx-auto glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Animated Border Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 opacity-50 animate-border-glow -z-10"></div>
        
        <div className="text-center mb-8">
          <div className="text-sm text-red-400/70 line-through mb-4">
            Kickresume: ₹1,800/mo | Zety: ₹2,500/mo | Resume.io: ₹3,600/mo
          </div>
          <div className="text-[80px] font-black leading-none text-gradient mb-2">₹199</div>
          <div className="text-brand-textSec font-medium">One-time. Forever yours.</div>
        </div>

        <ul className="space-y-4 mb-10">
          {[
            "AI-powered resume rewrite",
            "ATS keyword optimization for your target role",
            "Professional action verbs + metrics",
            "Clean single-column ATS-safe PDF",
            "Delivered to your email in 30 minutes",
            "2 free revision rounds included",
            "WhatsApp support for any questions",
            "Pay ONLY after you see the result"
          ].map((feat, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
              <span className="text-brand-text">{feat}</span>
            </li>
          ))}
        </ul>

        <a href="#get-started" className="bg-gradient-cta hover:animate-shimmer text-white text-lg font-bold w-full h-14 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(108,71,255,0.3)] hover:shadow-[0_0_30px_rgba(108,71,255,0.5)] transition-all">
          Start My Resume Now &rarr;
        </a>
        <p className="text-center text-sm text-brand-textSec mt-4">
          🔒 100% safe. Pay after preview. No card needed to start.
        </p>
      </div>
    </FadeUp>

    <FadeUp delay={0.4}>
      <div className="max-w-3xl mx-auto mt-16 glass-card rounded-2xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-brand-border bg-brand-surface/50">
              <th className="p-4 font-medium text-brand-textSec"></th>
              <th className="p-4 font-bold text-brand-primary">ResumeAI</th>
              <th className="p-4 font-medium text-brand-textSec">Others</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border text-sm md:text-base">
            {[
              { label: "Price", us: "₹199 one-time", them: "₹1,500–4,000/mo" },
              { label: "Account required", us: "❌ No", them: "✅ Yes" },
              { label: "Pay before seeing", us: "❌ No", them: "✅ Yes" },
              { label: "Delivery time", us: "30 minutes", them: "Days" },
              { label: "Indian market focused", us: "✅ Yes", them: "❌ No" },
              { label: "Free edits", us: "✅ 2 included", them: "❌ Extra cost" }
            ].map((row, i) => (
              <tr key={i} className="hover:bg-brand-surface/30 transition-colors">
                <td className="p-4 text-brand-textSec">{row.label}</td>
                <td className="p-4 font-semibold text-brand-text">{row.us}</td>
                <td className="p-4 text-brand-muted">{row.them}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FadeUp>
  </section>
);

export const FAQ = () => {
  const faqs = [
    { q: "What if I don't have work experience?", a: "No problem. We use your college projects, internships, coursework, and activities to create bullet points that look and feel professional. Many of our best resumes are from freshers." },
    { q: "How does the 'pay after preview' work?", a: "Submit the form → our AI builds your resume → we email you a preview PDF → you decide if you want it → then pay ₹199 via UPI → receive final version. Zero risk." },
    { q: "What exactly does the AI improve?", a: "Everything. Bullet points become achievement-focused with metrics. Generic phrases become strong action verbs. Keywords are added based on your target role. Format is fixed to be ATS-readable." },
    { q: "How long does delivery actually take?", a: "Average 23 minutes. We aim for 30 minutes maximum during working hours (9am-10pm). If you submit at night, it'll be ready first thing in the morning." },
    { q: "What are the 2 free edits?", a: "After you receive your resume, if you want changes — different phrasing, add a section, adjust format — just reply to our email. We'll make 2 rounds of changes for free." },
    { q: "Is the resume actually ATS-compatible?", a: "Yes. Single column layout, no tables, no graphics, no columns, no text boxes. Pure clean text that any ATS can parse. We also add role-specific keywords." },
    { q: "Which payment methods do you accept?", a: "All UPI apps — GPay, PhonePe, Paytm, BHIM, any bank UPI. No credit card needed." },
    { q: "What if I'm not satisfied?", a: "You only pay after seeing the resume. If you don't like it, don't pay. If you do pay and want changes, use your 2 free edits. We want you to love your resume." }
  ];

  return (
    <section className="py-section px-6 max-w-[800px] mx-auto">
      <FadeUp>
        <h2 className="text-3xl md:text-5xl font-black leading-[1.1] text-center mb-12">
          Questions?<br />We Have Answers.
        </h2>
      </FadeUp>

      <div className="space-y-4 mb-12">
        {faqs.map((faq, i) => {
          const [isOpen, setIsOpen] = useState(false);
          return (
            <FadeUp key={i} delay={i * 0.05}>
              <div className="glass-card rounded-xl overflow-hidden">
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                >
                  <span className="font-bold text-lg">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-brand-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-brand-textSec leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </FadeUp>
          );
        })}
      </div>

      <FadeUp delay={0.4}>
        <div className="p-8 glass-card rounded-2xl text-center border-brand-primary/20 bg-brand-surface/50">
          <p className="text-brand-text font-bold text-lg mb-6">Still have questions? We're here to help.</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-brand-textSec">
            <div className="flex items-center gap-2">
              <span>📧</span> <a href="mailto:yashclient.flow@gmail.com" className="hover:text-white transition-colors">yashclient.flow@gmail.com</a>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-brand-border"></div>
            <div className="flex items-center gap-2">
              <span>💬</span> <a href="https://wa.me/917300916622" className="hover:text-white transition-colors">WhatsApp: +91 7300916622</a>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-brand-border"></div>
            <div className="flex items-center gap-2">
              <span>⏰</span> Support hours: 9 AM – 10 PM IST, 7 days
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
};

export const FinalCTA = () => (
  <section className="py-section px-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-primary/10 -z-10"></div>
    <div className="max-w-[800px] mx-auto text-center">
      <FadeUp>
        <h2 className="text-4xl md:text-[56px] font-black leading-[1.1] mb-6">
          Your Dream Job Is<br />One Resume Away.
        </h2>
        <p className="text-lg text-brand-textSec mb-10 leading-relaxed">
          47 people built their resume today. The only difference between you and the candidate who gets the callback is a resume that passes the ATS filter.
        </p>
        <a href="#get-started" className="inline-flex bg-gradient-cta hover:animate-shimmer text-white text-xl font-bold px-12 h-16 rounded-full items-center justify-center shadow-[0_0_40px_rgba(108,71,255,0.4)] hover:shadow-[0_0_60px_rgba(108,71,255,0.6)] hover:scale-[1.02] transition-all mb-6">
          Get My ATS Resume — ₹199 &rarr;
        </a>
        <p className="text-brand-textSec mb-4">Pay after preview. 2 free edits. 30-minute delivery. ₹199 total.</p>
        <p className="text-sm font-medium text-brand-warning">🔥 Most users receive their resume before they finish their Netflix episode.</p>
      </FadeUp>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="border-t border-brand-border py-12 px-6 text-sm text-brand-textSec bg-brand-surface/30">
    <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8 items-center md:items-start text-center md:text-left">
      
      {/* Brand */}
      <div className="flex flex-col items-center md:items-start">
        <div className="text-2xl tracking-tight mb-2">
          <span className="font-normal text-white">Resume</span>
          <span className="font-black text-brand-primary">AI</span>
        </div>
        <div className="text-brand-muted mb-4">Built for India's job seekers</div>
        <div>&copy; 2024 ResumeAI. All rights reserved.</div>
      </div>
      
      {/* Contact */}
      <div className="flex flex-col items-center md:items-start gap-2">
        <div className="font-bold text-brand-text mb-2 uppercase tracking-widest text-xs">Contact Support</div>
        <a href="mailto:yashclient.flow@gmail.com" className="hover:text-brand-text transition-colors flex items-center gap-2">
          <span>📧</span> yashclient.flow@gmail.com
        </a>
        <a href="https://wa.me/917300916622" className="hover:text-brand-text transition-colors flex items-center gap-2">
          <span>💬</span> WhatsApp: +91 7300916622
        </a>
        <span className="text-brand-muted flex items-center gap-2">
          <span>⏰</span> 9 AM – 10 PM IST, 7 days
        </span>
      </div>

      {/* Details */}
      <div className="flex flex-col items-center md:items-end gap-2">
        <div className="font-bold text-brand-text mb-2 uppercase tracking-widest text-xs">Service</div>
        <span>₹199 one-time payment</span>
        <span>30-minute delivery</span>
        <span>2 free edits included</span>
      </div>

    </div>
  </footer>
);
