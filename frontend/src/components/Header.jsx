// import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
// import { Link } from "@mui/material";

// import { useEffect, useState, useContext } from "react";
// import "./Header.scss";
// import { useHistory } from "react-router-dom";

// import SearchIcon from "@mui/icons-material/Search";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";

// import StorefrontIcon from "@mui/icons-material/Storefront";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import LoginIcon from "@mui/icons-material/Login";
// import LogoutIcon from "@mui/icons-material/Logout";

// import { logo } from "../assets/images";
// import { IconButton } from "@mui/material";
// import Axios from "axios";
// import { authContext } from "../components/providers/AuthProvider";

// import { NavLink } from "react-router-dom";

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// export default function Header({ setSelectedItem }) {
//   const [productName, setProductName] = useState("");
//   const { user_name, user_id } = useContext(authContext);
//   const [name, setName] = useState("Guest");
//   const [status, setStatus] = useState(<LoginIcon />);

//   useEffect(() => {
//     if (user_name) {
//       setName(user_name);
//       setStatus(<LogoutIcon />);
//     }
//   }, [user_name]);

//   // console.log("outside productName", productName);
//   let history = useHistory();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     Axios.post("http://localhost:8080/api/products/search", {
//       productName: productName,
//     })
//       .then((res) => {
//         const searchResult = res.data[0];
//         setSelectedItem(searchResult);
//         history.push("/search");
//       })
//       .catch((err) => {
//         console.log("err", err);
//       });
//   };

//   const myStoreLink = user_id ? "/Mystore" : "/login";
//   const myMessagesLink = user_id ? "/mymessages" : "/login";
//   const myFavLink = user_id ? "/favorites" : "/login";

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar
//         className="appbar"
//         position="sticky"
//         // style={{ background: "#ece7dd" }}
//         color="primary"
//       >
//         <Toolbar>

//           <Link href="/" underline="none" color='secondary'>
//             {<h2>PETEDEX</h2>}
//           </Link>

//           <Search>
//             <form className="header_searchForm" onSubmit={handleSubmit}>
//               <SearchIconWrapper>
//                 <IconButton type="submit">
//                   <SearchIcon />
//                 </IconButton>
//               </SearchIconWrapper>
//               <StyledInputBase
//                 placeholder="Please type here."
//                 inputProps={{ "aria-label": "search" }}
//                 value={productName}
//                 onChange={(e) => setProductName(e.target.value)}
//               />
//             </form>
//           </Search>

//           <Box sx={{ flexGrow: 1 }} />
//           <Box sx={{ display: { xs: "none", md: "flex" } }}>

//             <IconButton
//               size="large"
//               edge="end"
//               aria-label="store of current user"
//               color="inherit"
//               component={Link}
//               to="/login"
//             >
//               {`Hello ${name}`}
//               {status}
//             </IconButton>

//             <IconButton
//               size="large"
//               edge="end"
//               aria-label="store of current user"
//               color="inherit"
//               component={Link}
//               to={myStoreLink}
//             >
//               <StorefrontIcon />
//             </IconButton>

//             <IconButton
//               size="large"
//               edge="end"
//               aria-label="message of current user"
//               color="inherit"
//               component={Link}
//               to={myMessagesLink}
//             >
//               <MailOutlineIcon />
//             </IconButton>

//             <IconButton
//               size="large"
//               edge="end"
//               aria-label="fav of current user"
//               color="inherit"
//               component={Link}
//               to={myFavLink}
//             >
//               <FavoriteBorderIcon />
//             </IconButton>

//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }





// function Header({ setSelectedItem }) {
//   const [productName, setProductName] = useState("");
//   const { user_name, user_id } = useContext(authContext);
//   const [name, setName] = useState("Guest");
//   const [status, setStatus] = useState(
//     <LoginIcon style={{ fill: "#e1533c", fontSize: "400%" }} />
//   );

//   useEffect(() => {
//     if (user_name) {
//       setName(user_name);
//       setStatus(<LogoutIcon style={{ fill: "#e1533c", fontSize: "400%" }} />);
//     }
//   }, [user_name]);

//   // console.log("outside productName", productName);
//   let history = useHistory();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     Axios.post("http://localhost:8080/api/products/search", {
//       productName: productName,
//     })
//       .then((res) => {
//         const searchResult = res.data[0];
//         setSelectedItem(searchResult);
//         history.push("/search");
//       })
//       .catch((err) => {
//         console.log("err", err);
//       });
//   };

//   const myStoreLink = user_id ? "/Mystore" : "/login";
//   const myMessagesLink = user_id ? "/mymessages" : "/login";
//   const myFavLink = user_id ? "/favorites" : "/login";

//   return (
//     <div className="header">
//       {
//         <form className="header_searchForm" onSubmit={handleSubmit}>
//           <input
//             className="header_searchInput"
//             type="text"
//             placeholder="Please type product here."
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//             size="50"
//           />
//           <IconButton type="submit">
//             <SearchIcon
//               style={{ fill: "#e1533c", fontSize: "400%" }}
//               className="header_searchIcon"
//             />
//           </IconButton>
//         </form>
//       }

//       {
//         <Link to="/">
//           <img alt="logo" className="header_logo" src={logo} />
//         </Link>
//       }

//       <div className="header-right">
//         <Link to="/login">
//           <div className="header_login">
           
//             <span className="header-right-font">{`Hello ${name}`}</span>
//             <span>{status}</span>
//           </div>
//         </Link>
//         <Link to={myStoreLink}>
//           <StorefrontIcon
//             className="header-right-button"
//             style={{ 
//               // fill: "#e1533c", 
//               fontSize: "400%" }}
//           />
//         </Link>

//         <Link to={myMessagesLink}>
//           <MailOutlineIcon
//             className="header-right-button"
//             style={{ 
//               // fill: "#e1533c", 
//               fontSize: "400%" }}
//           />
//         </Link>

//         <Link to={myFavLink}>
//           <FavoriteBorderIcon
//             className="header-right-button"
//             style={{ 
//               // fill: "#e1533c", 
//               fontSize: "400%" }}
//           />
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Header;

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
