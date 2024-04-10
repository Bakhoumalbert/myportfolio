import { Typography } from "@/ui/design-system/typography/Typography";
import Image from "next/image";
import { formationData, formationListInterface } from "./formation-data";

export const FormationCard = () => {



  return (
    <div className="flex flex-col space-y-8 items-start">
          {formationData.map((formation, index) => (
            <div key={index} className="flex flex-col gap-4">
                <ListFormation formation={formation} />
            </div>
        ))}
    </div>
    )
}

interface Props {
    formation: formationListInterface
}

const ListFormation = ({ formation }: Props) => (
    <div className="ml-6 border-l-2 border-l-gray-400 hover:border-gray-600">
        <div className="flex flex-row gap-4 items-center pl-2">
            <div className="relative w-[90px] h-[80px] p-10 overflow-hidden">
                {/* <Image src={formation.image} alt={formation.imageAlt} fill className="object-scale-down blur-2xl" /> */}
                <Image src={formation.image} alt={formation.imageAlt} fill className="object-scale-down" />
            </div>
        {/* <Image width={80} height={20} src={formation.image} alt={formation.image}></Image> */}
        <div className="flex flex-col pt-2 gap-2">
            <Typography variant="body-base" theme="gray" component="span">
                {formation.duree}
            </Typography>
            <Typography variant="body-base" theme="gray" component="span">
                {formation.type}
            </Typography>
            <Typography variant="lead" theme="gray" component="span">
                {formation.title}
            </Typography>
            {/* <Typography variant="body-sn" component="p" theme="gray" className="ml-3">
                {formation.description}
            </Typography> */}
        </div>
        </div>
    </div>
)
