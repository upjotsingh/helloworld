"use client";

import dynamic from "next/dynamic";
import SectionInView from "@/sections/SectionInView";

const ServicesSection = dynamic(() => import("@/sections/services/ServicesSection"), { ssr: false });
const ProcessSection = dynamic(() => import("@/sections/process/ProcessSection"), { ssr: false });
const ProjectsSection = dynamic(() => import("@/sections/projects/ProjectsSection"), { ssr: false });
const TestimonialsSection = dynamic(() => import("@/sections/testimonials/TestimonialsSection"), { ssr: false });
const QuoteSection = dynamic(() => import("@/sections/contact/QuoteSection"), { ssr: false });

export default function LazySections() {
  return (
    <>
      <SectionInView direction="left" delay={0.20}>
        <ServicesSection />
      </SectionInView>
      <SectionInView direction="right" delay={0.20}>
        <ProcessSection />
      </SectionInView>
      <SectionInView direction="left" delay={0.20}>
        <ProjectsSection />
      </SectionInView>
      <SectionInView direction="right" delay={0.20}>
        <TestimonialsSection />
      </SectionInView>
      <SectionInView direction="left" delay={0.20}>
        <QuoteSection />
      </SectionInView>
    </>
  );
}
