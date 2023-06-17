"use client";

import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import { AnimatePresence } from "framer-motion";
import { LanguageProvider } from "@/components/LanguageContext";
import { usePathname } from "next/navigation";

const exo_2 = localFont({
  src: [
    { path: "../../public/fonts/Exo2-VariableFont_wght.ttf", style: "normal" },
    {
      path: "../../public/fonts/Exo2-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const bruno_ace = localFont({
  src: "../../public/fonts/BrunoAce-Regular.ttf",
  variable: "--font-nav",
  display: "swap",
});

export default function RootLayout({ children }) {
  const pathname = usePathname()
  return (
    // animation isn't complete due to a next.js error with new "app" directory error in layout file which
    // doesn't let {children} have a key prop to succesfully execute exit animation. Will fix when error is patched.

    //Personal note: use "usePathname" instead of "router" to give the URL to the key prop
    <html className={`${exo_2.variable} ${bruno_ace.variable}`}>
      <head>
        <title>{
          pathname === "/wallet"
            ? 'Wallet | Inti Silva'
            : (pathname === "/resume"
                ? 'Resume | Inti Silva'
                : 'Portfolio | Inti Silva'
              )
          }</title>
        <meta name="description" content="Inti Silva's front-end developer portfolio" />
        <link rel="icon" href="/fav.png" />
      </head>
      <body>
        <LanguageProvider>
          <Navbar />
          <AnimatePresence>{children}</AnimatePresence>
        </LanguageProvider>
      </body>
    </html>
  );
}
