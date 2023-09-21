import React from "react";

function ShowItem(props) {
  return (
    <div className="itemCard">
      <img src={props.image}></img>
      <h3 className="itemTitle">{props.title}</h3>
      <h2 className="itemPrice">${props.price}</h2>
    </div>
  )
};
export default ShowItem;