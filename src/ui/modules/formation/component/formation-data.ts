export interface formationListInterface {
    image: string;
    imageAlt: string;
    duree: string;
    title: string;
    type: string;
    description: string;
}

export const formationData: formationListInterface[] = [
  {
    image: "/assets/images/logouam.png",
    imageAlt: "Logo UAM",
    duree: "2020-2023",
    title: "Université Amadou Mahtar Mbow",
    type: "Licence en Système Electroniques, Informatique et de Télécommunication",
    description: "Consulte et partage des ressources",
  },
  {
    image: "/assets/images/collegeSt.png",
    imageAlt: "Logo College St Esprit",
    duree: "2013-2020",
    type: "Baccaulauréat Général",
    title: "Collége Saint Esprit de Mbour",
    description: "Consulte et partage des ressources",
  },

  //   {
  //     image: "",
  //     imageAlt: "",
  //     title: "Algorithme",
  //     description: "Consulte et partage des ressources",
  //   },
];
