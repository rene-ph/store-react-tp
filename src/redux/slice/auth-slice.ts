import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  auth: {
      user: null,
      token: null
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      state.auth.token = action.payload;
    },
    setUser(state, action){
      state.auth.user = action.payload;
    },
    signOut(state){
      state.auth.user = null;
      state.auth.token = null;
    }
  }
});

export default authSlice.reducer

export const { setToken, setUser, signOut } = authSlice.actions
