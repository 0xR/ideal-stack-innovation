"use client";

import { submitItem } from "./actions";

export default function ClientComponent() {
  return (
    <form action={submitItem}>
      <h1 className="text-2xl font-semibold mb-4">Add to do item</h1>
      <div className="flex gap-2">
        <input
          name="item"
          className="border border-slate-300 rounded p-2"
        ></input>
        <button
          className="px-3 py-2 bg-blue-700 text-white rounded"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}
