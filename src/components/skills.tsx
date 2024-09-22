"use client";

import skills from "@/config/skills";
import { useTheme } from "next-themes";
import { RoughNotation } from "react-rough-notation";

const Skills = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex flex-col gap-4">
      <span>
        <RoughNotation
          animationDuration={1000}
          type="box"
          show={true}
          padding={5}
          strokeWidth={1.5}
        >
          skills
        </RoughNotation>
      </span>
      <div className="flex flex-col gap-2 flex-wrap">
        {Object.keys(skills).map((skillCategory) => (
          <div key={skillCategory} className="flex flex-row gap-2">
            <span>{skillCategory}/</span>
            {skills[skillCategory].map((skill, index) => {
              if (index === skills[skillCategory].length - 1) {
                return (
                  <span
                    key={skill.name}
                    className="flex flex-row items-center gap-2"
                  >
                    {skill.icon}
                  </span>
                );
              } else {
                return (
                  <span
                    key={skill.name}
                    className="flex flex-row items-center gap-2"
                  >
                    {skill.icon}
                  </span>
                );
              }
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
