// /lib/types.ts

export type ID = string;

export type CategoryType = "regular" | "recipe";

export type Category = {
  id: ID;
  name: string;
  type: CategoryType;
  recipeUrl?: string;
};

export type Item = {
  id: ID;
  name: string;
  categoryIds: ID[]; // An item can belong to multiple categories
};

export type SessionItem = {
  itemId: ID;
  needed: boolean;
  collected: boolean;
};

export type ShoppingSession = {
  id: ID;
  startedAt: string; // ISO timestamp
  items: SessionItem[];
};
