import React from "react";
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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
        <IconButton  size="large" color="primary" >
        <ShoppingCartIcon fontSize="inherit" />
        </IconButton>
        </ThemeProvider>
        </span>
      )
}export default GetCart
