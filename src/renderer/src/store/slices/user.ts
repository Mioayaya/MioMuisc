import { createSlice } from '@reduxjs/toolkit'
import { storeType } from '@renderer/type'

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    isSign: false,
    userData: null
  },
  reducers: {
    setSign: (state: storeType.MIuserSlice, { payload }: { payload: boolean }) => {
      state.isSign = payload
    }
  }
})
const { setSign } = userSlice.actions
export const userSliceActions = { setSign }
export default userSlice.reducer
