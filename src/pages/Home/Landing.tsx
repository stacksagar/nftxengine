import Header from "../../Components/Header/Header";

import Faq from "./Faq";
import About from "./About";
import Footer from "../../Components/Footer/Footer";
import Hero from "./Hero";
import HowToMint from "./HowToMint";

export default function Landing() {
  return (
    <div>
      <div id="hero-bg" className="min-h-screen">
        <Header />
        <Hero />
      </div>
      <HowToMint />
      <Faq />
      <About />
      <Footer />
      {/* 
      <Join />
    */}
    </div>
  );
}
