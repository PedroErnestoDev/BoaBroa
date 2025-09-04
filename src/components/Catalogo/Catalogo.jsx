import Cards from "../Cards/Cards"
import "./Catalogo.sass"
import broa1 from "../../assets/IMG-20250831-WA0006.png"
import broa2 from "../../assets/IMG-20250831-WA0003.png"
import broa3 from "../../assets/IMG-20250831-WA0002.png"
import broa4 from "../../assets/IMG-20250831-WA0005.png"
import broa5 from "../../assets/IMG-20250831-WA0008.png"
import broa6 from "../../assets/IMG-20250831-WA0010.png"
import broa7 from "../../assets/IMG-20250831-WA0014.png"
import broa8 from "../../assets/IMG-20250831-WA0012.png"

export default function Catalogo(){
    return (
        <>
            <h1 className="tituloCatalogo">
                Catálogo
            </h1>
            <div className="conatinerCatalogo">
                <Cards img={broa1} titulo="Tradicional"/>
                <Cards img={broa2} titulo="Nutela"/>
                <Cards img={broa3} titulo="Goiabada"/>
                <Cards img={broa4} titulo="Chocolate Branco"/>
                <Cards img={broa5} titulo="Erva doce"/>
                <Cards img={broa6} titulo="MM's"/>
                <Cards img={broa7} titulo="Chocolate"/>
                <Cards img={broa8} titulo="Misto"/>
            </div>
        </>
    )
}