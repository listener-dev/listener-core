import * as yup from "yup";
export declare const sessionRsvpSchema: yup.ObjectSchema<{
    status: NonNullable<"going" | "not_going" | undefined>;
    name: string | undefined;
    comments: string | undefined;
}, yup.AnyObject, {
    status: undefined;
    name: undefined;
    comments: undefined;
}, "">;
export type SessionRsvpValue = yup.InferType<typeof sessionRsvpSchema>;
