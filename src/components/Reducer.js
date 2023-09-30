const reducer = (state, action) => {
  switch (action.type) {
    /*Main Page*/
    case "SET_ITEMS":
      return {
        ...state,
        items: action.payload,
      };
    case "SET_SELECTED_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case "SET_ORIGINAL_DATA":
      return {
        ...state,
        originalData: action.payload,
      };

    /*Cart Page*/
    case 'ADD_TO_CART':
      const newItem = action.payload;
      const updatedCart = [...state.cartItems, newItem];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { 
        ...state, 
        cartItems: updatedCart 
      };
    case 'REMOVE_FROM_CART':
      return { 
        ...state,
        cartItems: action.payload,
      };

    /*User*/
    case 'SET_USER_INITIALS':
      return {
        ...state,
        userInitials: action.payload,
    };

    default:
      return state;
  }
  
}; 
export default reducer;