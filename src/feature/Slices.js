import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state,actions) => {
      console.log("pay", actions)
      state.user = actions.payload;
      console.log(state)
    }
  }
})

export const {getUser} = userSlice.actions;
export default userSlice.reducer;