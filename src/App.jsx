import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import InsertarProducto from './components/InsertarProducto';
import Login from './components/Login';
<<<<<<< HEAD
import Registro from './components/Registro';

function App() {
  

=======
import InsertarProducto from './components/InsertarProducto';

function App() {
>>>>>>> a04af36841953ed5b01e830c3cf0b2546761ccf7
  return (
    <>
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Registro />} />
        <Route path="/form2" element={<Login />} />
=======
        <Route path="/" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/insertar-producto" element={<InsertarProducto />} />
>>>>>>> a04af36841953ed5b01e830c3cf0b2546761ccf7
      </Routes>
      <InsertarProducto />

    </Router>
    

    </>
  );
}

export default App;
