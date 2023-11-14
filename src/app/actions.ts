"use server";
import "./db";

import { assertIsNonBlankString } from "@/app/assert-type";
import { revalidatePath } from "next/cache";

const items: string[] = [];

export async function getItems() {
  return items;
}

export async function myAction(formData: FormData) {
  const item = formData.get("item");
  assertIsNonBlankString(item);
  items.push(item);
  revalidatePath("/");
  console.log("SERVER!!!!", item);
}
