import "./Sobre.sass";
import Logo from "../../assets/logo.png";
import React, { useRef, useEffect } from "react";
import broaDireita from "../../assets/broaDireita.png";
import broaEsquerda from "../../assets/broaEsquerda.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Sobre({id}) {
  const phoneNumber = "5519986125489";
  const textRef = useRef(null);

  function handleClick() {
    window.location.href = `https://wa.me/${phoneNumber}`;
  }

  useGSAP(() => {
    // Nova animação da logo: fade-in suave
    gsap.fromTo(
      ".logoBoaBroa",
      { opacity: 0, scale: 0.6 },
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" }
    );

    // Efeito de digitação no <p>
    const el = textRef.current;
    const message =
      "Produzimos broas caseiras com ingredientes selecionados e com sabor inesquecível";

    el.textContent = "";

    gsap.to({}, {
      duration: message.length * 0.05,
      onUpdate: function () {
        const progress = this.progress();
        const chars = Math.floor(progress * message.length);
        el.textContent = message.substring(0, chars);
      }
    });
  });

  return (
    <>
      <div className="containerSobre" id={id}>
        <img src={Logo} alt="Imagem logo boabroa" className="logoBoaBroa" />
        <div className="containerWords">
          <h1>Sobre nós</h1>
          <p ref={textRef}></p>
          <button onClick={handleClick} className="btnWhats">
            Peça já a sua!
          </button>
          <img src={broaEsquerda} alt="" className="broaEsquerda" />
          <img src={broaDireita} alt="" className="broaDireita" />
        </div>
      </div>
    </>
  );
}
