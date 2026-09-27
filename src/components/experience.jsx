import Image from "next/image";
import { experience, getTechIcon } from "@/lib/data";
import { cn } from "@/lib/utils";
import Heading from "./heading";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Experience() {
  const techs = experience.techStack.split(", ");

  return (
    <section id="experience" className="w-full scroll-mt-8">
      <Heading title="Experience" />

      <div className="flex items-start gap-3.5">
        <img
          src={experience.logo}
          alt=""
          className="mt-0.5 size-10 shrink-0 rounded-lg bg-black object-cover ring-1 ring-border dark:bg-white"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-x-4 gap-y-0.5 sm:flex-row sm:items-baseline sm:justify-between">
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium uppercase text-foreground transition-colors hover:text-muted-foreground"
            >
              {experience.company}
            </a>
            <p className="shrink-0 font-mono text-xs text-muted-foreground">
              {experience.duration}
            </p>
          </div>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {experience.role} · {experience.location}
          </p>
        </div>
      </div>

      <TooltipProvider delayDuration={100}>
        <ul className="mt-5 flex flex-wrap gap-2">
          {techs.map((tech) => {
            const icon = getTechIcon(tech);
            return (
              <Tooltip key={tech}>
                <TooltipTrigger asChild>
                  <li className="flex size-8 cursor-default items-center justify-center rounded-md border border-border bg-muted transition-colors hover:border-foreground/30">
                    {icon ? (
                      <Image
                        src={icon.icon}
                        alt={tech}
                        width={16}
                        height={16}
                        className={cn(
                          "size-4 object-contain",
                          icon.monochrome && "dark:invert",
                        )}
                      />
                    ) : (
                      <span className="size-1.5 rounded-full bg-foreground/30" />
                    )}
                  </li>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-foreground text-background"
                >
                  <p className="text-[11px] font-semibold">{tech}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </ul>
      </TooltipProvider>

      <ul className="mt-5 space-y-2.5">
        {experience.workDone.map((point, i) => (
          <li
            key={i}
            className="flex gap-3 text-sm leading-relaxed text-foreground/80"
          >
            <span className="select-none text-muted-foreground">–</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
