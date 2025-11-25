import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categories/categoriesSlice";
import itemsReducer from "../features/items/itemsSlice";
import sessionReducer from "../features/session/sessionSlice";

// configureStore sets up the root Redux store
export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    items: itemsReducer,
    session: sessionReducer,
  },
});

// Type helpers for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
