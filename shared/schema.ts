import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  package: text("package"), // Optional package they are interested in
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertInquirySchema = createInsertSchema(inquiries).omit({ 
  id: true, 
  createdAt: true 
});

export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
