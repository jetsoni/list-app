import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ShoppingSession, SessionItem } from "../../lib/types";
import { uid, nowISO } from "../../lib/utils";

const initialState: ShoppingSession = {
  id: uid(),
  startedAt: nowISO(),
  items: [],
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    toggleNeeded: (state, action: PayloadAction<string>) => {
      const existing = state.items.find(i => i.itemId === action.payload);
      if (existing) {
        existing.needed = !existing.needed;
      } else {
        state.items.push({ itemId: action.payload, needed: true, collected: false });
      }
    },
    toggleCollected: (state, action: PayloadAction<string>) => {
      const existing = state.items.find(i => i.itemId === action.payload);
      if (existing) {
        existing.collected = !existing.collected;
      }
    },
    resetSession: state => {
      state.items = [];
    },
  },
});

export const { toggleNeeded, toggleCollected, resetSession } = sessionSlice.actions;
export default sessionSlice.reducer;
