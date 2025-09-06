import Cards from "../Cards/Cards";
import "./Catalogo.sass";
import broa1 from "../../assets/IMG-20250831-WA0006.png";
import broa2 from "../../assets/IMG-20250831-WA0003.png";
import broa3 from "../../assets/IMG-20250831-WA0002.png";
import broa4 from "../../assets/IMG-20250831-WA0005.png";
import broa5 from "../../assets/IMG-20250831-WA0008.png";
import broa6 from "../../assets/IMG-20250831-WA0010.png";
import broa7 from "../../assets/IMG-20250831-WA0014.png";
import broa8 from "../../assets/IMG-20250831-WA0012.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Catalogo({id}) {
  useGSAP(() => {
    gsap.fromTo(
      ".cardItem", // classe que vamos dar para cada card
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2, // anima 1 por 1
        scrollTrigger: {
          trigger: ".conatinerCatalogo",
          start: "top 80%",
        },
      }
    );
  });

  return (
    <>
      <h1 className="tituloCatalogo" id={id}>Catálogo</h1>
      <div className="conatinerCatalogo">
        <Cards img={broa1} titulo="Tradicional" className="cardItem" />
        <Cards img={broa2} titulo="Nutela" className="cardItem" />
        <Cards img={broa3} titulo="Goiabada" className="cardItem" />
        <Cards img={broa4} titulo="Chocolate Branco" className="cardItem" />
        <Cards img={broa5} titulo="Erva doce" className="cardItem" />
        <Cards img={broa6} titulo="MM's" className="cardItem" />
        <Cards img={broa7} titulo="Chocolate" className="cardItem" />
        <Cards img={broa8} titulo="Misto" className="cardItem" />
      </div>
    </>
  );
}
