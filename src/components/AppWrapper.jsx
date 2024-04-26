"use client"

import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/components/LanguageContext";
import { AnimatePresence } from "framer-motion";

const AppWrapper = ({ children }) => {
  return (
    <LanguageProvider>
      <Navbar />
      <AnimatePresence>{children}</AnimatePresence>
    </LanguageProvider>
  );
};

export default AppWrapper;
