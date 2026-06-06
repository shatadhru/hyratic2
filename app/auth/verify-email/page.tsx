"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import Logo from "@/components/logo";
import {
  Loader2,
  MailCheck,
  RefreshCcw,
  LogOut,
  ShieldCheck,
} from "lucide-react";

import { auth } from "@/lib/firebase";
import {
  sendEmailVerification,
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";

function Page() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  const [pageLoading, setPageLoading] = useState(true);
  const [resending, setResending] = useState(false);
  const [checking, setChecking] = useState(false);

  // AUTH CHECK + AUTO REDIRECT + AUTO POLLING
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        router.push("/auth");
        return;
      }

      await u.reload();
      setUser(u);
      setPageLoading(false);

      if (u.emailVerified) {
        router.push("/hr/dashboard");
      }
    });

    return () => unsubscribe();
  }, [router]);

  // AUTO CHECK EVERY 5 SECONDS (PRO UX 🔥)
  useEffect(() => {
    if (!user) return;

    const interval = setInterval(async () => {
      await auth.currentUser?.reload();

      if (auth.currentUser?.emailVerified) {
        router.push("/hr/dashboard");
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [user, router]);

  // RESEND EMAIL
  const resendEmail = async () => {
    try {
      setResending(true);

      if (auth.currentUser) {
        await sendEmailVerification(auth.currentUser);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setResending(false);
    }
  };

  // MANUAL CHECK
  const checkNow = async () => {
    try {
      setChecking(true);

      await auth.currentUser?.reload();

      if (auth.currentUser?.emailVerified) {
        router.push("/hr/dashboard");
      }
    } finally {
      setChecking(false);
    }
  };

  // LOGOUT
  const logout = async () => {
    await signOut(auth);
    router.push("/auth");
  };

  // LOADING UI
  if (pageLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-muted/30">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center justify-center bg-muted/30 p-4">

      <Card className="w-full max-w-md shadow-xl text-center">

        {/* HEADER */}
        <CardHeader className="space-y-3">
          <Logo className="w-20 mx-auto" iconClassName="w-6" />

          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
          </div>

          <CardTitle className="text-xl font-semibold">
            Verify your email
          </CardTitle>

          <CardDescription className="text-sm">
            We sent a verification link to
            <br />
            <span className="font-medium text-foreground">
              {user?.email}
            </span>
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">

          {/* ICON */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <MailCheck className="w-7 h-7 text-primary" />
            </div>
          </div>

          {/* TEXT */}
          <p className="text-xs text-muted-foreground leading-relaxed">
            Check your inbox and click the verification link to continue.
            If you didn’t receive it, you can resend it below.
          </p>

          {/* ACTION BUTTONS */}
          <div className="space-y-2">

            <Button className="w-full" onClick={checkNow} disabled={checking}>
              {checking ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <ShieldCheck className="w-4 h-4 mr-2" />
              )}
              I have verified
            </Button>

            <Button
              variant="outline"
              className="w-full"
              onClick={resendEmail}
              disabled={resending}
            >
              {resending ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <RefreshCcw className="w-4 h-4 mr-2" />
              )}
              Resend email
            </Button>

          </div>

          {/* FOOTER ACTIONS */}
          <div className="flex justify-between text-[11px] text-muted-foreground pt-2">
            <button onClick={logout} className="hover:underline flex items-center gap-1">
              <LogOut className="w-3 h-3" />
              Logout
            </button>

            <button onClick={checkNow} className="hover:underline">
              Refresh status
            </button>
          </div>

          {/* SMALL TIP */}
          <p className="text-[10px] text-muted-foreground mt-2">
            Tip: Sometimes email takes 30–60 seconds to arrive.
          </p>

        </CardContent>

      </Card>
    </div>
  );
}

export default Page;