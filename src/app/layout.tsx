import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ModeToggle } from "@/components/mode-toggle";
import { AnimatePresence, motion } from "framer-motion";
import Wrapper from "./wrapper";

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "abhiroop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon-light.ico"
          sizes="any"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="favicon-dark.ico"
          rel="icon"
          sizes="any"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className={`${jetbrains_mono.variable} font-mono`}>
        <Wrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div
              vaul-drawer-wrapper=""
              className="relative p-3 md:p-6 min-h-dvh flex flex-col"
            >
              <Header />
              {children}
              <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8">
                <ModeToggle />
              </div>
            </div>
          </ThemeProvider>
        </Wrapper>
      </body>
    </html>
  );
}
