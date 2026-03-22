import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Lock, ArrowRight, ArrowLeft } from 'lucide-react';
import type { FormData } from '../App';

interface ResumePreviewProps {
  formData: FormData;
  onProceed: () => void;
  onBack: () => void;
}

export const ResumePreview = ({ formData, onProceed, onBack }: ResumePreviewProps) => {
  const displayName = formData.name || 'Rahul Sharma';
  const displayEmail = formData.email || 'rahul@email.com';
  const displayRole = formData.targetRole || 'Software Engineer';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-brand-bg flex flex-col items-center py-12 px-6"
    >
      <div className="max-w-[800px] w-full mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-brand-secondary/10 border border-brand-secondary/30 text-brand-secondary px-4 py-2 rounded-full text-sm font-bold mb-6">
            <CheckCircle2 className="w-4 h-4" /> Your Resume Is Built — Preview Below
          </div>
          <h1 className="text-3xl md:text-[48px] font-black leading-[1.1] mb-4">
            Your ATS Resume Is Ready.<br />
            <span className="text-gradient">Unlock It for ₹199.</span>
          </h1>
        </div>

        {/* Resume Card Preview */}
        <div className="relative w-full max-w-[500px] bg-white rounded-sm shadow-[0_0_50px_rgba(255,255,255,0.1)] mb-8 overflow-hidden aspect-[1/1.414] p-8 md:p-10 text-gray-900">
          
          {/* Unblurred Header */}
          <div className="text-center border-b-2 border-gray-800 pb-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-gray-900 mb-1">{displayName}</h2>
            <p className="text-sm text-gray-600 font-medium">{displayEmail} • {displayRole}</p>
          </div>

          {/* Blurred Content Sections */}
          <div className="space-y-6 select-none relative z-0">
            {/* Summary */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800 mb-2 border-b border-gray-300 pb-1">Professional Summary</h3>
              <div className="blur-[4px] opacity-70 space-y-2">
                <div className="h-3 bg-gray-400 rounded w-full"></div>
                <div className="h-3 bg-gray-400 rounded w-[90%]"></div>
                <div className="h-3 bg-gray-400 rounded w-[95%]"></div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800 mb-2 border-b border-gray-300 pb-1">Experience</h3>
              <div className="blur-[4px] opacity-70 space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <div className="h-3 bg-gray-600 rounded w-1/3"></div>
                    <div className="h-3 bg-gray-400 rounded w-1/4"></div>
                  </div>
                  <div className="space-y-2 pl-4">
                    <div className="h-2 bg-gray-400 rounded w-[90%]"></div>
                    <div className="h-2 bg-gray-400 rounded w-[85%]"></div>
                    <div className="h-2 bg-gray-400 rounded w-[95%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <div className="h-3 bg-gray-600 rounded w-2/5"></div>
                    <div className="h-3 bg-gray-400 rounded w-1/5"></div>
                  </div>
                  <div className="space-y-2 pl-4">
                    <div className="h-2 bg-gray-400 rounded w-[88%]"></div>
                    <div className="h-2 bg-gray-400 rounded w-[92%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800 mb-2 border-b border-gray-300 pb-1">Skills</h3>
              <div className="blur-[4px] opacity-70 flex gap-2 flex-wrap">
                <div className="h-3 bg-gray-500 rounded w-16"></div>
                <div className="h-3 bg-gray-500 rounded w-24"></div>
                <div className="h-3 bg-gray-500 rounded w-20"></div>
                <div className="h-3 bg-gray-500 rounded w-14"></div>
                <div className="h-3 bg-gray-500 rounded w-28"></div>
                <div className="h-3 bg-gray-500 rounded w-16"></div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800 mb-2 border-b border-gray-300 pb-1">Education</h3>
              <div className="blur-[4px] opacity-70">
                <div className="flex justify-between mb-1">
                  <div className="h-3 bg-gray-600 rounded w-1/2"></div>
                  <div className="h-3 bg-gray-400 rounded w-1/6"></div>
                </div>
                <div className="h-2 bg-gray-400 rounded w-1/3"></div>
              </div>
            </div>
          </div>

          {/* Lock Overlay */}
          <div className="absolute inset-0 top-[120px] bg-white/40 backdrop-blur-[2px] flex flex-col items-center justify-center z-10 p-6 text-center">
            <div className="bg-brand-surface border border-brand-border p-6 rounded-2xl shadow-2xl flex flex-col items-center max-w-[320px] w-full">
              <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-brand-primary" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Full resume visible after payment</h4>
              <p className="text-brand-textSec text-sm">₹199 to unlock — pay after you see quality</p>
            </div>
          </div>
        </div>

        {/* Conversion Elements */}
        <div className="w-full max-w-[500px] flex flex-col items-center">
          <div className="w-full bg-brand-secondary/10 border border-brand-secondary/30 rounded-xl p-4 text-center mb-8">
            <p className="text-brand-text text-sm md:text-base">
              We rewrote your experience into <strong className="text-brand-secondary">12 powerful bullet points</strong> targeting <strong className="text-white">{displayRole}</strong>.
            </p>
          </div>

          <button 
            onClick={onProceed}
            className="w-full bg-gradient-cta hover:animate-shimmer text-white text-lg font-bold py-5 rounded-xl shadow-[0_0_30px_rgba(108,71,255,0.3)] hover:shadow-[0_0_40px_rgba(108,71,255,0.5)] transition-all flex items-center justify-center gap-2 mb-4"
          >
            Pay ₹199 & Get Full Resume <ArrowRight className="w-5 h-5" />
          </button>

          <button 
            onClick={onBack}
            className="text-brand-textSec hover:text-white text-sm font-medium flex items-center gap-2 py-2 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Edit my information
          </button>

          <p className="text-xs text-brand-muted text-center max-w-[400px]">
            2,400+ professionals unlocked their resume. Average delivery: 23 minutes after payment.
          </p>
        </div>

      </div>
    </motion.div>
  );
};
