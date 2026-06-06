"use client";

import { cn } from "@/lib/utils";
import Logo from "@/components/logo";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  LayoutDashboard,
  User,
  Wallet,
  Settings,
  LogOut,
  MessageCircle,
  Sun,
  Moon,
  Laptop,
  Palette,
} from "lucide-react";

import { auth } from "@/lib/firebase";
import {
  signOut,
  onAuthStateChanged,
  User as FirebaseUser,
} from "firebase/auth";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const scrolled = useScroll(0);
  const router = useRouter();

  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  // theme apply
  useEffect(() => {
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

  const logout = async () => {
    await signOut(auth);
    router.push("/auth");
  };

  const initials = user?.email?.slice(0, 2).toUpperCase() || "HR";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border transition-all duration-300",
        {
          "bg-background/80 backdrop-blur-md shadow-sm": scrolled,
        }
      )}
    >
      <nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">

        {/* LEFT */}
        <div className="flex items-center gap-5">
          <Link href="/" className="px-3 py-2.5 hover:bg-muted rounded-md">
            <Logo />
          </Link>

          <DesktopNav />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2">

          {/* AUTH BUTTONS */}
          {!user && (
            <div className="hidden md:flex items-center gap-2">
              <Button variant="outline" onClick={() => router.push("/auth")}>
                Sign in
              </Button>
              <Button onClick={() => router.push("/auth")}>
                Get started
              </Button>
            </div>
          )}

          {/* LOGGED IN */}
          {user && (
            <div className="flex items-center gap-2">

              {/* Messenger only */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => router.push("/messages")}
              >
                <MessageCircle className="w-5 h-5" />
              </Button>

              {/* Avatar */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="h-8 w-8 cursor-pointer border border-orange-500/50">
                    <AvatarFallback className="text-xs font-semibold bg-orange-500 text-white">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-56">

                  <div className="px-2 py-2 text-xs text-muted-foreground">
                    Signed in as
                    <div className="text-foreground font-medium truncate">
                      {user.email}
                    </div>
                  </div>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem onClick={() => router.push("/hr/dashboard")}>
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Dashboard
                  </DropdownMenuItem>

                  <DropdownMenuItem onClick={() => router.push("/profile")}>
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </DropdownMenuItem>

                  <DropdownMenuItem onClick={() => router.push("/earnings")}>
                    <Wallet className="w-4 h-4 mr-2" />
                    Earnings
                  </DropdownMenuItem>

                  <DropdownMenuItem onClick={() => router.push("/settings")}>
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem onClick={logout} className="text-red-500">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>

                </DropdownMenuContent>
              </DropdownMenu>

            </div>
          )}

          {/* MOBILE NAV */}
          <MobileNav />
        </div>

      </nav>
    </header>
  );
}