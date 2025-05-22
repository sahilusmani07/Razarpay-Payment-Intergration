import React from 'react';
import '../public/home.css';
 

const ProductCard = ({ title, price, image, onBuyNow }) => {
  return (
    
       <div className="home-container" style={{ width: '220px', padding: '0 10px 0 10px', textAlign: 'center' }}>

    <img src={image} alt={title} style={{ width: '250px', height: '250px', objectFit: 'cover' }} />
        <br />
         <h2> &nbsp;&nbsp; {title}</h2>
      <p className="product-price">Price: ₹{price}</p>
       <br /> 
      <button className="buy-button" onClick={() => onBuyNow(price)}>Buy Now</button> &nbsp;
       <button className="cart" onClick={() => onBuyNow(price)}>Add Cart</button>

    </div>
    
  );
};

export default ProductCard;
