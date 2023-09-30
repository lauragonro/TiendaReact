import React from "react";
import { useContext, useEffect } from "react";
import ShowItem from "./item";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import { AppContext } from "./Context.js"; 
 

function ShowItems() {
  const { state, dispatch } = useContext(AppContext);

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
        dispatch({ type: "SET_ITEMS", payload: data.slice(0, 10) });
        dispatch({ type: "SET_ORIGINAL_DATA", payload: data });
      });
  }, [dispatch]);

  function seeAll() {
    if (state.selectedCategory !== null) {
      dispatch({ type: "SET_SELECTED_CATEGORY", payload: null });
      dispatch({
        type: "SET_ITEMS",
        payload: state.originalData.slice(0, 10),
      });
    } else {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: "SET_ITEMS", payload: data });
        });
    }
  }

  function seeLess() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const newData =
          state.selectedCategory !== null
            ? data
                .filter((item) => item.category === state.selectedCategory)
                .slice(0, 10)
            : data.slice(0, 10);
        dispatch({ type: "SET_ITEMS", payload: newData });
      });
  }

  function getFilters(data) {
    const categories = new Set();
    data.forEach((item) => {
      categories.add(item.category);
    });
    return Array.from(categories);
  }
  const uniqueCategories = getFilters(state.items);

  function filter(category) {
    const filteredData = state.items
      .filter((item) => item.category === category)
      .slice(0, 10);
    dispatch({ type: "SET_SELECTED_CATEGORY", payload: category });
    dispatch({ type: "SET_ITEMS", payload: filteredData });
  }

  function clearFilter() {
    dispatch({ type: "SET_SELECTED_CATEGORY", payload: null });
    dispatch({
      type: "SET_ITEMS",
      payload: state.originalData.slice(0, 10),});
  }

  return (
    <div>
      {state.items ? (
        <>
        <ThemeProvider theme={theme}>
        <div className="categoryButtons">
          {uniqueCategories.map((category) => (
            <Button key={category} variant="outlined" onClick={() => filter(category)}>
              {category}
            </Button>
          ))}
          {state.selectedCategory && (
            <IconButton onClick={() => clearFilter()} size="small" color="error" >
            <ClearIcon fontSize="inherit" />
            </IconButton>
          )}
        </div>
        </ThemeProvider>
        <div className="itemsList">
          {state.items.map((prop) => (
            <ShowItem id={prop.id} title={prop.title} image={prop.image} price={prop.price} />
          ))}
        </div>
        <ThemeProvider theme={theme}>
        <div className="allLess">
        {state.items.length === 10 ?
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