import "./App.scss";
import FaqList from "./components/faq/FaqList";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import HeroBanner from "./components/heroBanner/HeroBanner";
import Pricing from "./components/pricing/Pricing";


function App() {


  return (
    <div className="App">
      <Header/>
      <HeroBanner/>
      <Features/>
      <Pricing/>
      <FaqList/>
      <Footer/>
    </div>
  )
}

export default App
