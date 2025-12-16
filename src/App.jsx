import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Produtos from './pages/produtos';
import Contato from './pages/contato';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contato" element={<Contato/>} />
        <Route path="/produtos" element={<Produtos/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App