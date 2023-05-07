import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Header from "./layouts/Header";
import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";

import HomePage from "./pages/HomePage";
import ContactoPage from "./pages/ContactoPage";
import NosotrosPage from "./pages/NosotrosPage";
import NovedadesPage from "./pages/NovedadesPage";
import ServiciosPage from "./pages/ServiciosPage";
import GaleriaPage from "./pages/GaleriaPage";

function App() {
  return (
    <div className="App">
      Mi Sitio de Práctica
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/novedades" element={<NovedadesPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
