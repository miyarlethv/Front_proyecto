import React, { useState, useEffect } from 'react';
import '../style/style.css'; // Asegúrate de importar el archivo CSS

const Carrito = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Aquí debes cargar los productos del carrito desde tu estado global o API
    // Simulamos con algunos datos de ejemplo
    const carritoItems = [
    ];
    setItems(carritoItems);
  }, []);

  const handleEliminarItem = (id) => {
    const nuevosItems = items.filter(item => item.id !== id);
    setItems(nuevosItems);
  };

  const totalCarrito = items.reduce((total, item) => total + item.precio * item.cantidad, 0);

  return (
    <div className="menu">
      <h1>Mi Carrito</h1>
      <div className="product-list">
        {items.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="product-item">
              <h2>{item.nombre}</h2>
              <p>{item.descripcion}</p>
              <p>Precio: ${item.precio}</p>
              <p>Cantidad: {item.cantidad}</p>
              <button onClick={() => handleEliminarItem(item.id)}>Eliminar</button>
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