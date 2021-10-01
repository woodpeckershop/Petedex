import { useContext, useEffect, useState } from "react";
import Itemlist from "./Itemlist.jsx";
import Axios from "axios";
import { authContext } from "../components/providers/AuthProvider";


function Favorites({ setSelectedItem }) {
  const { user_id } = useContext(authContext);
  console.log("ididididdi",user_id);
  const [fav, setFav] = useState([]);
  useEffect(() => {
    Axios.get(`/api/favorites/${user_id}`).then((result) => {
      const favorites = result.data;
      setFav(favorites);
    });
  }, [user_id]);

  return (
    <div>
      <Itemlist
        items={fav}
        setSelectedItem={setSelectedItem}
      ></Itemlist>
    </div>
  );
}

export default Favorites;
