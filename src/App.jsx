import { useState } from "react";
import "./App.css";
import GradientButton from "./utilities/GradientButton";
import { Menu, X, ShoppingCart } from "lucide-react";
import Footer from "./components/Footer/Footer";

function App() {
  const [open, setOpen] = useState(false);

  // toggle btn
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="font-manrope">
      {/* header */}
      <header>
        <div className="max-w-300 mx-auto flex justify-between items-center gap-3 py-6 px-4 lg:px-0 z-10">
          <div className="flex">
            <button onClick={() => toggleMenu()}>
              {open ? (
                <X className="md:hidden w-8 h-8" />
              ) : (
                <Menu className="md:hidden w-8 h-8" />
              )}
            </button>
            <a
              href=""
              className="hidden md:flex bg-transparent transition-all text-3xl md:text-4xl font-extrabold py-0.75 text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:from-[#9514fa] hover:to-[#4f39f6]"
            >
              DigiTools
            </a>
          </div>
          {/* nav items */}
          <nav
            className={`bg-gray-50 md:bg-transparent p-4 flex flex-col md:flex-row 
             ${open ? "top-7.5 delay-1000 transition ease-in-out" : "-top-60"}
             ease-in-out 
             md:top-0 left-13 md:left-0 items-center gap-5 absolute md:relative`}
          >
            <li className="list-none">
              <a className="text-[#101727] font-semibold" href="">
                Products
              </a>
            </li>
            <li className="list-none">
              <a className="text-[#101727] font-semibold" href="">
                Features
              </a>
            </li>
            <li className="list-none">
              <a className="text-[#101727] font-semibold" href="">
                Pricing
              </a>
            </li>
            <li className="list-none">
              <a className="text-[#101727] font-semibold" href="">
                Testimonials
              </a>
            </li>
            <li className="list-none">
              <a className="text-[#101727] font-semibold" href="">
                FAQ
              </a>
            </li>
          </nav>
          <div className="flex justify-between items-center gap-4">
            <div className="relative">
              <p className=" absolute -top-2 left-3 bg-red-600 w-4 h-4 rounded-full flex justify-center items-center text-[9px] text-white font-bold">
                15
              </p>
              <ShoppingCart />
            </div>
            <a href="" className="text-[#101727] font-semibold">
              Login
            </a>
            <GradientButton name={"Get Started"} />
          </div>
        </div>
      </header>

      {/* main content */}
      <main>
        
      </main>

      {/* footer */}
      <footer className="bg-[#101727]">
          <Footer />
      </footer>
    </div>
  );
}

export default App;
