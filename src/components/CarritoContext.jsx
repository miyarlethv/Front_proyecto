import React, { createContext, useState, useEffect } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const fetchCarrito = async () => {
      const response = await fetch('http://localhost/Proyecto_final/obtener_carrito.php');
      const data = await response.json();
      setCarrito(data);
    };

    fetchCarrito();
  }, []);

  const agregarAlCarrito = async (producto) => {
    const response = await fetch('http://localhost/Proyecto_final/agregar_al_carrito.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(producto)
    });

    const data = await response.json();
    if (response.ok) {
      setCarrito((prevCarrito) => {
        const productoExistente = prevCarrito.find(item => item.id === producto.id);

        if (productoExistente) {
          return prevCarrito.map(item =>
            item.id === producto.id
              ? { ...item, cantidad: item.cantidad + producto.cantidad }
              : item
          );
        } else {
          return [...prevCarrito, producto];
        }
      });
      console.log(data.message);
    } else {
      console.error(data.error);
    }
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter(item => item.id !== id));
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};
