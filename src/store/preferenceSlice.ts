import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeMode = "light" | "dark" | "system";

interface PreferenceStateType {
  theme: ThemeMode;
  language: string;
}

const initialState: PreferenceStateType = {
  theme: "dark",
  language: "en",
};

const preferenceSlice = createSlice({
  name: "preference",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeMode>) {
      state.theme = action.payload;
    },
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
    rehydratePreference(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setTheme, setLanguage, rehydratePreference } =
  preferenceSlice.actions;
export default preferenceSlice.reducer;
