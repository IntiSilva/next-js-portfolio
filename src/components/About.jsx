"use client";

import Image from "next/image";
import Link from "next/link";
import AboutImg from "../../public/assets/about.jpg";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import esTranslations from "../../locales/es/es.json";
import enTranslations from "../../locales/en/en.json";

const About = () => {
  const { language } = useContext(LanguageContext);
  const translations = language === "es" ? esTranslations : enTranslations;

  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="title-style">{translations.common.At}</p>
          <h2 className="bg-gradient-to-r from-emerald-400 to-teal-700 text-transparent bg-clip-text py-4">
            {translations.common.At2}
          </h2>
          <p className="py-2 text-justify text-zinc-300">
            {translations.common.Ap1}
          </p>
          <p className="py-2 text-justify text-zinc-300">
            {translations.common.Ap2}
          </p>
          <Link href="/#projects">
            <p className="py-2 text-teal-700 underline cursor-pointer">
              {translations.common.AsubT}
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-emerald-400/50 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
