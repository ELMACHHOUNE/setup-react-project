import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import Carousel from "@/components/ui/carousel";
import { projectsWithImages } from "@/data/projects";

export default function Projects() {
  return (
    <div className="pb-8">
      <PageHeader
        eyebrow="~/projects"
        title="Projects"
        description="A selection of things I've built — full stack apps, open-source work and AI experiments."
      />

      <section className="mx-auto max-w-6xl overflow-x-clip px-4 pt-10 sm:px-6">
        <Reveal>
          <Carousel slides={projectsWithImages} />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-3 text-center font-mono text-xs text-muted-foreground">
            Data lives in{" "}
            <code className="rounded bg-muted px-1">src/data/projects.js</code> —
            add images, links and details for each project.
          </p>
        </Reveal>
      </section>
    </div>
  );
}