import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'reducers';

export const makeStore = (preloadedState = {}) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    preloadedState,
  });

export const reduxWrapper = createWrapper<any>(makeStore);
