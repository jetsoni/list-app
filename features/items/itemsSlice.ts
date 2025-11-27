import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Item } from "../../lib/types";
import { uid } from "../../lib/utils";

const initialState: Item[] = [
  { id: "item1", name: "Apple", categoryIds: ["cat1"] },
  { id: "item2", name: "Banana", categoryIds: ["cat1", "cat2"] },
  { id: "item3", name: "Carrot", categoryIds: ["cat2"] },
  { id: "item4", name: "Spinach", categoryIds: ["cat2"] },
  { id: "item5", name: "Spaghetti", categoryIds: ["cat3"] },
  { id: "item6", name: "Penne", categoryIds: ["cat3"] },
];

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
