
import './App.css'
import { Hero } from './components/Hero'
import { Schedule } from './components/Schedule'
import { About } from './components/About'
import Gallery from './components/Gallery'
import { Events } from './components/Events'
import { FAQSection } from './components/FAQ'
import { Contact } from './components/Contact'
import '@fontsource/bangers';
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom'
import {Register  } from './components/Register'

function App() {
  return (
    <Router>
      <div className='bg-[#FFC247]'>
        <Routes>
          <Route path="/" index element={
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
