"use client";
import React from "react";

const Heading = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`mb-8 sm:mb-10 text-left ${className}`}>
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight flex items-center gap-3 justify-start">
        <span className="shrink-0 w-8 sm:w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full hidden sm:block" />
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-2 text-xs sm:text-sm md:text-base max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;
