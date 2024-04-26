"use client"

import projects from "@/projects.json"
import ProjectItem from "@/components/ProjectItem"
import ProjectItemUnderDevelopment from "@/components/ProjectItemUnderDevelopment"
import Transitions from "@/components/Transitions"
import useLanguage from "@/hooks/useLanguage"




const ProjectsClient = () => {
    const { translations } = useLanguage()

  return (
    <>
      <Transitions />
        <div className="max-w-[1240px] mx-auto px-2 py-24">
            <h1 className="w-full mb-6 text-center title-style text-emerald-500 text-3xl font-semibold">{translations.common.Projects}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {projects.map((project) => (
                            project.finished ?
                            <div className="aspect-w-10 aspect-h-0" key={project.id}> 
                              <ProjectItem
                                
                                originalTitle={project.originalTitle}
                                backgroundImg={project.backgroundImg}
                                mainTech={project.mainTech}
                                id={project.id}
                            />
                            </ div>
                            :

                            <div className="aspect-w-10 aspect-h-7" key={project.id}>
                              <ProjectItemUnderDevelopment
                                
                                originalTitle={project.originalTitle}
                                backgroundImg={project.backgroundImg}
                                mainTech={project.mainTech}
                                id={project.id}
                            />
                            </div>
                            ))
                    }
            </div>
        </div>
    </>
  )
}

export default ProjectsClient