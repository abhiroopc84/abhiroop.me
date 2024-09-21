import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Header from "@/components/header";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "arrc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistMono.className}>
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
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div
            vaul-drawer-wrapper=""
            className="relative p-6 min-h-dvh flex flex-col"
          >
            <Header />
            {children}
            <div className="absolute bottom-6 right-6">
              <ModeToggle />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
