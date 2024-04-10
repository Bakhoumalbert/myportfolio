import clsx from "clsx";
import { RiYoutubeFill } from "react-icons/ri";
import { Button } from "../../design-system/button/Button";
import { footerSocialNetworksLinks } from "./social-link";
import { Container } from "../container/Container";

interface Props {
  theme: "gray" | "accent" | "secondary";
  className: string;
}

export const SocialNetworksButtons = ({
  className,
  theme = "secondary",
}: Props) => {

  const icoList = footerSocialNetworksLinks.map((socialNetwork, index) => (
    <Button
      key={index}
      variant="ico"
      iconTheme={theme}
      icon={{ icon: socialNetwork.icon ? socialNetwork.icon : RiYoutubeFill }}
      baseUrl={socialNetwork.baseUrl}
      linkType={socialNetwork.type}
    />
  ));

  return (
    <Container className="flex flex-col gap-4">
      <h1 className="text-4xl font-caption">
        Contacter-moi
      </h1>
    <div className={clsx(className, "flex items-center gap-3")}>
      {icoList}
    </div>
    </Container>
  );
};
