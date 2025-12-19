"use client";

import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import useLanguage from "@/hooks/useLanguage";

const MainSection = () => {

  const { translations } = useLanguage()

  return (
    <div id="home" className="w-full h-screen 3md:text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex items-center ">
        <div>
          <p className="text-sm title-style">{translations.common.Mt1}</p>
          <h1 className="py-2 text-zinc-300">
            {translations.common.Mt2}{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-700 text-transparent bg-clip-text">
              {" "}
              Inti,
            </span>
          </h1>
          <h1 className="pb-2 text-zinc-300">{translations.common.Mt3}</h1>

          <div className="flex flex-row items-center justify-between 3md:flex-col">
            <div className="flex items-center space-x-4 max-w-[330px] m-auto 3md:order-last">
              <a
                href="https://www.linkedin.com/in/inti-tomas-silva-176749185/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full bg-[#333333] shadow-lg shadow-[#001011] text-emerald-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href="https://github.com/IntiSilva"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full bg-[#333333] shadow-lg shadow-[#001011] text-emerald-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 ">
                  <FaGithub />
                </div>
              </a>
              <Link href="#contact">
                <div className="rounded-full bg-[#333333] shadow-lg shadow-[#001011] text-emerald-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail />
                </div>
              </Link>
              <Link href="/resume">
                <div className="rounded-full bg-[#333333] shadow-lg shadow-[#001011] text-emerald-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </Link>
            </div>

            <p className="py-4 text-zinc-400 text-justify m-auto sm:max-w-[70%] 3md:order-first 3md:text-center">
              {translations.common.Mp}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
