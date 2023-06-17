"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { SiGmail } from "react-icons/si";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import NavLogo from "../../public/assets/navLogo.png";
import "../app/globals.css";
import { usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import { LanguageContext } from "./LanguageContext";
import esTranslations from "../../locales/es/es.json";
import enTranslations from "../../locales/en/en.json";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [navBg, setNavBg] = useState("#141414");
  const [linkColor, setLinkColor] = useState("#FAF0CA");
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const pathname = usePathname();
  const controls = useAnimation();
  const { language } = useContext(LanguageContext);
  const translations = language === "es" ? esTranslations : enTranslations;

  useEffect(() => {
    if (pathname === "/wallet") {
      setNavBg("rgba(0, 0, 0, 0.4)");
      setLinkColor("#C9CCCD");
    } else {
      setNavBg("#141414");
      setLinkColor("#FAF0CA");
    }
  }, [pathname]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    const handleHidden = () => {
      if (window.scrollY > 0) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    };
    window.addEventListener("scroll", handleHidden);
  }, []);

  useEffect(() => {
    if (!animationPlayed) {
      controls.start({ y: 0 }); // Initiate animation
      setAnimationPlayed(true); // Mark animation as played
    }
  }, [animationPlayed, controls]);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        pathname === "/wallet"
          ? hidden
            ? "fixed w-full h-20 z-[100] opacity-0 invisible transition-opacity duration-300"
            : "fixed w-full h-20 z-[100] transition-opacity duration-300"
          : shadow
          ? "fixed w-full h-20 shadow-xl shadow-grey-800 z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <motion.div
        initial={{ y: -100 }}
        animate={controls}
        transition={{ type: "spring", stiffness: 120 }}
        className="flex justify-between items-center w-full h-full px-6 2xl:px-16 font-nav"
      >
        <Link href="#home">
          <Image
            src={NavLogo}
            className="cursor-pointer logo-container logo-container-shadow"
          />
        </Link>

        <div>
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden 2md:flex items-center"
          >
            <LanguageSwitcher />

            <Link href="#home" className="ml-10  estilo-secciones-navbar">
              Home
            </Link>

            <Link href="#about" className="ml-10  estilo-secciones-navbar">
              {translations.common.Nt1}
            </Link>

            <Link href="#skills" className="ml-10  estilo-secciones-navbar">
              {translations.common.Nt2}
            </Link>

            <Link href="#projects" className="ml-10  estilo-secciones-navbar">
              {translations.common.Nt3}
            </Link>

            <Link href="/resume" className="ml-10  estilo-secciones-navbar">
              {translations.common.Nt4}
            </Link>

            <Link href="#contact" className="ml-10  estilo-secciones-navbar">
              {translations.common.Nt5}
            </Link>
          </ul>

          {/* Hamburger Icon and Switcher*/}
          <ul className="2md:hidden flex items-center">
            <LanguageSwitcher className="ml-10" />

            <div
              style={{ color: `${linkColor}` }}
              onClick={handleNav}
              className="ml-10 2md:hidden"
            >
              <AiOutlineMenu size={25} />
            </div>
          </ul>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "2md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#1F1F1F] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="#home">
                <Image src={NavLogo} className="logo-container-mobil" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-black/80 text-emerald-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-emerald-700 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                {translations.common.Nsubt}
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase font-nav">
              <Link href="#home">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-[#FAF0CA]"
                >
                  Home
                </li>
              </Link>
              <Link href="#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-[#FAF0CA]"
                >
                  {translations.common.Nt1}
                </li>
              </Link>
              <Link href="#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-[#FAF0CA]"
                >
                  {translations.common.Nt2}
                </li>
              </Link>
              <Link href="#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-[#FAF0CA]"
                >
                  {translations.common.Nt3}
                </li>
              </Link>
              <Link href="/resume">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-[#FAF0CA]"
                >
                  {translations.common.Nt4}
                </li>
              </Link>
              <Link href="#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-[#FAF0CA]"
                >
                  {translations.common.Nt5}
                </li>
              </Link>
            </ul>
            <div className="pt-10">
              <p className="uppercase tracking-widest text-emerald-700">
              {translations.common.Nsubt2}
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/inti-tomas-silva-176749185/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full bg-[#333333] shadow-lg shadow-[#001011] text-emerald-400 p-3 cursor-pointer focus:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/IntiSilva"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full bg-[#333333] shadow-lg shadow-[#001011] text-emerald-400 p-3 cursor-pointer focus:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <a href="mailto:inti.t.silva@gmail.com?">
                    <div className="rounded-full bg-[#333333] shadow-lg shadow-[#001011] text-emerald-400 p-3 cursor-pointer focus:scale-105 ease-in duration-300">
                      <SiGmail />
                    </div>
                  </a>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full bg-[#333333] shadow-lg shadow-[#001011] text-emerald-400 p-3 cursor-pointer focus:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
