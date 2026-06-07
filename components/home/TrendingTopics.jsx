import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Code2,
  PenTool,
  Megaphone,
  FileText,
  Video,
  Sparkles,
  Music,
  Briefcase,
  Handshake,
  Terminal,
  Database,
  Globe,
  ShieldCheck,
  Smartphone,
  Cloud,
} from "lucide-react";

const categories = [
  { label: "Programming & Tech", sub: "Web, Apps & Systems", icon: Code2 },
  { label: "UI / UX Design", sub: "Graphics & Interfaces", icon: PenTool },
  { label: "Digital Marketing", sub: "SEO, Ads & Growth", icon: Megaphone },
  { label: "Content Writing", sub: "Blogs & Copywriting", icon: FileText },
  { label: "Video & Animation", sub: "Editing & Motion", icon: Video },
  { label: "AI Services", sub: "Automation & Models", icon: Sparkles },
  { label: "Music & Audio", sub: "Voice & Sound", icon: Music },
  { label: "Business", sub: "Strategy & Growth", icon: Briefcase },
  { label: "Consulting", sub: "Expert Advice", icon: Handshake },
  { label: "Backend Development", sub: "APIs & Servers", icon: Terminal },
  { label: "Databases", sub: "SQL & NoSQL", icon: Database },
  { label: "Web Development", sub: "Modern Websites", icon: Globe },
  { label: "Cyber Security", sub: "Protection & Audit", icon: ShieldCheck },
  { label: "Mobile Apps", sub: "Android & iOS", icon: Smartphone },
  { label: "Cloud Services", sub: "AWS & DevOps", icon: Cloud },
];

function TrendingTopics() {
  return (
    <div className="w-full flex justify-center mt-6 px-4">
      
      {/* Inner centered container */}
      <div className="w-full max-w-6xl">

        {/* Mobile */}
        <div className="md:hidden w-full">
          <ScrollArea className="w-full">
            
            <div className="flex gap-3 pb-3 w-max mx-auto">
              {categories.map((item, index) => {
                const Icon = item.icon;

                return (
                  <button
                    key={index}
                    className="
                      flex-shrink-0
                      w-[190px]
                      text-left
                      p-3
                      rounded-2xl
                      border border-border
                      bg-background
                      hover:bg-gradient-to-br
                      hover:from-orange-50
                      hover:to-transparent
                      hover:border-orange-300
                      hover:shadow-xl
                      hover:-translate-y-1
                      transition-all duration-300
                      active:scale-95
                    "
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-orange-500" />
                      <span className="text-sm font-semibold">
                        {item.label}
                      </span>
                    </div>

                    <p className="text-xs text-muted-foreground whitespace-normal leading-snug">
                      {item.sub}
                    </p>
                  </button>
                );
              })}
            </div>

            <ScrollBar orientation="horizontal" className="hidden" />
          </ScrollArea>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex flex-wrap justify-center gap-3">
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={index}
                className="
                  flex items-center gap-3
                  px-4 py-3
                  rounded-xl
                  border border-border
                  bg-background
                  hover:bg-accent
                  hover:shadow-md
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <Icon className="w-5 h-5 text-orange-500" />

                <div className="text-left">
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.sub}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default TrendingTopics;