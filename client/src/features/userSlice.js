// Assuming you have a slice file for user information, e.g., userSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    aadhar:'',
    password :''
  },
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload)
      state.aadhar = action.payload.aadhar;
      state.password = action.payload.password;
    },
  },
});

export const { setUser  } = userSlice.actions;

export const selectUserInfo = (state) => state.user.userInfo;

export default userSlice.reducer;
