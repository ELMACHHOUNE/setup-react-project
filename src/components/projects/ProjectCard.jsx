import { ExternalLinkIcon, Folder } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { TechBadge } from "@/components/ui/TechBadge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, className }) {
  const hasImage = Boolean(project.image);
  const isPlaceholder = project.title.startsWith("[Placeholder]");

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-border/60 hover:shadow-lg hover:shadow-black/5",
        className,
      )}>
      <div className="relative aspect-[16/9] overflow-hidden">
        {hasImage ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted to-card text-muted-foreground">
            <Folder className="size-10 opacity-40" />
          </div>
        )}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-base font-medium leading-snug">
            {project.title}
          </h3>
          {isPlaceholder && (
            <span className="shrink-0 rounded-md bg-muted px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">
              placeholder
            </span>
          )}
        </div>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <TechBadge
              key={tech}
              tech={tech}
              variant="outline"
              className="text-[11px]"
            />
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2">
          {project.github ? (
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<a href={project.github} target="_blank" rel="noreferrer" />}
              aria-label={`${project.title} on GitHub`}>
              <IconBrandGithub />
              GitHub
            </Button>
          ) : null}
          {project.demo ? (
            <Button
              size="sm"
              nativeButton={false}
              render={<a href={project.demo} target="_blank" rel="noreferrer" />}
              aria-label={`${project.title} live demo`}>
              <ExternalLinkIcon />
              Live Demo
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}