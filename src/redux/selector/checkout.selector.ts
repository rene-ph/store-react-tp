import { createSelector } from "@reduxjs/toolkit";

export const getCheckoutInfo = (state) => state.storeCheckout.checkout;

export const getUserInfo = createSelector(
    getCheckoutInfo,
    (info) => info.user
)

export const getPaymentInfo = createSelector(
    getCheckoutInfo,
    (info) => info.payment
)

export const isValidUserInfo = createSelector(
    getCheckoutInfo,
    (info) => info.user !== null
)

export const isValidPaymentInfo = createSelector(
    getCheckoutInfo,
    (info) => info.payment !== null
)