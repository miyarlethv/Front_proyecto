import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CarritoContext } from '../components/CarritoContext';
import '../style/style.css';

const Carrito = () => {
  const navigate = useNavigate();
  const { Carrito, eliminarDelCarrito } = useContext(CarritoContext);

  const totalCarrito = Carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);

  return (
    <div className="carrito-container">
      <h1>Mi Carrito</h1>
      <div className="carrito-items">
        {Carrito.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          Carrito.map((item) => (
            <div key={item.id} className="carrito-item">
              <img src={`http://localhost/Proyecto_final/${item.imagen}`} alt={item.nombre} className="carrito-item-image" />
              <div className="carrito-item-details">
                <h2>{item.nombre}</h2>
                <p>{item.descripcion}</p>
                <p>Precio: ${item.precio}</p>
                <p>Cantidad: {item.cantidad}</p>
                <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="carrito-total">
        <h2>Total: ${totalCarrito}</h2>
        <button className="btn-comprar">Comprar</button>
      </div>
    </div>
  );
};

export default Carrito;
