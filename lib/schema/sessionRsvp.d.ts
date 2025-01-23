import * as yup from "yup";
export declare const sessionRsvpSchema: yup.ObjectSchema<{
    status: NonNullable<"going" | "not_going" | undefined>;
}, yup.AnyObject, {
    status: undefined;
}, "">;
export type SessionRsvpValue = yup.InferType<typeof sessionRsvpSchema>;
