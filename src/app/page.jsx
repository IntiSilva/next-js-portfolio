
export const metadata = {
  title: "Portfolio | Inti Silva"

}

import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import MainSection from "../components/MainSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import Transitions from "@/components/Transitions";

export default function Home() {
  return (
    <>
      <Transitions />
      <MainSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
