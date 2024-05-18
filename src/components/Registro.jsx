import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/style.css';

const Registro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cedula: '',
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    tipo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost/Proyecto_final/conexion.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        navigate('/form2');  // Redirigir a la siguiente página
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="container2">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-outline form-white mb-4">
          <label htmlFor="cedula">Cédula:</label>
          <input type="text" id="cedula" name="cedula" value={formData.cedula} onChange={handleChange} required />
        </div>
        <div className="form-outline form-white mb-4">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="form-outline form-white mb-4">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-outline form-white mb-4">
          <label htmlFor="telefono">Teléfono:</label>
          <input type="text" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required />
        </div>
        <div className="form-outline form-white mb-4">
          <label htmlFor="direccion">Dirección:</label>
          <input type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="tipo">Selecciona Tu Perfil</label>
          <select id="tipo" name="tipo" value={formData.tipo} onChange={handleChange} required>
            <option value="">Seleccione</option>
            <option value="Administrador">Administrador</option>
            <option value="Usuario">Usuario</option>
          </select>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-lg">Registrarme</button>
        </div>
      </form>
    </div>
  );
};

export default Registro;
