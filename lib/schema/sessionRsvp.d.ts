import * as yup from "yup";
export declare const sessionRsvpSchema: yup.ObjectSchema<{
    status: NonNullable<"going" | "not_going" | undefined>;
    comments: string | undefined;
}, yup.AnyObject, {
    status: undefined;
    comments: undefined;
}, "">;
export type SessionRsvpValue = yup.InferType<typeof sessionRsvpSchema>;
