import React from "react";

export default function Item(props) {
  const { id, name, image_path, price, description } = props;
  return (
    <div className="section-center">
      <article key={id} className="menu-item">
        <img src={image_path} alt={name} className="photo" />
        <div className="item-info">
          <header>
            <h4>{name}</h4>
            <h4 className="price">${price}</h4>
          </header>
          <p className="item-text">{description}</p>
        </div>
        <button onClick={props.onClick}>Details</button>
      </article>
    </div>
  );
}
