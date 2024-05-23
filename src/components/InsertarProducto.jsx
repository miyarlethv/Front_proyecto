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
    imagen: null
  });

  const handleChange = (e) => {
    const { name, type, files, value } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost/Proyecto_final/Proyecto_final/productos.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)

    const data = new FormData();
      data.append('nombre', formData.nombre);
      data.append('descripcion', formData.descripcion);
      data.append('precio', formData.precio);
      data.append('cantidad', formData.cantidad);
      data.append('imagen', formData.imagen);

      fetch('http://localhost/Proyecto_final/productos.php', {
        method: 'POST',
        body: data
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
      <div className="form-container">
        <h2>Insertar Nuevo Producto</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="descripcion">Descripción:</label>
            <textarea id="descripcion" name="descripcion" value={formData.descripcion} onChange={handleChange} required></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="precio">Precio:</label>
            <input type="number" id="precio" name="precio" value={formData.precio} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="cantidad">Cantidad:</label>
            <input type="number" id="cantidad" name="cantidad" value={formData.cantidad} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="imagen">Imagen:</label>
            <input type="file" id="imagen" name="imagen" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <input type="submit" value="Insertar Producto" />
          </div>
        </form>
      </div>
    );
  };

  export default InsertarProducto;

