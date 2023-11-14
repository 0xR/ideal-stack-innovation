"use client";

import type { Item as ItemType } from "@/app/database/schema";

export const Item = ({
  item,
  onChange,
}: {
  item: ItemType;
  onChange: (id: number, done: boolean) => void;
}) => (
  <li key={item.id} className="flex gap-2">
    <input
      type="checkbox"
      defaultChecked={!!item.done}
      onChange={() => onChange(item.id, !item.done)}
    />
    {item.name}
  </li>
);
