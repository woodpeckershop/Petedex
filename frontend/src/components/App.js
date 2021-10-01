import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Checkout from "./Checkout.jsx";
import Header from "./Header.jsx";
import Itemlist from "./Itemlist.jsx";
import Categories from "./Categories.jsx";
import ProductDetail from "./ProductDetail.jsx";
import Mystore from "./Mystore";
import Favorites from "./Favorites.jsx";
import Login from "./Users/login.js";

function App() {
  const [items, setItems] = useState({
    products: null,
    services: null,
    favorites: {},
  });

  const [selectedCategory, setSelectedCategory] = useState("products");
  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    Promise.all([
      axios.get("/api/products"),
      axios.get("/api/services"),
      axios.get("/api/favorites/8"),
    ]).then((all) => {
      setItems((prev) => ({
        ...prev,
        products: all[0].data,
        services: all[1].data,
        // favorites: all[2].data,
      }));
    });
  }, []);

  console.log("items", items);
  return (
    //BEM

    <Router>
      <div className="App">
        <Header setSelectedItem={setSelectedItem} />
        <Switch>
          <Route path="/mystore" exact>
            <Mystore />
          </Route>

          <Route path="/search">
            <Itemlist items={selectedItem} />
          </Route>

          <Route path="/:user_id/products" exact>
            <Categories setSelectedCategory={setSelectedCategory} />
            <Itemlist items={items[selectedCategory]} />
          </Route>
          {/* <Route path="/checkout"> */}
          <Route path="/8/checkout">
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/" exact>
            <Categories setSelectedCategory={setSelectedCategory} />
          </Route>
          <Route path="/products" exact>
            <Itemlist category='products' items={items["products"]} />
          </Route>
          <Route path="/services" exact>
            <Itemlist category='services' items={items["services"]} />
          </Route>
          <Route path={`/:user_id/products/:product_id`} exact>
            <ProductDetail category='products' />
          </Route>
          <Route path={`/:user_id/services/:product_id`} exact>
            <ProductDetail category='services' />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
