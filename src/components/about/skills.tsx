import skills from "@/constants/skills";

const Skills = () => {
  return (
    <div className="flex flex-col gap-2 w-fit">
      <span className="font-extrabold">skills</span>
      <div className="flex flex-col lg:flex-row gap-2 flex-wrap">
        {skills.map((skill) => (
          <div className="flex flex-row items-center gap-2" key={skill.name}>
            <span className="lg:hidden">/</span>
            <span>{skill.name}</span>
            <div>{skill.icon}</div>
            <span className="hidden lg:flex">/</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
