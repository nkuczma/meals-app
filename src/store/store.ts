import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";

export const store = configureStore({
  reducer: {
    user: userSlice
  }
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch