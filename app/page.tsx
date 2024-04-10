"use client"
import { Container } from "@/ui/components/container/Container";
import { Spacing } from "@/ui/design-system/spacing/Spacing";
import { Contact } from "@/ui/modules/contact/component/Contact";
import { TopHero } from "@/ui/modules/hero-top/component/Top-hero";
import { Projects } from "@/ui/modules/projet/component/project_bis";
import { SkillsBis } from "@/ui/modules/skills/skills_bis";


export default function Home() {

  return (
    <Container>
      <TopHero />
      <Spacing />
      <Projects />
      <Spacing />
      {/* <Skill /> */}
      <SkillsBis />
      <Spacing size="md" />
      <Contact />
      <Spacing size="md" />
    </Container>
  );
}
