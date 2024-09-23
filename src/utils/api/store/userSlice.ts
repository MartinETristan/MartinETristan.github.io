import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: null,
  theme: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});


export const { setLanguage } = userSlice.actions;
export default userSlice.reducer;