import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registro from './components/Registro';
import Login from './components/Login';
import Menu from './components/Menu';

function App() {
  
  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 10.0 },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 20.0 },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 30.0 },
  ];
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registro />} />
        <Route path="/form2" element={<Login />} />
        <Route path="/menu" element={<Menu products={products} />} />
      </Routes>
    </Router>
  );
}

export default App;
