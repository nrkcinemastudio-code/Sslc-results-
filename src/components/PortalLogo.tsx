import React from 'react';

/**
 * Government of Kerala official website emblem component (SVG + styled container).
 * High-fidelity representation of the state symbol flanked by two elephants with "kerala.gov.in".
 */
export const KeralaGovLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`bg-white border border-gray-300 px-3 py-1 flex items-center gap-2 select-none h-[48px] ${className}`}>
      <div className="flex flex-col text-left leading-none font-sans">
        <span className="font-extrabold text-blue-900 tracking-tight text-sm">kerala.gov.in</span>
        <span className="text-[7px] text-gray-500 font-medium">The Official Website of Govt of Kerala</span>
      </div>
      
      {/* High Fidelity SVG Emblem of Kerala */}
      <svg
        viewBox="0 0 100 85"
        className="w-[38px] h-[34px]"
        fill="currentColor"
        aria-hidden="true"
      >
        {/* Base Pedestal */}
        <path d="M10 80 Q50 78 90 80 L92 82 Q50 83 8 82 Z" fill="#2d3748" />
        <path d="M15 76 Q50 74 85 76 L88 78 Q50 79 12 78 Z" fill="#4a5568" />
        
        {/* Ashoka Pillar Lion Capital silhouette (reduced size central element) */}
        <rect x="46" y="55" width="8" height="15" fill="#c53030" rx="1" />
        <circle cx="50" cy="50" r="6" fill="#c53030" />
        
        {/* Central Shankha (Conch shell) inside a circular ring */}
        <circle cx="50" cy="35" r="10" fill="none" stroke="#2d3748" strokeWidth="2" />
        <path d="M47 35 Q50 28 53 35 Q50 42 47 35 Q45 31 50 31 Q55 31 53 35" fill="none" stroke="#1a202c" strokeWidth="1.5" />
        
        {/* Left Elephant */}
        <g stroke="#2d3748" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#718096">
          {/* Elephant Body */}
          <path d="M38 75 Q39 60 35 55 Q30 50 22 55 Q18 60 14 74 Q13 75 14 76" />
          {/* Leg Details */}
          <path d="M26 75 L28 65 Q31 55 33 55" />
          {/* Trunk */}
          <path d="M38 58 Q43 50 44 42 Q45 40 42 41 Q40 43 38 48 Q37 53 35 56" fill="none" />
          {/* Tusk */}
          <path d="M37 58 Q42 57 43 59" fill="none" stroke="#e2e8f0" strokeWidth="1" />
          {/* Ear */}
          <path d="M25 55 Q20 48 18 53 Q17 58 21 61 Z" fill="#4a5568" />
          {/* Tail */}
          <path d="M14 62 Q11 65 10 70" fill="none" />
        </g>
        
        {/* Right Elephant (Mirrored) */}
        <g stroke="#2d3748" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#718096" transform="translate(100, 0) scale(-1, 1)">
          {/* Elephant Body */}
          <path d="M38 75 Q39 60 35 55 Q30 50 22 55 Q18 60 14 74 Q13 75 14 76" />
          {/* Leg Details */}
          <path d="M26 75 L28 65 Q31 55 33 55" />
          {/* Trunk */}
          <path d="M38 58 Q43 50 44 42 Q45 40 42 41 Q40 43 38 48 Q37 53 35 56" fill="none" />
          {/* Tusk */}
          <path d="M37 58 Q42 57 43 59" fill="none" stroke="#e2e8f0" strokeWidth="1" />
          {/* Ear */}
          <path d="M25 55 Q20 48 18 53 Q17 58 21 61 Z" fill="#4a5568" />
          {/* Tail */}
          <path d="M14 62 Q11 65 10 70" fill="none" />
        </g>
        
        {/* Sree Padmanabha Lotus Motif background lines */}
        <path d="M45 74 Q50 72 55 74" fill="none" stroke="#c53030" strokeWidth="1.5" />
      </svg>
    </div>
  );
};

/**
 * Circular seal for Kerala Department of General Education / iExaMS portal.
 * Highly detailed vector seal based on Image 1 and Image 2.
 */
export const KeralaSealCircle: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full text-blue-600"
        fill="currentColor"
        aria-hidden="true"
      >
        {/* Outer concentric rings */}
        <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="4" />
        <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="82" fill="none" stroke="currentColor" strokeWidth="1.5" />
        
        {/* Outer text: DEPARTMENT OF GENERAL EDUCATION • KERALA */}
        <path
          id="seal-text-path-top"
          d="M 25,100 A 75,75 0 0,1 175,100"
          fill="none"
          stroke="none"
        />
        <text className="font-sans text-[11px] font-extrabold fill-blue-800 tracking-wider">
          <textPath href="#seal-text-path-top" startOffset="50%" textAnchor="middle">
            DEPARTMENT OF GENERAL EDUCATION
          </textPath>
        </text>
        
        <path
          id="seal-text-path-bottom"
          d="M 175,100 A 75,75 0 0,1 25,100"
          fill="none"
          stroke="none"
        />
        <text className="font-sans text-[11px] font-extrabold fill-blue-800 tracking-wider">
          <textPath href="#seal-text-path-bottom" startOffset="50%" textAnchor="middle">
            GOVERNMENT OF KERALA
          </textPath>
        </text>

        {/* Inner concentric ring */}
        <circle cx="100" cy="100" r="62" fill="none" stroke="currentColor" strokeWidth="2" />
        
        {/* Golden wheat/rice grass wreath surrounding internal elements */}
        <g className="text-blue-500" fill="currentColor">
          {/* Left Wreath */}
          <path d="M 52,100 Q 52,145 100,158 Q 58,145 58,100 Z" opacity="0.4" />
          <path d="M 55,100 Q 56,125 70,140 Q 58,125 55,100 Z" />
          <circle cx="56" cy="110" r="3" />
          <circle cx="61" cy="122" r="3" />
          <circle cx="68" cy="132" r="3" />
          <circle cx="77" cy="141" r="3" />
          <circle cx="88" cy="148" r="3" />

          {/* Right Wreath */}
          <path d="M 148,100 Q 148,145 100,158 Q 142,145 142,100 Z" opacity="0.4" transform="translate(200, 0) scale(-1, 1)" />
          <path d="M 145,100 Q 144,125 130,140 Q 142,125 145,100 Z" />
          <circle cx="144" cy="110" r="3" />
          <circle cx="139" cy="122" r="3" />
          <circle cx="132" cy="132" r="3" />
          <circle cx="123" cy="141" r="3" />
          <circle cx="112" cy="148" r="3" />
        </g>

        {/* Centerpiece: Open Book with Sunrays */}
        <g stroke="currentColor" strokeWidth="1.5" fill="none">
          {/* Sun Rays rising background */}
          <path d="M 100,85 L 100,60" />
          <path d="M 100,85 L 82,65" />
          <path d="M 100,85 L 118,65" />
          <path d="M 100,85 L 68,76" />
          <path d="M 100,85 L 132,76" />
          
          {/* Open Book Pages */}
          <path d="M 100,105 Q 85,95 70,105 L 70,123 Q 85,113 100,123 ZM 100,105 Q 115,95 130,105 L 130,123 Q 115,113 100,123 Z" fill="white" strokeWidth="2" />
          {/* Spine of Book */}
          <line x1="100" y1="105" x2="100" y2="124" strokeWidth="2.5" />
        </g>
        
        {/* Underneath Ribbon banner with "iExaMS" */}
        <path d="M 68,140 Q 100,152 132,140 L 126,155 Q 100,165 74,155 Z" fill="currentColor" />
        <text x="100" y="152" className="font-sans text-[8px] font-black fill-white" textAnchor="middle">
          iExaMS
        </text>
      </svg>
    </div>
  );
};

/**
 * Lettering logo component for "iExaMS - Integrated Examination Management System".
 * Used prominently at the top of screens 2, 3, 4.
 */
export const IExamsTextLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 select-none text-left ${className}`}>
      {/* Small version of the Government Seal alongside of logo */}
      <KeralaSealCircle size={45} className="flex-shrink-0 text-blue-600" />
      
      <div className="flex flex-col leading-none">
        <h1 
          className="font-serif text-[28px] md:text-[34px] font-black tracking-tight text-blue-600 italic leading-none"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          iExaMS
        </h1>
        <p className="font-sans text-[9px] md:text-[11px] font-semibold text-blue-800 tracking-wide uppercase mt-0.5 whitespace-nowrap">
          Integrated Examination Management System
        </p>
      </div>
    </div>
  );
};
