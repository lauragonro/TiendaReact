import React from "react";
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';


function GetHome(){

    const theme = createTheme({
        palette: {
          primary: {
            main: '#f5f5dc',
          },
        },
      });

      
      return(
        <span className="homeIcon">
        <ThemeProvider theme={theme}>
        <Link to="/">
        <IconButton  size="large" color="primary" >
        <HomeIcon fontSize="inherit" />
        </IconButton>
        </Link>
        </ThemeProvider>
        </span>
      )
}export default GetHome
