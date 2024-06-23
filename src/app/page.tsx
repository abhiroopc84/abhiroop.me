import Header from "@/components/header";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import Image from "next/image";

export default function Home() {
  return (
      <div className="h-dvh p-6">
        <Header />
        <div className="absolute bottom-4 right-4">
          <ModeToggle />
        </div>
      </div>
  );
}
