import { useEffect, useState, useContext } from "react";
import "./Header.scss";
import { Link, useHistory } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import StorefrontIcon from "@mui/icons-material/Storefront";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

import { logo } from "../assets/images";
import { IconButton } from "@mui/material";
import Axios from "axios";
import { authContext } from "../components/providers/AuthProvider";

function Header({ setSelectedItem }) {
  const [productName, setProductName] = useState("");
  const { user_name, user_id } = useContext(authContext);
  const [name, setName] = useState("Guest");
  const [status, setStatus] = useState(<LoginIcon style={{ fill: "white", fontSize: "400%" }}/>);

  useEffect(() => {
    if (user_name) {
      setName(user_name);
      setStatus(<LogoutIcon style={{ fill: "white", fontSize: "400%" }}/>);
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
        console.log("err", err);
      });
  };

  const myStoreLink = user_id ? "/Mystore" : "/login";
  const myMessagesLink = user_id ? "/mymessages" : "/login";
  const myFavLink = user_id ? "/favorites" : "/login";

  return (
    <div className="header">
     
      
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
      

      <Link to="/">
        <img alt="logo" className="header_logo" src={logo} />
      </Link>

      <div className="header-right">
        <Link to="/login">
          <div className="header_login">
            <span >{`Hello ${name}`}</span>
            <span >{status}</span>
          </div>
        </Link>

        <Link to={myStoreLink}>
          <StorefrontIcon style={{ fill: "white", fontSize: "400%" }} />
        </Link>

        <Link to={myMessagesLink}>
          <MailOutlineIcon style={{ fill: "white", fontSize: "400%" }} />
        </Link>

        <Link to={myFavLink}>
          <FavoriteBorderIcon style={{ fill: "white", fontSize: "400%" }} />
        </Link>
      </div>
    </div>
  );
}

export default Header;
