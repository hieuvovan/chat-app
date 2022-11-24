import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'reducers';

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export const reduxWrapper = createWrapper<any>(makeStore);
