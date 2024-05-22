import React, { useState } from 'react';
import '../style/style.css';

function InsertarProducto() {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    cantidad: '',
    imagen: ''
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
    fetch('http://localhost/Proyecto_final/productos.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la respuesta de la red');
      }
      return response.json();
    })
    .then(data => {
      if (data.message) {
        alert(data.message);
      } else if (data.error) {
        alert(data.error);
      }
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h2>Insertar Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />

        <label htmlFor="descripcion">Descripción:</label>
        <textarea id="descripcion" name="descripcion" value={formData.descripcion} onChange={handleChange} required></textarea>

        <label htmlFor="precio">Precio:</label>
        <input type="number" id="precio" name="precio" value={formData.precio} onChange={handleChange} required />

        <label htmlFor="cantidad">Cantidad:</label>
        <input type="number" id="cantidad" name="cantidad" value={formData.cantidad} onChange={handleChange} required />

        <label htmlFor="imagen">Imagen:</label>
        <input type="text" id="imagen" name="imagen" value={formData.imagen} onChange={handleChange} required />

        <input type="submit" value="Insertar Producto" />
      </form>
    </div>
  );
}

export default InsertarProducto;