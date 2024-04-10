import { Container } from "@/ui/components/container/Container"
import { CardContact } from "./CardContact"

export const Contact = () => {
  return (
    <Container>
        <h1 className="text-4xl font-caption">
            Contactez-moi
        </h1>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight">
          Je serais très heureux de travailler avec vous.
        </h2>
          <div className="flex max-md:flex-col w-full gap-4">
        <CardContact 
            name="bakhoum.alou21@gmail.com"
            image="/assets/images/profil.jpg"
          meduimImage="/assets/images/email_logo.png"
            description="Mon Email"
            url="mailto:bakhoum.alou21@gmail.com"
        />
        <CardContact 
            name="Albert Sandokh Bakhoum"
          image="/assets/images/profil.jpg"
          meduimImage="/assets/images/linkedIn_logo.png"
            description="Mon profil LinkedIn"
            url="https://www.linkedin.com/in/albert-sandokh-bakhoum-020305266/"
        />
        </div>
    </Container>
  )
}
