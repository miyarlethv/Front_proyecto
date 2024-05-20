import React from 'react';
import Producto from './Producto';

const ProductoMenu = () => {
  const products = [
    { id: 1, name: 'Producto 1', description: 'Description of Product 1', price: 10.0 },
    { id: 2, name: 'Producto 2', description: 'Description of Product 2', price: 20.0 },
    { id: 3, name: 'Product0 3', description: 'Description of Product 3', price: 30.0 },
  ];

  return (
    <div className="producto-menu">
      {Producto.map((product) => (
        <Producto
          key={Producto.id}
          name={Producto.name}
          description={Producto.description}
          price={Producto.price}
        />
      ))}
    </div>
  );
};

export default ProductoMenu;
