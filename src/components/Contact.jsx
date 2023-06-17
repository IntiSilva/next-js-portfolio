"use client";

import Image from "next/image";
import Link from "next/link";
import { SiGmail } from "react-icons/si";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../../public/assets/contact.jpg";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import esTranslations from "../../locales/es/es.json";
import enTranslations from "../../locales/en/en.json";

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const translations = language === "es" ? esTranslations : enTranslations;

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-24 w-full ">
        <p className="title-style">{translations.common.Ct1}</p>
        <h2 className="bg-gradient-to-r from-emerald-400 to-teal-700 text-transparent bg-clip-text py-4">
          {translations.common.Ct2}
        </h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full bg-[#1F1F1F] shadow-xl shadow-[#001011] rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300 maxLg:w-full"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div className="text-zinc-300">
                <h2 className="pt-4 pb-2">Inti Tomas Silva</h2>
                <p>{translations.common.Csubt}</p>
                <p className="py-4">{translations.common.Cp1}</p>
              </div>
              <div>
                <p className="bg-gradient-to-r from-emerald-400 to-teal-700 text-transparent bg-clip-text uppercase pt-8 maxLg:text-center">
                  {translations.common.Cp2}
                </p>
                <div className="flex justify-center items-center space-x-4 lg:justify-between py-4">
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
                    <div className="rounded-full bg-[#333333] shadow-lg shadow-[#001011] text-emerald-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&source=mailto&to=inti.t.silva@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full bg-[#333333] shadow-lg shadow-[#001011] text-emerald-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <SiGmail />
                    </div>
                  </a>
                  <Link href="/resume">
                    <div className="rounded-full bg-[#333333] shadow-lg shadow-[#001011] text-emerald-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto bg-[#1F1F1F] shadow-xl shadow-[#001011] rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/2ec0d072-1ffc-4f53-bfc5-d2bee9a682ff"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="text-emerald-700 uppercase text-sm py-2">
                      {translations.common.Cl1}
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-gray-900"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-emerald-700 uppercase text-sm py-2">
                      {translations.common.Cl2}
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-gray-900"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-emerald-700 uppercase text-sm py-2">
                    {translations.common.Cl3}
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 text-gray-900"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-emerald-700 uppercase text-sm py-2">
                    {translations.common.Cl4}
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 text-gray-900"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-emerald-700 uppercase text-sm py-2">
                    {translations.common.Cl5}
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 text-gray-900"
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 mt-4">
                  {translations.common.Cb}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="#home">
            <div className="rounded-full shadow-lg shadow-black p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                className="text-emerald-400"
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
