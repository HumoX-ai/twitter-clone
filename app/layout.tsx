import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";
import NextNProgressClient from "@/components/NextnProgress";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twitter Clone",
  description: "Twitter clone built with Next.js, TailwindCSS, and MongoDB",

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NextNProgressClient />
        <Provider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </Provider>
      </body>
    </html>
  );
}
