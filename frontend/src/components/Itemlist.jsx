import React from "react";
// import "./Home.css";
import ItemCard from "./ItemCard.jsx";

// const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function Itemlist(props) {
  const { items } = props;
  console.log("items", items);

  if (!Array.isArray(items)) {
    return (
      <div>
        <ItemCard
          //why error?
          key={items.id}
          id={items.id}
          userId={items.user_id}
          name={items.name}
          image_path={items.image_path}
          description={items.description}
          price={items.price}
        />
      </div>
    );
  }
  // const itemArray = Object.values(items);
  // const [items, setItems] = useState(items);
  // const [categories, setCategories] = useState(allCategories);

  // const itemList = props.products.map((product) => {
  //   return (
  //     <Item
  //     //why error?
  //       key={product.id}
  //       id={product.id}
  //       user_id={product.user_id}
  //       name={product.name}
  //       image_path={product.image_path}
  //       description={product.description}
  //       price={product.price}
  //     />
  //   );
  // });
  // return <ul>{itemList}</ul>;
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
        />
      ))}
    </div>
  );
}

export default Itemlist;
