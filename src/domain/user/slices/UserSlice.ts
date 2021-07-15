import { createSlice } from "@reduxjs/toolkit";
import firebase from 'firebase';

interface UserState {
  value: firebase.auth.UserCredential | null;
}

const initialState: UserState = {
  value: null
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
