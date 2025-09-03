import "./Sobre.sass";
import Logo from "../../assets/logo.png";
import React from "react";
import broaDireita from "../../assets/broaDireita.png"
import broaEsquerda from "../../assets/broaEsquerda.png"

export default function Sobre() {
  const phoneNumber = "5519986125489"; // formato internacional sem espaço/traço

  function handleClick() {
    window.location.href = `https://wa.me/${phoneNumber}`;
  }

  return (
    <>
    <div className="containerSobre">
      <img src={Logo} alt="Imagem logo boabroa" />
      <div className="containerWords">
        <h1>Sobre nós</h1>
        <p>
          Produzimos broas caseiras com ingredientes selecionados e com sabor
          inesquecível
        </p>
        <button
          onClick={handleClick}
          className="btnWhats"
        >
          Peça já a sua!
        </button>
        <img src={broaEsquerda} alt="" className="broaEsquerda"/>
        <img src={broaDireita} alt="" className="broaDireita"/>
      </div>
      </div>
    </>
  );
}
