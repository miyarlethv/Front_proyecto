// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registro from './components/Registro';
import Login from './components/Login';
<<<<<<< HEAD

=======
>>>>>>> 27f922fc6833f0997b58ffb64d5e6b4faf64fe69

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registro />} />
        <Route path="/form2" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
