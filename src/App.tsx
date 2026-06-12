import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ActiveScreen, StudentInfo } from './types';
import { ScreenLatestNews } from './components/ScreenLatestNews';
import { ScreenVerificationForm } from './components/ScreenVerificationForm';
import { ScreenResultsPage } from './components/ScreenResultsPage';
import { ScreenPrankMessage } from './components/ScreenPrankMessage';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ActiveScreen>(ActiveScreen.LATEST_NEWS);
  const [studentInfo, setStudentInfo] = useState<StudentInfo | null>(null);

  const handleNextScreenFromNews = () => {
    setCurrentScreen(ActiveScreen.VERIFICATION_FORM);
  };

  const handleFormSubmit = (info: StudentInfo) => {
    setStudentInfo(info);
    setCurrentScreen(ActiveScreen.RESULTS_PAGE);
  };

  const handleTriggerPrankTransition = () => {
    setCurrentScreen(ActiveScreen.PRANK_REVEAL);
  };

  const handleResetPortal = () => {
    setStudentInfo(null);
    setCurrentScreen(ActiveScreen.LATEST_NEWS);
  };

  return (
    <div id="app-root" className="min-h-screen bg-slate-100 font-sans antialiased overflow-x-hidden selection:bg-blue-100">
      <AnimatePresence mode="wait">
        {currentScreen === ActiveScreen.LATEST_NEWS && (
          <motion.div
            key="news-screen"
            id="news-screen-wrap"
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ScreenLatestNews onNavigateNext={handleNextScreenFromNews} />
          </motion.div>
        )}

        {currentScreen === ActiveScreen.VERIFICATION_FORM && (
          <motion.div
            key="form-screen"
            id="form-screen-wrap"
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ScreenVerificationForm onSubmit={handleFormSubmit} />
          </motion.div>
        )}

        {currentScreen === ActiveScreen.RESULTS_PAGE && studentInfo && (
          <motion.div
            key="results-screen"
            id="results-screen-wrap"
            className="w-full font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ScreenResultsPage 
              student={studentInfo} 
              onTimeToPrank={handleTriggerPrankTransition} 
            />
          </motion.div>
        )}

        {currentScreen === ActiveScreen.PRANK_REVEAL && (
          <motion.div
            key="prank-screen"
            id="prank-screen-wrap"
            className="w-full font-sans"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <ScreenPrankMessage onReset={handleResetPortal} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
