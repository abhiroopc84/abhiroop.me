import skills from "@/constants/skills";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="p-2 mt-8 flex-1 flex flex-col justify-between">
      <div>
        <div>
          <p className="w-full md:w-1/2">
            <span>my name is abhiroop reddy.</span>
            <br />
            <span>
              a third year undergraduate student pursuing bachelor of
              engineering in computer science.
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
          <div className="flex flex-col md:flex-row gap-2">
            {skills.map((skill) => (
              <div
                className="flex flex-row items-center gap-2"
                key={skill.name}
              >
                <span className="md:hidden">/</span>
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
                <span className="hidden md:flex">/</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <p className="text-wrap">
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
