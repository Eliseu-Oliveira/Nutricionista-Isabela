import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Strip from './components/Strip'
import Sobre from './components/Sobre'
import Abordagem from './components/Abordagem'
import Servicos from './components/Servicos'
import CtaMid from './components/CtaMid'
import Processo from './components/Processo'
import Depoimentos from './components/Depoimentos'
import FAQ from './components/FAQ'
import Contato from './components/Contato'
import Footer from './components/Footer'
import WhatsappFloat from './components/WhatsappFloat'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Strip />
        <Sobre />
        <Abordagem />
        <Servicos />
        <CtaMid />
        <Processo />
        <Depoimentos />
        <FAQ />
        <Contato />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}
