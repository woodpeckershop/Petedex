import { Link } from "react-router-dom";
import "./ProductDetail.css";
import Axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

function ProductDetail() {
  const { user_id, product_id } = useParams();
  const productIdParams = Number(product_id)
  const [fav, setFav] = useState(false);
  const [item, setItem] = useState({});
  

  // useEffect(() => {
  //   Axios.get("/api/products").then((result) => {
      
  //     const itemDetail = result.data[productIdParams]
  //     setItem(itemDetail);
  //   });
  // }, [productIdParams]);

    useEffect(() => {
    Axios.get(`/api/products/${productIdParams}`).then((result) => {
      console.log('result.data',result.data)
      const itemDetail = result.data[0]
      setItem(itemDetail);
    });
  }, [productIdParams]);


  useEffect(() => {
    Axios.get("/api/favorites/8").then((result) => {
      
      const isFavored = !!result.data.find((product) => {
       
        return product.id === productIdParams
      });
      setFav(isFavored);
    });
  }, [productIdParams]);

  // useEffect(() => {
  //   if (Object.keys(fav).length === 0) {
  //     setColor("disabled");
  //   } else {
  //     setColor("secondary");
  //   }
  // }, []);

  const changeFav = () => {
    if (!fav) {
      addFav();
    } else {
     deleteFav();
    }
  };

 
  console.log('useparams',useParams())

  const addFav = () => {
    const newFav = { user_id, product_id: item.id };
    const product_id = newFav.product_id;
    Axios.put(`http://localhost:8080/api/favorites/${user_id}/${product_id}`, {
      newFav: { ...newFav },
    }).then((res) => {
      setFav(true);
      console.log('Successfully added.')
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
      console.log('Successfully deleted.')
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{item.name}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{item.price}</strong>
        </p>
      </div>

      <img src={item.image_path} alt="" />
      <button>Add to basket</button>
      <Link
        to={{
          pathname: "/",
        }}
      >
        <button>Main Page</button>
      </Link>
      <FavoriteIcon color={fav? "secondary": "disabled"} variant="contained" onClick={changeFav} />
    </div>
  );
}

export default ProductDetail;
