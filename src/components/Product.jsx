import React from 'react';
<<<<<<< HEAD
import '../style/style.css';
=======

>>>>>>> 1bf54d362ae9caa71b7b26fce63601a317f84d62

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
