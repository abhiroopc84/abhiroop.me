import {
  TbBrandCss3,
  TbBrandDjango,
  TbBrandDocker,
  TbBrandFramerMotion,
  TbBrandGit,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandMongodb,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandPython,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript,
  TbSql,
} from "react-icons/tb";
import { RiRemixRunFill } from "react-icons/ri";
import { SiAdobephotoshop, SiFastapi } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { ReactNode } from "react";

const skills: Record<string, Array<{ name: string; icon?: ReactNode }>> = {
  languages: [
    {
      name: "javascript",
      icon: <TbBrandJavascript className="w-5 h-5" />,
    },
    {
      name: "typescript",
      icon: <TbBrandTypescript className="w-5 h-5" />,
    },
    {
      name: "python",
      icon: <TbBrandPython className="w-5 h-5" />,
    },
    {
      name: "html",
      icon: <TbBrandHtml5 className="w-5 h-5" />,
    },
    {
      name: "css",
      icon: <TbBrandCss3 className="w-5 h-5" />,
    },
    {
      name: "sql",
      icon: <TbSql className="w-5 h-5" />,
    },
  ],
  "libraries & frameworks": [
    {
      name: "react",
      icon: <TbBrandReact className="w-5 h-5" />,
    },
    {
      name: "next.js",
      icon: <TbBrandNextjs className="w-5 h-5" />,
    },
    {
      name: "remix",
      icon: <RiRemixRunFill className="w-5 h-5" />,
    },
    {
      name: "django",
      icon: <TbBrandDjango className="w-5 h-5" />,
    },
    {
      name: "fastapi",
      icon: <SiFastapi className="w-5 h-5" />,
    },
  ],

  "tools & technologies": [
    {
      name: "node.js",
      icon: <TbBrandNodejs className="w-5 h-5" />,
    },
    { name: "docker", icon: <TbBrandDocker className="w-5 h-5" /> },
    {
      name: "framer-motion",
      icon: <TbBrandFramerMotion className="w-5 h-5" />,
    },
    {
      name: "tailwindcss",
      icon: <TbBrandTailwind className="w-5 h-5" />,
    },
    { name: "git", icon: <TbBrandGit className="w-5 h-5" /> },
  ],
  databases: [
    {
      name: "mongodb",
      icon: <TbBrandMongodb className="w-5 h-5" />,
    },
    {
      name: "postgres",
      icon: <BiLogoPostgresql className="w-5 h-5" />,
    },
  ],
};

export default skills;
