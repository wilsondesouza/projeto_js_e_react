import * as types from "./types"

export default function reducer(state, action) {
    switch (action.type) {
      case types.addToCartType:
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
          type: types.addToCartType,
          mode: 'ADD_TO_CART'
        };
      case types.removeFromCartType:
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload),
          type: types.removeFromCartType,
          mode: 'REMOVE_FROM_CART'
        };
      case types.increaseQuantityType:
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item),
            type: types.increaseQuantityType,
            mode: 'INCREASE_QUANTITY'
        };
      case types.decreaseQuantityType:
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item),
            type: types.decreaseQuantityType,
            mode: 'DECREASE_QUANTITY'
        };
      default:
        return state;
    }
  }