"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useLanguage from "@/hooks/useLanguage";

const LanguageSwitcher = () => {
  const { toggleLanguage } = useLanguage();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if the user has already visited
    const hasVisited = localStorage.getItem('hasVisitedLanguageSwitch');
    if (!hasVisited) {
      setShowPopup(true);
      localStorage.setItem('hasVisitedLanguageSwitch', 'true'); // Set this so it doesn't show again
    }
  }, []);

  // Animation control for the popup to emerge from the switch
  const popupVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      x: '100%', // Start from right
      y: '0%'   // Start from top of the switcher
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: '-50%', // Center horizontally to flow out from the top right
      y: '0%',   // Stay at the top level of the switcher
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      x: '100%', // Move back to right
      y: '0%',   // Return to top of the switcher
      transition: {
        duration: 0.3
      }
    }
  };

  const handleTogglePopup = () => {
    setShowPopup(false);
    toggleLanguage(); // You may want to move this out if toggling language should not be linked to closing the popup
  };

  return (
    <label className="relative inline-block cursor-pointer">
      <input type="checkbox" className="sr-only peer" onClick={handleTogglePopup} />
      <div className="w-14 h-[28px] m-0 p-0 bg-[url('../../node_modules/flag-icons/flags/4x3/es.svg')] bg-no-repeat bg-cover bg-center peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-400 dark:peer-focus:ring-teal-800 rounded-full dark:bg-gray-700 peer-checked:bg-[url('../../node_modules/flag-icons/flags/4x3/us.svg')] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-[#FAF0CA] after:rounded-full after:h-6 after:w-6 after:transition-all">
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="absolute -right-32 top-8 xl:-right-[52px] xl:top-6 transform -translate-x-1/2 -translate-y-full w-52 p-2 bg-white/10 backdrop-blur-sm rounded-lg font-body text-center text-[#FAF0CA]"
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <p>Switch languages by clicking the flag!</p>
            <button className="mt-2 p-1 text-sm text-zinc-800" onClick={() => setShowPopup(false)}>Got it!</button>
          </motion.div>
        )}
      </AnimatePresence>
    </label>
  );
};

export default LanguageSwitcher;
