import { useState } from "react";
import "./App.css";
import GradientButton from "./utilities/GradientButton";
import { Menu, X } from "lucide-react";

function App() {
  const [open, setOpen] = useState(false);

  // toggle btn
  const toggleMenu = () => {
    setOpen(!open);
  }

  return (
    <div className="font-manrope">
      <header>
        <div className="max-w-300 mx-auto flex justify-between items-center gap-3 py-6 px-4 lg:px-0 z-10">
          <div className="flex">
            <button onClick={() => toggleMenu()}>
              {
                open ? 
                <X className="md:hidden w-8 h-8" />
                :
                <Menu className="md:hidden w-8 h-8" />
              }
            </button>
            <a
              href=""
              className="hidden md:flex bg-transparent transition-all text-3xl md:text-4xl font-bold py-0.75 text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:from-[#9514fa] hover:to-[#4f39f6]"
            >
              DigiTools
            </a>
          </div>
          {/* nav items */}
          <nav className=" bg-amber-400 md:bg-transparent p-4 flex flex-col md:flex-row top-7.5 md:top-0 left-15 md:left-0 items-center gap-5 absolute md:relative">
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
          <div className="flex justify-between items-center gap-3">
            <img className="w-5 h-5" src="https://i.ibb.co.com/N6Lz3QBT/shopping-cart.png" alt="" />
            <a href="" className="text-[#101727] font-semibold">
              Login
            </a>
            <GradientButton name={"Get Started"} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
