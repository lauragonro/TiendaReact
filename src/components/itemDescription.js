import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function ItemPage(){

  const theme = createTheme({
    palette: {
      primary: {
        main: '#7B3C0D',
      },
    },
  });

  const { id } = useParams();
  const [props, setProps] = useState(null);

  useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
          .then((response) => response.json())
          .then((data) => setProps(data));
  }, [id]);

  if (!props) {
      return <div></div>;
  }

  const cartAdd = () => {
      if (typeof window !== 'undefined' && window.localStorage) {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.push(props);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        alert("Item added to cart");
      }
  };
  
  return (
        <div className="gridConteinerID">
          <div className="imgContainer"><img src={props.image}></img></div>
          <div className="infoContainer">
            <h1>{props.title}</h1>
            <h2>${props.price}</h2>
            <p>{props.description}</p>
            <ThemeProvider theme={theme}>
            <Button onClick={cartAdd}mvariant="outlined" startIcon={<AddShoppingCartIcon />}>
              Add to cart
            </Button>
            </ThemeProvider>
          </div>
        </div>
    );

}
export default ItemPage;