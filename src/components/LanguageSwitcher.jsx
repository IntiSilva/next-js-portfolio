"use client";

import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);


  return (
    <label className="relative top-0 inline-block items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div
        className="w-14 h-[28px] m-0 p-0 leading-normal bg-[url('../../node_modules/flag-icons/flags/4x3/es.svg')] bg-no-repeat bg-cover
      bg-center peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-400 dark:peer-focus:ring-teal-800
      rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-[#FAF0CA]
      after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-[#FAF0CA] after:border-[#FAF0CA]
      after:border after:rounded-full after:h-6 after:w-6 after:transition-all
      peer-checked:bg-[url('../../node_modules/flag-icons/flags/4x3/us.svg')]"
        onClick={toggleLanguage}
      />
    </label>
  );
};

export default LanguageSwitcher;
