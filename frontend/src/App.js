import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Checkout from "./Checkout.jsx";
import Header from "./Header.jsx";
import Itemlist from "./Itemlist.jsx";
import Categories from "./Categories.jsx";
import Mystore from "./components/Mystore";

function App() {
  const [items, setItems] = useState({
    products: [],
    services: [],
  });

  const [selectedCategory, setSelectedCategory] = useState("products");

  useEffect(() => {
    Promise.all([axios.get("/api/products"), axios.get("/api/services")]).then(
      (all) => {
        setItems((prev) => ({
          ...prev,
          products: all[0].data,
          services: all[1].data,
        }));
      }
    );
  }, []);

  // const filterItems = (category) => {
  //   if (category === "products") {
  //     return items.products;
  //   } else {
  //     return items.services;
  //   }
  // };

  // const categorizeItems = (category) => {
  //   if (category === "products") {
  //     setItems(products);
  //     return;
  //   }
  //   const newItems = items.filter((item) => item.category === category);
  //   setMenuItems(newItems);
  // };

  return (
    //BEM
    <Router>
      <div className="App">
        <Header />
        <Switch>
          {/* <Route path="/checkout">
            <Checkout /> */}
          {/* </Route> */}
          <Route path="/:user_id">
            <Mystore />
          </Route>

          {/* <Route path="/">
            <Categories
              // filterItems={filterItems} items={items}
              setSelectedCategory={setSelectedCategory}
            />
            <Itemlist
              selectedItems={items[selectedCategory]}
              // products={filterItems(products)} services={filterItems(services)}
            />
          </Route> */}

          {/* <Route path='/products/:id' component={ItemDetails}/> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
