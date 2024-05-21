import React from 'react';
import '../style/style.css';

const Product = ({ name, description, price }) => {
  return (
    <div className="product">
      <img src="path/to/your/guitar-image.png" alt="Guitar" className="product-image" />
      <h3 className="product-title">{name}</h3>
      <p className="product-description">{description}</p>
      <p className="product-price">${price}</p>
      <button type="button" className="product-button">Agregar al Carrito</button>
    </div>
  );
};

export default Product;