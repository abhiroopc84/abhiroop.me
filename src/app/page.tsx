import Header from "@/components/header";
import { ModeToggle } from "@/components/mode-toggle";
import SubHeader from "@/components/sub-header";
import { ThemeProvider } from "@/components/theme-provider";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-full flex-col p-3 mt-8">
      <div className="">hey, i&apos;m abhiroop reddy.</div>
      <div className="">i&apos;m a student and a web developer.</div>
      <div className="fixed bottom-5">
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
