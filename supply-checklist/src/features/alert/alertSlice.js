import { createSlice } from '@reduxjs/toolkit'

const initialState = { message: '', isVisible: false }

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    changeVisibility: (state, action) => {
      state.isVisible = action.payload
    },
    changeMessage: (state, action) => {
      state.message = action.payload
    },
  },
})

export const selectAlert = (state) => state

export const { changeVisibility, changeMessage } = alertSlice.actions

export default alertSlice.reducer
