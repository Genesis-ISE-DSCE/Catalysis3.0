
import "./App.css";
import { Hero } from "./components/Hero";
import { Schedule } from "./components/Schedule";
import { About } from "./components/About";
import { Events } from "./components/Events";
import { FAQSection } from "./components/FAQ";
import { Contact } from "./components/Contact";
import Gallery from "/src/components/Gallery";
import "@fontsource/bangers";

function App() {
  return (
    <>
      <div className="bg-[#FFC247]">
        <h1 className="text-5xl font-bold text-red-500 font-comic">
          Catalysis3.0
        </h1>
        <Hero />
        <About />
        <Events />
        <Schedule />
        <Gallery />
        <FAQSection />
        <Contact />
      </div>
    </>
  );
}

export default App;
