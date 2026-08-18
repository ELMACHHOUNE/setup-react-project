import { Link } from "react-router-dom";
import { ArrowRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/Reveal";
import { experience, experiencePlaceholder } from "@/data/experience";

export function ExperiencePreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <Reveal>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-mono text-sm text-accent"># career</h2>
            <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Professional experience
            </h3>
          </div>
          <Button
            variant="outline"
            nativeButton={false}
            render={<Link to="/experience" />}>
            Full timeline
            <ArrowRight />
          </Button>
        </div>
      </Reveal>

      <div className="grid gap-5">
        {experience.map((item, index) => (
          <Reveal key={index} delay={index * 0.06}>
            <Card className="h-full">
              <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-accent">
                  <Briefcase className="size-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-heading font-medium">
                      {item.role || "[Role]"}
                      {item.company && (
                        <span className="text-muted-foreground">
                          {" "}
                          · {item.company}
                        </span>
                      )}
                    </h4>
                    {item.period && (
                      <span className="font-mono text-xs text-muted-foreground">
                        {item.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  {item.technologies?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-[11px]">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
        {experiencePlaceholder && (
          <p className="text-xs text-muted-foreground">
            Note: experience data is currently a placeholder. Edit{" "}
            <code className="rounded bg-muted px-1">src/data/experience.js</code>{" "}
            to add your real work history.
          </p>
        )}
      </div>
    </section>
  );
}