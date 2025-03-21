import * as yup from "yup";
import { timestampSchema } from "./utils/timestamp";

/**
 * Schema for user preferences stored in Firestore
 */
export const userSchema = yup.object({
  displayName: yup.string().optional(),
  email: yup.string().email().optional(),
  timezone: yup.string().optional(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

export type UserValue = yup.InferType<typeof userSchema>;
