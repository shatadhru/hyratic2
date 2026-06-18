import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono, Figtree } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

/* =========================
   🎨 FONTS
========================= */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

/* =========================
   🚀 METADATA
========================= */
export const metadata: Metadata = {
  title: {
    default: "Hyratic - Freelance Marketplace",
    template: "%s | Hyratic",
  },
  description:
    "Hire freelancers, manage projects & learn skills in one platform.",
};

/* =========================
   🧠 ROOT LAYOUT
========================= */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
              spaceGrotesk.variable,
              mono.variable
            , "font-sans", figtree.variable)}
    >
      <body className="font-sans font-heading bg-background text-foreground antialiased">
        <ThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}