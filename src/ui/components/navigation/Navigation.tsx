import Link from "next/link"
import { Container } from "../container/Container"
import { Typography } from "@/ui/design-system/typography/Typography"


export const Navigation = () => {

    return (
        <Container className="flex flex-col items-center justify-between gap-4 pt-14 pb-10 border-b border-secondary-600">
            <Typography variant="body-sn" theme="blue-300">
                Cliquez sur un profil pour en savoir plus de mes compétences
            </Typography>
            <div className="flex flex-row gap-8">
                <Link className="" href="/developer">
                    <Typography variant="h5" theme="gray-600" className="flex items-center space-x-1 hover:text-secondary-800">
                        Developer
                    </Typography>
                </Link>
                <Link className=" " href="/data-scientist">
                    <Typography variant="h5" theme="gray-600" className="flex items-center space-x-1 hover:text-secondary-800">
                        Data Scientist
                    </Typography>
                </Link>
            </div>
            </Container>
    )
}
