import { configureStore } from '@reduxjs/toolkit'
import displayDataReducer from "../features/displayData/displayDataSlice"
export const store = configureStore({
  reducer: {
    displayData: displayDataReducer,
  },
})