import { createSelector } from "@reduxjs/toolkit";

export const getCheckoutInfo = (state:any) => state.storeCheckout.checkout;

export const getUserInfo = createSelector(
    getCheckoutInfo,
    (info :any) => info.user
)

export const getPaymentInfo = createSelector(
    getCheckoutInfo,
    (info :any) => info.payment
)

export const isValidUserInfo = createSelector(
    getCheckoutInfo,
    (info :any) => info.user !== null
)

export const isValidPaymentInfo = createSelector(
    getCheckoutInfo,
    (info :any) => info.payment !== null
)