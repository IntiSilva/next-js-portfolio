"use client";

import useLanguage from "@/hooks/useLanguage";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Transitions from "@/components/Transitions";

const PRIMARY_SKILLS = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript (ES6+)",
  "HTML / CSS",
  "Tailwind CSS",
  "Motion (formerly Framer Motion)",
  "shadcn/ui + Radix UI",
  "SWR",
  "Redux",
  "Node.js",
  "Express",
  "REST APIs",
  "Prisma",
  "PostgreSQL",
  "MongoDB",
  "Git/GitHub",
  "Figma",
];

const ALSO_WORKED_WITH = [
  "Vite",
  "Remix",
  "MySQL",
  "Mongoose",
  "Strapi",
  "Socket.IO",
  "Headless UI",
  "Google Maps JavaScript API",
  "WordPress",
  "Elementor",
  "Web3.js",
  "Solidity",
  "Howler.js",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Notion",
];

function PillsList({ items }) {
  return (
    <ul className="mx-auto max-w-3xl px-2 flex flex-wrap justify-center gap-x-2 gap-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="max-w-full rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm leading-snug"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

const ResumeClient = () => {
  const { translations } = useLanguage();

  return (
    <>
      <Transitions />

      <div className="mx-auto p-2 pt-[120px] max-w-[940px]">
        <h2 className="text-center font-nav">{translations.resume.t1}</h2>

        <div className="bg-[#1F1F1F] shadow hover:shadow-xl shadow-emerald-500/70 ease-out duration-300 my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Inti Tomas Silva</h2>

          <div className="flex">
            <a
              href="https://www.linkedin.com/in/inti-tomas-silva-176749185/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>

            <a
              href="https://github.com/IntiSilva"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>

        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              {translations.resume.p1} <span className="px-1">|</span>{" "}
              {translations.resume.s1}
              <span className="px-1">|</span> {translations.resume.s2}
            </p>
          </div>

          <div className="block sm:hidden">
            <p>{translations.resume.p1}</p>
            <p className="py-2">{translations.resume.s1}</p>
            <p>{translations.resume.s2}</p>
          </div>
        </div>

        <p className="text-justify px-2">{translations.resume.p2}</p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">
            {translations.resume.s3}
          </h5>

          <PillsList items={PRIMARY_SKILLS} />
        </div>

        {/* Also worked with */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">
            {translations.resume.s13}
          </h5>

          <PillsList items={ALSO_WORKED_WITH} />
        </div>

        {/* Focus Areas */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">
            {translations.resume.s14}
          </h5>

          <ul className="mx-auto max-w-5xl px-3.5 md:px-0 grid grid-cols-1 gap-y-2 text-left list-disc list-inside sm:justify-center sm:grid-cols-[minmax(0,22rem)_clamp(4rem,12vw,10rem)_minmax(0,22rem)]">
            {(translations.resume.focusAreas ?? []).map((item, idx) => (
              <li
                key={item}
                className={[
                  "hyphens-auto break-normal",
                  idx % 2 === 0 ? "sm:col-start-1" : "sm:col-start-3",
                ].join(" ")}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Languages */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">
            {translations.resume.s9}
          </h5>

          <p className="mx-auto max-w-3xl">
            {translations.resume.s10}
            <span className="px-2">|</span> {translations.resume.s11}
          </p>
        </div>

        {/* Selected Projects */}
        <h5 className="text-center underline text-[18px] py-4">
          {translations.resume.subT4}
        </h5>

        {(translations.resume.selectedProjects ?? []).map((p) => (
          <div key={p.name} className="py-6">
            <p className="italic">
              <span className="font-bold italic">{p.name}</span>
              <span className="px-2">|</span>
              {p.meta}
            </p>

            <p className="py-1 italic">
              {p.subtitle} {p.year ? `(${p.year})` : ""}
            </p>

            <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
              {(p.bullets ?? []).map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Experience */}
        <h5 className="text-center underline text-[18px] py-4">
          {translations.resume.subT3}
        </h5>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Old Time Sailors LTD.</span>
          </p>

          <p className="py-1 italic">{translations.resume.ots1}(2023)</p>

          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>{translations.resume.ots2}</li>
            <li>{translations.resume.ots3}</li>
            <li>{translations.resume.ots4}</li>
            <li>{translations.resume.ots5}</li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">RS Electric LLC.</span>
          </p>

          <p className="py-1 italic">
            {translations.resume.rselectric1}(2023)
          </p>

          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>{translations.resume.rselectric2}</li>
            <li>{translations.resume.rselectric3}</li>
          </ul>
        </div>

        {/* Education */}
        <h5 className="text-center underline text-[18px] py-4">
          {translations.resume.educationTitle}
        </h5>

        {(translations.resume.education ?? []).map((item) => (
          <div key={`${item.name}-${item.year}`} className="py-6">
            <p className="italic">
              <span className="font-bold italic">{item.name}</span>
            </p>

            <p className="py-1 italic">
              {item.subtitle} {item.year ? `(${item.year})` : ""}
              {item.credentialUrl ? (
                <>
                  <span className="px-2">•</span>
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="not-italic underline underline-offset-4 hover:opacity-80"
                  >
                    {translations.resume.viewCertificate}
                  </a>
                </>
              ) : null}
            </p>

            <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
              {(item.bullets ?? []).map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}

        {translations.resume.selfLearningNote ? (
          <p className="mx-auto max-w-3xl py-2 text-center">
            {translations.resume.selfLearningNote}
          </p>
        ) : null}

        {/* Other experience */}
        <h5 className="text-center underline text-[18px] py-4">
          {translations.resume.subT2}
        </h5>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold">SBC</span>
            <span className="px-2">|</span>Buenos Aires
          </p>

          <p className="py-1 italic">{translations.resume.p4} (2021)</p>

          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>{translations.resume.l3}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ResumeClient;
