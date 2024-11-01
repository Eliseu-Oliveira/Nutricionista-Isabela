import Header from "./components/Header";
import Banner from "./components/Banner";
import Apresentacao from "./components/Apresentacao";
import Features from "./components/Features";
import ConsultationSection from "./components/ConsultationSection";
import Cards from "./components/Cards";
import MetodoNutricional from "./components/MetodoNutricional";
import WhatsAppIcon from "./components/WhatsAppIcon";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Features />
      <Apresentacao />
      <ConsultationSection />
      <treatmentCategory />
      <Cards />
      <MetodoNutricional />
      <WhatsAppIcon />
      <Footer />
    </div>
  );
}

export default App
