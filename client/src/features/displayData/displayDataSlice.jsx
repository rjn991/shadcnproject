import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const displayDataSlice = createSlice({
  name: 'displayData',
  initialState,
  reducers: {
    setDisplayData: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDisplayData } = displayDataSlice.actions

export default displayDataSlice.reducer