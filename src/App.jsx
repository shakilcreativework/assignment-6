import { use, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { IoMdRadioButtonOn } from "react-icons/io";
import GradientButton from "./utilities/GradientButton";
import GradientTextBtn from "./utilities/GradientTextBtn";
import { IoPlayOutline } from "react-icons/io5";
import CountSection from "./components/CountSection/CountSection";
import PremiumTools from "./components/PremiumTools/PremiumTools";

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
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 py-15">
            <div className="space-y-4">
              <div className="bg-[#e1e7ff] py-2 px-4 rounded-full w-fit">
                <p className="bg-transparent text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
                  <span className="flex items-center gap-2 font-medium">
                    <IoMdRadioButtonOn className="text-2xl text-[#4f39f6]" />{" "}
                    New: AI-Powered Tools Available
                  </span>
                </p>
              </div>
              <h2 className="text-[#101727] font-extrabold text-3xl md:text-4xl lg:text-[72px] md:leading-12 lg:leading-22">Supercharge Your Digital Workflow</h2>
              <p className="text-[#627382] lg:text-[18px]">
                Access premium AI tools, design assets, templates, and
                productivity <br className="hidden lg:block" /> software—all in one place. Start creating faster
                today. <br className="hidden lg:block" /> Explore Products
              </p>
              <div className="flex gap-3">
                <GradientButton name={'Explore Products'} />
                <GradientTextBtn icon={<IoPlayOutline className="text-[#4f39f6] text-2xl" />}  name={'Watch Demo'} />
              </div>
            </div>
            <div className="md:w-full lg:w-[80%]">
              <img
                className="object-cover rounded-lg lg:w-125 lg:h-147.5"
                src="https://i.ibb.co.com/rKZg2hwW/banner.png"
                alt=""
              />
            </div>
          </div>
        </section>

        {/* count section */}
        <section className="bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
          <CountSection />
        </section>

        {/* Premium Digital Tools section */}
        <section>
          <PremiumTools productsData={productsData} />
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
