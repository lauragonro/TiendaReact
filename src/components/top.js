import React from "react";
import UserInfo from "./getUser";
import GetCart from "./cart";

function Head(){
    return(
    <header>
    <div class="gridContainer">
    <div></div>
    <div><GetCart></GetCart></div>
    <div><UserInfo></UserInfo></div>
    </div>
    </header>
    )
};
export default Head
