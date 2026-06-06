"use client";

import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

import Logo from "@/components/logo";

import { Mail, Loader2, CheckCircle2 } from "lucide-react";

import { auth } from "@/lib/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

function Page() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleReset = async () => {
    setLoading(true);
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-muted/30 p-4">

      <Card className="w-full max-w-md shadow-xl">

        {/* HEADER */}
        <CardHeader className="text-center space-y-2">
          <Logo className="w-20 mx-auto" iconClassName="w-6" />

          <CardTitle className="text-xl font-semibold">
            Reset your password
          </CardTitle>

          <CardDescription className="text-sm">
            Enter your email and we’ll send you a reset link
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">

          {/* INPUT */}
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Enter your email"
              className="pl-9 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* ERROR */}
          {error && (
            <p className="text-xs text-red-500">
              {error}
            </p>
          )}

          {/* SUCCESS */}
          {sent && (
            <div className="flex items-center gap-2 text-green-600 text-xs">
              <CheckCircle2 className="w-4 h-4" />
              Reset link sent! Check your email inbox.
            </div>
          )}

          {/* BUTTON */}
          <Button
            className="w-full"
            onClick={handleReset}
            disabled={loading || !email}
          >
            {loading ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : null}
            Send reset link
          </Button>

          {/* BACK */}
          <p className="text-center text-xs text-muted-foreground">
            Remember your password?{" "}
            <a href="/auth" className="underline hover:text-foreground">
              Login
            </a>
          </p>

        </CardContent>
      </Card>

    </div>
  );
}

export default Page;