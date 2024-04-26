import "./globals.css";
import localFont from "next/font/local";
import AppWrapper from "@/components/AppWrapper";

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

export const metadata = {
  title: {
    template: "%s | Inti Silva",
    default: "Inti Silva"
  },
  description: "Inti Silva's front-end developer portfolio",
  keywords: ["Next.js", "Portfolio", "Front-End", "React", "Web Developer"],
  author: {name: "Inti"},
  creator: "Inti Silva"
}

export default function RootLayout({ children }) {

  return (
    // animation isn't complete due to a next.js error with new "app" directory error in layout file which
    // doesn't let {children} have a key prop to succesfully execute exit animation. Will fix when error is patched.

    //Personal note: use "usePathname" instead of "router" to give the URL to the key prop
    <html className={`${exo_2.variable} ${bruno_ace.variable}`}>
      <head>
        <link rel="icon" href="/fav.png" />
      </head>
      <body>
        <AppWrapper>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
