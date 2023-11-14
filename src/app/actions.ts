"use server";

import { assertIsNonBlankString } from "@/app/assert-type";
import { revalidateTag } from "next/cache";
import { db } from "@/app/database/db";
import { itemsTable } from "@/app/database/schema";
import { unstable_cache as cache } from "next/cache";
import { eq } from "drizzle-orm";

export const getItems = cache(
  () => {
    return db.select().from(itemsTable).orderBy(itemsTable.name);
  },
  ["items"],
  {
    tags: ["items"],
  }
);

export async function submitItem(formData: FormData) {
  const item = formData.get("item");
  assertIsNonBlankString(item);

  const itemRow = await db
    .insert(itemsTable)
    .values({
      done: false,
      name: item,
    })
    .returning();

  revalidateTag("items");

  console.log("Inserted item", itemRow);
}

export async function updateItemDone(id: number, done: boolean) {
  const item = await db
    .update(itemsTable)
    .set({ done })
    .where(eq(itemsTable.id, id))
    .returning();

  revalidateTag("items");

  console.log("Updated item", item);
}

export async function deleteItem(id: number) {
  const item = await db
    .delete(itemsTable)
    .where(eq(itemsTable.id, id))
    .returning();

  revalidateTag("items");

  console.log("Deleted item", item);
}
