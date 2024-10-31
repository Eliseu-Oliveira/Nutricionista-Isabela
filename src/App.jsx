import Header from "./components/Header";
import PaymentSection from "./components/PaymentSection";
import Banner from "./components/Banner";
import Apresentacao from "./components/Apresentacao";
import Features from "./components/Features";
import InstagramSection from "./components/InstagramSection";
import ConsultationSection from "./components/ConsultationSection";
import Cards from "./components/Cards";
import MetodoNutricional from "./components/MetodoNutricional";
import GallerySlider from "./components/GallerySlider";
import Depoimentos from "./components/Depoimentos";
import WhatsAppIcon from "./components/WhatsAppIcon";
import Chatbot from "./components/ChatBot";

import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Features />
      <Apresentacao />
      {/* <InstagramSection /> */}
      <ConsultationSection />
      <treatmentCategory />
      <Cards />
      <MetodoNutricional/>
      {/* <GallerySlider /> */}
      <Depoimentos/>
      <WhatsAppIcon/>
      {/* <Chatbot/> */}
      <Footer />
    </div>
  );
}

export default App
