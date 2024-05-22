import React from 'react';
import Product from './Product';
import '../style/style.css';

const Menu = ({ products }) => {
  return (
    <>
    <div className="menu">
    <h1>PRODUCTOS </h1> 
    {products.map((product) => (
      <Product 
        key={product.id} 
        name={product.name} 
        description={product.description} 
        price={product.price} 
      />
    ))}
  </div>
  </>
  );
};

export default Menu;
