"use client"
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "../../../../components/ui/bento-grid";
import { Container } from "@/ui/components/container/Container";

export const Projects = () => {
    return (
        <Container>
        <h1 className="text-4xl font-caption">
            Projets
        </h1>
        <BentoGrid className="py-6 md:auto-rows-[20rem]">
            {items.map((item, i) => (
                <BentoGridItem
                key={i}
                    link={item.link}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={item.className}
                    />
                    ))}
        </BentoGrid>
    </Container>
    );
}

interface Props {
    img: string;
    alt: string
}
const Skeleton = ({img, alt}: Props) => (
    <div className="relative flex flex-1 w-full min-h-[10rem] rounded">
        <Image fill className="absolute" src={img} alt={alt} />
    </div>
);
const items = [
    {
        title: "Club des Informaticiens de l'UAM",
        description: "Il s'agit d'un réseau où les adhérents peuvent partagés les projets et recevoir des retours",
        header: <Skeleton img="/assets/images/ci_uam.png" alt="image de site" />,
        className: "md:col-span-2",
        link: "https://coderapp-99e22.web.app/"
    },
    {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
        header: <Skeleton img="/assets/images/club_uam.png" alt="image de site" />,
        className: "md:col-span-1",
        link: "https://coderapp-99e22.web.app/"
    },
    {
        title: "Plateforme d'apprentissage",
        description: "C'est une plateforme de publication et d'apprentissage",
        header: <Skeleton img="/assets/images/justLearn.png" alt="Capture de la plateforme justLearn" />,
        className: "md:col-span-1",
        link: "https://just-code.vercel.app/"
    },
    {
        title: "Mise en place d'un entrepôts de données",
        description:
            "Modélisation et implémentation d'un data Warehouse pour la MFPAI.",
        header: <Skeleton img="/assets/images/static_apprenant1.png" alt="image de site" />,
        className: "md:col-span-2",
        link: "https://mfpai2023.streamlit.app/"
    },
];
