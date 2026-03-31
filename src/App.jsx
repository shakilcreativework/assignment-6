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
import { FiUser } from "react-icons/fi";
import { BsBoxSeamFill } from "react-icons/bs";
import { IoRocketSharp } from "react-icons/io5";

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
              <h2 className="text-[#101727] font-extrabold text-3xl md:text-4xl lg:text-[72px] md:leading-12 lg:leading-22">
                Supercharge Your Digital Workflow
              </h2>
              <p className="text-[#627382] lg:text-[18px]">
                Access premium AI tools, design assets, templates, and
                productivity <br className="hidden lg:block" /> software—all in
                one place. Start creating faster today.{" "}
                <br className="hidden lg:block" /> Explore Products
              </p>
              <div className="flex gap-3">
                <GradientButton name={"Explore Products"} />
                <GradientTextBtn
                  icon={<IoPlayOutline className="text-[#4f39f6] text-2xl" />}
                  name={"Watch Demo"}
                />
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

        {/* Get Started in 3 Steps */}
        <section className="bg-[#f9fafc] py-16 md:py-20 lg:py-30">
          <div className="max-w-300 mx-auto px-4 lg:px-0">
            <div className="text-center space-y-4">
              <h2 className=" text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#101727]">
                Get Started in 3 Steps
              </h2>
              <p className=" text-sm md:text-base font-normal text-[#627382]">
                Start using premium digital tools in minutes, not hours.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <div className="bg-white px-4 py-20 rounded-xl relative">
                <span className="flex justify-center items-center text-sm capitalize bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white w-8 h-8 rounded-full font-bold absolute right-5 top-5">
                  01
                </span>
                <div className="text-center space-y-4">
                  <span className="mx-auto flex justify-center items-center text-4xl capitalize w-20 h-20 text-[#4f39f6] bg-[#4f39f6]/10 rounded-full font-bold">
                    <FiUser />
                  </span>
                  <h3 className="text-[#101727] md:text-lg lg:text-2xl font-bold">
                    Create Account
                  </h3>
                  <p className=" text-sm md:text-base font-normal text-[#627382]">
                    Sign up for free in seconds. No credit card required to get
                    started.
                  </p>
                </div>
              </div>
              <div className="bg-white px-4 py-20 rounded-xl relative">
                <span className="flex justify-center items-center text-sm capitalize bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white w-8 h-8 rounded-full font-bold absolute right-5 top-5">
                  02
                </span>
                <div className="text-center space-y-4">
                  <span className="mx-auto flex justify-center items-center text-4xl capitalize w-20 h-20 text-[#4f39f6] bg-[#4f39f6]/10 rounded-full font-bold">
                    <BsBoxSeamFill />
                  </span>
                  <h3 className="text-[#101727] md:text-lg lg:text-2xl font-bold">
                    Choose Products
                  </h3>
                  <p className=" text-sm md:text-base font-normal text-[#627382]">
                    Browse our catalog and select the tools that fit your needs.
                  </p>
                </div>
              </div>
              <div className="bg-white px-4 py-20 rounded-xl relative">
                <span className="flex justify-center items-center text-sm capitalize bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white w-8 h-8 rounded-full font-bold absolute right-5 top-5">
                  03
                </span>
                <div className="text-center space-y-4">
                  <span className="mx-auto flex justify-center items-center text-4xl capitalize w-20 h-20 text-[#4f39f6] bg-[#4f39f6]/10 rounded-full font-bold">
                    <IoRocketSharp />
                  </span>
                  <h3 className="text-[#101727] md:text-lg lg:text-2xl font-bold">
                    Start Creating
                  </h3>
                  <p className=" text-sm md:text-base font-normal text-[#627382]">
                    Download and start using your premium tools immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Transform Your Workflow? section */}
        <section className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-16 md:py-20 lg:py-30">
          <div className="max-w-300 mx-auto px-4 lg:px-0">
            <div className="text-center space-y-4">
              <h2 className=" text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#ffffff]">
                Premium Digital Tools
              </h2>
              <p className=" text-sm md:text-base font-normal text-[#ffffff]/60">
                Choose from our curated collection of premium digital products
                designed <br className="hidden md:block" /> to boost your
                productivity and creativity.
              </p>
              <div className="flex gap-2 w-fit rounded-full mx-auto">
                <div className="bg-white w-fit rounded-full">
                  <button className="bg-transparent transition-all text-sm md:text-base font-bold py-2.5 lg:py-3 px-4 text-transparent bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:from-[#9514fa] hover:to-[#4f39f6]">
                    Explore Products
                  </button>
                </div>
                <div className="border-2 border-gray-100/60 w-fit rounded-full">
                  <button className="text-sm md:text-base font-bold py-2.5 lg:py-3 px-4 text-white">
                    View Pricing
                  </button>
                </div>
              </div>
              <span className=" text-xs md:text-sm font-normal text-[#ffffff]/60">14-day free trial • No credit card required • Cancel anytime</span>
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
