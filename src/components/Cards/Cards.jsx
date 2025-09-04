import "./Cards.sass"

export default function Cards({img, titulo}){
    return (
        <>
            <div className="card">
                <img src={img} alt="" />
                <p className="titulo">{titulo}</p>
                <p className="descricao">Normal e Canela</p>
            </div>
        </>
    )
}