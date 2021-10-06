// import * as React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./ItemCard.scss";
import { authContext } from "./providers/AuthProvider";

export default function ItemCard(props) {
  const { id, name, image_path, price, category = "products" } = props;
  const { user_id } = useContext(authContext);

  return (
    <Card sx={{ maxWidth: 345 }} className="item-card" >
      <CardMedia component="img" height="140" image={image_path} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${price}
        </Typography>
      </CardContent>

      <Link to={`/${user_id}/${category}/${id}`}>
        <CardActions>
          <Button size="small">Details</Button>
        </CardActions>
      </Link>
    </Card>
  );
}

// export default function ItemCard(props) {
//   const { id, name, image_path, price, category="products" } = props;
//   const { user_id } = useContext(authContext);

//   return (

//       <article key={id} className="item-card">
//         <img src={image_path} alt={name} className="photo" />
//         <div className="item-info">
//           <header>
//             <h4>{name}</h4>
//             <h4 className="price">${price}</h4>
//           </header>
//           {/* <p className="item-text">{description}</p> */}
//         </div>

//         <Link to={`/${user_id}/${category}/${id}`}>
//           <button className="button">Details</button>
//         </Link>

//       </article>

//   );
// }
