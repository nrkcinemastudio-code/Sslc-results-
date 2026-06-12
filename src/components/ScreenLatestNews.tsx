import React from 'react';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';
import { KeralaGovLogo, KeralaSealCircle, IExamsTextLogo } from './PortalLogo';

interface ScreenLatestNewsProps {
  onNavigateNext: () => void;
}

export const ScreenLatestNews: React.FC<ScreenLatestNewsProps> = ({ onNavigateNext }) => {
  return (
    <div 
      id="portal-news-container"
      className="min-h-screen bg-[#347cb7] flex flex-col items-center justify-center p-4 md:p-8"
      style={{
        backgroundImage: 'linear-gradient(180deg, #347cb7 0%, #2563eb 100%)'
      }}
    >
      {/* Outer Card frame mimicking Image 1 */}
      <motion.div 
        id="news-card"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-[480px] bg-[#222e43] rounded-xl shadow-2xl p-6 border border-[#2d3a4f] flex flex-col gap-6"
      >
        {/* Header Ribbon with Document Icon */}
        <div id="news-header" className="flex items-center justify-center gap-2 border-b border-[#2d384c] pb-4">
          <FileText id="news-icon" className="w-6 h-6 text-blue-200" />
          <h2 id="news-title" className="text-white text-xl md:text-2xl font-semibold tracking-tight">
            SSLC - Latest News
          </h2>
        </div>

        {/* Scroll Box container with custom scrollbar styling */}
        <div 
          id="news-viewport" 
          className="bg-[#192435] border-2 border-slate-700 rounded-lg p-5 min-h-[420px] flex flex-col gap-6 relative overflow-y-auto"
        >
          {/* Main news item */}
          <div id="news-item" className="flex gap-3 text-left">
            <span id="star-bullet" className="text-white text-lg select-none">★</span>
            <div id="link-block" className="flex flex-col gap-2">
              <span id="announcement-text" className="text-white font-medium text-[15px] leading-relaxed tracking-wide">
                SSLC Examination MARCH 2024 - REVALUATION RESULT PUBLISHED
              </span>
              
              {/* Dynamic trigger - Click Here Link in prominent red style */}
              <button
                id="click-here-btn"
                onClick={onNavigateNext}
                className="text-[#ef4444] hover:text-red-400 font-bold text-base text-left underline underline-offset-4 cursor-pointer focus:outline-none transition-colors duration-200 py-1"
              >
                Click here
              </button>
            </div>
          </div>
          
          {/* Subtle decoration lines inside the news stream viewport */}
          <div id="placeholder-bar" className="h-[2px] bg-slate-800 w-full rounded"></div>
        </div>

        {/* Bottom Logo Ribbon / Footer containing official seals */}
        <div id="news-logos" className="flex items-center justify-between gap-2 border-t border-[#2d384c] pt-4 select-none">
          {/* Kerala.gov.in emblem */}
          <KeralaGovLogo id="kerala-gov-emblem" className="rounded shadow-sm" />

          {/* General Education Seal */}
          <KeralaSealCircle id="kerala-seal-emblem" size={48} className="text-blue-400 bg-white p-0.5 rounded-full" />

          {/* iExaMS Minimalist label */}
          <div id="iexams-brand-box" className="bg-white px-2 py-1 rounded border border-gray-300 flex items-center gap-1.5 h-[48px] max-w-[150px]">
            <KeralaSealCircle size={26} className="text-blue-600 flex-shrink-0" />
            <div className="flex flex-col text-left leading-none font-sans">
              <span className="font-extrabold text-blue-800 font-serif italic text-sm">iExaMS</span>
              <span className="text-[5px] text-gray-400 font-medium tracking-tighter uppercase whitespace-nowrap">Integrated Exam System</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Humble footnote */}
      <span id="footnote" className="text-xs text-blue-100 opacity-60 mt-4 select-none">
        Copyright © {new Date().getFullYear()} Government of Kerala. All rights reserved.
      </span>
    </div>
  );
};
