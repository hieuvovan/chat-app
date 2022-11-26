import { createSlice } from '@reduxjs/toolkit';
import { ApiService } from '@services/axios';
import { HYDRATE } from 'next-redux-wrapper';
import { login as loginService } from '@services/index';

const axiosInstance = new ApiService();

const initialState = {
  user: {},
};

const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return (state = {
        ...state,
        ...action.payload.authReducer,
      });
    },
  },
});

const { actions, reducer } = authSlice;

export const { setUser } = actions;

export const getProfile = (token?: string) => async (dispatch: any) => {
  try {
    const resp: any = await axiosInstance.get(
      ['profile'],
      {},
      {
        headers: token
          ? {
              Authorization: `Bearer ${token}`,
            }
          : {},
      }
    );

    const { data } = resp || {};

    dispatch(setUser(data));
  } catch (error) {
    console.log(error);
  }
};

export const login =
  (body: any, callback?: () => void) => async (dispatch: any) => {
    try {
      await loginService(body);
      await dispatch(getProfile());

      callback && callback();
    } catch (error) {
      console.log(error);
    }
  };

export default reducer;
