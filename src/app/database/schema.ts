import {
  boolean,
  pgTable,
  serial,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

export const itemsTable = pgTable(
  "items",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    done: boolean("done"),
  },
  (items) => ({
    nameIndex: uniqueIndex("name_idx").on(items.name),
  })
);

export type Item = typeof itemsTable.$inferSelect;
