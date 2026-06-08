import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Componente que maneja el scroll al cambiar de ruta
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppRouter() {
  return (
    <BrowserRouter>
      {/* Se coloca aquí para que escuche los cambios de ruta globales */}
      <ScrollToTop /> 
      
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
