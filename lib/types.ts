export type ID = string;

export type CategoryType = 'regular' | 'recipe';

export type Category = {
  id: ID;
  name: string;
  type: CategoryType;
  recipeUrl?: string;
};

export type Item = {
  id: ID;
  name: string;
  categoryIds: ID[];
};

export type SessionItem = {
  itemId: ID;
  needed: boolean;
  collected: boolean;
};

export type ShoppingSession = {
  id: ID;
  startedAt: string; // ISO
  items: SessionItem[];
};