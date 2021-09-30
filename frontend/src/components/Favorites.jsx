import { useEffect, useState } from "react";
import Itemlist from "./Itemlist.jsx";
import Axios from "axios";
const getLocalUser = () => {
  let user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  } else {
    return null;
  }
};


function Favorites({ setSelectedItem }) {
  const user_id = getLocalUser();
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
