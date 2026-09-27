import Image from "next/image";
import { experience, getTechIcon } from "@/lib/data";
import Heading from "./heading";
import ShowMore from "./show-more";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const VISIBLE_POINTS = 3;

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
        <div className="grid min-w-0 flex-1 gap-y-0.5 sm:grid-cols-[1fr_auto] sm:gap-x-4">
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="justify-self-start font-medium uppercase text-foreground transition-colors hover:text-muted-foreground"
          >
            {experience.company}
          </a>
          <p className="text-sm text-muted-foreground">
            {experience.role} · {experience.location}
          </p>
          <p className="mt-1 font-mono text-xs text-muted-foreground sm:col-start-2 sm:row-start-1 sm:mt-0 sm:self-center">
            {experience.duration}
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
                        className="size-4 object-contain dark:invert"
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

      <ShowMore
        id="work-list"
        hiddenCount={experience.workDone.length - VISIBLE_POINTS}
        className="mt-5"
      >
        <ul className="space-y-2.5">
          {experience.workDone.map((point, i) => (
            <li
              key={i}
              className={`${i >= VISIBLE_POINTS ? "hidden group-data-[expanded=true]/more:flex" : "flex"} gap-3 text-sm leading-relaxed text-foreground/80`}
            >
              <span className="select-none text-muted-foreground">–</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </ShowMore>
    </section>
  );
}
