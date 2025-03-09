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
import {Register  } from './components/Register'
import Navbar from './components/navbar'
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Login } from './components/Login';
import { useState, useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
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

  return children;
};

function App() {
  const { login } = useAuth();
  
  return (
    <Router>
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
            </>
          } />
          <Route path="/register" element={
            <>
              <Navbar />
              <Register />
            </>
          } />
          <Route path="/login" element={<Login onLogin={login} />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  )
}

// Wrap the exported component with AuthProvider
export default function AppWithAuth() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
