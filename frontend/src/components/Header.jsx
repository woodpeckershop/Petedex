import { useState } from "react";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { amazon } from "../assets/images";
import { IconButton } from "@mui/material";
import Axios from "axios";

function Header({ setSelectedItem }) {
  const [productName, setProductName] = useState("");
  console.log("outside productName", productName);
  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8080/api/products/search", {
      productName: productName,
    })
      .then((res) => {
        const searchResult = res.data[0];
        setSelectedItem(searchResult);
        history.push("/search");
      })
      .catch((err) => {
        err.status(500).json({ error: err.message });
      });
  };

  return (
    <div className="header">
      <Link to="/">
        <img alt="logo" className="header_logo" src={amazon} />
      </Link>
      <div className="header_search">
        <form onSubmit={handleSubmit}>
          <input
            className="header_searchInput"
            type="text"
            placeholder="Please type product here."
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />

          <IconButton type="submit">
            <SearchIcon className="header_searchIcon" />
          </IconButton>
        </form>
      </div>
      <div className="header_nav">
        <Link to="/login">
          <div className="header_option">
            <span className="header_optionLineOne">Hello Guest</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/8/favorites">
          <div className="header_optionBasket">
            <FavoriteIcon />
          </div>
        </Link>

        <Link to="/8/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
