import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./ItemCard.scss";
import { authContext } from "./providers/AuthProvider";

export default function ItemCard(props) {
  const { id, name, image_path, price, description, category="products" } = props;

  
  const { user_id } = useContext(authContext);
 
  return (
    
      <article key={id} className="item-card">
        <img src={image_path} alt={name} className="photo" />
        <div className="item-info">
          <header>
            <h4>{name}</h4>
            <h4 className="price">${price}</h4>
          </header>
          {/* <p className="item-text">{description}</p> */}
        </div>

        <Link to={`/${user_id}/${category}/${id}`}>
          <button className="button">Details</button>
        </Link>

      </article>
   
  );
}
