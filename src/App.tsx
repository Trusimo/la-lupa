import Navbar from "./components/Navbar"
import Header from "./components/Header"
import First from "./components/First"

function App() {
  return (
    <div>
      <Navbar />

      <div className="hero">
        <Header titolo="Trattoria La Lupa" subtitle="La dieta falla a casa!"/>
      </div>

      <div className="content text-center">
        <First titolo="Un angolo di Roma nel cuore di Nerviano" subtitle="Vieni a scoprire l'autentica cucina romana
      " />
      </div>
    </div>
  )
}

export default App
