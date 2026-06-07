import { Header } from "@/components/header";
import React from "react";
import LandingPageUi from "@/components/home/LandingPartUi";
import Header2 from "@/components/header2";
import { LogoCloud } from "@/components/logo-cloud";
import { Footer } from "@/components/footer";
import TrendingTopics from "@/components/home/TrendingTopics";
import { FeatureSection } from "@/components/feature-section";
import { CallToAction } from "@/components/cta";

function Page() {
  return (
    <div className="w-full min-h-screen bg-background flex flex-col overflow-x-hidden">

      {/* Header */}
      <Header />

      {/* Secondary Nav */}
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-6xl">
          <Header2 />
        </div>
      </div>

      {/* Hero */}
      <div className="w-full flex justify-center px-4 mt-2">
        <div className="w-full max-w-6xl">
          <LandingPageUi />
        </div>
      </div>

      {/* Trending Section */}
      <section className="w-full flex justify-center px-4 mt-8">
        <div className="w-full max-w-6xl text-center">

          <div className="mb-4">
            <h2 className="text-[12px] md:text-sm font-semibold text-muted-foreground tracking-wide">
              Explore High-Demand Freelance Categories
            </h2>

            <p className="text-[10px] md:text-xs text-muted-foreground/70 mt-1">
              Discover skills, services, and opportunities shaping the future of work
            </p>
          </div>

          <TrendingTopics />
        </div>
      </section>

      {/* Features */}
      <section className="w-full flex justify-center px-4 mt-10">
        <div className="w-full max-w-6xl text-center">
          <FeatureSection />
        </div>
      </section>

      {/* CTA */}
      <section className="w-full flex justify-center px-4 mt-10">
        <div className="w-full max-w-6xl flex justify-center">
          <CallToAction />
        </div>
      </section>

      {/* Trust Section */}
      <section className="w-full flex justify-center px-4 mt-12">
        <div className="w-full max-w-3xl text-center">

          <div className="mb-4">
            <h2 className="text-[12px] md:text-sm font-semibold text-muted-foreground">
              Trusted by Modern Creators & Startups
            </h2>

            <p className="text-[10px] md:text-xs text-muted-foreground/70 mt-1">
              Built for freelancers, agencies, and fast-growing teams
            </p>
          </div>

          <LogoCloud />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full mt-14">
        <Footer />
      </footer>

    </div>
  );
}

export default Page;