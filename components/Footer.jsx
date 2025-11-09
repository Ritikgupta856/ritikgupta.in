import Link from "next/link";
import { Github, Linkedin} from "lucide-react";
import { IconBrandX } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer>
      <div className="border-t">
        <div className="flex flex-col items-center justify-between gap-3 p-4 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Ritik Gupta. All rights reserved.</p>
          <div className="flex flex-row justify-center space-x-2">
            <a
              href="https://www.linkedin.com/in/ritikgupta856/"
              className="text-zinc-500 text-sm relative"
              target="__blank"
            >
              <span className="relative z-10 px-2 py-2 inline-block hover:text-cyan-500">
                <Linkedin className="h-5 w-5 hover:text-primary transition duration-150" />
              </span>
            </a>

            <a
              href="https://github.com/ritikgupta856"
              className="text-zinc-500 text-sm relative"
              target="__blank"
            >
              <span className="relative z-10 px-2 py-2 inline-block hover:text-cyan-500">
                <Github className="h-5 w-5 hover:text-primary transition duration-150" />
              </span>
            </a>

            <a
              href="https://x.com/ritikgupta856"
              className="text-zinc-500 text-sm relative"
              target="__blank"
            >
              <span className="relative z-10 px-2 py-2 inline-block hover:text-cyan-500">
                <IconBrandX className="h-5 w-5 hover:text-primary transition duration-150" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
