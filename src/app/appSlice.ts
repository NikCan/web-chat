import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    users: [] as UserType[]
  },
  reducers: {
    setUsers: (state, action: PayloadAction<{ users: UserType[] }>) => {
      state.users.push(...action.payload.users)
    },
  },
})

export const {reducer: appReducer, actions: appActions} = appSlice
export type UserType = {
  userId: number,
  userName: string,
  message: string,
  photo: string
}