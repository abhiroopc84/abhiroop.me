"use client";
import pages from "@/constants/pages";
import socials from "@/constants/socials";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between flex-row gap-2 p-3">
      <div className="flex gap-2">
        <Link href="/" className="underline underline-offset-4">
          abhiroop
        </Link>
        <div className="flex flex-col">
          {pages.map((page) => (
            <div className="flex gap-2" key={page.name}>
              <span>/</span>
              <Link
                href={page.link}
                className={`link ${
                  pathname === page.link ? "text-red-500" : ""
                } underline underline-offset-4`}
              >
                {page.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-2">
        {socials.map((social, index) => (
          <div key={social.name}>
            <div className="hidden lg:flex gap-2">
              <a
                href={social.link}
                target="_blank"
                className="underline underline-offset-4"
              >
                {social.name}
              </a>
              {index !== socials.length - 1 && <span>/</span>}
            </div>
            <div className="flex lg:hidden gap-2">
              <span>/</span>
              <a
                href={social.link}
                target="_blank"
                className="underline underline-offset-4"
              >
                {social.icon}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
