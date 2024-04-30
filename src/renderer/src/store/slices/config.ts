import { createSlice } from '@reduxjs/toolkit'
import { THEME, colorList } from '@renderer/server'
import { storeType } from '@renderer/type'

export const configSlice = createSlice({
  name: 'configSlice',
  initialState: {
    theme: colorList[0] as THEME
  },
  reducers: {
    setTheme: (state: storeType.MIconfigSlice, { payload }: { payload: THEME }) => {
      state.theme = payload
    }
  }
})

const { setTheme } = configSlice.actions
export const configSliceActions = { setTheme }
export default configSlice.reducer
