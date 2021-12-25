import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import initialEquipmentList from './db'

const initialState = { equipment: initialEquipmentList }

export const checklistSlice = createSlice({
  name: 'checklist',
  initialState,
  reducers: {
    changeQuantity: (state, action) => {
      state.equipment.map((item) => {
        return item.name === action.payload.name
          ? (item.currentQuantity = action.payload.newQuantity)
          : item
      })
    },
    addNewItem: (state, action) => {
      state.equipment.push(action.payload)
    },
    removeItem: (state, action) => {
      state.equipment = state.equipment.filter(
        (item) => action.payload.name !== item.name
      )
    },
  },
})

export const selectChecklist = (state) => state

export const { changeQuantity, addNewItem, removeItem } = checklistSlice.actions

export default checklistSlice.reducer
