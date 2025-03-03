import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Schedule } from './components/Schedule';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Events } from './components/Events';
import { FAQ } from './components/FAQ';
import { Contact } from "./components/Contact";


function App() {
  return (
    <>
    
    <Router>
   
      <Routes>
        {/* make route according to the component */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <About />
              <Events />
              <Schedule />
              <Gallery />
              <FAQ />
            </>
          } 
        />
        
        {/* Dedicated Contact route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
    </Router>
    </>
  );
}

export default App;
