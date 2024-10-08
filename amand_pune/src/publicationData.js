import Paothang from "./assets/paothang.png";
import Memoirs from "./assets/memoirs.png";
import PaothangPDF from "/Paothang.pdf";
import MemoirPDF from "/memoir.pdf";

const publications = [
  {
    key: 1,
    year: 2016,
    pubName: "Paothang Issue No.1",
    link: PaothangPDF,
    pubImage: Paothang,
    pubDesc:
      "This e-Newsletter presents the glimpse of the major activities of this organisation during the last three months. This will help in making a bridge amongst the members through regular communication and high-valued information. The invited article and the guest articles in the newsletter are the value-added bonanza to the readers.",
  },
  {
    key: 2,
    year: 2019,
    link: MemoirPDF,
    pubName: "Memoirs 2016",
    pubImage: Memoirs,
    pubDesc:
      "The official memoir of the Association of Man`ipuri Diaspora (AMAND) has been published to provide information about the association to the general public and to the members, in particular. All possible efforts have been made to ensure the accuracy of the contents.",
  },
];

export default publications;
