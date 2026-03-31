import { use, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CountSection from "./components/CountSection/CountSection";
import PremiumTools from "./components/PremiumTools/PremiumTools";
import Workflow from "./components/Workflow/Workflow";
import GetStartedSteps from "./components/GetStartedSteps/GetStartedSteps";
import HeroContent from "./components/HeroContent/HeroContent";
import SimplePricing from "./components/SimplePricing/SimplePricing";

// load premium tools data
const premiumTools = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

const productsPromise = premiumTools();

function App() {
  const productsData = use(productsPromise);
  // console.log(productsData);
  const [open, setOpen] = useState(false);

  // toggle btn
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="font-manrope">
      {/* header */}
      <header>
        <Header toggleMenu={toggleMenu} open={open} setOpen={setOpen} />
      </header>

      {/* main content */}
      <main className="lg:min-h-[calc(100vh-543px)]">
        <section className="max-w-300 mx-auto px-4 lg:px-0 overflow-hidden">
          <HeroContent />
        </section>

        {/* count section */}
        <section className="bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
          <CountSection />
        </section>

        {/* Premium Digital Tools section */}
        <section>
          <PremiumTools productsData={productsData} />
        </section>

        {/* Get Started in 3 Steps */}
        <section className="bg-[#f9fafc] py-16 md:py-20 lg:py-30">
          <GetStartedSteps />
        </section>

        {/* Simple, Transparent Pricing section */}
        <section className="py-16 md:py-20 lg:py-30">
          <SimplePricing />
        </section>

        {/* Ready to Transform Your Workflow? section */}
        <section className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-16 md:py-20 lg:py-30">
          <Workflow />
        </section>
      </main>

      {/* footer */}
      <footer className="bg-[#101727]">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
