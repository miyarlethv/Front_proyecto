import React from 'react'


const Menu = () => {
  return (
    <div className="menu">
    {products.map((product) => (
      <Product 
        key={product.id} 
        name={product.name} 
        description={product.description} 
        price={product.price} 
      />
    ))}
  </div>
  )
}

export default Menu

