// Registro.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/style.css';

const Registro = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/form2');
  };

  return (
    <div className="container2">
      <h2>Registro</h2>
      <form method="POST" action="conexion.php" onSubmit={handleSubmit}>
        <div className="form-outline form-white mb-4">
          <label htmlFor="cedula">Cédula:</label>
          <input type="text" id="cedula" name="cedula" required />
        </div>
        <div className="form-outline form-white mb-4">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div className="form-outline form-white mb-4">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-outline form-white mb-4">
          <label htmlFor="telefono">Teléfono:</label>
          <input type="text" id="telefono" name="telefono" required />
        </div>
        <div className="form-outline form-white mb-4">
          <label htmlFor="direccion">Dirección:</label>
          <input type="text" id="direccion" name="direccion" required />
        </div>
        <div className="mb-3">
          <label htmlFor="disabledSelect" className="form-label">Selecciona Tu Perfil</label>
          <select id="disabledSelect" className="form-select">
            <option></option>
            <option>Administrador</option>
            <option>Usuario</option>
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
