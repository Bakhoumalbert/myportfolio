/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
type ContactProps = {
    image: string;
    meduimImage: string;
    name: string;
    description: string;
    url:string
}
export const CardContact = (props: ContactProps) => {
  return (
    <Link href={props.url}>
    <Card className="p-3 bg-accent/10 hover:bg-accent/30 group inline-flex transition-colors items-center gap-4 rounded">
        <div className="relative">
            <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain" />
            <img src={props.meduimImage} alt={props.name} className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain" />
        </div>
        <div className="mr-auto">
            <div className="flex items-center gap-2">
                <p className="text-sm font-semibold">{props.name}</p>
            </div>
            <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
        <ArrowUpRight size={16} className="group-hover:translate-x-2 group-hover:-translate-y-2 mr-4 transition-transform" />
    </Card>
      </Link>
  )
}
