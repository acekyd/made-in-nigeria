import ProjectsPage from "../components/pages/ProjectsPage";
import { useProjects } from "../utils/projects";

export default async function Projects() {
  const { projects } = await useProjects();

  return (
    <main>
      <title>Projects | Made In Nigeria</title>
      <ProjectsPage repositories={projects} />
    </main>
  );
}
