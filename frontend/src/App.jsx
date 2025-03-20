import './App.css'
import { Hero } from './components/Hero'
import { Schedule } from './components/Schedule'
import { About } from './components/About'
import Gallery from './components/Gallery'
import { Events } from './components/Events'
import { FAQSection } from './components/FAQ'
import { Contact } from './components/Contact'
import { Admin } from './components/Admin'
import '@fontsource/bangers';
import { Route,BrowserRouter as Router,Routes, Navigate } from 'react-router-dom'
import { Register } from './components/Register'
import Navbar from './components/Navbar'
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Login } from './components/Login';
import { useState, useEffect } from 'react';
import RegClosed from './components/RegClosed'
import Footer from './components/Footer'

const AdminRoute = () => {
  const { isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <div className="min-h-screen bg-amber-50 flex items-center justify-center">
      Loading...
    </div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Admin />;
};

function App() {
  return (
    <div className='bg-[#FFC247]'>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Events />
            <Schedule />
            <Gallery />
            <FAQSection />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/register" element={
          <>
            <Navbar />
            <Register />
          
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminRoute />} />
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  );
}
