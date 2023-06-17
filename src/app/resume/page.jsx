"use client";

import { useContext } from "react";
import { LanguageContext } from "@/components/LanguageContext";
import esTranslations from "../../../locales/es/es.json";
import enTranslations from "../../../locales/en/en.json";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Transitions from "@/components/Transitions";

const resume = () => {
  const { language } = useContext(LanguageContext);
  const translations = language === "es" ? esTranslations : enTranslations;

  return (
    <>
      <Transitions />

      <div className=" mx-auto p-2 pt-[120px] max-w-[940px]">
        <h2 className="text-center font-nav">{translations.resume.t1}</h2>
        <div className="bg-[#1F1F1F] shadow hover:shadow-xl shadow-emerald-500/70 ease-out duration-300 my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Inti Tomas Silva</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/inti-tomas-silva-176749185/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/IntiSilva"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              {translations.resume.p1} <span className="px-1">|</span>{" "}
              {translations.resume.s1}
              <span className="px-1">|</span> {translations.resume.s2}
            </p>
          </div>
          <div className="block sm:hidden">
            <p>{translations.resume.p1}</p>
            <p className="py-2">{translations.resume.s1}</p>
            <p>{translations.resume.s2}</p>
          </div>
        </div>
        <p className="text-justify">{translations.resume.p2}</p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">
            {translations.resume.s3}
          </h5>
          <p className="py-2 break-words">
            <span className="font-bold">{translations.resume.s4}</span>
            <span className="px-2">|</span>
            {translations.resume.s5}
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>Web3 JS
            <span className="px-2">|</span>Express
            <span className="px-2">|</span>MongoDB
            <span className="px-2">|</span>Solidity
            <span className="px-2">|</span>Figma
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>Bootstrap
            <span className="px-2">|</span>Adobe Illustrator
            <span className="px-2">|</span>Adobe Photoshop
            <span className="px-2">|</span>Notion
            <span className="px-2">|</span>
            {translations.resume.s6}
            <span className="px-2">|</span>Visual Basics
          </p>
          <p className="py-2">
            <span className="font-bold">{translations.resume.s7}</span>
            <span className="px-2">|</span> {translations.resume.s8}
            <span className="px-2">|</span> {translations.resume.s9}
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          {translations.resume.subT1}
        </h5>
        {/* Experience */}
        {/* Personal Experience*/}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">CoderHouse</span>
          </p>
          <p className="py-1 italic">{translations.resume.p3}(2022)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>{translations.resume.l1}</li>
            <li>{translations.resume.l2}</li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          {translations.resume.subT2}
        </h5>

        {/* Other experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">SBC</span>
            <span className="px-2">|</span>Buenos Aires
          </p>
          <p className="py-1 italic">{translations.resume.p4} (2021)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>{translations.resume.l3}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
