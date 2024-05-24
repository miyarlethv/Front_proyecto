import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import InsertarProducto from './components/InsertarProducto';
import Login from './components/Login';
import Menu from './components/Menu';
import Registro from './components/Registro';
import Carrito from './components/Carrito';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/insertar-producto" element={<InsertarProducto />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/carrito" element={<Carrito />} />
        </Routes>
    </Router>
  );
}

export default App;
