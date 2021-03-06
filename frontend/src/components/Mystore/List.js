import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { name, description, image_path, price, id } = item;
        return (
          <article className="grocery-item" key={id}>
            <div className="item_box">
              <label className="grocery-label">Product Name</label>
              <div className="title">{name}</div>
            </div>
            <div className="des_container">
              <label className="grocery-label">Description</label>
              <p className="des_title">{description}</p>
            </div>
            <div className="item_box">
              <label className="grocery-label">Price</label>
              <div className="title">${price}</div>
            </div>
            <img className="grocery-img" src={image_path} alt="new" />

            <div className="btn-box">
              <button
                type="button"
                className="edit-btn"
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
