/* eslint-disable react/no-unescaped-entities */
import { Container } from "@/ui/components/container/Container"
import { Code } from "../hero-top/component/Top-hero"
import Image from "next/image"

export const SkillsBis = () => {
  return (
    <Container className="flex flex-col items-start gap-4">
          <h1 className="text-4xl font-caption">
              Skills
          </h1>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            I love working on...
        </h2>
        <div className="flex max-md:flex-col gap-4">
            <div className="flex flex-col gap-2 flex-1">
                  <Image
                      src="/svg/react.svg"
                      alt="powerBI logo"
                      width={42}
                      height={42}
                      className="animate-spin"
                      style={{animationDuration: "10s"}}
                  />
                 <h3 className="text-2xl font-semibold tracking-tight">React</h3>
                  <p className="text-sm text-muted-foreground">J'utilise <Code>React</Code> pour créer des aplications interactives.<Code>NextJs</Code> est utiliserr comme un frontend et Backend framework. Avec comme base de données <Code>Prisma</Code> ou <Code className="text-alert-success">Firebase</Code> pour la gestion de la base de donnees NoSQL.</p>
            </div>
              <div className="flex flex-col gap-2 flex-1">
                  <Image
                      src="/svg/python.svg"
                      alt="powerBI logo"
                      width={42}
                      height={42}
                      />
                  <h3 className="text-2xl font-semibold tracking-tight">Python</h3>
                  <p className="text-sm text-muted-foreground">Je travail sur la science des données avec <Code>Python</Code> et toutes les bibliothèques qui vont avec...</p>
              </div>
            <div className="flex flex-col gap-2 flex-1">
                <Image
                    src="/svg/power_BI.png"
                    alt="powerBI logo"
                    width={42}
                    height={42}
                    />
                 <h3 className="text-2xl font-semibold tracking-tight">Power BI</h3>
                <p className="text-sm text-muted-foreground">Je crée aussi des dashboard interactifs avec <Code className="text-alert-success">Power BI Desktop</Code>. J'utilise aussi <Code>Python</Code> notamment avec le frameWork <Code className="text-alert-danger">Streamlit</Code></p>
            </div>
            </div>
        
    </Container>
  )
}
