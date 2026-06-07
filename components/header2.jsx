import React from "react";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const skills = [
  "Web Dev",
  "AI / ML",
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
  "Flutter",
  "UI/UX",
  "DevOps",
  "Cyber",
  "Python",
  "Django",
  "MongoDB",
  "Firebase",
];

function Header2() {
  return (
    <div className="w-full px-4 py-3 bg-background border-b ">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex gap-2">
          {skills.map((skill) => (
            <Link key={skill} href="/">
              <Button
                size="sm"
                variant="secondary"
                className="text-xs rounded-full px-3 hover:bg-secondary"
              >
                {skill}
              </Button>
            </Link>
          ))}
        </div>

        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </div>
  );
}

export default Header2;