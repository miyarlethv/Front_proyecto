import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import '../style/style.css';

const Menu = () => {
  const navigate = useNavigate(); // Inicializa useNavigate
  const [productos, setProductos] = useState([]);
  const [cantidades, setCantidades] = useState({});

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

  const handleAgregarCarrito = (id) => {
    const cantidad = cantidades[id] || 0;
    // Aquí puedes manejar la lógica para agregar el producto al carrito
    console.log(`Producto con ID ${id} agregado al carrito con cantidad ${cantidad}`);
  };

  const handleMiCarritoClick = () => {
    navigate('/carrito'); // Redirige a la vista del carrito
  };

  return (
    <div className="menu">
      <h1>PRODUCTOS</h1>
      <button className='btn btn-lg' onClick={handleMiCarritoClick}>Mi Carrito</button> <br /> <br />
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
                defaultValue="0"
                onChange={(e) => handleCantidadChange(producto.id, e.target.value)}
                min="0"
              />
            </div>
            <button className='btn btn-lg' onClick={() => handleAgregarCarrito(producto.id)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
