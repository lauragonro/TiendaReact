import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppContext } from "./Context.js";

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
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
          .then((response) => response.json())
          .then((data) => setProps(data));
  }, [id]);

  if (!props) {
      return <div></div>;
  }

  const cartAdd = () => {
    dispatch({ type: 'ADD_TO_CART', payload: props });
    alert("Item added to cart");
  };
  
  return (
        <div className="gridConteinerID">
          <div className="imgContainer"><img src={props.image}></img></div>
          <div className="infoContainer">
            <h1>{props.title}</h1>
            <h2>${props.price}</h2>
            <p>{props.description}</p>
            <ThemeProvider theme={theme}>
            <Button onClick={cartAdd} variant="outlined" startIcon={<AddShoppingCartIcon />}>
              Add to cart
            </Button>
            </ThemeProvider>
          </div>
        </div>
    );

}
export default ItemPage;