import React from "react";
import UserInfo from "./getUser";
import GetCart from "./cart";
import GetHome from "./home";

function Head(){
    return(
    <header>
    <div class="gridContainer">
    <div><GetHome></GetHome></div>
    <div><GetCart></GetCart></div>
    <div><UserInfo></UserInfo></div>
    </div>
    </header>
    )
};
export default Head
