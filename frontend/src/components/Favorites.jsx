import { useEffect, useState } from "react";
import Itemlist from "./Itemlist.jsx";
import Axios from "axios";

function Favorites({ setSelectedItem }) {
  const [fav, setFav] = useState([]);
  useEffect(() => {
    Axios.get("/api/favorites/8").then((result) => {
      const favorites = result.data;
      setFav(favorites);
    });
  }, []);

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
