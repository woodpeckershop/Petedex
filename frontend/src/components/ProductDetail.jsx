import React from "react";
import "./ProductDetail.css";

function ProductDetail({ selectedItem }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{selectedItem.name}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{selectedItem.price}</strong>
        </p>
      
      </div>

      <img src={selectedItem.image} alt="" />
      <button>Add to basket</button>
    </div>
  );
}

export default ProductDetail;
