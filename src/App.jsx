import './App.css'
import Broas from './components/Broas/Broas'
import Catalogo from './components/Catalogo/Catalogo'
import Contato from './components/Contato/Contato'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Sobre from './components/Sobre/Sobre'

function App() {
  return (
    <>
      <Navbar/>
      <Sobre/>
      <Catalogo/>
      <Contato/>
      <Broas />
      <Footer/>
    </>
  )
}

export default App
