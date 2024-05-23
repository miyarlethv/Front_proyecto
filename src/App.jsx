import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registro from './components/Registro';
import Login from './components/Login';
import InsertarProducto from './components/InsertarProducto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/insertar-producto" element={<InsertarProducto />} />
      </Routes>
    </Router>
  );
}

export default App;
