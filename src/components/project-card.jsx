import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { getTechIcon } from "@/lib/data";
import { cn } from "@/lib/utils";

const buttonClass =
  "relative z-10 inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground";

export default function ProjectCard({
  title,
  href,
  githubLink,
  tags,
  image,
  description,
}) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-background transition-colors hover:border-foreground/20">
      {image && (
        <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-muted">
          <Image
            src={image}
            alt={`${title} screenshot`}
            fill
            sizes="(min-width: 768px) 460px, 100vw"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-medium leading-snug text-foreground">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="after:absolute after:inset-0 after:rounded-xl"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>

        {description && (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}

        {tags?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => {
              const icon = getTechIcon(tag);
              return (
                <li
                  key={tag}
                  className="flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 font-mono text-[0.6875rem] text-muted-foreground"
                >
                  {icon && (
                    <Image
                      src={icon.icon}
                      alt=""
                      width={12}
                      height={12}
                      className={cn(
                        "size-3 shrink-0 object-contain",
                        icon.monochrome && "dark:invert",
                      )}
                    />
                  )}
                  {tag}
                </li>
              );
            })}
          </ul>
        )}

        {(href || githubLink) && (
          <div className="mt-auto flex items-center gap-2 pt-5">
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass}
              >
                <ArrowUpRight className="size-3.5" />
                Live
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass}
              >
                <Github className="size-3.5" />
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
