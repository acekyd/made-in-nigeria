import { useProjects } from "@/app/utils/projects";

export default async function AuthorProjects({ author }: { author?: string }) {
  const { filterProjects } = await useProjects();

  const authorProjects = filterProjects().byAuthor(author ?? "");

  console.log(authorProjects);

  return (
    <p >
      Hey theere. These are the projects for this author
    </p>
  );
}
