// src/redux/reducers/cartReducer.js

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload.id);
    case 'RESET_CART':  // Reset the cart
      return [];
      
    default:
      return state;
  }
};

export default cartReducer;
