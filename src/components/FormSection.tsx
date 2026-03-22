import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { FormData } from '../App';

export const FormSection = ({ onSubmitSuccess }: { onSubmitSuccess: (data: FormData) => void }) => {
  const [step, setStep] = useState(1);
  const [hasExperience, setHasExperience] = useState(true);
  
  // Track form data for the preview screen
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    targetRole: ''
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted to webhook placeholder", formData);
    onSubmitSuccess(formData);
  };

  const InputLabel = ({ children }: { children: React.ReactNode }) => (
    <label className="block text-[12px] uppercase text-brand-textSec tracking-[0.1em] mb-2 font-semibold">
      {children}
    </label>
  );

  const inputClasses = "w-full bg-white/[0.04] border border-white/[0.08] rounded-[10px] px-4 py-3 text-brand-text placeholder:text-brand-muted focus:outline-none focus:border-brand-primary/60 focus:shadow-[0_0_15px_rgba(108,71,255,0.2)] transition-all";

  return (
    <section id="get-started" className="py-section px-6 max-w-[720px] mx-auto">
      <div className="text-center mb-12">
        <div className="text-brand-primary text-sm font-bold tracking-widest uppercase mb-4">Get Started</div>
        <h2 className="text-3xl md:text-[48px] font-black leading-[1.1] mb-4">
          Fill This Once.<br />Get Hired Faster.
        </h2>
        <p className="text-brand-textSec text-lg">
          4 minutes to fill. 30 minutes to receive. No account. No credit card upfront.
        </p>
      </div>

      <div className="glass-card p-8 md:p-14 rounded-3xl">
        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-between text-xs font-medium text-brand-textSec mb-2">
            <span>Step {step} of 4</span>
            <span>{['Personal Info', 'Experience', 'Skills & Edu', 'Review'][step-1]}</span>
          </div>
          <div className="h-2 bg-brand-surface rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-cta"
              initial={{ width: '25%' }}
              animate={{ width: `${(step / 4) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Let's start with the basics</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <InputLabel>Full Name *</InputLabel>
                    <input 
                      required 
                      type="text" 
                      className={inputClasses} 
                      placeholder="Rahul Sharma" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <InputLabel>Email Address *</InputLabel>
                    <input 
                      required 
                      type="email" 
                      className={inputClasses} 
                      placeholder="rahul@email.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <InputLabel>Phone Number</InputLabel>
                    <input type="tel" className={inputClasses} placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <InputLabel>City / Location</InputLabel>
                    <input type="text" className={inputClasses} placeholder="New Delhi, India" />
                  </div>
                  <div>
                    <InputLabel>LinkedIn URL (Optional)</InputLabel>
                    <input type="url" className={inputClasses} placeholder="linkedin.com/in/rahulsh" />
                  </div>
                  <div>
                    <InputLabel>Portfolio / GitHub (Optional)</InputLabel>
                    <input type="url" className={inputClasses} placeholder="github.com/rahul" />
                  </div>
                  <div>
                    <InputLabel>Target Job Role *</InputLabel>
                    <input 
                      required 
                      type="text" 
                      className={inputClasses} 
                      placeholder="Software Engineer / Marketing Manager" 
                      value={formData.targetRole}
                      onChange={(e) => setFormData({...formData, targetRole: e.target.value})}
                    />
                  </div>
                  <div>
                    <InputLabel>Industry</InputLabel>
                    <input type="text" className={inputClasses} placeholder="Technology / Finance / Marketing" />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Tell us what you've done</h3>
                
                <div className="flex gap-4 mb-8 bg-brand-surface p-1.5 rounded-xl border border-brand-border">
                  <button type="button" onClick={() => setHasExperience(true)} className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${hasExperience ? 'bg-brand-primary text-white' : 'text-brand-textSec hover:text-white'}`}>
                    I have work experience
                  </button>
                  <button type="button" onClick={() => setHasExperience(false)} className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${!hasExperience ? 'bg-brand-primary text-white' : 'text-brand-textSec hover:text-white'}`}>
                    Use my projects instead
                  </button>
                </div>

                {hasExperience ? (
                  <div className="space-y-6 p-6 border border-brand-border rounded-xl bg-white/[0.01]">
                    <div>
                      <InputLabel>Company Name</InputLabel>
                      <input type="text" className={inputClasses} placeholder="TCS / Zomato / Startup Inc" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <InputLabel>Your Role / Title</InputLabel>
                        <input type="text" className={inputClasses} placeholder="Frontend Developer" />
                      </div>
                      <div>
                        <InputLabel>Duration</InputLabel>
                        <input type="text" className={inputClasses} placeholder="Jan 2022 – Mar 2024" />
                      </div>
                    </div>
                    <div>
                      <InputLabel>What you did (Rough notes are fine!)</InputLabel>
                      <textarea className={`${inputClasses} min-h-[120px] resize-y`} placeholder="Write anything — even rough notes. Our AI will rewrite it professionally. Example: 'managed social media, grew followers, handled customer queries'" />
                    </div>
                    <button type="button" className="text-brand-primary text-sm font-medium hover:underline">+ Add Another Job</button>
                  </div>
                ) : (
                  <div className="space-y-6 p-6 border border-brand-border rounded-xl bg-white/[0.01]">
                    <div>
                      <InputLabel>Project Name</InputLabel>
                      <input type="text" className={inputClasses} placeholder="E-commerce Website / ML Model" />
                    </div>
                    <div>
                      <InputLabel>Tech Stack Used</InputLabel>
                      <input type="text" className={inputClasses} placeholder="React, Node.js, MongoDB" />
                    </div>
                    <div>
                      <InputLabel>What it does / Your role</InputLabel>
                      <textarea className={`${inputClasses} min-h-[120px] resize-y`} placeholder="Describe what you built and the problem it solved..." />
                    </div>
                    <button type="button" className="text-brand-primary text-sm font-medium hover:underline">+ Add Another Project</button>
                  </div>
                )}
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Skills & Education</h3>
                <div>
                  <InputLabel>Skills (Comma separated)</InputLabel>
                  <textarea className={`${inputClasses} min-h-[100px] resize-y`} placeholder="Python, React, SQL, Communication, Leadership... (just list them, AI will format)" />
                </div>
                <div className="p-6 border border-brand-border rounded-xl bg-white/[0.01] space-y-6">
                  <div>
                    <InputLabel>Institution</InputLabel>
                    <input type="text" className={inputClasses} placeholder="Delhi University / IIT" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <InputLabel>Degree / Field</InputLabel>
                      <input type="text" className={inputClasses} placeholder="B.Tech Computer Science" />
                    </div>
                    <div>
                      <InputLabel>Graduation Year</InputLabel>
                      <input type="text" className={inputClasses} placeholder="2024" />
                    </div>
                  </div>
                </div>
                <div>
                  <InputLabel>Certifications (Optional)</InputLabel>
                  <textarea className={`${inputClasses} min-h-[80px] resize-y`} placeholder="AWS Certified, Google Data Analytics..." />
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Review & Submit</h3>
                <div className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-6">
                  <ul className="space-y-3 text-sm text-brand-textSec">
                    <li className="flex justify-between border-b border-brand-border/50 pb-2"><span>Name:</span> <span className="text-brand-text">{formData.name || 'Not provided'}</span></li>
                    <li className="flex justify-between border-b border-brand-border/50 pb-2"><span>Target Role:</span> <span className="text-brand-text">{formData.targetRole || 'Not provided'}</span></li>
                    <li className="flex justify-between border-b border-brand-border/50 pb-2"><span>Experience:</span> <span className="text-brand-text">1 Job added</span></li>
                    <li className="flex justify-between pb-2"><span>Skills:</span> <span className="text-brand-text">5 listed</span></li>
                  </ul>
                </div>

                <div className="bg-brand-secondary/10 border border-brand-secondary/30 rounded-xl p-6 text-center">
                  <p className="text-brand-secondary font-medium mb-2">✅ Your resume will be built by AI and sent to your email.</p>
                  <p className="text-sm text-brand-text">Pay ₹199 via UPI <strong>only after</strong> you see and approve the result.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-10 flex gap-4 pt-6 border-t border-brand-border">
            {step > 1 && (
              <button type="button" onClick={prevStep} className="px-6 py-4 rounded-xl font-bold text-brand-textSec hover:text-white hover:bg-white/5 transition-all">
                Back
              </button>
            )}
            
            {step < 4 ? (
              <button type="button" onClick={nextStep} className="flex-1 bg-brand-surface border border-brand-border hover:border-brand-primary/50 text-white font-bold py-4 rounded-xl transition-all">
                Continue &rarr;
              </button>
            ) : (
              <button type="submit" className="flex-1 bg-gradient-cta hover:animate-shimmer text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(108,71,255,0.3)] hover:shadow-[0_0_30px_rgba(108,71,255,0.5)] transition-all relative overflow-hidden group">
                <span className="relative z-10">Submit & Generate My Resume ✨</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            )}
          </div>
          
          {step === 4 && (
            <p className="text-center text-xs text-brand-muted mt-6">
              🔒 Your data is used only to build your resume. Never shared or sold.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
