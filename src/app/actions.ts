"use server";

import {assertIsNonBlankString} from "@/app/assert-type";
import {revalidatePath} from "next/cache";
import {db} from "@/app/database/db";
import {itemsTable} from "@/app/database/schema";


export async function getItems() {
    return db.select().from(itemsTable);
}

export async function myAction(formData: FormData) {
    const item = formData.get("item");
    assertIsNonBlankString(item);
    revalidatePath("/");
    console.log("SERVER!!!!", item);
    const itemRow = await db.insert(itemsTable).values({
        done: false, name: item
    }).returning()
    console.log("itemRow", itemRow);
}
