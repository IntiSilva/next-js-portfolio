"use client";

import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Transitions from "@/components/Transitions";
import { useContext } from "react";
import { LanguageContext } from "@/components/LanguageContext";
import esTranslations from "../../../locales/es/es.json";
import enTranslations from "../../../locales/en/en.json";

const wallet = () => {
  const { language } = useContext(LanguageContext);
  const translations = language === "es" ? esTranslations : enTranslations;

  return (
    <>
      <Transitions />

      <div className="w-full">
        <div className="w-screen h-[50vh] relative">
          <iframe
            className="absolute z-1"
            style={{ objectFit: "cover" }}
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/KRY8IZCbAs4"
            title="Eth-wallet"
            allowFullScreen
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Eth-Wallet</h2>
            <h3>React JS / Web3 JS / Truffle</h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p>ab</p>
            <h2 className="pb-4">a</h2>
            <p> a</p>
            <a
              href="https://github.com/IntiSilva/Eth-walllet-master-2.0"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-8">
                a
              </button>
            </a>
          </div>
          <div className="bg-[#1F1F1F] col-span-4 md:col-span-1 shadow-xl shadow-black rounded-xl py-4">
            <div className="p-2">
              <p className="text-center text-zinc-300 font-bold pb-2">
                a
              </p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> React
                </p>
                <p className="py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Web3 JS
                </p>
                <p className="py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Truffle
                </p>
                <p className="py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Ganache
                </p>
                <p className="py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Javascript
                </p>
              </div>
            </div>
          </div>
          <Link href="#projects">
            <p className="text-emerald-800 underline cursor-pointer">
              a
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default wallet;
