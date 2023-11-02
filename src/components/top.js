import React from "react";
import UserInfo from "./getUser";
import GetCart from "./cart";
import GetHome from "./home";

function Head(){
    return(
    <header data-testid="header">
        <div className="gridContainer">
        <div data-testid="home-component"><GetHome /></div>
        <div data-testid="cart-component"><GetCart /></div>
        <div data-testid="user-info-component"><UserInfo /></div>
        </div>
    </header>
    )
};
export default Head
