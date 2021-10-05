import { Link } from "react-router-dom";
import "./ProductDetail.scss";
import Axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect, useContext } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { authContext } from "./providers/AuthProvider";
<<<<<<< HEAD
import BasicModal from "./modal.jsx"

=======
import Map from "./Map.jsx";
>>>>>>> b16ea0b5e00c31c03f156bf3ca9485bdab4d5a6a

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


  // const [input, setInput] = useState('');
  // const handleReply = () => {
  //   const templateVar = {
  //     recipient_id: item.user_id,
  //     sender_id: user_id,
  //     content: input,
  //   };

  //   Axios.put('http://localhost:8080/api/messages', templateVar)
  //     .then((data) => {
  //       console.log("message sent")
  //     })
  //     .catch((err) => console.log(err));
  //   setInput('');
  //   return;
  // };

  if (category === "services") {
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

        <Map longitude={item.lng} latitude={item.lat} />
      </div>
    );
  } else {
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
      <FavoriteIcon className="product__fav" color={fav? "secondary": "disabled"} variant="contained" onClick={changeFav} />
      <BasicModal item={item} user_id={user_id}>Message the owner</BasicModal>

      {/* <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleReply}>Send</button> */}
    </div>
    </div>
  );
}
export default ProductDetail;
