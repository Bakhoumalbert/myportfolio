/* eslint-disable react/no-unescaped-entities */
import { Container } from "@/ui/components/container/Container"
import { Code } from "../hero-top/component/Top-hero"
import Image from "next/image"

export const Skills = () => {
  return (
    <Container className="flex flex-col items-start gap-4">
          <h1 className="text-4xl font-caption">
              Compétences
          </h1>
        <h2 className="pb-2 text-xl font-semibold tracking-tight first:mt-0">
            Je travailler avec... 
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
                  <p className="text-sm text-muted-foreground">J'utilise <Code>React</Code> pour créer des aplications interactives. j'utilise <Code>NextJs</Code> est utiliser comme un frontend et Backend framework. Avec comme base de données <Code>Prisma</Code> ou <Code className="text-alert-success">Firebase</Code> pour la gestion de la base de donnees.</p>
            </div>
              <div className="flex flex-col gap-2 flex-1">
                  <Image
                      src="/svg/python.svg"
                      alt="powerBI logo"
                      width={42}
                      height={42}
                      />
                  <h3 className="text-2xl font-semibold tracking-tight">Python</h3>
          <p className="text-sm text-muted-foreground">Je travaille aussi comme <Code>Data Engineer</Code> avec <Code>Python</Code>. ça part de l'étude de la problèmatique de la collecter, de la nettoyage, à la visualisation avec les bibliothéques.</p>
              </div>
            <div className="flex flex-col gap-2 flex-1">
                <Image
                    src="/svg/power_BI.png"
                    alt="powerBI logo"
                    width={66}
                    height={66}
                    />
                 <h3 className="text-2xl font-semibold tracking-tight">Power BI</h3>
                <p className="text-sm text-muted-foreground">Je travaille sur des solutions d'aide à la décision à travers des dashboards interactifs avec <Code className="text-alert-success">Power BI Desktop</Code>. J'utilise aussi <Code>Python</Code> notamment avec les framework de visualisation.</p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <Image
            src="/svg/ETL.png"
                    alt="talend logo"
                    width={42}
                    height={42}
                    />
                 <h3 className="text-2xl font-semibold tracking-tight">ETL process</h3>
          <p className="text-sm text-muted-foreground">Je développe des outils moteurs d'Extractions, de Transformations et de Chargement pour vos entrepôts de données avec <Code>Talend</Code> et <Code>Python</Code>.</p>
            </div>
            </div>
        
    </Container>
  )
}
