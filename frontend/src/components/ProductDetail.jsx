import React from "react";
import { Link } from "react-router-dom";
import "./ProductDetail.css";

function ProductDetail(props) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{props.selectedItem.name}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{props.selectedItem.price}</strong>
        </p>
      </div>

      <img src={props.selectedItem.image} alt="" />
      <button>Add to basket</button>
      <Link
        to={{
          pathname: "/",
          // state: { selectedItem:true  },
        }}
      >
      <button>Main Page</button>
      </Link>

    </div>
  );
}

export default ProductDetail;
