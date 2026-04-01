import { use, useRef, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CountSection from "./components/CountSection/CountSection";
import PremiumTools from "./components/PremiumTools/PremiumTools";
import Workflow from "./components/Workflow/Workflow";
import GetStartedSteps from "./components/GetStartedSteps/GetStartedSteps";
import HeroContent from "./components/HeroContent/HeroContent";
import SimplePricing from "./components/SimplePricing/SimplePricing";
import { toast, ToastContainer } from 'react-toastify';

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
  const [toggleCard, setToggleCard] = useState(true);
  const [addCarts, setAddCarts] = useState([]);
  const [activeBtn, setActiveBtn] = useState(null);
  const timeoutCheck = useRef(null);

  // toggle btn
  const toggleMenu = () => {
    setOpen(!open);
  };

  // show product toggle function
  const productBtn = (active) => {
    setToggleCard(active);
  };

  // add product carts
  const addCartItems = (product) => {
    if(addCarts.some(match => match.id === product.id)){
      toast('This item is already in your cart 🎉😄');
      return;
    }else{
      setAddCarts([...addCarts, product]);
      toast('Added to your cart successfully 🛒✨');
      setActiveBtn(product.id);

      // clean old timeout if before click on any button or run timeout
      if(timeoutCheck.current){
        clearTimeout(timeoutCheck.current);
      }

      // add new set timeout when click new button
      timeoutCheck.current = setTimeout(() => {
        setActiveBtn(null);
      }, 3000);
    }
  };
  // console.log(activeBtn);

  return (
    <div className="font-manrope">
      {/* header */}
      <header>
        <Header setToggleCard={setToggleCard} addCarts={addCarts} toggleMenu={toggleMenu} open={open} setOpen={setOpen} />
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
          <PremiumTools activeBtn={activeBtn} setToggleCard={setToggleCard} setAddCarts={setAddCarts} addCarts={addCarts} addCartItems={addCartItems} toggleCard={toggleCard} productBtn={productBtn} productsData={productsData} />
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

      <ToastContainer />
    </div>
  );
}

export default App;
