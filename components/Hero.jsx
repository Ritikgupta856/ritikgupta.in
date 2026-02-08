import React from "react";
import HeroHeader from "@/components/HeroHeader";
import HeroInfo from "@/components/HeroInfo";
import { Separator } from "./Separator";

const Hero = () => {
  return (
    <div className="w-full border border-zinc-200 dark:border-zinc-800 font-mono text-zinc-950 dark:text-zinc-50 shadow-sm">
      <HeroHeader />
      <Separator />
      <HeroInfo />
    </div>
  );
};

export default Hero;
