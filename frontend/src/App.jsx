import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Hero } from "./components/Hero";
import { Schedule } from "./components/Schedule";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Events } from "./components/Events";
import { FAQSection } from "./components/FAQ";
import { Contact } from "./components/Contact";
import "@fontsource/bangers";

function App() {
  //use tailwind maybe?
  return (
    <>
      <div>
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
