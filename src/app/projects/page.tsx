import projects from "@/constants/projects";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="p-3 mt-8 flex-1 flex flex-col gap-4">
      {projects.map((project) => (
        <div className="flex flex-col w-full md:w-1/2" key={project.name}>
          <h3>
            <Link href={project.link} className="underline underline-offset-4 text-red-500">
              {project.name}
            </Link>
          </h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
