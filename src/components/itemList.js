import React from "react";
import { useState, useEffect } from "react";
import ShowItem from "./item";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function ShowItems() {
  const [items, setItems] = useState([]);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#7B3C0D',
      },
    },
  });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const newData = [];
        for (let i = 0; i < 10; i++) {
          newData.push(data[i]);
        }
        setItems(newData);
      });
  }, []);

  function seeAll() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  };

  function seeLess() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const newData = [];
        for (let i = 0; i < 10; i++) {
          newData.push(data[i]);
        }
        setItems(newData);
      });
  };

  return (
    <div>
      {items ? (
        <>
          <div className="itemsList">
            {items.map((product) => (
              <ShowItem key={product.id} title={product.title} image={product.image} price={product.price} />
            ))}
          </div>
          <ThemeProvider theme={theme}>
          <div className="allLess">
          {items.length === 10 ?
            <Button variant="text" onClick={seeAll}>------Ver Todos------</Button>
            :
            <Button variant="text" onClick={seeLess}>------Ver Menos------</Button>
          }
          </div>
          </ThemeProvider>
        </>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  )
};
export default ShowItems;