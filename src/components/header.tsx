"use client";

import socials from "@/config/socials";
import { RoughNotation } from "react-rough-notation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import home from "@/config/home";

const Header = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className="flex justify-between flex-row gap-2 items-center">
        <div className="flex gap-2 items-center">
          <Link
            href={home.link}
            className={`${pathname === "/" ? "visible" : "hidden"} h-fit`}
          >
            <RoughNotation
              type="underline"
              animationDuration={1000}
              show={true}
              padding={2}
              strokeWidth={1.5}
            >
              {home.name}
            </RoughNotation>
          </Link>
          <Link
            href={home.link}
            className={`${pathname === "/" ? "hidden" : "visible"} h-fit`}
          >
            {home.name}
          </Link>
          /
        </div>
        <div className="flex flex-row gap-2 items-center">
          {socials.map((social, index) => (
            <div key={social.name}>
              <div className="hidden lg:flex gap-2">
                <a href={social.link} target="_blank">
                  {social.name}
                </a>
                {index !== socials.length - 1 && <span>/</span>}
              </div>
              <div className="flex lg:hidden gap-2">
                <a href={social.link} target="_blank">
                  {social.icon}
                </a>
                {index !== socials.length - 1 && <span>/</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
