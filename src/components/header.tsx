'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between flex-row gap-2 p-3 font-jetbrainsmono">
      <div className="flex gap-2">
        <Link href="/" className="underline underline-offset-4">
          abhiroop
        </Link>
        <div className="flex flex-col">
          <div className="flex gap-2">
            /
            <Link href="/about" className={`link ${pathname === '/about' ? 'text-fuchsia-500' : ''} underline underline-offset-4`}>
              about
            </Link>
          </div>
          <div className="flex gap-2">
            /
            <Link href="/projects" className={`link ${pathname === '/projects' ? 'text-fuchsia-500' : ''} underline underline-offset-4`}>
              projects
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <a
          href="https://github.com/abhiroopc84/"
          target="_blank"
          className="underline underline-offset-4"
        >
          github
        </a>
        /
        <a
          href="https://x.com/me_abhiroop"
          target="_blank"
          className="underline underline-offset-4"
        >
          twitter
        </a>
        /
        <a
          href="https://www.linkedin.com/in/abhiroopreddyc/"
          target="_blank"
          className="underline underline-offset-4"
        >
          linkedin
        </a>
      </div>
    </div>
  );
};

export default Header;
