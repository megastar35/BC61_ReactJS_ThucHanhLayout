import React from "react";
import Item from "../Item/Item";

const ItemList = () => {
  return (
    <div className="container mx-auto  grid grid-cols-3 gap-10">
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default ItemList;
