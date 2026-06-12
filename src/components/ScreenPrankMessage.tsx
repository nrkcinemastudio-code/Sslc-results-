import React from 'react';
import { motion } from 'motion/react';
import { Smile, RotateCcw, Share2, Compass } from 'lucide-react';
import { IExamsTextLogo } from './PortalLogo';

interface ScreenPrankMessageProps {
  onReset: () => void;
}

export const ScreenPrankMessage: React.FC<ScreenPrankMessageProps> = ({ onReset }) => {
  
  const handleShare = () => {
    const shareUrl = 'https://result-sslc-revaluation-2026.netlify.app/';
    if (navigator.share) {
      navigator.share({
        title: 'iExaMS Revaluation Results',
        text: 'Check your SSLC revaluation result immediately on this official portal!',
        url: shareUrl,
      }).catch(console.error);
    } else {
      // Fallback
      navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard! Share it with a friend to prank them! 😂');
    }
  };

  return (
    <div id="prank-container" className="min-h-screen bg-white flex flex-col items-center justify-between">
      {/* Container Wrapper */}
      <div className="w-full flex flex-col items-center">
        {/* Header matching Image 4 */}
        <div id="prank-header" className="w-full bg-white border-b border-gray-200 py-6 px-4 md:px-8 flex justify-center">
          <div className="w-full max-w-[540px]">
            <IExamsTextLogo id="iexams-prank-logo" />
          </div>
        </div>

        {/* Blue Banner matching Image 4 */}
        <div id="prank-banner" className="w-full bg-[#3583c2] text-white py-4 px-4 text-center font-bold text-lg md:text-xl tracking-wide shadow-md">
          SSLC Examination March Revaluation Results
        </div>

        {/* Huge Bold Center Prank message exactly as displayed in Image 4 */}
        <div id="prank-msg-body" className="w-full max-w-[540px] px-8 pt-16 pb-10 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ scale: 0.3, rotate: -15, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: 'spring', damping: 10, stiffness: 100 }}
            className="flex flex-col select-none"
          >
            {/* Split on two lines exactly as Image 4 */}
            <h1 
              id="prank-line-1" 
              className="text-[#3583c2] text-[68px] md:text-[90px] font-black leading-tight tracking-tight select-none"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              It's a
            </h1>
            <h1 
              id="prank-line-2" 
              className="text-[#3583c2] text-[75px] md:text-[105px] font-black leading-none tracking-tight uppercase select-none"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              prank
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12 flex flex-col items-center gap-6"
          >
            {/* Smile icon indicator */}
            <Smile className="w-16 h-16 text-[#3583c2] animate-bounce" />

            <p className="text-gray-500 font-semibold text-sm md:text-base max-w-[340px] leading-relaxed">
              Oh on! Gotcha! 😂 Every subject mendapat A+ except Social Science? 
              This results scorecard is a joke!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Shared and Interactive controls at bottom */}
      <motion.div 
        id="prank-controls"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        className="w-full max-w-[480px] p-6 flex flex-col gap-3 items-center pb-12"
      >
        <button
          id="prank-share-btn"
          onClick={handleShare}
          className="w-full bg-[#1e293b] hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-lg text-sm transition-all duration-200 shadow flex items-center justify-center gap-2 cursor-pointer"
        >
          <Share2 className="w-4 h-4" />
          Prank another friend!
        </button>

        <button
          id="prank-reset-btn"
          onClick={onReset}
          className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-6 rounded-lg text-sm border border-slate-300 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          Try Again / Reset Portal
        </button>
      </motion.div>
    </div>
  );
};
