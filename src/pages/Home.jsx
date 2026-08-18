import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ExperiencePreview } from "@/components/sections/ExperiencePreview";
import { EducationPreview } from "@/components/sections/EducationPreview";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <ExperiencePreview />
      <EducationPreview />
      <CTA />
    </>
  );
}