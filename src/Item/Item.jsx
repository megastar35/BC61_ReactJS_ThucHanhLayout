import React from "react";
import "./item.css";
const Item = () => {
  return (
    <div className="item text-center bg-gray-100 p-8 mb-10 rounded-md">
      <div className="item-image">
        <img src="../../public/image/item_img.jpg" alt="itemImage" />
      </div>
      <div className="item_body py-8">
        <h2 className="text-md mb-2">Card Title</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          adipisci quia voluptatem! Nisi perspiciatis eos quas odit facere
          suscipit error?
        </p>
      </div>
    </div>
  );
};

export default Item;
