import "./style/App.css";
import Navbar from "./components/Navbar/Navbar.tsx";
import Banner from "./components/Banner/Banner.tsx";
import Card from "./components/bannerCard/bannerCard.tsx";
import Features from "./components/Features/Features.tsx";
import Services from "./components/ourServices/Services.tsx";
import Highlights from "./components/Highlights/Highlights.tsx";
import Depth from "./components/Depth/Depth.tsx";
import Partner from "./components/Partners/Partner.tsx";
import FAQs from "./components/FAQs/FAQs.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {

  return (
    <div className="body">
      <Navbar/>
      <Banner/>
      <Card/>
      <Features/>
      <Services/>
      <Highlights/>
      <Depth/>
      <Partner/>
      <FAQs/>
      <Footer/>
    </div>
  )
}

export default App
