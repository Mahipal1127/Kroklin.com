import { Hero, QuoteSection, TrustedBy, NextSection, ServicesTeaser, Projects, ProjectJourney, FAQs, ClosingCTA } from '@/components/sections';
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <QuoteSection />
      <Reveal>
        <TrustedBy />
      </Reveal>
      <NextSection />
      <ServicesTeaser />
      <Reveal delay={0.2}>
        <Projects />
      </Reveal>
      <ProjectJourney />
      <FAQs />
      <ClosingCTA />
    </>
  );
}
