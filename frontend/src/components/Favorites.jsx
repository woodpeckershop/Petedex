import React from "react";
import Itemlist from "./Itemlist.jsx";

function favorites({ favorites, setSelectedItem }) {
  return (
    <div>
      <Itemlist
        selectedItems={favorites}
        setSelectedItem={setSelectedItem}
      ></Itemlist>
    </div>
  );
}

export default favorites;
