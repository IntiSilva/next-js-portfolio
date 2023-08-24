"use client";

import Image from "next/image";
import Html from "../../public/assets/skills/html.png";
import Css from "../../public/assets/skills/css.png";
import Javascript from "../../public/assets/skills/javascript.png";
import ReactImg from "../../public/assets/skills/react.png";
import Tailwind from "../../public/assets/skills/tailwind.png";
import Github from "../../public/assets/skills/github1.png";
import Figma from "../../public/assets/skills/figma.png";
import NextJS from "../../public/assets/skills/nextjs.png";
import Web3JS from "../../public/assets/skills/web3js.svg";
import Mongo from "../../public/assets/skills/mongo.png";
import Express from "../../public/assets/skills/expressJS.png";
import Node from "../../public/assets/skills/node.png";
import Wordpress from "../../public/assets/skills/wordpress.png";
import Framermotion from "../../public/assets/skills/framermotion.png";
import Mongoose from "../../public/assets/skills/mongoose.png";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import esTranslations from "../../locales/es/es.json";
import enTranslations from "../../locales/en/en.json";

const Skills = () => {
  const { language } = useContext(LanguageContext);
  const translations = language === "es" ? esTranslations : enTranslations;

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full pt-16">
        <p className="title-style">{translations.common.St1}</p>
        <h2 className="bg-gradient-to-r from-emerald-400 to-teal-700 text-transparent bg-clip-text py-4">
          {translations.common.St2}
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="p-6 bg-[#333333] shadow-xl shadow-[#001011] rounded-2xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Html} width="64px" height="64px" alt="/" />
              </div>
              <div className="text-emerald-400 flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#333333] shadow-xl shadow-[#001011] rounded-2xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Css} width="64px" height="64px" alt="/" />
              </div>
              <div className="text-emerald-400 flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#333333] shadow-xl shadow-[#001011] rounded-2xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} width="64px" height="64px" alt="/" />
              </div>
              <div className="text-emerald-400 flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#333333] shadow-xl shadow-[#001011] rounded-2xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Figma} width="64px" height="64px" alt="/" />
              </div>
              <div className="text-emerald-400 flex flex-col items-center justify-center">
                <h3>Figma</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#333333] shadow-xl shadow-[#001011] rounded-2xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Javascript} width="64px" height="64px" alt="/" />
              </div>
              <div className="text-emerald-400 flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#333333] shadow-xl shadow-[#001011] rounded-2xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="text-emerald-400 flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#333333] shadow-xl shadow-[#001011] rounded-2xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NextJS} width="64px" height="64px" alt="/" />
              </div>
              <div className="text-emerald-400 flex flex-col items-center justify-center">
                <h3>Next</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#333333] shadow-xl shadow-[#001011] rounded-2xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Web3JS} width="64px" height="64px" alt="/" />
              </div>
              <div className="text-emerald-400 flex flex-col items-center justify-center">
                <h3>Web3 JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#333333] shadow-xl shadow-[#001011] rounded-2xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Express} width="64px" height="64px" alt="/" />
              </div>
              <div className="text-emerald-400 flex flex-col items-center justify-center">
                <h3>Express</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#333333] shadow-xl shadow-[#001011] rounded-2xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Mongo} width="64px" height="64px" alt="/" />
              </div>
              <div className="text-emerald-400 flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#333333] shadow-xl shadow-[#001011] rounded-2xl hover:scale-105 ease-in duration-300 flex items-center">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Mongoose} width="64px" height="64px" alt="/" />
              </div>
              <div className="text-emerald-400 flex flex-col items-center justify-center">
                <h3>Mongoose</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#333333] shadow-xl shadow-[#001011] rounded-2xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Mongoose} width="64px" height="64px" alt="/" />
              </div>
              <div className="text-emerald-400 flex flex-col items-center justify-center">
                <h3>Mongoose</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#333333] shadow-xl shadow-[#001011] rounded-2xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Node} width="64px" height="64px" alt="/" />
              </div>
              <div className="text-emerald-400 flex flex-col items-center justify-center">
                <h3>Node</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#333333] shadow-xl shadow-[#001011] rounded-2xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Github} width="64px" height="64px" alt="/" />
              </div>
              <div className="text-emerald-400 flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#333333] shadow-xl shadow-[#001011] rounded-2xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Wordpress} width="64px" height="64px" alt="/" />
              </div>
              <div className="text-emerald-400 flex flex-col items-center justify-center">
                <h3>Wordpress</h3>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#333333] shadow-xl shadow-[#001011] rounded-2xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Framermotion} width="64px" height="64px" alt="/" />
              </div>
              <div className="text-emerald-400 flex flex-col items-center justify-center">
                <h3>Framer Motion</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
