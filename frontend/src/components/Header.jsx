import { useEffect, useState, useContext } from "react";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteIcon from "@mui/icons-material/Favorite";


import { logo } from "../assets/images";
import { IconButton } from "@mui/material";
import Axios from "axios";
import { authContext } from '../components/providers/AuthProvider';

function Header({ setSelectedItem }) {
  const [productName, setProductName] = useState("");
  const { user_name, user_id } = useContext(authContext);
  const [name, setName] = useState("Guest");
  const [status, setStatus] = useState("Sign In");

  useEffect(() => {
    if (user_name) {
      setName(user_name);
      setStatus("Log Out");
    }
  }, [user_name]);

  // console.log("outside productName", productName);
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

  const myStoreLink = user_id ? '/Mystore' : '/login';

  return (
    <div className="header">
      <Link to="/">
        <img alt="logo" className="header_logo" src={logo} />
      </Link>
      <div className="header_search">
        <form className="header_searchForm" onSubmit={handleSubmit}>
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
            <span className="header_optionLineOne">{`Hello ${name}`}</span>
            <span className="header_optionLineTwo">{status}</span>
          </div>
        </Link>
        <Link to={myStoreLink}>
        <div className="header_option">
          <span className="header_optionLineOne">My</span>
          <span className="header_optionLineTwo">Store</span>
        </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">My</span>
          <span className="header_optionLineTwo">Reports</span>
        </div>
        <Link to="/favorites">
          <div className="header_optionBasket">
            <FavoriteIcon />
          </div>
        </Link>

        <Link to="/checkout">
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
