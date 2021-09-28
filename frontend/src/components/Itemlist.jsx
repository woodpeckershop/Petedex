import React from "react";
import "./Home.css";
import ItemCard from "./ItemCard.jsx";

// const allCategories = ['all', ...new Set(items.map((item) => item.category))];


function Itemlist(props) {
  const { selectedItems, setSelectedItem } = props;
  const itemArray = Object.values(selectedItems);
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
      {itemArray.map(item => (
        <ItemCard
          //why error?
          key={item.id}
          id={item.id}
          userId={item.user_id}
          name={item.name}
          image_path={item.image_path}
          description={item.description}
          price={item.price}
          setSelectedItem={setSelectedItem}
        />
      ))
      }
    </div>
  )
}

export default Itemlist;
