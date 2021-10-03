import { Link } from "react-router-dom";
import "./ProductDetail.css";
import Axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect, useContext } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { authContext } from "./providers/AuthProvider";
import Map from "./Map.jsx"

function ProductDetail({ category = "products" }) {
  const { user_id } = useContext(authContext);
  const { product_id } = useParams();
  const productIdParams = Number(product_id);
  const [fav, setFav] = useState(false);
  const [item, setItem] = useState({});


console.log('item',item)



  useEffect(() => {
    Axios.get(`/api/${category}/${productIdParams}`).then((result) => {
      const itemDetail = result.data[0];
      setItem(itemDetail);
    });
  }, [productIdParams, category]);

  useEffect(() => {
    Axios.get(`/api/favorites/${user_id}`).then((result) => {
      const isFavored = !!result.data.find((product) => {
        return product.id === productIdParams;
      });
      setFav(isFavored);
    });
  }, [productIdParams, user_id]);

  const changeFav = () => {
    if (!fav) {
      addFav();
    } else {
      deleteFav();
    }
  };

  console.log("useparams", useParams());

  const addFav = () => {
    const newFav = { user_id, product_id: item.id };
    const product_id = newFav.product_id;
    Axios.put(`http://localhost:8080/api/favorites/${user_id}/${product_id}`, {
      newFav: { ...newFav },
    }).then((res) => {
      setFav(true);
      console.log("Successfully added.");
    });
  };

  const deleteFav = () => {
    const oldFav = { user_id, product_id: item.id };
    const product_id = oldFav.product_id;
    Axios.delete(
      `http://localhost:8080/api/favorites/${user_id}/${product_id}`,
      {
        data: { oldFav: oldFav },
      }
    ).then((res) => {
      setFav(false);
      console.log("Successfully deleted.");
    });
  };



  // // Initialize and add the map
  // function initMap() {
  //   // The location of Uluru
  //   const uluru = { lat: -25.344, lng: 131.036 };
  //   // The map, centered at Uluru
  //   const map = new google.maps.Map(document.getElementById("map"), {
  //     zoom: 4,
  //     center: uluru,
  //   });
  //   // The marker, positioned at Uluru
  //   const marker = new google.maps.Marker({
  //     position: uluru,
  //     map: map,
  //   });
  // }

  // const loader = new Loader({
  //   apiKey: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",
  //   version: "weekly",
  //   ...additionalOptions,
  // });

  // loader.load().then(() => {
  //   map = new google.maps.Map(document.getElementById("map"), {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 8,
  //   });
  // });

  return (
    <div className="shell">
      <div className="product">
        <div className="product__info">
          <p>{item.name}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{item.price}</strong>
          </p>
        </div>

        <img src={item.image_path} alt="" className="product__img" />
        <p className="product__img">{item.description}</p>
        {/* <button>Add to basket</button> */}
        <Link
          to={{
            pathname: "/",
          }}
        >
          <button className="product__button">Main Page</button>
        </Link>
        <FavoriteIcon
          className="product__fav"
          color={fav ? "secondary" : "disabled"}
          variant="contained"
          onClick={changeFav}
        />
      </div>

    <Map longitude={item.lng} latitude={item.lat}/>

     
    </div>
  );
}

export default ProductDetail;
