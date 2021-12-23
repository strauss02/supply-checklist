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
  },
})

export const selectChecklist = (state) => state

export const { changeQuantity, addNewItem } = checklistSlice.actions

export default checklistSlice.reducer
