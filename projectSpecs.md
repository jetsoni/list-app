PROJECT BRIEF FOR LLM — List App (Redux + Next.js)
Overview

This project is a shopping list / packing list application built with:

Next.js 14 (App Router)

React

Redux Toolkit

TypeScript

Tailwind CSS

The app supports:

Category management (regular + recipe categories)

Items belonging to one or more categories

A Shopping Session, where items can be marked:

needed

collected (which locks the item)

Real-time state shown via Redux

The development is currently in an early state but the core state logic works.

Current State of the Codebase
Folder Structure
app/
  layout.tsx
  test/page.tsx                ← temporary test page

components/
  lists/
    CategoryList.tsx
  items/
    ItemRow.tsx

features/
  categories/categoriesSlice.ts
  items/itemsSlice.ts
  session/sessionSlice.ts

store/
  index.ts

lib/
  types.ts

Core Data Models (FINAL TYPES USED IN PROJECT)
export type ID = string;

export interface Category {
  id: ID;
  name: string;
  type: "regular" | "recipe";
  recipeUrl?: string;
}

export interface Item {
  id: ID;
  name: string;
  categoryIds: ID[];
}

export interface SessionItem {
  itemId: ID;
  needed: boolean;
  collected: boolean;
}

export interface ShoppingSession {
  id: ID;
  startedAt: string;
  items: SessionItem[];
}


These types are stable and finalized for now.

Redux Setup
store/index.ts
export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    items: itemsReducer,
    session: sessionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

Slices
categoriesSlice

Manages a list of categories.

addCategory, updateCategory, removeCategory.

itemsSlice

Manages items and their category assignments.

Items reference category IDs.

sessionSlice

Handles state during shopping:

Toggle needed

Toggle collected

Create new session

Mark item collected locks its state

Core design:
session.items[] holds objects { itemId, needed, collected }

Working Components
CategoryList.tsx

Displays each category

Lists items belonging to that category

Uses ItemRow to render each item

Contains a debug <pre> showing the full Redux state

Works correctly

ItemRow.tsx

Receives { item, session }

Button to toggle needed

Button to toggle collected

"Collected" disables other interactions

Correctly dispatches Redux state updates

Testing

A temporary page at:

/test


renders:

<CategoryList />

Some static H1 text

This page is used for development.

Known Issues

These exist but are non-blocking:

1. Hydration mismatch warning in Next.js

This is due to server/client differences (likely from session ID generation or debug <pre>).
Safe to ignore until layout work begins.

2. Case-sensitive import issues

Resolved by ensuring filenames match import casing exactly.

3. Node version defaulted to v12

Resolved by local environment fixes (NVM).

What Currently Works

Redux store fully operational

Categories and items render correctly

Items can be toggled as needed and collected

Session updates in real time

UI shows live debug output

Components and slices compile without TypeScript errors

Test page displays list correctly

Next Steps (for the LLM to work on next)

Design actual UI pages (instead of /test)

/categories

/shopping

/items

Create Shopping Page

Show all needed items grouped by category

Show collected items separately

"End Shopping" resets session

Improve Component Architecture

Shared UI components

Better layout and styling

Recipe Categories

Store recipeUrl

Clicking recipe opens page with auto-import items

Hydration Fix (later)

Replace debug <pre>

Avoid client/server mismatched random IDs

Animations

Use Framer Motion for toggles and transitions

High-Level Design Requirements

Use Redux Toolkit for all state

Do NOT use server components for interactive parts

UI components should be client components

Keep TS types strict

Avoid unnecessary hydration triggers

Summary

The project is now at a stable starting point:
The Redux architecture works, the types are clean, the core interactions function, and the component structure is correct.

Now you can continue development focusing on UI, persistent storage, recipes, and finishing the shopping workflow.