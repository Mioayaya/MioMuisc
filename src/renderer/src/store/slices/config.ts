import { createSlice } from '@reduxjs/toolkit'
import { ITHEME, colorList } from '@renderer/server'
import { storeType } from '@renderer/type'

const initialState: storeType.MIconfigSlice = {
  theme: colorList[0]
}

export const configSlice = createSlice({
  name: 'configSlice',
  initialState: initialState,
  reducers: {
    setTheme: (state: storeType.MIconfigSlice, { payload }: { payload: ITHEME }) => {
      state.theme = payload
    }
  }
})

const { setTheme } = configSlice.actions
export const configSliceActions = { setTheme }
export default configSlice.reducer
