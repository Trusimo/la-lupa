import Navbar from "./components/Navbar";
import Header from "./components/Header";
import First from "./components/First";
import MenuSection from "./components/MenuSection";
import ImageCarousel from "./components/ImageCarousel";
import Contatti from "./components/Contatti";
import Footer from "./components/Footer";

import amatricianaImg from "./assets/img/amatriciana.webp";
import cacioPepeImg from "./assets/img/caciopepe.webp";
import griciaImg from "./assets/img/gricia.webp";
import norcinaImg from "./assets/img/norcina.webp";

function App() {
  const antipasti = [
    { nome: "Affettato Misto di Salumi (X1)", prezzo: "12,00" },
    { nome: "Misto di Formaggi (X1)", prezzo: "12,00" },
    { nome: "Fiore Sardo al Miele", prezzo: "10,00" },
    { nome: "Provola alla Griglia", prezzo: "10,00" },
    { nome: "Supplì (4 pezzi)", prezzo: "8,00", nota: "*" },
    { nome: "Carciofi Fritti a Spicchi (6 pezzi)", prezzo: "8,00", nota: "*" },
    { nome: "Crocchette di Patate (6 pezzi)", prezzo: "8,00", nota: "*" },
    { nome: "Olive Ascolane (6 pezzi)", prezzo: "8,00", nota: "**" },
    { nome: "Fiori di Zucca (4 pezzi)", prezzo: "8,00", nota: "*" },
    { nome: "Patatine Fritte", prezzo: "5,00", nota: "*" },
  ];

  const primi = [
    { nome: "Bucatini all'Amatriciana", prezzo: "15,00" },
    { nome: "Spaghetti alla Carbonara", prezzo: "15,00" },
    { nome: "Maccheroncini al Cinghiale", prezzo: "15,00", nota_testo: "(Fatti in casa)" },
    { nome: "Maccheroncini alla Gricia", prezzo: "15,00", nota_testo: "(Fatti in casa)" },
    { nome: "Maccheroncini alla Norcina", prezzo: "15,00", nota_testo: "(fatti in casa, con ragù bianco di salsiccia e salsa al tartufo nero)" },
    { nome: "Maccheroncini Cacio e Pepe", prezzo: "15,00", nota_testo: "(Fatti in casa)" },
    { nome: "Fusilli al Limone", prezzo: "15,00" },
  ];

  const dolci = [
    { nome: "Panna Cotta al Caramello", nota_testo: "Fatta in casa" },
    { nome: "Torta di Mele", nota_testo: "Fatta in casa" },
    { nome: "Torta di Pere e Cioccolato", nota_testo: "Fatta in casa" },
    { nome: "Mousse alla Nutella", nota_testo: "Fatta in casa" },
    { nome: "Seadas Specialità Sarda" },
    { nome: "Sorbetto (Limone, Caffè, Mela Verde)" },
    { nome: "Sorbetto al Limone Affogato alla Vodka" },
    { nome: "Sorbetto alla Mela Verde Affogato al Calvados", nota: "*" },
    { nome: "Tartufo Gelato (Bianco, Nero o Pistacchio)" },
    { nome: "Gelato alla Crema" },
  ];

  const piattiImages = [amatricianaImg, cacioPepeImg, griciaImg, norcinaImg];

  return (
    <div className="app-container">
      <Navbar />

      <header className="hero">
        <Header titolo="Trattoria La Lupa" />
      </header>

      {/* Spostato l'ID "menu" qui per includere "La dieta falla a casa" */}
      <section id="menu" className="content text-center">
        <First
          titolo="La dieta falla a casa!"
          subtitle="Un angolo di Roma nel cuore di Nerviano. Vieni a scoprire l'autentica cucina romana."
        />

        <div className="menu-container">
          <MenuSection
            index={0}
            titolo="Antipasti"
            items={antipasti}
            legenda={["* Prodotti congelati", "** Potrebbe contenere il nocciolo"]}
          />
          <MenuSection index={1} titolo="Primi Piatti" items={primi} />
          <MenuSection
            index={2}
            titolo="Dolci"
            items={dolci}
            prezzoFisso="7"
            legenda={["* Distillato di mele francese"]}
          />
        </div>
      </section>

      <section id="piatti" className="our-dishes-section">
        <h2 className="section-title playfair-display">I Nostri Piatti</h2>
        <ImageCarousel images={piattiImages} interval={5000} />
      </section>

      <section id="contatti">
        <Contatti />
      </section>

      <Footer />
    </div>
  );
}

export default App;