import { useState } from "react";
import "./App.css";
import GradientButton from "./utilities/GradientButton";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

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
        
      </main>

      {/* footer */}
      <footer className="bg-[#101727]">
          <Footer />
      </footer>
    </div>
  );
}

export default App;
