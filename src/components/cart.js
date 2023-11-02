import React from "react";
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';


function GetCart(){

    const theme = createTheme({
        palette: {
          primary: {
            main: '#f5f5dc',
          },
        },
      });

      
      return(
        <span className="cartIcon">
        <ThemeProvider theme={theme}>
        <Link to="/cartList">
        <IconButton  size="large" color="primary" >
        <ShoppingCartIcon fontSize="inherit" />
        </IconButton>
        </Link>
        </ThemeProvider>
        </span>
      )
}export default GetCart
