"use client";

import { createContext, useState, useEffect } from "react";
import esTranslations from "../../locales/es/es.json"
import enTranslations from "../../locales/en/en.json"


export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");
  const translations = language === "es" ? esTranslations : enTranslations
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
  };

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])


  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};
