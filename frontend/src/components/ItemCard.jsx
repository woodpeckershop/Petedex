import React from "react";
import { Link } from "react-router-dom";

export default function Item(props) {
  const { id, name, image_path, price, description, setSelectedItem } = props;
  // const handleItemPage =()=>{
  //   setSelectedItem(props);
  //   props.history.push('/')

  // }
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

        <Link to={`/products/${id}`}>
          <button onClick={()=>setSelectedItem(props)}>Details</button>
        </Link>


       
      </article>
    </div>
  );
}
