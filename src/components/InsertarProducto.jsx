import React, { useEffect, useState, useContext } from 'react';
import { CarritoContext } from '../components/CarritoContext';
import '../style/style.css';

const Menu = () => {
  const [productos, setProductos] = useState([]);
  const [cantidades, setCantidades] = useState({});
  const { agregarAlCarrito } = useContext(CarritoContext);

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
      </div>
    </div>
  );
};

export default Menu;
