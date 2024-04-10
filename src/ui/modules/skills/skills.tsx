/* eslint-disable react/no-unescaped-entities */
import { Skills_dataScientist, Skills_dev } from "@/ui/components/datas/skill"
import { Typography } from "@/ui/design-system/typography/Typography"
import { Competence } from "./component/competence"
import { Container } from "@/ui/components/container/Container"

export const Skill = () => {
    return (
        <Container>
            <h1 className="text-4xl font-caption">
                Skills
            </h1>
            <p className="text-sm font-caption pb-2">
                J'aime travailler sur ... 
            </p>
            <div className="flex flex-row">
            <div className="flex-1 flex-col space-y-4 ">
                <p className="text-sm font-caption">
                    La création d'application Web avec :
                </p>
                <div className="flex flex-wrap items-start gap-4">
                    {Skills_dev.map((skill, index) => (
                        <Competence key={index} skill={skill} />
                        )
                        )}
                </div>
            </div>
            <div className="flex-1 md:flex-col space-y-4">
                <p className="text-sm font-caption">
                    Le traitement et l'analyse des données avec :
                </p>
                <div className="w-full flex items-start">
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    {Skills_dataScientist.map((skill, index) => (
                        <Competence key={index} skill={skill} />
                        )
                        )}
                </div>
            </div>
        </div>
            </div>
        </Container>
    )
}
