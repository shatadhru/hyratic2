import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

/* =========================
   🎨 FONTS
========================= */
const spaceGroteskHeading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

/* =========================
   🚀 SEO METADATA (FULL)
========================= */
export const metadata: Metadata = {
  title: {
    default: "Hyratic - Freelance Marketplace, Studio & SkillHub",
    template: "%s | Hyratic",
  },


  description:
    "Hyratic is a modern freelance marketplace like Fiverr & Upwork. Hire top freelancers, manage projects with Hyratic Studio, and upgrade skills with SkillHub.",

  keywords: [
    "freelance marketplace",
    "hire freelancers",
    "Fiverr alternative",
    "Upwork alternative",
    "web developers",
    "UI UX designers",
    "freelance jobs",
    "remote work",
    "Hyratic Studio",
    "SkillHub",
  ],

  authors: [{ name: "Hyratic Team" }],
  creator: "Hyratic",

  metadataBase: new URL("https://hyratic.com"),

  openGraph: {
    title: "Hyratic - Freelance Marketplace",
    description:
      "Hire freelancers, manage projects & learn skills in one platform.",
    url: "https://hyratic.com",
    siteName: "Hyratic",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hyratic - Freelance Marketplace",
    description:
      "Hire freelancers, manage projects & learn skills in one platform.",
  },

  
};

/* =========================
   🧠 ROOT LAYOUT
========================= */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        inter.variable,
        spaceGroteskHeading.variable
      )}
    >
      <body className="font-sans bg-background text-foreground">
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <ThemeProvider><TooltipProvider>{children}</TooltipProvider> </ThemeProvider>
      </body>
    </html>
  );
}