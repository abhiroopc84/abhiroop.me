"use client";

import projects from "@/config/projects";
import { useTheme } from "next-themes";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

const Projects = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex flex-col gap-4 lg:w-1/2">
      <span>
        <RoughNotation type="box" show={true} padding={5} strokeWidth={1.5}>
          projects
        </RoughNotation>
      </span>
      {projects.map((project) => (
        <div className="flex flex-col w-full" key={project.name}>
          <h3>
            <Link href={project.link}>
              <RoughNotation
                type="underline"
                color={resolvedTheme == "dark" ? "yellow" : "purple"}
                show={true}
                padding={2}
                strokeWidth={1.5}
              >
                {project.name}
              </RoughNotation>
            </Link>
          </h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
