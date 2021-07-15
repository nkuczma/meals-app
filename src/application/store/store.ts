import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../../domain/user/slices/UserSlice";
import weekSlice from '../../domain/week/slices/WeekSlice';

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