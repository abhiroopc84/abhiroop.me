"use client";

import home from "@/config/home";
import { File } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

const Resume = () => {
  const { resolvedTheme } = useTheme();

  return (
    <Link href={home.resumeLink} className="w-fit">
      <RoughNotation
        type="underline"
        animationDuration={1000}
        color={resolvedTheme == "dark" ? "yellow" : "purple"}
        show={true}
        padding={5}
        strokeWidth={1.5}
      >
        <span className="flex flex-row gap-1 w-fit items-center">
          resume
          <File className="h-4 w-4" />
        </span>
      </RoughNotation>
    </Link>
  );
};

export default Resume;
