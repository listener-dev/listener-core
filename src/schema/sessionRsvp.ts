import * as yup from "yup";

// Session RSVPs are stored nested under session documents, as /sessions/{sessionId}/rsvps/{userId}
export const sessionRsvpSchema = yup.object({
  status: yup
    .mixed<"going" | "not_going">()
    .oneOf(["going", "not_going"])
    .required(),
  name: yup.string(),
  comments: yup.string().optional(),
});
export type SessionRsvpValue = yup.InferType<typeof sessionRsvpSchema>;
