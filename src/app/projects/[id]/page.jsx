import projects from "@/projects.json"
import ProjectPageClient from "@/components/ClientPages/ProjectPageClient"
import { notFound } from "next/navigation"

// Function to fetch project data based on params
const fetchProjectData = (params) => {
  // Fetch the project data based on the params.id
  // For simplicity, as params.id matches the project id in the JSON
  return projects.find(p => p.id === params.id)
};

// Metadata generator function
export const generateMetadata = ({params}) => {
  const project = fetchProjectData(params);
  if (project) {
    return {
      title: `${project.originalTitle}`,
      description: `Details about the project ${project.originalTitle}`,

    }
  }
  return {
    title: 'Project Not Found',
    description: 'Project details not available',
  };
};

const ProjectPage = ({params}) => {
  const project = fetchProjectData(params)

  if (!project) {
    notFound()
  }

  return (
    <>
      <ProjectPageClient params={params} />
    </>
  )
}
export default ProjectPage
