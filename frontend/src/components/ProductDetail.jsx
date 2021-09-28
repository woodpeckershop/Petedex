import { Link } from "react-router-dom";
import "./ProductDetail.css";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import classnames from 'classnames';
import FavoriteIcon from '@mui/icons-material/Favorite';


function ProductDetail(props) {
  const [fav, setFav] = useState({});
  const [color, setColor] = useState('disabled')
 
  const changeFav = () => {
    if (Object.keys(fav).length === 0) {
      setColor('secondary')
      // let color = "secondary"
      return addFav();
     
    }
    setColor('disabled')
    // let color = "primary"
    return deleteFav();
  };

  let { user_id } = useParams();

  const favClass = classnames("favme",{

  }
);

  // Favorite Button - Heart
// $('.favme').click(function() {
// 	$(this).toggleClass('active');
// });

// /* when a user clicks, toggle the 'is-animating' class */
// $(".favme").on('click touchstart', function(){
//   $(this).toggleClass('is_animating');
// });

  const addFav = () => {
    const newFav = { user_id, product_id: props.selectedItem.id };
    const product_id = newFav.product_id;
    Axios.put(`http://localhost:8080/api/favorites/${user_id}/${product_id}`, {
      newFav: { ...newFav },
    }).then((res) => {
      console.log("newFav", newFav);
      setFav(newFav);
      // showAlert(true, "success", "Fav added to the list");
      // const newItem = {
      //   id: new Date().getTime().toString(),
      //   title: name,
      //   des: description,
      //   image: image,
      //   price: price,
      // };
      console.log("addFav sucessussfully!", res);
    });
  };

  const deleteFav = () => {
    const oldFav = { user_id, product_id: props.selectedItem.id };
    console.log("oldFav", oldFav);
    const product_id = oldFav.product_id;
    Axios.delete(
      `http://localhost:8080/api/favorites/${user_id}/${product_id}`,
      {
        data: { oldFav: oldFav },
      }
    ).then((res) => {
      setFav({});
      console.log("oldFav", oldFav);
      // showAlert(true, "success", "Fav added to the list");
      // const newItem = {
      //   id: new Date().getTime().toString(),
      //   title: name,
      //   des: description,
      //   image: image,
      //   price: price,
      // };
      console.log("deleteFav sucessussfully!", res);
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{props.selectedItem.name}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{props.selectedItem.price}</strong>
        </p>
      </div>

      <img src={props.selectedItem.image_path} alt="" />
      <button>Add to basket</button>
      <Link
        to={{
          pathname: "/",
        }}
      >
        <button>Main Page</button>
      </Link>
    {/* <button></button> */}
        <FavoriteIcon color={color} variant='contained' onClick={changeFav} />
  
    </div>
  );
}

export default ProductDetail;
