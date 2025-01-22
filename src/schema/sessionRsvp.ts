import * as yup from "yup";

export const sessionRsvpSchema = yup.object({
  sessionId: yup.string().required(),
  userId: yup.string().required(),
  status: yup
    .mixed<"going" | "not_going" | "maybe">()
    .oneOf(["going", "not_going", "maybe"])
    .required(),
});
export type SessionRsvp = yup.InferType<typeof sessionRsvpSchema>;
