"use client"
import { Container } from "@/ui/components/container/Container";
import { Spacing } from "@/ui/design-system/spacing/Spacing";
import { Contact } from "@/ui/modules/contact/component/Contact";
import { TopHero } from "@/ui/modules/hero-top/component/Top-hero";
import { Projects } from "@/ui/modules/projet/component/project_bis";
import { Skills } from "@/ui/modules/skills/skills";

export default function Home() {

  return (
    <Container>
      <TopHero/>
      <Spacing/>
      <Projects/>
      <Spacing/>
      <Skills/>
      <Spacing/>
      <Contact/>
      <Spacing/>
    </Container>
  );
}
