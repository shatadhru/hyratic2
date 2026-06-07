"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "@/components/ui/button";
import { Portal, PortalBackdrop } from "@/components/portal";

import {
  companyLinks,
  companyLinks2,
  productLinks,
  freelanceLinks,
} from "@/components/nav-links";

import { LinkItem } from "@/components/sheard";
import {
  XIcon,
  MenuIcon,
  MessageCircle,
  Bell,
  LayoutDashboard,
  Sun,
  Moon,
  Laptop,
} from "lucide-react";

import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { useRouter } from "next/navigation";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState<FirebaseUser | null>(null);
  const [theme, setTheme] = React.useState<"light" | "dark" | "system">(
    "system"
  );

  const router = useRouter();

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  // APPLY THEME
  React.useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      root.classList.add(systemDark ? "dark" : "light");
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "system";
      return "light";
    });
  };

  const activeStyle =
    "p-2 rounded-md transition-colors active:bg-[#FE5B00]/10 hover:text-[#FE5B00]";

  return (
    <div className="md:hidden">

      {/* TOGGLE BUTTON */}
      <Button
        className="relative"
        onClick={() => setOpen(!open)}
        size="icon"
        variant="outline"
      >
        <div className={cn(open ? "opacity-100" : "opacity-0 absolute")}>
          <XIcon />
        </div>

        <div className={cn(!open ? "opacity-100" : "opacity-0 absolute")}>
          <MenuIcon />
        </div>
      </Button>

      {/* MENU */}
      {open && (
        <Portal className="top-14">
          <PortalBackdrop />

          <div className="size-full overflow-y-auto p-4 space-y-6">

            {/* ================= THEME SWITCH ================= */}
            <div className="flex items-center justify-between border rounded-lg p-2">
              <span className="text-sm font-medium text-muted-foreground">
                Theme
              </span>

              <div className="flex gap-1">
                <Button
                  size="icon"
                  variant={theme === "light" ? "default" : "ghost"}
                  onClick={() => setTheme("light")}
                >
                  <Sun className="w-4 h-4" />
                </Button>

                <Button
                  size="icon"
                  variant={theme === "dark" ? "default" : "ghost"}
                  onClick={() => setTheme("dark")}
                >
                  <Moon className="w-4 h-4" />
                </Button>

                <Button
                  size="icon"
                  variant={theme === "system" ? "default" : "ghost"}
                  onClick={() => setTheme("system")}
                >
                  <Laptop className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* ================= AUTH ================= */}
            {!user && (
              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => router.push("/auth")}
                >
                  Sign In
                </Button>

                <Button
                  className="w-full bg-[#FE5B00] hover:bg-[#FE5B00]/90 text-white"
                  onClick={() => router.push("/auth")}
                >
                  Get Started
                </Button>
              </div>
            )}

            {/* ================= QUICK ACTIONS ================= */}
            {user && (
              <div className="grid grid-cols-2 gap-2">

                <Button
                  variant="outline"
                  className="flex gap-2"
                  onClick={() => router.push("/messages")}
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat
                </Button>

                <Button
                  variant="outline"
                  className="flex gap-2"
                  onClick={() => router.push("/notifications")}
                >
                  <Bell className="w-4 h-4" />
                  Alerts
                </Button>

                <Button
                  variant="outline"
                  className="col-span-2 flex gap-2"
                  onClick={() => router.push("/hr/dashboard")}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </Button>
              </div>
            )}

            {/* ================= PRODUCT ================= */}
            <div>
              <span className="text-sm font-medium text-muted-foreground">
                Product
              </span>

              <div className="mt-2 flex flex-col gap-2">
                {productLinks.map((link) => (
                  <LinkItem
                    key={link.label}
                    {...link}
                    className={activeStyle}
                  />
                ))}
              </div>
            </div>

            {/* ================= FREELANCE ================= */}
            <div>
              <span className="text-sm font-medium text-muted-foreground">
                Freelance
              </span>

              <div className="mt-2 flex flex-col gap-2">
                {freelanceLinks.map((link) => (
                  <LinkItem
                    key={link.label}
                    {...link}
                    className={activeStyle}
                  />
                ))}
              </div>
            </div>

            {/* ================= COMPANY ================= */}
            <div>
              <span className="text-sm font-medium text-muted-foreground">
                Company
              </span>

              <div className="mt-2 flex flex-col gap-2">
                {companyLinks.map((link) => (
                  <LinkItem
                    key={link.label}
                    {...link}
                    className={activeStyle}
                  />
                ))}

                {companyLinks2.map((link) => (
                  <LinkItem
                    key={link.label}
                    {...link}
                    className={activeStyle}
                  />
                ))}
              </div>
            </div>

          </div>
        </Portal>
      )}
    </div>
  );
}