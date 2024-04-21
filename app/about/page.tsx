/* eslint-disable react/no-unescaped-entities */
import { Typography } from '@/components/ui/Typography'
import { Container } from '@/ui/components/container/Container'
import { FormationCard } from '@/ui/modules/formation/component/formationCard'
import Image from 'next/image'

export default function AboutPage() {
    return (
        <Container className='flex flex-col space-y-8 py-10'>
            <Typography>
                About me
            </Typography>
            <div className='flex flex-row items-center justify-between'>
            <Image
                src="/assets/images/profil.png"
                alt="Profile picture of the author"
                width={420}
                height={420}
            />
            <div className='text-justify space-y-4 pt-24'>
                <p>
                    Je suis étudiant en fin de premier cycle à l'École des Sciences et
                Techniques de l'Ingénierie (ESTI) de l'Université Amadou Mahtar
                Mbow de Dakar. Je suis la spécialisation <span className='text-secondary-600'>Système Electroniques,
                Informatique et de Télécommunication</span> je suis animé par un feu ardent d'apprentissage et de passion afin d'acquérir des
                compétences.
                </p>
                <p>Ma principale compétences, c'est ma capacité de m'adapter au changement, de réseau des problèmes.</p>
                <p>
                    J'aime développer des applications et j'aime travailler pour rendre les données utiles.
                </p>
            </div>
            </div>
            <div className='flex  flex-col space-y-10 pt-10'>
            <Typography>Parcours</Typography>
            <FormationCard />  
            </div>
        </Container>
    )
}
