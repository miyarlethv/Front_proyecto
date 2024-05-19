// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registro from './components/Registro';
import Login from './components/Login';
import Menu from './components/Menu';
import Product from './components/Product';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registro />} />
        <Route path="/form2" element={<Login />} />
        <Route path="" element={<Menu />} />
        <Route path="" element={<Product />} />
    
      </Routes>
    </Router>
  );
}

export default App;
