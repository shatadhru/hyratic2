import { Header } from "@/components/header";
import React from "react";
import Header2 from "@/components/header2";
import { Footer } from "@/components/footer";
import { FeatureSection } from "@/components/feature-section";
import { CallToAction } from "@/components/cta";
import { HeroSection } from "@/components/hero";
import { cn } from "@/lib/utils";
import TopCategories from "@/components/top-categories/page"




function Section01(){
  return(
    <div className="w-full flex flex-col justify-center px-4 mt-14">

      </div>
  )
}










































function Page() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden px-4 supports-[overflow:clip]:overflow-clip">
      
      <main
        className={cn(
          "relative mx-auto w-full max-w-8xl grow",
          "before:absolute before:-inset-y-14 before:-left-px before:w-px before:bg-border",
          "after:absolute after:-inset-y-14 after:-right-px after:w-px after:bg-border "
        )}
      >
        {/* Top Header */}
        <Header />

       

        {/* Hero Section */}
        <section >
          <HeroSection />
        </section>



        <section>
          <TopCategories />
        </section>

        {/* Footer */}
        <footer className="w-full mt-20">
          <Footer />
        </footer>
      </main>
    </div>
  );
}

export default Page;
