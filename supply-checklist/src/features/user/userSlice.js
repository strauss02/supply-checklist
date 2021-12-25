import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = { firstName: '', lastName: '', date: '' }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeCredentials: (state, action) => {
      state[action.payload.property] = [action.payload.value]
    },
  },
})

export const selectUser = (state) => state

export const { changeCredentials } = userSlice.actions

export default userSlice.reducer
