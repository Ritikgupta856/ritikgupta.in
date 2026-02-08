import React from "react";
import Image from "next/image";

const HeroHeader = () => {
  return (
    <div className="flex items-center md:items-center gap-4 p-4 border-b border-zinc-200 dark:border-zinc-800 relative">
      <div className="relative flex-shrink-0">
        <div className="size-32 md:size-40 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-800 p-1 bg-zinc-50 dark:bg-zinc-900">
          <Image
            alt="Ritik Gupta"
            width={160}
            height={160}
            className="object-cover rounded-full"
            src="/avatar.jpg"
            priority
          />
        </div>
      </div>

      <div className="flex-1 space-y-1">
        <div className="flex gap-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ritik Gupta
          </h1>
          <div className="flex gap-1 items-center">
            <div className="size-5 bg-[#1DA1F2] rounded-full flex items-center justify-center text-[10px] text-white">
              ✓
            </div>
          </div>
        </div>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Full-Stack Software Engineer
        </p>
      </div>
    </div>
  );
};

export default HeroHeader;
