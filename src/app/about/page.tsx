import skills from "@/constants/skills";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  
  return (
    <div className="p-2 mt-8 flex flex-col">
      <div>
        <p className="w-2/5">
          <span>my name is abhiroop reddy.</span>
          <br />
          <span>
            a third year undergraduate student pursuing bachelor of engineering
            in computer science.
          </span>
          <br />
          <span>a front-end web developer.</span>
          <br />
          <br />
          <span>based in hyderabad, telangana, india.</span>
        </p>
      </div>
      <div className="mt-12 flex flex-col gap-2">
        <span>skills</span>
        <div className="flex flex-row gap-4">
          {skills.map((skill) => (
            <div className="flex flex-row items-center gap-2" key={skill.name}>
              <span>{skill.name}</span>
              <div>
                <Image
                  className="dark:invert"
                  src={skill.icon}
                  width={20}
                  height={20}
                  alt={`${skill.name} icon`}
                ></Image>
              </div>
              <span>/</span>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-5 w-full">
        <p className="w-2/5">
          <span>
            this site was built using next.js and shadcn/ui components.
          </span>
          <br />
          <span>
            heavily inspired by the{" "}
            <Link
              href="https://shadcn.com/"
              className="underline underline-offset-4"
            >
              shadcn portfolio
            </Link>
            .
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
