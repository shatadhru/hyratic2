import { Header } from "@/components/header";
import React from "react";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero";
import { cn } from "@/lib/utils";

import TopCategories from "@/components/top-categories/page";
import HowItWorks from "@/components/how-its-works/page";
import HyraticFAQ from "@/components/faq/page";



function Section01(){

  return(
    <div className="w-full flex flex-col justify-center px-4 mt-14">

    </div>
  )

}






function Page() {


  return (

    <div
      className="
      relative
      z-0
      flex
      min-h-screen
      flex-col
      overflow-hidden
      px-4
      supports-[overflow:clip]:overflow-clip
      "
    >


      <main

        className={cn(

          "relative z-10 mx-auto w-full max-w-8xl grow",

          "before:absolute before:pointer-events-none before:-inset-y-14 before:-left-px before:w-px before:bg-border",

          "after:absolute after:pointer-events-none after:-inset-y-14 after:-right-px after:w-px after:bg-border"

        )}

      >



        {/* Header */}

        <Header />





        {/* Hero */}

        <section className="relative z-10">

          <HeroSection />

        </section>





        {/* Categories */}

        <section className="relative z-10">

          <TopCategories />

        </section>





        {/* How It Works */}

        <section className="relative z-10">

          <HowItWorks />

        </section>





        {/* FAQ */}

        <section className="relative z-10">

          <HyraticFAQ />

        </section>





        {/* Footer */}

        <footer className="relative z-10 w-full mt-20">

          <Footer />

        </footer>



      </main>



    </div>

  );

}


export default Page;