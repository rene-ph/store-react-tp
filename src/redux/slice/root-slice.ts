import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    displayModal: {
        state: false,
        text: '',
        type: '',
        autoHideDuration : 600,
    },
    displayModalDialog: {
        open: false,
        title: '',
        text:'',
        cancelText: 'Cancel',
        accepText: 'OK'
    }
}

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
      setDisplayModal: (state, action) => {
          state.displayModal.state = action.payload.state
          state.displayModal.text = action.payload.text
          state.displayModal.type = action.payload.type
          state.displayModal.autoHideDuration = action.payload.autoHideDuration ? action.payload.autoHideDuration : 600
      },
      setDisplayModalDialog: (state, action) => {
        state.displayModalDialog = action.payload
      }
  },
});

export const { setDisplayModal, setDisplayModalDialog } = rootSlice.actions;
export default rootSlice.reducer