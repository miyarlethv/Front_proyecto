import React, { useEffect, useState, useContext } from 'react';
import { CarritoContext } from '../components/CarritoContext';
import '../style/style.css';

<<<<<<< HEAD
const Menu = () => {
  const [productos, setProductos] = useState([]);
  const [cantidades, setCantidades] = useState({});
  const { agregarAlCarrito } = useContext(CarritoContext);
=======
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
>>>>>>> 1d86bcf9f59b61665ef8b05b4b9c4c8135424c6f

  useEffect(() => {
    const fetchProductos = async () => {
      const response = await fetch('http://localhost/Proyecto_final/productos.php', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      setProductos(data);
    };

    fetchProductos();
  }, []);

  const handleCantidadChange = (id, newCantidad) => {
    setCantidades((prevCantidades) => ({
      ...prevCantidades,
      [id]: newCantidad,
    }));
  };

<<<<<<< HEAD
  const handleAgregarCarrito = (producto) => {
    const cantidad = parseInt(cantidades[producto.id], 10) || 1;
    agregarAlCarrito({ ...producto, cantidad });
  };

  const handleMiCarritoClick = () => {
    // Aquí puedes manejar la lógica para ver el carrito
    console.log("Ver carrito");
  };

  return (
    <div className="menu">
      <h1>PRODUCTOS</h1>
      <button onClick={handleMiCarritoClick}>Mi Carrito</button> <br /> <br />
      <div className="product-list">
        {productos.map((producto) => (
          <div key={producto.id} className="product-item">
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            {producto.imagen && (
              <img src={`http://localhost/Proyecto_final/${producto.imagen}`} alt={producto.nombre} />
            )}
            <div className="contador">
              <label htmlFor={`contador-${producto.id}`}>Seleccionar cantidad: </label>
              <input
                type="number"
                id={`contador-${producto.id}`}
                defaultValue="1"
                onChange={(e) => handleCantidadChange(producto.id, e.target.value)}
                min="1"
              />
            </div>
            <button onClick={() => handleAgregarCarrito(producto)}>Agregar al carrito</button>
          </div>
        ))}
=======
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
>>>>>>> 1d86bcf9f59b61665ef8b05b4b9c4c8135424c6f
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Menu;
=======
  export default InsertarProducto;

>>>>>>> 1d86bcf9f59b61665ef8b05b4b9c4c8135424c6f
