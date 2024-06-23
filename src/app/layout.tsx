import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ModeToggle } from "@/components/mode-toggle";

const jetbrains_mono = JetBrains_Mono({ subsets: ["latin"] });

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
      <body className={jetbrains_mono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="p-6">
            <Header />
            {children}
            <div className="fixed bottom-4 right-4">
              <ModeToggle />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
