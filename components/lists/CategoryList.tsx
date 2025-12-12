"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ItemRow from "../items/ItemRow";
import { Category, Item } from "../../lib/types";


export default function CategoryList() {
  const categories = useSelector((state: RootState) => state.categories);
  const items = useSelector((state: RootState) => state.items);

  return (
    <div>
      {categories.map((category: Category) => (
        <div key={category.id} className="mb-6">
          <h2 className="font-bold text-lg mb-2">{category.name}</h2>
          <div className="border rounded">
            {items
              .filter((item: Item) => item.categoryIds.includes(category.id))
              .map((item: Item) => (
                <ItemRow key={item.id} item={item} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
