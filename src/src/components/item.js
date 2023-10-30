import React from "react";
import { Link } from 'react-router-dom';

function ShowItem(props) {
  return (
    <div className="itemCard">
      <img src={props.image}></img>
      <Link to={`/itemDescription/${props.id}`} style={{ textDecoration: 'none' }}>
      <h3 className="itemTitle">{props.title}</h3>
      </Link>
      <h2 className="itemPrice">${props.price}</h2>
    </div>
  )
};
export default ShowItem;