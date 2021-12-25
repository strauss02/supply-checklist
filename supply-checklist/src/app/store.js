import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import checklistReducer from '../features/checklist/checklistSlice'
import userReducer from '../features/user/userSlice'
import alertReducer from '../features/alert/alertSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    checklist: checklistReducer,
    user: userReducer,
    alert: alertReducer,
  },
})
