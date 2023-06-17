"use client";

import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Transitions from "@/components/Transitions";

export default function Home() {
  return (
    <>
      <Transitions />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
