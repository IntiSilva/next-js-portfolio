"use client"

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import projects from "@/projects.json"
import Transitions from "@/components/Transitions";
import useLanguage from "@/hooks/useLanguage";
import formatTech from "@/helpers/formatTech"

const ProjectPageClient = ({params}) => {
    const project = projects.find(p => p.id === params.id)

    if (!project) { return <div className="w-screen h-screen flex flex-col items-center justify-center gap-3">
                              <p className="title-style text-6xl text-center">
                                Project not found
                              </p>
                            </div>
                    }
    if (!project.finished) { router.push('/projects') }

    const { translations } = useLanguage()
    const projectTranslations = translations[project.id]
    const title = translations[project.id]?.title || project.originalTitle
    const formattedMainTech = formatTech(project.mainTech)
    const router = useRouter()
    const searchParams = useSearchParams()
    const referrer = searchParams.get('referrer')
    const goBack = () => {
      if(referrer) {
        router.push(referrer)
      } else {
        router.push('/projects')
      }
    }

  return (
    <>
      <Transitions />
        <div className="w-full overflow-x-hidden">
        <div className="w-screen h-[50vh] relative">


          { project.mediaType === "image"
          ?
          <>
            <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
            <Image
              className="absolute z-1"
              style={{ objectFit: "cover"}}
              fill={true}
              sizes="100vh"
              src={project.mediaUrl}
              alt={`${title} cover image`}
            />
          </>
          : <iframe
          className="absolute z-1"
          style={{ objectFit: "cover" }}
          width="100%"
          height="100%"
          src={project.mediaUrl}
          title={`${project.title} video`}
          allowFullScreen
        />
        }

          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">{title}</h2>
            <h3>{formattedMainTech}</h3>
          </div>
        </div>

        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-8 p-2 py-8 md:grid-cols-[minmax(0,1fr)_250px] lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0">
            <p>{translations.common.ProjectPageP1}</p>
            <h2 className="pb-4">{translations.common.ProjectPageT1}</h2>
            <div className="space-y-4">
              {Array.isArray(projectTranslations.paragraphs)
                ? projectTranslations.paragraphs.map((paragraph, index) => (
                    <p key={index} className="leading-7">
                      {paragraph}
                    </p>
                  ))
                : <p className="leading-7">{projectTranslations.paragraph}</p>}
            </div>

            { project.hasCode &&
              <Link
                href={project.codeUrl}
                target="_blank"
              >
                <button className="px-8 py-2 mt-4 mr-8">
                  {translations.common.ProjectPageB}
                </button>
              </Link>
            }

            { project.hasWebsite &&
                <Link
                href={project.websiteUrl}
                target="_blank"
              >
                <button className="px-8 py-2 mt-4 mr-8">
                  Website
                </button>
              </Link>

            }

          </div>
          <aside
            className="w-full min-w-0 self-start rounded-xl border border-zinc-700/60 bg-[#1F1F1F] p-4 shadow-xl shadow-black"
            aria-labelledby="project-tech-heading"
          >
            <h3
              id="project-tech-heading"
              className="text-left text-sm font-bold uppercase tracking-widest text-zinc-200"
            >
              {translations.common.ProjectPageP2}
            </h3>
            <div
              className="mt-2 h-0.5 w-10 rounded-full bg-emerald-500"
              aria-hidden="true"
            />
            <ol className="mt-4 divide-y divide-zinc-700/60 border-y border-zinc-700/60">
              {project.tech.map((technology, index) => (
                <li
                  key={technology}
                  className="grid min-w-0 grid-cols-[2rem_minmax(0,1fr)] items-start gap-3 py-3"
                >
                  <span
                    className="font-mono text-xs leading-6 tabular-nums tracking-wider text-emerald-400/80"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 whitespace-normal break-normal leading-6 text-zinc-300">
                    {technology}
                  </span>
                </li>
              ))}
            </ol>
          </aside>
            <button className="backButton" onClick={goBack}>
              {translations.common.ProjectPageP3}
            </button>
        </div>
      </div>
    </>
  )
}

export default ProjectPageClient
