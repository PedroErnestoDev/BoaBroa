import './App.css'
import Catalogo from './components/Catalogo/Catalogo'
import Contato from './components/Contato/Contato'
import Navbar from './components/Navbar/Navbar'
import Sobre from './components/Sobre/Sobre'

function App() {
  return (
    <>
      <Navbar/>
      <Sobre/>
      <Catalogo/>
      <Contato/>
    </>
  )
}

export default App
