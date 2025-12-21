import Header from "./components/Header"
import First from "./components/First"

function App() {
  return (
    <div>
      <div className="hero">
        <Header titolo="Trattoria La Lupa" subtitle="La dieta falla a casa!"/>
      </div>

      <div className="content text-center">
        <First titolo="Un angolo di Roma nel cuore di Nerviano" subtitle="Vieni da noi" />
      </div>
    </div>
  )
}

export default App
