import React from "react";
import { Link } from "react-router-dom";
import "./ItemCard.scss";

export default function ItemCard(props) {
  const { id, name, image_path, price, description } = props;
  const getLocalUser = () => {
    let user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    } else {
      return null;
    }
  };
  
    const user_id = getLocalUser();
 
  return (
    <div className="section-center">
      <article key={id} className="item-card">
        <img src={image_path} alt={name} className="photo" />
        <div className="item-info">
          <header>
            <h4>{name}</h4>
            <h4 className="price">${price}</h4>
          </header>
          {/* <p className="item-text">{description}</p> */}
        </div>

        <Link to={`/${user_id}/products/${id}`}>
          <button className="button">Details</button>
        </Link>


       
      </article>
    </div>
  );
}
