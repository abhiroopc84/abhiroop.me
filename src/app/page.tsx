import Header from "@/components/header";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 h-full flex-col p-3 mt-8 justify-between">
      <div>
        <p>
          <span>hey, i&apos;m abhiroop reddy.</span>
          <br />
          <span>i&apos;m a student and a web developer.</span>
        </p>
      </div>
      <div>
        <a
          href="mailto:abhiroopc84@gmail.com"
          className="flex flex-row items-center gap-2"
        >
          <Mail className="h-4 w-4" />
          contact
        </a>
      </div>
    </div>
  );
}
