import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  checkout: {
    user: null,
    payment: null
  },
}

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      state.checkout.user = action.payload
    },
    updateUserPayment: (state, action) => {
      state.checkout.payment = action.payload
    }
  },
});


export const { updateUserInfo, updateUserPayment } = checkoutSlice.actions;

export default checkoutSlice.reducer