import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

neonConfig.fetchConnectionCache = true;

export const connection = neon(process.env.DRIZZLE_DATABASE_URL!);
export const db = drizzle(connection, {
  schema
});

// console.log("db", db);

// const result = await db.select().from(...);
