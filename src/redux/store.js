import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contactAPI';
import { filterSlice } from './filter';

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});
