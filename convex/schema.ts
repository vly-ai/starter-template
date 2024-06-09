import { Table } from "convex-helpers/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export const Users = Table("users", {
	email: v.string(), //User's email, populated from Clerk auth
	name: v.string(), //User's full name
	tokenIdentifier: v.string(),
});

export default defineSchema({
	users: Users.table.index("by_token", ["tokenIdentifier"]),
  },
  { schemaValidation: true }
);