import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import BasicModal from "./modal.jsx"
import { Link } from "react-router-dom";



export default function DetailCard({item,user_id,fav,changeFav}) {
  

  return (
    <Card sx={{ maxWidth: 1000 }}>
      <CardHeader fontSize="h1"
      titleTypographyProps={{variant:'h1' }}
        title={item.name}
      />
      <CardMedia
        component="img"
        height="800"
        image={item.image_path}
        alt={item.name}
      />
      <CardContent>
        <Typography variant="h4" color="text.secondary" >
        {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon 
           className="product__fav"
           color={fav ? "secondary" : "disabled"}
           variant="contained"
           onClick={changeFav}
          />
        </IconButton>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <Link
            to={{
              pathname: "/",
            }}
          >
            <Button className="product__button">Main Page</Button>
          </Link>
          <BasicModal item={item} user_id={user_id}>Message the owner</BasicModal>
       
      </CardActions>
      
       
    </Card>
  );
}
