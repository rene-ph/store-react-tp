import { createSelector } from "@reduxjs/toolkit";

export const getCart = (state: any) => state.storeCart.cart;
export const getCartQuantity = createSelector(
    getCart,
    (cart: any) => {
        if (cart.length > 0 ) {
            if (cart.length === 1) {
                return cart[0].quantity;
            } else {
                return cart.reduce((acc: any, current: any) => { 
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
    (cart: any) => {
        if (cart.length > 0 ) {
            if (cart.length === 1) {
                return cart[0].price;
            } else {
                return cart.reduce((acc: any, current: any) => { 
                    return acc + current.price;
                }, 0);
            }
        } else {
            return 0;
        }
    }
)