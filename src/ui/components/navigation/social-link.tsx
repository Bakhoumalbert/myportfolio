
import { AppLinks } from "@/types/app-links";
import { RiGithubFill, RiLinkedinFill, RiMailCheckFill } from "react-icons/ri";

export const footerSocialNetworksLinks: AppLinks[] = [
    {
        label: "LinkedIn",
        baseUrl: "https://www.linkedin.com/in/albert-sandokh-bakhoum-020305266/",
        type: "external",
        icon: RiLinkedinFill
    },
    {
        label: "Github",
        baseUrl: "https://www.https://github.com/Bakhoumalbert",
        type: "external",
        icon: RiGithubFill
    },
    {
        label: "Email",
        baseUrl: "bakhoum.alou21@gmail.com",
        type: "external",
        icon: RiMailCheckFill
    },
]
