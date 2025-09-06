import "./Navbar.sass";
import Logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#catalogo">Catálogo</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
