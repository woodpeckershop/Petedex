import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Header from "./Header.jsx";
import Itemlist from "./Itemlist.jsx";
import Categories from "./Categories.jsx";
import ProductDetail from "./ProductDetail.jsx";
import Mystore from "./Mystore";
import Favorites from "./Favorites.jsx";
import Login from "./Users/login.js";
import MessageGroup from "./messages/MessageGroup";
import { authContext } from "./providers/AuthProvider";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography";

import { useTheme } from '@mui/material/styles';
import { FaCommentsDollar } from "react-icons/fa";

// const theme = createTheme({
//   typography: {
//     fontFamily: ["Baloo 2"],
//   },
//   palette: {
//     primary: green,
//     // primary: {
//     //   main: "#ece7dd",
//     // },
//     secondary: {
//       main: "#e1533c",
//     },
//   },
// });

function App() {
  const [items, setItems] = useState({
    products: null,
    services: null,
    favorites: null,
  });

const theme = useTheme()
console.log('theme',theme)

  const [selectedCategory, setSelectedCategory] = useState("products");
  const [selectedItem, setSelectedItem] = useState();
  const { user_id } = useContext(authContext);

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

  console.log("items", items);
  return (
    //BEM
    

    <Router>
      {/* <ThemeProvider theme={theme}> */}
        {/* <div className="app"> */}
        <Header setSelectedItem={setSelectedItem} />

        <Button variant="contained">Contained</Button>

        <Switch>
          <Route path="/mymessages" exact>
            {user_id ? <MessageGroup /> : <Redirect to="/login" />}
          </Route>

          <Route path="/mystore" exact>
            <Mystore setItems={setItems} items={items} />
          </Route>

          <Route path="/search">
            <Itemlist items={selectedItem} />
          </Route>

          {/* <Route path="/:user_id/products" exact>
              <Categories setSelectedCategory={setSelectedCategory} />
              <Itemlist items={items[selectedCategory]} />
            </Route> */}

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/favorites">
            <Favorites />
          </Route>

          <Route path="/products" exact>
            <Itemlist category="products" items={items["products"]} />
          </Route>
          <Route path="/services" exact>
            <Itemlist category="services" items={items["services"]} />
          </Route>
          <Route path={`/:user_id/products/:product_id`} exact>
            <ProductDetail category="products" />
          </Route>
          <Route path={`/:user_id/services/:product_id`} exact>
            <ProductDetail category="services" />
          </Route>
          <Route path="/">
            <Categories setSelectedCategory={setSelectedCategory} />
          </Route>
        </Switch>
        {/* </div> */}
        {/* </ThemeProvider> */}
    </Router>
  
    
  );
}

export default App;
