/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { cn } from "@/lib/utils"
import { Container } from "@/ui/components/container/Container"
import { Avatar } from "@/ui/design-system/avatar/Avatar"
import { LinkedinIcon } from "lucide-react"
import Link from "next/link"
import { ComponentPropsWithoutRef } from "react"


export const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return ( 
    <span className={cn("bg-accent/30 border border-accent hover:bg-accent/50 transition-colors font-mono px-1 py-0.5 text-primary rounded-sm",className)}
      {...props}
    />
  )
}

export const TopHero = () => {
  return (
      <Container className="flex max-md:flex-col-reverse items-start">
            <div className="flex-[2] gap-1">
                <h1 className="font-caption text-4xl font-bold">
                    Albert Sandokh BAKHOUM
                </h1>
                <h2 className="text-3xl font-caption">
                    Ingénieur en Informatique
                </h2>
              <p className="text-base">
                  Je suis passionné de création d'<span className="text-primary">application web</span> et de la <span className="text-primary">science des données</span> et je partage du contenu sur {" "}
              <Link href="https://www.linkedin.com/in/albert-sandokh-bakhoum-020305266/">
                <Code className="inline-flex items-center gap-1">
                    <LinkedinIcon size={16} className="inline" />LinkedIn
                </Code>
              </Link>
              </p>
            </div>
            <div className="flex-1 max-md:m-auto ml-auto">
              <div className="flex justify-end ">
              <Avatar src={"/assets/images/profil.jpg"} alt="mon avatar" size='extra-large' />
              </div>
            </div>    
        </Container>
  )
}
