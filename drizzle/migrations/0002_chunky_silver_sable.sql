CREATE TABLE IF NOT EXISTS "groups" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users_to_groups" (
	"user_id" integer NOT NULL,
	"group_id" integer NOT NULL,
	CONSTRAINT users_to_groups_user_id_group_id PRIMARY KEY("user_id","group_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_to_groups" ADD CONSTRAINT "users_to_groups_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_to_groups" ADD CONSTRAINT "users_to_groups_group_id_groups_id_fk" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
