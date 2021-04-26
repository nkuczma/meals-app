import { createSlice } from "@reduxjs/toolkit";
import firebase from 'firebase';
// Define a type for the slice state
interface UserState {
  value: firebase.auth.UserCredential | null;
}

// Define the initial state using that type
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
