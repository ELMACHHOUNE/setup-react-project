import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/Reveal";
import { education, educationPlaceholder } from "@/data/education";

export function EducationPreview() {
  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-mono text-sm text-accent"># learning</h2>
              <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Education & certifications
              </h3>
            </div>
            <Button
              variant="outline"
              nativeButton={false}
              render={<Link to="/education" />}>
              View all
              <ArrowRight />
            </Button>
          </div>
        </Reveal>

        <div className="grid gap-5">
          {education.map((item, index) => (
            <Reveal key={index} delay={index * 0.06}>
              <Card className="h-full">
                <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-accent">
                    <GraduationCap className="size-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-heading font-medium">
                        {item.degree || "[Degree]"}
                        {item.institution && (
                          <span className="text-muted-foreground">
                            {" "}
                            · {item.institution}
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
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
        {educationPlaceholder && (
          <Reveal delay={0.1}>
            <p className="mt-4 text-xs text-muted-foreground">
              Note: education data is currently a placeholder. Edit{" "}
              <code className="rounded bg-muted px-1">src/data/education.js</code>{" "}
              to add your real background.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}