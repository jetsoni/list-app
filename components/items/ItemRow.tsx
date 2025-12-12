"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { toggleNeeded, toggleCollected } from "../../features/session/sessionSlice";
import { Item } from "../../lib/types";

interface ItemRowProps {
  item: Item;
}

export default function ItemRow({ item }: ItemRowProps) {
  const dispatch = useDispatch<AppDispatch>();
  const session = useSelector((state: RootState) => state.session);

  // Find the item in the session
  const sessionItem = session?.items.find((i) => i.itemId === item.id);

  const needed = sessionItem?.needed ?? false;
  const collected = sessionItem?.collected ?? false;

  return (
    <div className="flex justify-between p-2 border-b">
      <span>{item.name}</span>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(toggleNeeded(item.id))}
          className="text-black px-2 py-1 bg-blue-200 rounded"
        >
          {needed ? "✔ Needed" : "Add"}
        </button>
        <button
          onClick={() => dispatch(toggleCollected(item.id))}
          disabled={!needed}
          className="text-black px-2 py-1 bg-green-200 rounded disabled:opacity-50"
        >
          {collected ? "✔ Collected" : "Collect"}
        </button>
      </div>
    </div>
  );
}
