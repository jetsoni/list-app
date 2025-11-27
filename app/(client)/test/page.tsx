"use client";

import React from "react";
import CategoryList from "../../../components/lists/CategoryList";

export default function TestPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">CategoryList Test</h1>
      <CategoryList />
    </div>
  );
}
