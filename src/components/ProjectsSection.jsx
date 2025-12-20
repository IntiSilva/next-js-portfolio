"use client";

import Link from "next/link";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import ProjectItem from "./ProjectItem";
import useLanguage from "@/hooks/useLanguage";


const ProjectsSection = () => {
  const { translations } = useLanguage()

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-24">
        <p className="title-style">{translations.common.Pt1}</p>
        <h2 className="px-1 bg-gradient-to-r from-emerald-400 to-teal-700 text-transparent bg-clip-text py-4">
          {translations.common.Pt2}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            originalTitle="Eventify"
            backgroundImg="/assets/projects/eventify.webp"
            id="eventify"
            mainTech="Next.js, Clerk, Prisma, Shadcn UI, Motion One"
          />
          <ProjectItem
            originalTitle="RS Electric LLC."
            backgroundImg="/assets/projects/rselectricllc.webp"
            id="rs-electric"
            mainTech="Wordpress, Elementor, Builty"
          />
          <ProjectItem
            originalTitle="Old Time Sailors"
            backgroundImg="/assets/projects/oldtimesailors.webp"
            id="old-time-sailors"
            mainTech="Next.js, NextUI, Strapi, Google Maps API"
          />
          <ProjectItem
            originalTitle="GuitarLA"
            backgroundImg="/assets/projects/guitarla.webp"
            id="guitar-la"
            mainTech="Next.js | Remix, Strapi, PostgreSQL"
          />
          
        </div>
        <Link href="/projects" className="flex items-end py-10 pl-3 md:pl-6">
          <div className="inline-flex items-end hover:pl-8 ease-in duration-200">
            <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-emerald-200 to-emerald-600 text-transparent bg-clip-text">
              {translations.common.Pbutton}
            </h3>
            <HiOutlineChevronDoubleRight className="text-emerald-400 ml-3 hover:ml-5 ease-in duration-200 " size={30}/>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default ProjectsSection;
