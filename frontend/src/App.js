import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Checkout from "./Checkout.jsx";
import Header from "./Header.jsx";
// import Home from "./Home";



function App() {
  const [state, setState] = useState({
    products:[]
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/products"),
      // axios.get("/api/services"),
    ]).then((all) => {
      console.log('all',all[0].data)
      setState((prev) => ({
        ...prev,
        products: all[0].data,
      }));
    });
  }, []);

  //why/when is the state set?
  console.log('state', state)




  return (
    //BEM
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">
            {/* <Home /> */}
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
