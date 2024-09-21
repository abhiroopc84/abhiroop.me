"use client";

import Background from "@/components/background";
import Projects from "@/components/projects";
import Resume from "@/components/resume";
import Skills from "@/components/skills";
import { Button } from "@/components/ui/button";
import home from "@/config/home";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-1 h-full flex-col gap-8 pt-8">
      <div className="flex flex-col">
        {home.description.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
      <div className="flex-1 flex flex-col gap-8">
        <Projects />
        <Skills />
        <Resume />
      </div>
      <Background />
      <div>
        <Button size={"icon"} variant={"default"} asChild>
          <a href={home.email} className="flex flex-row items-center gap-2">
            <Mail className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
