import type { Metadata } from "next";
import { Outfit, Playfair_Display, Poppins, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar, Footer, Preloader, ScrollToTop, RedirectToHomeOnReload } from "@/components";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

const outfit = Outfit({
  variable: "--font-general-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mileast = localFont({
  src: [
    {
      path: "../public/fonts/Mileast.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Mileast-Italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-mileast",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kroklin",
  description: "Where ambition meets automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfairDisplay.variable} ${poppins.variable} ${spaceGrotesk.variable} ${mileast.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Preloader />
        <ScrollToTop />
        <RedirectToHomeOnReload />
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
