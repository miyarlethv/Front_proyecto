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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost/Proyecto_final/registro.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message);
        // Navegar a la siguiente página después del registro exitoso
        navigate('/Login');
        
        // Enviar correo después del registro exitoso
        const emailData = new FormData();
        emailData.append("cedula", formData.cedula);
        emailData.append("nombre", formData.nombre);
        emailData.append("email", formData.email);
        emailData.append("telefono", formData.telefono);
        emailData.append("direccion", formData.direccion);
        emailData.append("tipo", formData.tipo);

        try {
          const emailResponse = await fetch('http://localhost/Proyecto_final/emailController2.php', {
            method: 'POST',
            body: emailData
          });

          const emailResult = await emailResponse.json();

          if (emailResult == 1) {
            alert('El correo ha sido enviado');
          } else {
            alert('El correo no se envió');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Hubo un problema al enviar el correo');
        }
      } else {
        console.error(data.error);
        alert('Error al registrarse');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al registrarse');
    }
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
        <label htmlFor="tipo">Selecciona Tu Perfil</label>
        <div className="d-flex justify-content-center">
          <select className="form-select" id="tipo" name="tipo" value={formData.tipo} onChange={handleChange} required>
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
