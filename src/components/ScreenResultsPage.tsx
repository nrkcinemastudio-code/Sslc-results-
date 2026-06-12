import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Award, School, Sparkles } from 'lucide-react';
import { IExamsTextLogo } from './PortalLogo';
import { StudentInfo } from '../types';

interface ScreenResultsPageProps {
  student: StudentInfo;
  onTimeToPrank: () => void;
}

export const ScreenResultsPage: React.FC<ScreenResultsPageProps> = ({ student, onTimeToPrank }) => {
  // Automatically trigger transition to Screen 4 (Prank) exactly 5 seconds after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeToPrank();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onTimeToPrank]);

  // List of SSLC subjects
  const subjects = [
    { name: 'FIRST LANGUAGE (PAPER I)', grade: 'A+' },
    { name: 'FIRST LANGUAGE (PAPER II)', grade: 'A+' },
    { name: 'ENGLISH', grade: 'A+' },
    { name: 'THIRD LANGUAGE', grade: 'A+' },
    { name: 'SOCIAL SCIENCE', grade: 'A' }, // Social Science is A, everything else A+
    { name: 'PHYSICS', grade: 'A+' },
    { name: 'CHEMISTRY', grade: 'A+' },
    { name: 'BIOLOGY', grade: 'A+' },
    { name: 'MATHEMATICS', grade: 'A+' }
  ];

  return (
    <div id="results-container" className="min-h-screen bg-slate-50 flex flex-col items-center">
      {/* Header matching Image 3 */}
      <div id="results-header" className="w-full bg-white border-b border-gray-200 py-6 px-4 md:px-8 flex justify-center">
        <div className="w-full max-w-[540px]">
          <IExamsTextLogo id="iexams-results-logo" />
        </div>
      </div>

      {/* Blue Banner matching Image 3 */}
      <div id="results-banner" className="w-full bg-[#3583c2] text-white py-4 px-4 text-center font-bold text-lg md:text-xl tracking-wide shadow-md">
        SSLC Examination March Revaluation Results
      </div>

      <div className="w-full max-w-[540px] px-4 py-6 flex-grow flex flex-col justify-start pb-12">
        {/* Dynamic Congrats Ribbon to increase realism trust */}
        <motion.div 
          id="congrats-banner"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-emerald-50 border border-emerald-200 rounded-lg p-3.5 mb-5 flex items-center gap-3 text-left shadow-sm"
        >
          <div className="bg-emerald-500 text-white p-1.5 rounded-full select-none">
            <Sparkles className="w-4 h-4" />
          </div>
          <p className="text-emerald-800 text-xs md:text-sm font-semibold leading-tight">
            Congratulations! Revaluation scores are updated. Your grades have improved significantly.
          </p>
        </motion.div>

        {/* Student details form grid exactly as structured in Image 3 */}
        <div id="student-grid" className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-col gap-4 text-left">
          {/* Register No | Date of Birth Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <span id="label-reg" className="text-gray-500 font-bold text-xs uppercase tracking-wider">Register No.:</span>
              <div id="val-reg" className="bg-gray-50 border border-gray-300 rounded px-3 py-2 text-gray-800 font-semibold text-sm">
                {student.registerNumber}
              </div>
            </div>
            
            <div className="flex flex-col gap-1">
              <span id="label-dob" className="text-gray-500 font-bold text-xs uppercase tracking-wider">Date of Birth:</span>
              <div id="val-dob" className="bg-gray-50 border border-gray-300 rounded px-3 py-2 text-gray-800 font-semibold text-sm">
                {student.dateOfBirth}
              </div>
            </div>
          </div>

          {/* Candidate Name */}
          <div className="flex flex-col gap-1">
            <span id="label-name" className="text-gray-500 font-bold text-xs uppercase tracking-wider">Name:</span>
            <div id="val-name" className="bg-gray-50 border border-gray-300 rounded px-3 py-2 text-gray-800 font-bold text-sm tracking-wide">
              {student.fullName}
            </div>
          </div>

          {/* School Centre details */}
          <div className="flex flex-col gap-1">
            <span id="label-centre" className="text-gray-500 font-bold text-xs uppercase tracking-wider flex items-center gap-1">
              <School className="w-3.5 h-3.5 text-gray-400" />
              Centre Name:
            </span>
            <div id="val-centre" className="bg-gray-50 border border-gray-300 rounded px-3 py-2 text-gray-700 font-semibold text-xs leading-relaxed">
              {student.centreName}
            </div>
          </div>
        </div>

        {/* Subject wise Revaluation table header */}
        <div id="subject-list" className="mt-6 flex flex-col gap-2">
          {/* Header block resembling "Type of Application: Revaluation" from Image 3 */}
          <div className="bg-gray-100 rounded-lg py-3.5 px-4 flex justify-between items-center border border-gray-200 select-none">
            <span id="lbl-type-app" className="font-serif italic text-gray-800 font-extrabold text-sm md:text-base">Type of Application</span>
            <span id="val-type-app" className="text-gray-600 font-bold text-xs md:text-sm bg-gray-200 px-3 py-1 rounded-full uppercase tracking-wider">Revaluation</span>
          </div>

          {/* Subject Rows exactly matching Image 3 */}
          <div id="subjects-container" className="flex flex-col gap-2 mt-1">
            {subjects.map((subject, idx) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                className="bg-[#f8fafc] hover:bg-[#f1f5f9] border border-slate-200 rounded-lg py-3 px-4 flex justify-between items-center shadow-sm transition-colors"
              >
                <div className="flex items-center gap-2.5 text-left">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-gray-800 font-bold text-xs md:text-sm tracking-wide">
                    {subject.name}
                  </span>
                </div>
                
                {/* Authentic Grade Badge */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-400 font-semibold uppercase">Revalued Grade</span>
                  <span 
                    className={`inline-flex items-center justify-center w-10 h-8 font-black text-sm md:text-base rounded-md border shadow-sm ${
                      subject.grade === 'A+' 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-300' 
                        : 'bg-amber-50 text-amber-700 border-amber-300'
                    }`}
                  >
                    {subject.grade}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Realistic Verification Note */}
        <div id="results-footer-note" className="mt-6 p-4 border border-dashed border-gray-300 rounded-lg text-left bg-gray-50">
          <span className="text-gray-600 text-[10px] leading-relaxed block font-medium">
            * This result is published by the Integrated Examination Management System (iExaMS) under Government authority. Any discrepancy found in the printed portal scores may be presented directly to the Department of General Education. This portal is protected by cryptographically authenticated validation keys.
          </span>
        </div>
      </div>
    </div>
  );
};
