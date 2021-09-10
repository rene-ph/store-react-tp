import { createSelector } from "@reduxjs/toolkit";

export const getCart = (state) => state.storeCart.cart;
export const getCartQuantity = createSelector(
    getCart,
    (cart) => {
        if (cart.length > 0 ) {
            if (cart.length === 1) {
                return cart[0].quantity;
            } else {
                return cart.reduce((acc, current) => { 
                    return acc + current.quantity;
                }, 0);
            }
        } else {
            return 0;
        }
    }
)
export const getCartTotal = createSelector(
    getCart,
    (cart) => {
        if (cart.length > 0 ) {
            if (cart.length === 1) {
                return cart[0].price;
            } else {
                return cart.reduce((acc, current) => { 
                    return acc + current.price;
                }, 0);
            }
        } else {
            return 0;
        }
    }
)