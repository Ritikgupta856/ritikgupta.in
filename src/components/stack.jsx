import Image from "next/image";
import { getTechIcon, stackCategories } from "@/lib/data";
import Heading from "./heading";

export default function Stack() {
  return (
    <section id="stack" className="w-full scroll-mt-8">
      <Heading title="Stack" />

      <div>
        {stackCategories.map((category) => (
          <div
            key={category.label}
            className="flex flex-col gap-2.5 border-b border-border py-3.5 first:pt-0 last:border-0 last:pb-0 sm:flex-row sm:gap-6"
          >
            <p className="shrink-0 font-mono text-xs text-foreground sm:w-32 sm:pt-0.5">
              {category.label}
            </p>

            <ul className="flex flex-wrap gap-1.5">
              {category.tools.map((tool) => {
                const icon = getTechIcon(tool);
                return (
                  <li
                    key={tool}
                    className="flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-xs text-foreground/70 dark:text-muted-foreground"
                  >
                    {icon && (
                      <Image
                        src={icon.icon}
                        alt=""
                        width={12}
                        height={12}
                        className="size-3 shrink-0 object-contain dark:invert"
                      />
                    )}
                    {tool}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
