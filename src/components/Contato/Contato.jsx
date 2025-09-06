import "./Contato.sass";
import Phone from "../../assets/94915 1.png";
import Whats from "../../assets/4423697 1.png";
import Insta from "../../assets/15713420 1.png";

export default function Contato({id}) {
  const phoneNumber = "5519986125489"; // formato internacional sem espaço/traço

  function handleClick() {
    window.location.href = `https://wa.me/${phoneNumber}`;
  }

  function InstaHendleClick(){
    window.location.href = `https://www.instagram.com/_boabroa?igsh=M3R4ZXFlaGFxcXYy`
  }

  return (
    <>
      <h1 className="tituloContato" id={id}>Contato</h1>
      <div className="containerContato">
        <div className="cardsContato">
          <img src={Phone} alt="" />
          <p>+55 19 98612-5489</p>
        </div>
        <div className="cardsContato">
          <img src={Whats} alt="" />
          <p onClick={handleClick}>
            +55 19 98612-5489
          </p>
        </div>
        <div className="cardsContato">
          <img src={Insta} alt="" />
          <p onClick={InstaHendleClick}>_boabroa</p>
        </div>
      </div>
    </>
  );
}
