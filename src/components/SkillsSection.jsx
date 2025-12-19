"use client";

import Image from "next/image";

import ReactImg from "../../public/assets/skills/react.png";
import Tailwind from "../../public/assets/skills/tailwind.png";
import Motion from "../../public/assets/skills/motionone.png";
import Github from "../../public/assets/skills/github.png";
import Figma from "../../public/assets/skills/figma.png";
import NextJS from "../../public/assets/skills/nextjs.png";
import Web3JS from "../../public/assets/skills/web3js.svg";
import Mongo from "../../public/assets/skills/mongo.png";
import Express from "../../public/assets/skills/expressJS.png";
import Node from "../../public/assets/skills/node.png";
import Wordpress from "../../public/assets/skills/wordpress.png";
import Maps from "../../public/assets/skills/maps.svg";
import Prisma from "../../public/assets/skills/prisma.svg";
import Strapi from "../../public/assets/skills/strapi.png";
import Mysql from "../../public/assets/skills/mysql.png";
import Redux from "../../public/assets/skills/redux.svg";
import Typescript from "../../public/assets/skills/typescript.png";
import Clerk from "../../public/assets/skills/clerk.jpeg";
import Shadcn from "../../public/assets/skills/shadcn.png";
import Postgresql from "../../public/assets/skills/postgresql.png";
import Playwright from "../../public/assets/skills/playwright.png";
import Vitest from "../../public/assets/skills/vitest.svg";
import SWR from "../../public/assets/skills/swr.svg";

import useLanguage from "@/hooks/useLanguage";

const SKILLS = [
  // Core Frontend
  { label: "Next.js", icon: NextJS },
  { label: "React", icon: ReactImg },
  { label: "TypeScript", icon: Typescript },
  { label: "Tailwind", icon: Tailwind },
  { label: "Shadcn", icon: Shadcn },
  { label: "Motion", icon: Motion },

  // State / Data Fetching
  { label: "SWR", icon: SWR },
  { label: "Redux", icon: Redux },

  // Backend / Auth
  { label: "Node.js", icon: Node },
  { label: "Express", icon: Express },
  { label: "Prisma", icon: Prisma },
  { label: "Clerk", icon: Clerk },
  { label: "Strapi", icon: Strapi },

  // Databases
  { label: "PostgreSQL", icon: Postgresql },
  { label: "MongoDB", icon: Mongo },
  { label: "MySQL", icon: Mysql },

  // Testing & Tooling
  { label: "Playwright", icon: Playwright },
  { label: "Vitest", icon: Vitest },
  { label: "GitHub", icon: Github },

  // Integrations / Other
  { label: "Figma", icon: Figma },
  { label: "Google Maps API", icon: Maps },
  { label: "WordPress", icon: Wordpress },
  { label: "Web3.js", icon: Web3JS },
];


function SkillCard({ label, icon }) {
  return (
    <div className="p-4 md:p-6 bg-[#333333] shadow-xl shadow-[#001011] rounded-2xl hover:scale-105 transition-transform duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          {/* One consistent image strategy for every logo */}
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            <Image
              src={icon}
              alt={`${label} logo`}
              fill
              sizes="(max-width: 768px) 48px, 64px"
              className="object-contain rounded-xl"
            />
          </div>
        </div>

        <div className="text-emerald-400 text-sm md:text-base flex flex-col items-center justify-center">
          <h3>{label}</h3>
        </div>
      </div>
    </div>
  );
}

const SkillsSection = () => {
  const { translations } = useLanguage();

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full pt-16">
        <p className="title-style">{translations.common.St1}</p>
        <h2 className="px-1 bg-gradient-to-r from-emerald-400 to-teal-700 text-transparent bg-clip-text py-4">
          {translations.common.St2}
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {SKILLS.map((s) => (
            <SkillCard key={s.label} label={s.label} icon={s.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
