import type { Metadata } from "next";
import { Outfit, Playfair_Display, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar, Footer, Preloader, ScrollToTop, RedirectToHomeOnReload } from "@/components";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

const outfit = Outfit({
  variable: "--font-general-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
  // Only referenced by components that aren't rendered on any current route,
  // so keep it out of the initial preload and off the critical path.
  preload: false,
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
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

const ahsing = localFont({
  src: [
    {
      path: "../public/fonts/Ahsing.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ahsing",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kroklin",
  description: "Where ambition meets automation. We combine strategy, design, and development to create digital products that make a lasting impact.",
  keywords: ["web design", "digital marketing", "branding", "automation", "Kroklin"],
  openGraph: {
    title: "Kroklin",
    description: "Where ambition meets automation.",
    url: "https://kroklin.in",
    siteName: "Kroklin",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfairDisplay.variable} ${poppins.variable} ${mileast.variable} ${ahsing.variable} h-full antialiased`}
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
