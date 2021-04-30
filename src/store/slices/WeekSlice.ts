import { createSlice } from "@reduxjs/toolkit";
import { WeekType } from '../../types/weekTypes';

interface WeekState {
  value: WeekType;
}

const initialState: WeekState = {
  value: {} as WeekType
}

export const weekSlice = createSlice({
  name: "week",
  initialState,
  reducers: {
    setWeek: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setWeek } = weekSlice.actions;

export default weekSlice.reducer;
