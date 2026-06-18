"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import Logo from "@/components/logo";

import {
  Mail,
  Lock,
  User,
  LogIn,
  UserPlus,
  Loader2,
} from "lucide-react";

import { FcGoogle } from "react-icons/fc";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";

import { auth } from "@/lib/firebase";

// 🔥 FIRESTORE IMPORT ADDED
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

function Page() {

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/hr/dashboard");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const [loginLoading, setLoginLoading] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const provider = new GoogleAuthProvider();

  // 🔥 CREATE USER IN FIRESTORE (SKILL HUB CORE LOGIC)
  const createUserIfNotExists = async (user) => {
    if (!user) return;

    const userRef = doc(db, "users", user.uid);
    const snap = await getDoc(userRef);

    if (!snap.exists()) {
      await setDoc(userRef, {
        name: user.displayName || signupData.name || "New User",
        email: user.email,
        photoURL: user.photoURL || "",

        role: "buyer",
        isSeller: false,

        skillsCount: 0,
        rating: 0,
        level: "new",

        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    } else {
      await setDoc(
        userRef,
        {
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );
    }
  };

  // SIGN UP
  const signUp = async () => {
    try {
      setSignupLoading(true);

      const userCred = await createUserWithEmailAndPassword(
        auth,
        signupData.email,
        signupData.password
      );

      await updateProfile(userCred.user, {
        displayName: signupData.name,
      });

      // 🔥 FIRESTORE USER CREATE
      await createUserIfNotExists(userCred.user);

      router.push("/hr/dashboard");
    } catch (err) {
      console.error(err.message);
    } finally {
      setSignupLoading(false);
    }
  };

  // LOGIN
  const login = async () => {
    try {
      setLoginLoading(true);

      const userCred = await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );

      // 🔥 ENSURE USER EXISTS
      await createUserIfNotExists(userCred.user);

      router.push("/hr/dashboard");
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoginLoading(false);
    }
  };

  // GOOGLE LOGIN
  const googleLogin = async () => {
    try {
      setGoogleLoading(true);

      const result = await signInWithPopup(auth, provider);

      // 🔥 FIRESTORE USER CREATE
      await createUserIfNotExists(result.user);

      router.push("/hr/dashboard");
    } catch (err) {
      console.error(err.message);
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex bg-muted/30">

      {/* LEFT SIDE */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6">

        <Card className="w-full max-w-md shadow-xl">

          <CardHeader className="space-y-2 text-center">
            <Logo className="w-20 mx-auto" iconClassName="w-6" />

            <CardTitle className="text-xl sm:text-2xl font-bold">
              Welcome back
            </CardTitle>

            <CardDescription className="text-xs sm:text-sm">
              Sign in or create an account to continue
            </CardDescription>
          </CardHeader>

          <CardContent>

            <Tabs defaultValue="login" className="w-full">

              <TabsList className="grid grid-cols-2 w-full mb-5">
                <TabsTrigger value="login">
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </TabsTrigger>

                <TabsTrigger value="signup">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Signup
                </TabsTrigger>
              </TabsList>

              {/* LOGIN */}
              <TabsContent value="login" className="space-y-3">

                <div className="relative">
                  <Mail className="absolute left-3 top-2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Email"
                    className="pl-9 text-sm"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="password"
                    placeholder="Password"
                    className="pl-9 text-sm"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                  />
                </div>

                <Button className="w-full" disabled={loginLoading} onClick={login}>
                  {loginLoading ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <LogIn className="w-4 h-4 mr-2" />
                  )}
                  {loginLoading ? "Signing in..." : "Login"}
                </Button>

              </TabsContent>

              {/* SIGNUP */}
              <TabsContent value="signup" className="space-y-3">

                <div className="relative">
                  <User className="absolute left-3 top-2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Name"
                    className="pl-9 text-sm"
                    value={signupData.name}
                    onChange={(e) =>
                      setSignupData({ ...signupData, name: e.target.value })
                    }
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Email"
                    className="pl-9 text-sm"
                    value={signupData.email}
                    onChange={(e) =>
                      setSignupData({ ...signupData, email: e.target.value })
                    }
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="password"
                    placeholder="Password"
                    className="pl-9 text-sm"
                    value={signupData.password}
                    onChange={(e) =>
                      setSignupData({ ...signupData, password: e.target.value })
                    }
                  />
                </div>

                <Button className="w-full" disabled={signupLoading} onClick={signUp}>
                  {signupLoading ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <UserPlus className="w-4 h-4 mr-2" />
                  )}
                  {signupLoading ? "Creating..." : "Create account"}
                </Button>

              </TabsContent>

            </Tabs>

            <div className="my-5 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <span className="text-[11px] text-muted-foreground">or</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <Button
              variant="outline"
              className="w-full"
              disabled={googleLoading}
              onClick={googleLogin}
            >
              {googleLoading ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <FcGoogle className="w-4 h-4 mr-2" />
              )}
              Continue with Google
            </Button>

          </CardContent>
        </Card>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden lg:block flex-1 relative">
        <Image
          src="/auth.png"
          alt="Auth Image"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-end p-10">
          <div className="text-white space-y-2">
            <h2 className="text-2xl font-bold">
              Build your future
            </h2>
            <p className="text-xs text-white/80">
              Join developers & freelancers worldwide
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Page;