"use client"

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import projects from "@/projects.json"
import { RiRadioButtonFill } from "react-icons/ri"
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
              alt={`${project.title} cover image`}
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

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p>{translations.common.ProjectPageP1}</p>
            <h2 className="pb-4">{translations.common.ProjectPageT1}</h2>
            <p> {projectTranslations.paragraph}</p>

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
          <div className="bg-[#1F1F1F] col-span-4 md:col-span-1 shadow-xl shadow-black rounded-xl py-4">
            <div className="p-2">
              <p className="text-center text-zinc-300 font-bold pb-2">
                {translations.common.ProjectPageP2}
              </p>
              <div className="grid grid-cols-3 md:grid-cols-1">

                { project.tech.map((technology, index) => (
                <p key={index} className="py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> {technology}
                </p>
                ))}

              </div>
            </div>
          </div>
            <button className="backButton" onClick={goBack}>
              {translations.common.ProjectPageP3}
            </button>
        </div>
      </div>
    </>
  )
}

export default ProjectPageClient