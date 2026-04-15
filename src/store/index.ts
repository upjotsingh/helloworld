import { configureStore } from "@reduxjs/toolkit";
import preferenceReducer, { rehydratePreference } from "./preferenceSlice";
import { getItem, setItem } from "../utils/storage";

const PERSIST_KEY = "APP_USER_DATA";

export const store = configureStore({
  reducer: {
    preference: preferenceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const loadStore = async () => {
  const saved = await getItem(PERSIST_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed.preference)
        store.dispatch(rehydratePreference(parsed.preference));
    } catch (e) {
      console.error("Failed to parse persisted state", e);
    }
  }
};

store.subscribe(() => {
  const state = store.getState();
  const persistData = {
    preference: state.preference,
  };
  setItem(PERSIST_KEY, JSON.stringify(persistData));
});
