import React from "react";
import "./Home.css";
import ItemCard from "./ItemCard.jsx";

// const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function Itemlist(props) {
  const { items, category } = props;
  console.log("items", items);

  if (!items) return false;

  if ((Array.isArray(items) && !items.length)) {
    return <h1>There is no pet!</h1>;
  }

  if (!Array.isArray(items)) {
    return <ItemCard
      //why error?
      key={items.id}
      id={items.id}
      userId={items.user_id}
      name={items.name}
      image_path={items.image_path}
      description={items.description}
      price={items.price}
      category={category}
    />
  }

  return (
    <div>
      {items.map((item) => (
        <ItemCard
          //why error?
          key={item.id}
          id={item.id}
          userId={item.user_id}
          name={item.name}
          image_path={item.image_path}
          description={item.description}
          price={item.price}
          category={category}
        />
      ))}
    </div>
  );
}

export default Itemlist;
