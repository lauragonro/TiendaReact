import React from 'react';
import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const remove = (itemId) => {
    const indexToRemove = cartItems.findIndex((item) => item.id === itemId);

    if (indexToRemove !== -1) {
      const updatedCart = [...cartItems];
      
      updatedCart.splice(indexToRemove, 1);
    
      setCartItems(updatedCart);

      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  const totalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cartList">
      <h1>Cart List</h1>
      <div>
        {cartItems.map((props) => (
          <div className="gridContainerL">
            <h2>{props.title}</h2>
            <h2>${props.price}</h2>
            <IconButton onClick={() => remove(props.id)} size="large" color="error" >
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