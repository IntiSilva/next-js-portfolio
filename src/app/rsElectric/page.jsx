"use client";

import { RiRadioButtonFill } from "react-icons/ri";
import rselectricImg from "../../../public/assets/projects/rselectricllc.png";
import Image from "next/image"
import Link from "next/link";
import Transitions from "@/components/Transitions";
import { useContext } from "react";
import { LanguageContext } from "@/components/LanguageContext";
import esTranslations from "../../../locales/es/es.json";
import enTranslations from "../../../locales/en/en.json";

const rsElectric = () => {
  const { language } = useContext(LanguageContext);
  const translations = language === "es" ? esTranslations : enTranslations;

  return (
    <>
      <Transitions />

      <div className="w-full">
        <div className="w-screen h-[50vh] relative">
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
          <Image
            className="absolute z-1"
            style={{ objectFit: "cover"}}
            fill={true}
            src={rselectricImg}
            alt="/"


          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">RS Electric LLC.</h2>
            <h3>Wordpress</h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p>{translations.rsElectric.p1}</p>
            <h2 className="pb-4">{translations.rsElectric.t2}</h2>
            <p> {translations.rsElectric.p2}</p>
            <a
              href="https://rselectriclv.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-8">
                {translations.rsElectric.b}
              </button>
            </a>
          </div>
          <div className="bg-[#1F1F1F] col-span-4 md:col-span-1 shadow-xl shadow-black rounded-xl py-4">
            <div className="p-2">
              <p className="text-center text-zinc-300 font-bold pb-2">
                {translations.rsElectric.p3}
              </p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Wordpress
                </p>
                <p className="py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Elementor
                </p>
                <p className="py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Builty
                </p>
                <p className="py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Yoast SEO
                </p>
                <p className="py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Updraft Plus
                </p>
                <p className="py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Contact Form 7
                </p>
                <p className="py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Turnstile
                </p>
              </div>
            </div>
          </div>
          <Link href="#projects">
            <p className="text-emerald-800 underline cursor-pointer">
              {translations.rsElectric.p4}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default rsElectric;
