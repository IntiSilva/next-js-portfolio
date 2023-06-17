"use client";

import walletImg from "../../public/assets/projects/wallet.png";
import realStateImg from "../../public/assets/projects/realstate.png";
import ProjectItem from "./ProjectItem";
import ProjectItemUnderDevelopment from "./ProjectItemUnderDevelopment";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import esTranslations from "../../locales/es/es.json";
import enTranslations from "../../locales/en/en.json";

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const translations = language === "es" ? esTranslations : enTranslations;

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-24">
        <p className="title-style">{translations.common.Pt1}</p>
        <h2 className="bg-gradient-to-r from-emerald-400 to-teal-700 text-transparent bg-clip-text py-4">
          {translations.common.Pt2}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title={translations.common.Pproject1T}
            backgroundImg={walletImg}
            projectUrl="/wallet"
            tech={translations.common.Pproject1Subt}
          />
          <ProjectItemUnderDevelopment
            title={translations.common.Pproject2T}
            backgroundImg={realStateImg}
            tech={translations.common.Pproject2Subt}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
