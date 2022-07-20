import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Video from "./components/video/Video";
import Texto from "./components/sectionTexto/Texto";

const Sobre = () => {
  return (
    <>
      <Header />
      <Video />
      <Texto
        backgroundColor={{ backgroundColor: "#fff" }}
        color={{ color: "#000" }}
      />
      <Footer />
    </>
  );
};

export default Sobre;
