import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Reveal } from "@/components/ui/Reveal";
import { TechBadge } from "@/components/ui/TechBadge";
import { skillGroups } from "@/data/skills";
import { cn } from "@/lib/utils";

const groupAccents = [
  "text-accent",
  "text-emerald-500",
  "text-fuchsia-500",
  "text-sky-500",
];

export function TechStack() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <Reveal>
        <div className="mb-10 max-w-2xl">
          <h2 className="font-mono text-sm text-accent"># tech-stack</h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies I work with
          </h3>
          <p className="mt-3 text-muted-foreground">
            A focused, modern toolchain used to build reliable products end to
            end.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.06}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className={cn("flex items-center gap-2", groupAccents[index % groupAccents.length])}>
                  <span className="font-mono text-xs">0{index + 1}</span>
                  {group.title}
                </CardTitle>
                <CardDescription>{group.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <TechBadge key={skill} tech={skill} variant="secondary" />
                ))}
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}