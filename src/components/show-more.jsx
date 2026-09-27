"use client";

import { useState } from "react";

// Items past the limit use `hidden group-data-[expanded=true]/more:flex`, so
// they stay in the HTML for crawlers and only render once expanded.
export default function ShowMore({ id, hiddenCount, className = "", children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div id={id} data-expanded={expanded} className={`group/more ${className}`}>
        {children}
      </div>

      {hiddenCount > 0 && (
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={id}
            className="rounded-md border border-border px-3 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            {expanded ? "Show less" : `Show ${hiddenCount} more`}
          </button>
        </div>
      )}
    </>
  );
}
