import { relations } from 'drizzle-orm';
import { boolean, integer, pgTable, primaryKey, serial, text, varchar, } from "drizzle-orm/pg-core";

export const itemsTable = pgTable(
  "items",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    done: boolean("done"),
  },
);

export type Item = typeof itemsTable.$inferSelect;

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name'),
});

export type User = typeof users.$inferSelect;

export const usersRelations = relations(users, ({ many }) => ({
  usersToGroups: many(usersToGroups),
}));

export const groups = pgTable('groups', {
  id: serial('id').primaryKey(),
  name: text('name'),
});

export type Group = typeof groups.$inferSelect;

export const groupsRelations = relations(groups, ({ many }) => ({
  usersToGroups: many(usersToGroups),
}));

export const usersToGroups = pgTable('users_to_groups', {
    userId: integer('user_id').notNull().references(() => users.id),
    groupId: integer('group_id').notNull().references(() => groups.id),
  }, (t) => ({
    pk: primaryKey({ columns: [t.userId, t.groupId] }),
  }),
);

export const usersToGroupsRelations = relations(usersToGroups, ({ one }) => ({
  group: one(groups, {
    fields: [usersToGroups.groupId],
    references: [groups.id],
  }),
  user: one(users, {
    fields: [usersToGroups.userId],
    references: [users.id],
  }),
}));
