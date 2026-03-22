import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Copy, Check } from 'lucide-react';

export const PaymentScreen = () => {
  const [copied, setCopied] = useState(false);
  const upiId = "7300916622@fam";

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-brand-bg flex flex-col items-center py-12 px-6"
    >
      <div className="max-w-[800px] w-full mx-auto">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-secondary/10 border border-brand-secondary/30 text-brand-secondary px-4 py-2 rounded-full text-sm font-bold mb-8">
            <CheckCircle2 className="w-4 h-4" /> Your Resume Is Being Built Right Now
          </div>
          <h1 className="text-4xl md:text-[48px] font-black leading-[1.1] mb-4">
            Almost There.<br />Your AI Resume Is Ready. 🎉
          </h1>
          <p className="text-lg text-brand-textSec">
            Pay ₹199 to receive your ATS-optimized resume in your email within 30 minutes.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-sm font-medium text-brand-textSec">
          <span className="flex items-center gap-2">✅ ATS-Guaranteed</span>
          <span className="flex items-center gap-2">✏️ 2 Free Edits</span>
          <span className="flex items-center gap-2">⚡ 30-Min Delivery</span>
          <span className="flex items-center gap-2">💯 Pay After Preview</span>
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12 border-brand-primary/30 relative overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/10 to-transparent -z-10"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left: Price & QR */}
            <div className="flex flex-col items-center text-center md:border-r border-brand-border md:pr-12 h-full justify-center">
              <div className="text-sm text-red-400/70 line-through mb-2">₹1,800+/month</div>
              <div className="text-[80px] font-black leading-none text-gradient mb-2">₹199</div>
              <div className="text-brand-textSec font-medium mb-8">One-time. No subscription.</div>

              <div className="bg-white p-4 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.1)] mb-4 flex items-center justify-center">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=upi://pay?pa=7300916622@fam&pn=YashResumeAI&am=199&cu=INR" 
                  alt="UPI Payment QR Code" 
                  width={220} 
                  height={220}
                  className="rounded-xl"
                />
              </div>
              <p className="text-sm text-brand-textSec">Scan with GPay / PhonePe / Paytm / Any UPI App</p>
            </div>

            {/* Right: Instructions & UPI */}
            <div>
              <div className="mb-8">
                <label className="block text-[10px] uppercase text-brand-textSec tracking-[0.1em] mb-2 font-bold">OR ENTER UPI ID MANUALLY</label>
                <div className="flex items-center justify-between bg-black/50 border border-brand-border rounded-xl p-4">
                  <code className="text-xl font-mono text-brand-text">{upiId}</code>
                  <button 
                    onClick={handleCopy}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-colors ${copied ? 'bg-brand-secondary/20 text-brand-secondary' : 'bg-brand-surface hover:bg-white/10 text-brand-text'}`}
                  >
                    {copied ? <><Check className="w-4 h-4"/> Copied!</> : <><Copy className="w-4 h-4"/> Copy</>}
                  </button>
                </div>
              </div>

              <ol className="space-y-4 text-brand-textSec">
                <li className="flex gap-3"><span className="font-bold text-brand-text">1.</span> 📱 Open GPay, PhonePe, or Paytm</li>
                <li className="flex gap-3"><span className="font-bold text-brand-text">2.</span> 📷 Scan QR code above OR enter UPI ID</li>
                <li className="flex gap-3"><span className="font-bold text-brand-text">3.</span> 💳 Pay exactly ₹199</li>
                <li className="flex gap-3"><span className="font-bold text-brand-text">4.</span> 📸 Screenshot your payment</li>
                <li className="flex gap-3"><span className="font-bold text-brand-text">5.</span> 📧 Reply to confirmation email with screenshot</li>
                <li className="flex gap-3"><span className="font-bold text-brand-text">6.</span> 📄 Get your resume within 30 minutes</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="text-center bg-brand-surface border border-brand-border rounded-2xl p-8 mb-12">
          <p className="text-lg mb-2">After payment, reply to your confirmation email with the payment screenshot.</p>
          <p className="text-xl font-bold text-brand-secondary">Your resume arrives within 30 minutes of payment confirmation.</p>
        </div>

        {/* Contact Support Section */}
        <div className="flex flex-col items-center gap-5">
          <p className="text-brand-text font-bold text-lg">Need help? We reply within 15 minutes</p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="https://wa.me/917300916622?text=Hi,%20I%20just%20submitted%20my%20resume%20form" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-105"
            >
              💬 Chat on WhatsApp
            </a>
            
            <a 
              href="mailto:yashclient.flow@gmail.com" 
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-brand-border hover:border-brand-textSec text-brand-text px-8 py-4 rounded-full font-bold transition-all hover:bg-white/5"
            >
              📧 yashclient.flow@gmail.com
            </a>
          </div>

          <p className="text-sm text-brand-textSec font-medium mt-2">
            Working hours: 9 AM – 10 PM IST, 7 days a week
          </p>
          
          <p className="text-xs text-brand-muted mt-4">
            Secure payment via UPI. ₹199 is the total amount — no hidden charges.
          </p>
        </div>

      </div>
    </motion.div>
  );
};
