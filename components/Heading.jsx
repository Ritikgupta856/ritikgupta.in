"use client";
import React from "react";

const Heading = ({ heading }) => {
  return (
    <div className="relative w-full border-y border-zinc-200 dark:border-zinc-800 py-3 px-6 font-mono">

      <div className="absolute inset-0 
        before:absolute before:inset-y-[-1px] before:-left-[100vw] before:w-[200vw] before:-z-10 
  
        before:border-y before:border-zinc-200 before:dark:border-zinc-800">
      </div>

      <h2 className="relative z-10 text-2xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 flex items-center gap-2">

        {heading}
      </h2>
    </div>
  );
};

export default Heading;