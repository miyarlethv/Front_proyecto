import React from 'react';
import './Product.css'; // Opcional: para estilos

const Product = ({ name, description, price }) => {
  return (
    <div className="product">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Product;
