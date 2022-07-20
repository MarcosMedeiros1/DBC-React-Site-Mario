import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Mapa from "./components/mapa/Mapa";
import Cogumelos from "./components/sectionCogumelos/Cogumelos";
import Texto from "./components/sectionTexto/Texto";

function App() {
  return (
    <>
      <Header />
      <Cogumelos />
      <Texto
        backgroundColor={{ backgroundColor: "#4c4c4c" }}
        color={{ color: "#fff" }}
      />
      <Mapa />
      <Footer />
    </>
  );
}

export default App;
