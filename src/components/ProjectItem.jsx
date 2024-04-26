"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useLanguage from "@/hooks/useLanguage";

const ProjectItem = ({ originalTitle, backgroundImg, mainTech, id }) => {
  const { translations } = useLanguage()
  const pathname = usePathname()
  const title = translations[id]?.title || originalTitle

  return (
    <div className="relative flex items-center justify-center h-full w-full shadow-xl shadow-black rounded-xl group hover:bg-gradient-to-r from-[#023C2B] to-[#25F8BD] ease-in duration-300">
      <Image
        className="rounded-xl group-hover:opacity-10 ease-in duration-300 w-full h-full"
        src={backgroundImg}
        alt={`${originalTitle} background image`}
        width={0}
        height={0}
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 33vw"

      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{mainTech}</p>
        <Link href={`/projects/${id}?referrer=${pathname}`} scroll={true}>
          <p className="text-center py-3 rounded-lg bg-white text-emerald-800 font-bold text-lg cursor-pointer">
            {translations.common.PprojectB}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
