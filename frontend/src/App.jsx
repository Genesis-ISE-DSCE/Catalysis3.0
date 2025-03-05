
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hero } from './components/Hero'
import { Schedule } from './components/Schedule'
import { About } from './components/About'
import  Gallery  from './components/Gallery'
import { Events } from './components/Events'
import { FAQSection} from './components/FAQ'
import { Contact } from './components/Contact'
import { Register } from './components/Register'
import '@fontsource/bangers';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className='bg-[#FFC247]'>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Events />
              <Schedule />
              <Gallery />
              <FAQSection />
              <Contact />
            </>
          } />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
