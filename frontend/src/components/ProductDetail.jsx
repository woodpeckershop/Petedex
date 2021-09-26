import React from "react";
import "./ProductDetail.css";

function Product({ name, image, price }) {
  return (
    <div className="product">
      <div classname="product__info">
        <p>{name}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      
      </div>

      <img src={image} alt="" />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
