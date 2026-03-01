"use client";
import React from "react";

const Heading = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`mb-8 text-left sm:mb-10 ${className}`}>
      <h2 className="flex items-center justify-start gap-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-xs text-muted-foreground sm:text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;
