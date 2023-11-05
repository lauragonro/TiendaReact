import React from "react";
import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { AppContext } from "./Context.js";

function CartPage() {
  const { state, dispatch } = useContext(AppContext);

  const remove = (itemId) => {
    const itemIndex = state.cartItems.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
      const updatedCartItems = [...state.cartItems];
      updatedCartItems.splice(itemIndex, 1);
      dispatch({ type: "REMOVE_FROM_CART", payload: updatedCartItems });
    }
  };

  const totalPrice = () => {
    return state.cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cartList">
      <h1>Cart List</h1>
      <div className="products">
        {state.cartItems.map((props) => (
          <div className="gridContainerL">
            <h2>{props.title}</h2>
            <h2>${props.price}</h2>
            <IconButton
              onClick={() => remove(props.id)}
              size="large"
              color="error"
            >
              <ClearIcon fontSize="inherit" />
            </IconButton>
          </div>
        ))}
        <hr></hr>
        <div className="total">
          <h2>Total:</h2>
          <h2>${totalPrice()}</h2>
        </div>
      </div>
    </div>
  );
}
export default CartPage;
