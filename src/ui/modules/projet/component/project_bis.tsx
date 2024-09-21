"use client"
import { Container } from "@/ui/components/container/Container";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "../../../../components/ui/bento-grid";

export const Projects = () => {
    return (
        <Container>
        <h1 className="text-4xl font-caption">
            Projets
        </h1>
            <h2 className="pb-2 text-xl font-semibold tracking-tight">
                Mes récentes réalisations
            </h2>
        <BentoGrid className="md:auto-rows-auto">
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
        description: "Il s'agit d'un réseau où les adhérents peuvent partagés les projets et recevoir des retours...",
        header: <Skeleton img="/assets/images/ci_uam.png" alt="image de site" />,
        className: "md:col-span-2",
        link: "https://coderapp-99e22.web.app/"
    },
    {
        title: "Dite minèraux du Sénégal",
        description: "Collecter, Nettoyage, visualisation des données avec streamlit...",
        header: <Skeleton img="/assets/images/mineraux.png" alt="image de site" />,
        className: "md:col-span-1",
        link: "https://minerauxvisiaux.streamlit.app/"
    },
    {
        title: "E-learning",
        description: "C'est une plateforme de publication et d'apprentissage...",
        header: <Skeleton img="/assets/images/justLearn.png" alt="Capture de la plateforme justLearn" />,
        className: "md:col-span-1",
        link: "https://just-create.vercel.app"
    },
    {
        title: "Mise en place d'un entrepôts de données",
        description:
            "Conception, Modélisation et implémentation d'un data Warehouse et visualisation. ETL, Data Integration, Data Orchectration,...",
        header: <Skeleton img="/assets/images/projet_bi.png" alt="image de site" />,
        className: "md:col-span-2",
        link: "#"
    },
];
