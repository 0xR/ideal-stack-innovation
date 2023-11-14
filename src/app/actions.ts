"use server";

import { assertIsNonBlankString } from "@/app/assert-type";
import { revalidateTag } from "next/cache";
import { db } from "@/app/database/db";
import { itemsTable } from "@/app/database/schema";
import { unstable_cache as cache } from "next/cache";

export const getItems = cache(
  () => {
    return db.select().from(itemsTable);
  },
  ["items"],
  {
    tags: ["items"],
  }
);

export async function myAction(formData: FormData) {
  const item = formData.get("item");
  assertIsNonBlankString(item);
  revalidateTag("items");
  console.log("SERVER!!!!", item);
  const itemRow = await db
    .insert(itemsTable)
    .values({
      done: false,
      name: item,
    })
    .returning();
  console.log("itemRow", itemRow);
}
