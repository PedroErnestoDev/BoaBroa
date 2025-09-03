import "./Navbar.sass"
import Logo from "../../assets/logo.png"

export default function Navbar(){
    return (
        <>
            <nav className="navbar">
                <ul>
                    <li>Sobre</li>
                    <li>Cardápio</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </>
    )
}