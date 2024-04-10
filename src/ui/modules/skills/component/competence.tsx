import { skill } from "@/types/skills"
import Image from "next/image"
interface props {
    skill: skill
}
export const Competence = ({ skill }: props) => {
    return (
        <div>
            <div className="rounded-[22px] w-[110px] h-[120px] bg-secondary-950/15 p-3 sm:p-6 dark:bg-zinc-900 bg-indigo-900 flex flex-col gap-4 justify-center items-center hover:-translate-y-4">
                <Image
                    src={skill.image}
                    alt={skill.alt}
                    width={40}
                    height={40}
                />
                <h3 className="text-caption4 hover:text-white">{skill.name}</h3>
            </div>
        </div>
    )
}
