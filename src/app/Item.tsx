"use client";

import type { Item as ItemType } from "@/app/database/schema";

export const Item = ({
  item,
  onChange,
  onDelete,
}: {
  item: ItemType;
  onChange: (id: number, done: boolean) => void;
  onDelete: (id: number) => void;
}) => (
  <li
    key={item.id}
    className="flex gap-2 odd:bg-slate-100 even:bg-slate-50 py-1 px-2"
  >
    <input
      type="checkbox"
      defaultChecked={!!item.done}
      onChange={() => onChange(item.id, !item.done)}
    />

    <span className="flex-1 whitespace-nowrap">{item.name}</span>
    <button onClick={() => onDelete(item.id)}>🗑️</button>
  </li>
);
