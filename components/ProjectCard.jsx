import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectCard({ title, description, href, image, tags }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block mb-4 w-full"
      aria-label={title}
    >
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10 hover:border-violet-500/50 dark:hover:border-violet-400/50 relative group">
        <span className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-violet-500/0 via-violet-500/60 to-violet-500/0 dark:from-violet-400/0 dark:via-violet-400/60 dark:to-violet-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        <span className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-violet-500/0 via-violet-500/60 to-violet-500/0 dark:from-violet-400/0 dark:via-violet-400/60 dark:to-violet-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

        {image && (
          <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-violet-50 to-blue-50 dark:from-violet-950/20 dark:to-blue-950/20">
            <Image
              src={image}
              alt={`${title} image`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        <CardHeader>
          <CardTitle className="text-xl">
            {title}
          </CardTitle>
          {!image && (
            <CardDescription className="text-sm">
              {description}
            </CardDescription>
          )}
        </CardHeader>

        {image && (
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
            
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <Badge 
                    key={idx} 
                    variant="secondary"
                    className="text-xs font-normal bg-violet-100 text-violet-700 dark:bg-violet-950/50 dark:text-white hover:bg-violet-200 dark:hover:bg-violet-950/70"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        )}
      </Card>
    </Link>
  );
}