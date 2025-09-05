import "./Cards.sass";

export default function Cards({ img, titulo, className = "" }) {
  return (
    <>
      <div className={className}>
        <div className="card">
          <img src={img} alt="" />
          <p className="titulo">{titulo}</p>
          <p className="descricao">Normal e Canela</p>
        </div>
      </div>
    </>
  );
}
