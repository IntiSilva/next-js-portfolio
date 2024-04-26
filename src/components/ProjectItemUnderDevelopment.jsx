"use client";

import Image from "next/image";
import useLanguage from "@/hooks/useLanguage";

const ProjectItemUnderDevelopment = ({ originalTitle, backgroundImg, mainTech, id }) => {
  const { translations } = useLanguage()
  const title = translations[id]?.title || originalTitle

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-black rounded-xl group hover:bg-gradient-to-r from-gray-900 to-gray-500 ease-in duration-300">
      <Image
        className="rounded-xl group-hover:opacity-10 ease-in duration-300"
        src={backgroundImg}
        alt={`${originalTitle} background image`}
        width={1366}
        height={955}
        style={{objectFit: "cover"}}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{mainTech}</p>

        <p className="text-center py-3 px-0.5 rounded-lg bg-white text-emerald-800 font-bold text-lg">
          {translations.common.PprojectB2}
        </p>
      </div>
    </div>
  );
};

export default ProjectItemUnderDevelopment;
