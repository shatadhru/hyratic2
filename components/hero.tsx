"use client";

import { FullWidthDivider } from "@/components/full-width-divider";
import { DecorIcon } from "@/components/decor-icon";
import ShinyText from "@/components/ShinyText";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon, SearchIcon } from "lucide-react";

import {
  Field,
} from "@/components/ui/field";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/components/animate/tabs";

import MuxPlayer from '@mux/mux-player-react';


const popularTags = [
  {
    name: "Web Development",
    count: "12k+",
    popular: true
  },
  {
    name: "App Development",
    count: "8k+",
    popular: false
  },
  {
    name: "UI/UX Design",
    count: "6k+",
    popular: false
  },

];




export function Client() {
  return (
    <Field className="w-full ">
      <InputGroup className="h-11 ">
        <InputGroupAddon align="inline-start">
          <SearchIcon
            className="text-muted-foreground"
            size={19}
          />
        </InputGroupAddon>

        <InputGroupInput
          id="search"
          placeholder="Search skills, services..."
        />

        <InputGroupAddon align="inline-end">
          <Button
            className="cursor-pointer "
            size="sm"
          >
            <SearchIcon size={16} />

            <span className="hidden md:inline">
              SEARCH
            </span>
          </Button>
        </InputGroupAddon>

      </InputGroup>
    </Field>
  );
}


import { Sparkles } from "lucide-react";


export function PopularSkills() {
  return (
    <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start hidden md:flex">

      {popularTags.map((item) => (
        <Badge
          key={item.name}
          variant="secondary"
          className="cursor-pointer rounded-full px-3 py-1 border-0"
        >

          {item.popular && (
            <Sparkles
              size={14}
              className="mr-1"
            />
          )}

          {item.name}

          <span className="ml-1 text-xs text-muted-foreground">
            {item.count}
          </span>

        </Badge>
      ))}

    </div>
  );
}





function VideoPlayer() {
  return (
    <div>
      <MuxPlayer
        playbackId="mpcW93SJGxZ2GkU6z7De4bjNqTRZ9drnQ9fLdQKpWVk"
        streamType="on-demand"
        autoPlay
        muted
        className="w-full h-full aspect-video rounded-2xl!"

      />
    </div>
  )
}




export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden [--shine-text:#ff7c20]
[--shine-color:#000000]
dark:[--shine-text:#b5b5b5]
dark:[--shine-color:#ffffff] ">

      <div className="relative w-full px-2 sm:px-4">

        <DecorIcon className="size-3" position="top-left" />
        <DecorIcon className="size-3" position="top-right" />
        <DecorIcon className="size-3" position="bottom-left" />
        <DecorIcon className="size-3" position="bottom-right" />


        <div className="grid min-h-[520px] grid-cols-1 items-center gap-10 py-12 lg:grid-cols-2">


          {/* LEFT CONTENT */}
          <div>

            <Badge
              className="w-fit rounded-full px-4 py-1"
              asChild
            >
              <a href="#">
                Freelance Marketplace
                <ArrowUpRightIcon size={15} />
              </a>
            </Badge>


            <div className="mt-7 flex flex-col">

              <div className="leading-none">
                <ShinyText
                  text="Hire Top Talent"
                  speed={2}
                  delay={0}
                  color="var(--shine-text)"
                  shineColor="var(--shine-color)"
                  spread={120}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={false}
                  disabled={false}
                />

                <ShinyText
                  text="For Any Project ✨"
                  speed={2}
                  delay={0}
                  color="var(--shine-text)"
                  shineColor="var(--shine-color)"
                  spread={120}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={false}
                  disabled={false}
                />
              </div>


              <p className="mt-4 w-full md:max-w-xl text-sm  text-muted-foreground sm:text-base md:text-lg">
                Connect with verified freelancers, developers, designers and experts.
                <span className="hidden md:flex">                Get your project done faster with trusted professionals.
                </span>
              </p>




              <Tabs
                defaultValue="client"
                className="mt-6 w-full max-w-xl"
              >

                <TabsList className="grid w-full grid-cols-2 rounded-xl">

                  <TabsTrigger value="client">
                    I’m Client
                  </TabsTrigger>

                  <TabsTrigger value="freelancer">
                    I’m Freelancer
                  </TabsTrigger>

                </TabsList>


                <TabsContents className="mt-3">



                  <TabsContent
                    value="client"
                    className="text-sm text-muted-foreground"
                  >
                    <div className="flex flex-col">
                      <Client />
                      <PopularSkills />
                    </div>
                  </TabsContent>


                  <TabsContent
                    value="freelancer"
                    className="text-sm text-muted-foreground"
                  >
                    <div className="flex flex-col gap-2">
                      Showcase your skills and earn from projects.
                      <Button>Get Start Your Journey                 <ArrowUpRightIcon size={15} />
                      </Button>
                    </div>
                  </TabsContent>

                </TabsContents>

              </Tabs>




            </div>

          </div>



          {/* RIGHT VIDEO CONTENT */}
          <div className="flex justify-center lg:justify-end">

            <div className="
    group
    relative
    w-full
    max-w-4xl
    overflow-hidden
    rounded-2xl
    border
    border-white/10
    bg-white/5
    p-2
    backdrop-blur
  ">

              <VideoPlayer />

            </div>

          </div>


        </div>

      </div>


      <FullWidthDivider className="-top-px" />
      <FullWidthDivider className="-bottom-px" />

    </section>
  );
}