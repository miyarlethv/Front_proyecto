import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import InsertarProducto from './components/InsertarProducto';
import Login from './components/Login';
import Registro from './components/Registro';

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Registro />} />
        <Route path="/form2" element={<Login />} />
      </Routes>
      <InsertarProducto />

    </Router>
    

    </>
  );
}

export default App;
