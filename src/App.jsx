import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { IoMdRadioButtonOn } from "react-icons/io";

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
        <Header toggleMenu={toggleMenu} open={open} setOpen={setOpen} />
      </header>

      {/* main content */}
      <main className="lg:min-h-[calc(100vh-543px)]">
        <section className="max-w-300 mx-auto px-4 lg:px-0">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <div className="bg-[#e1e7ff] py-2 px-4 rounded-full">
                <p className="bg-transparent text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
                  <span className="flex items-center gap-2 font-medium"><IoMdRadioButtonOn className="text-2xl text-[#4f39f6]" /> New: AI-Powered Tools Available</span>
                </p>
              </div>
            </div>
            <div>
              <img className="object-cover rounded-lg" src="https://i.ibb.co.com/rKZg2hwW/banner.png" alt="" />
            </div>
          </div>
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
