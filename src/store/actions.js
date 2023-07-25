import * as types from "./types"

export function  addToCart() {
    return (
        {
            type: types.addToCartType
        }
    )
};
export function  removeFromCart() {
    return (
        {
            type: types.removeFromCartType
        }
    )
};
export function  increaseQuantity() {
    return (
        {
            type: types.increaseQuantityType
        }
    )
};
export function  decreaseQuantity() {
    return (
        {
            type: types.decreaseQuantityType
        }
    )
};
