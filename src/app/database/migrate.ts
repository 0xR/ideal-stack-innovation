import "dotenv/config";
import { migrate } from "drizzle-orm/neon-http/migrator";
// import { migrate } from "drizzle-orm/pg-core";
import { db } from "./db";

(async () => {

// This will run migrations on the database, skipping the ones already applied
  await migrate(db, {
    migrationsFolder: "./drizzle/migrations",
  });
})();

// Don't forget to close the connection, otherwise the script will hang
// await connection.end();
