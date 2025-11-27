import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Category } from "../../lib/types";
import { uid } from "../../lib/utils";

const initialState: Category[] = [
  { id: "cat1", name: "Fruits", type: "regular" },
  { id: "cat2", name: "Vegetables", type: "regular" },
  { id: "cat3", name: "Pasta Recipes", type: "recipe", recipeUrl: "https://example.com/pasta" },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<{ name: string; type: Category["type"]; recipeUrl?: string }>) => {
      state.push({
        id: uid(),
        name: action.payload.name,
        type: action.payload.type,
        recipeUrl: action.payload.recipeUrl,
      });
    },
    editCategory: (state, action: PayloadAction<Category>) => {
      const idx = state.findIndex(cat => cat.id === action.payload.id);
      if (idx >= 0) state[idx] = action.payload;
    },
    removeCategory: (state, action: PayloadAction<string>) => {
      return state.filter(cat => cat.id !== action.payload);
    },
  },
});

export const { addCategory, editCategory, removeCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
