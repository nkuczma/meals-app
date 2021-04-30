import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import weekSlice from './slices/WeekSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    week: weekSlice,
  },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch