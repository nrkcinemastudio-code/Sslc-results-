import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2, Search, Calendar, User, ClipboardList } from 'lucide-react';
import { IExamsTextLogo } from './PortalLogo';
import { StudentInfo } from '../types';

interface ScreenVerificationFormProps {
  onSubmit: (info: StudentInfo) => void;
}

export const ScreenVerificationForm: React.FC<ScreenVerificationFormProps> = ({ onSubmit }) => {
  // Form values
  const [registerNumber, setRegisterNumber] = useState('');
  const [dob, setDob] = useState('');
  const [fullName, setFullName] = useState('');
  
  // Validation and process state
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  // Auto-format DOB input with hyphens (e.g., 15-08-2008)
  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length > 8) {
      value = value.slice(0, 8);
    }
    
    let formatted = '';
    if (value.length > 0) {
      formatted += value.slice(0, 2);
    }
    if (value.length > 2) {
      formatted += '-' + value.slice(2, 4);
    }
    if (value.length > 4) {
      formatted += '-' + value.slice(4, 8);
    }
    
    setDob(formatted);
  };

  // Capitalize name dynamically and filter non-alphabet characters
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow spaces and letters, convert immediately to uppercase
    const uppercaseValue = value.replace(/[^a-zA-Z\s]/g, '').toUpperCase();
    setFullName(uppercaseValue);
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length <= 6) {
      setRegisterNumber(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic Validation
    if (!registerNumber || registerNumber.length < 6) {
      setError('Please enter a valid 6-digit Register Number.');
      return;
    }

    // DOB pattern match (dd-mm-yyyy)
    const dobRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
    if (!dobRegex.test(dob)) {
      setError('Please enter a valid Date of Birth in dd-mm-yyyy format.');
      return;
    }

    if (!fullName.trim() || fullName.trim().length < 3) {
      setError('Please enter the candidates full name exactly as inscribed.');
      return;
    }

    // Initiate genuine looking loading sequences
    setIsLoading(true);
    setLoadingStep(0);

    const steps = [
      'Establishing secure node link with SCERT database...',
      `Validating Register Code (#${registerNumber})...`,
      `Retrieving revaluated grades for ${fullName.trim()}...`,
      'Configuring final result sheet layout...'
    ];

    // Sequence loading status messages
    const timer1 = setTimeout(() => setLoadingStep(1), 1000);
    const timer2 = setTimeout(() => setLoadingStep(2), 2200);
    const timer3 = setTimeout(() => setLoadingStep(3), 3400);
    const timer4 = setTimeout(() => {
      setIsLoading(false);
      
      // Random realistic SSLC Centre Name from Kerala
      const centers = [
        'GOVT. VICTORIA HSS, PALAKKAD (12001)',
        'SMT. DUGAL MEMORIAL HSS, KOZHIKODE (10014)',
        'ST. JOSEPHS CO-ED HSS, TRIVANDRUM (14022)',
        'CMS COLLEGE HIGH SCHOOL, KOTTAYAM (16089)',
        'MODEL RESIDENTIAL HIGH SCHOOL, IDUKKI (18002)',
        'GOVT HSS FOR BOYS, CHERYANAD (15011)',
        'MAR BASIL HSS, KOTHAMANGALAM (17042)'
      ];
      const randomCenter = centers[Math.floor(Math.random() * centers.length)];

      onSubmit({
        registerNumber,
        dateOfBirth: dob,
        fullName: fullName.toUpperCase().trim(),
        centreName: randomCenter
      });
    }, 4500);
  };

  return (
    <div id="form-container" className="min-h-screen bg-slate-100 flex flex-col items-center">
      {/* Header Container exactly matching Image 2 */}
      <div id="portal-logo-header" className="w-full bg-white border-b border-gray-200 py-6 px-4 md:px-8 flex justify-center">
        <div className="w-full max-w-[540px]">
          <IExamsTextLogo id="iexams-full-logo" />
        </div>
      </div>

      {/* Blue Banner exactly matching Image 2 */}
      <div id="blue-title-banner" className="w-full bg-[#3583c2] text-white py-4 px-4 text-center font-semibold text-lg md:text-xl tracking-wide shadow-inner">
        SSLC Examination March Revaluation Results
      </div>

      <div className="w-full max-w-[540px] px-4 py-8 flex-grow flex flex-col justify-start">
        <AnimatePresence mode="wait">
          {!isLoading ? (
            <motion.form
              key="verification-form"
              id="verification-form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-xl border border-gray-200 shadow-lg p-6 md:p-8 flex flex-col gap-6"
            >
              {/* Error Callout */}
              {error && (
                <div id="form-error-alert" className="bg-red-50 border-l-4 border-red-500 p-3 text-red-700 text-sm font-medium rounded">
                  {error}
                </div>
              )}

              {/* Input: Register Number */}
              <div id="input-group-reg" className="flex flex-col gap-1.5 text-left">
                <label htmlFor="reg-input" className="text-gray-800 font-bold text-sm md:text-base flex items-center gap-1.5">
                  <Search className="w-4 h-4 text-blue-600" />
                  Register Number
                </label>
                <div className="relative">
                  <input
                    id="reg-input"
                    type="text"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    maxLength={6}
                    placeholder="Register Number"
                    value={registerNumber}
                    onChange={handleRegisterChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  {registerNumber && (
                    <span id="reg-count-tag" className="absolute right-3 top-3.5 text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
                      {registerNumber.length}/6 digits
                    </span>
                  )}
                </div>
              </div>

              {/* Input: Date of Birth */}
              <div id="input-group-dob" className="flex flex-col gap-1.5 text-left">
                <label htmlFor="dob-input" className="text-gray-800 font-bold text-sm md:text-base flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  Date Of Birth
                </label>
                <input
                  id="dob-input"
                  type="text"
                  maxLength={10}
                  placeholder="dd-mm-yyyy"
                  value={dob}
                  onChange={handleDobChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <span id="dob-hint" className="text-[11px] text-gray-500 font-medium">Type numeric digits. Slashes will be populated automatically.</span>
              </div>

              {/* Input: Full Name (Capital letters) */}
              <div id="input-group-name" className="flex flex-col gap-1.5 text-left">
                <label id="name-label" htmlFor="name-input" className="text-gray-800 font-bold text-sm md:text-base flex items-center gap-1.5">
                  <User className="w-4 h-4 text-blue-600" />
                  Type Full Name (In Capital Letters)
                </label>
                <input
                  id="name-input"
                  type="text"
                  placeholder="FULL NAME"
                  value={fullName}
                  onChange={handleNameChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 font-bold tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                id="submit-form-btn"
                type="submit"
                className="w-full bg-[#3583c2] hover:bg-[#2c6fa5] text-white font-bold py-3 px-6 rounded-lg text-base cursor-pointer transform hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0 text-center shadow-md flex items-center justify-center gap-2 mt-2"
              >
                <ClipboardList className="w-5 h-5" />
                View Result
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="loading-panel"
              id="loading-panel"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 flex flex-col items-center justify-center gap-6 min-h-[350px]"
            >
              <div id="spinner-ring" className="relative flex items-center justify-center">
                <Loader2 className="w-16 h-16 text-[#3583c2] animate-spin" />
                <span className="absolute text-blue-800 font-extrabold text-sm select-none">iExaMS</span>
              </div>
              
              <div id="loading-status-block" className="flex flex-col gap-2 items-center text-center">
                <h3 id="retrieval-heading" className="text-gray-800 font-bold text-lg">Retrieving Result Records</h3>
                
                {/* Simulated database feedback loops */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={loadingStep}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-600 text-sm font-medium h-5"
                  >
                    {[
                      'Establishing secure node link with SCERT database...',
                      `Validating Register Code (#${registerNumber})...`,
                      `Retrieving revaluated grades for ${fullName}...`,
                      'Configuring final result sheet layout...'
                    ][loadingStep]}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Custom realistic loading progress indicator bar */}
              <div id="progress-container" className="w-full max-w-[320px] bg-gray-100 h-2 rounded-full overflow-hidden mt-2">
                <motion.div 
                  id="progress-fill"
                  className="bg-[#3583c2] h-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 4.5, ease: 'linear' }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
