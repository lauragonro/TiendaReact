import { createContext, useContext, useReducer } from "react";
import reducer from "./Reducer";

const initialState = {
  /*Main Page*/
  items: [],
  selectedCategory: null,
  originalData: [],
  /*Cart Page*/
  cartItems: JSON.parse(localStorage.getItem('cart')) || [],
  /*User*/
  userInitials: {},
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppProvider, useContext, AppContext };