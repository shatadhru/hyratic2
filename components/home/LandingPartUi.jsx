"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Briefcase, Users, Sparkles } from "lucide-react";

const images = [
  "/landingimage1.jpg",
  "/landingimage2.jpg",
  "/landingimage3.jpg",
];

export default function SlideshowCard() {
  const [index, setIndex] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-xs md:max-w-7xl mx-auto my-2 h-[520px] rounded-2xl overflow-hidden shadow-2xl">

      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">

        {/* Badge */}
        <div className="flex items-center gap-2 mb-3 px-4 py-1 rounded-full bg-white/10 border border-white/20">
          <Sparkles className="w-4 h-4 text-orange-400" />
          <span className="text-xs text-gray-200">
           Ai Freelance Marketplace
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-stretch-expanded text-3xl md:text-5xl font-bold text-white">
          Find Talent. Get Work. Grow Fast.
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-gray-200 text-sm md:text-base max-w-2xl">
          Connect with verified freelancers or find high-paying projects in seconds.
        </p>

        {/* Search Bar */}
        <div className="mt-6 w-full max-w-lg flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-2 border border-white/20">

          <Search className="w-5 h-5 text-gray-300" />

          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search jobs, skills, freelancers..."
            className="border-0 bg-transparent text-white placeholder:text-gray-300 focus-visible:ring-0"
          />

          <Button className="rounded-full bg-orange-500 hover:bg-orange-600">
            Search
          </Button>
        </div>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">

          <Button className="rounded-full   flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            Find Work
          </Button>

          <Button
            variant="outline"
            className="rounded-full  border-white/30 flex items-center gap-2"
          >
            <Users className="w-4 h-4" />
            Hire Talent
          </Button>

        </div>

        {/* Stats */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-gray-300">
          <span>10k+ Projects</span>
          <span>5k+ Freelancers</span>
          <span>Secure Payments</span>
        </div>

      </div>

      
    </div>
  );
}