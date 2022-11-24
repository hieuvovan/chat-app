import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

const { actions, reducer } = authSlice;

export const { setUser, setIsLoggedIn } = actions;

export default reducer;
