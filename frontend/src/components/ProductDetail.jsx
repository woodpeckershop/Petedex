// import { Link } from "react-router-dom";
import "./ProductDetail.scss";
import Axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect, useContext } from "react";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import { authContext } from "./providers/AuthProvider";
// import BasicModal from "./modal.jsx"
import DetailCard from "./DetailCard";
import Map from "./Map.jsx";

function ProductDetail({ category = "products" }) {
  const { user_id } = useContext(authContext);
  const { product_id, service_id } = useParams();
  const productIdParams = Number(product_id || service_id);
  const [fav, setFav] = useState(false);
  const [item, setItem] = useState({});

  useEffect(() => {
    Axios.get(`/api/${category}/${productIdParams}`)
      .then((result) => {
        const itemDetail = result.data[0];
        setItem(itemDetail);
      })
      .catch((err) => console.log(err));
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


 

  if (category === "services") {
    return (
      <div className="service-shell">
         <DetailCard item={item} user_id={user_id} fav={fav} changeFav={changeFav}/>
     

        <Map longitude={item.lng} latitude={item.lat} />
      </div>
    );
  } else {
    return (
      <div className="product-shell">
        <DetailCard item={item} user_id={user_id} fav={fav} changeFav={changeFav}/>
     
    </div>
  );
}
}
export default ProductDetail;
