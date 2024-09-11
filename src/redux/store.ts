import { configureStore } from '@reduxjs/toolkit';
import objectSlice from './objectSlice';
export const store = configureStore({
  reducer: {
    user: objectSlice,
    // Add other reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;