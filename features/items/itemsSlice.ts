import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Item } from "../../lib/types";
import { uid } from "../../lib/utils";

const initialState: Item[] = [];

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ name: string; categoryIds?: string[] }>) => {
      state.push({
        id: uid(),
        name: action.payload.name,
        categoryIds: action.payload.categoryIds || [],
      });
    },
    editItem: (state, action: PayloadAction<Item>) => {
      const idx = state.findIndex(i => i.id === action.payload.id);
      if (idx >= 0) state[idx] = action.payload;
    },
    removeItem: (state, action: PayloadAction<string>) => {
      return state.filter(i => i.id !== action.payload);
    },
    assignItemToCategory: (state, action: PayloadAction<{ itemId: string; categoryId: string }>) => {
      const item = state.find(i => i.id === action.payload.itemId);
      if (item && !item.categoryIds.includes(action.payload.categoryId)) {
        item.categoryIds.push(action.payload.categoryId);
      }
    },
  },
});

export const { addItem, editItem, removeItem, assignItemToCategory } = itemsSlice.actions;
export default itemsSlice.reducer;
