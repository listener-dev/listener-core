import * as yup from "yup";
export declare const sessionRsvpSchema: yup.ObjectSchema<{
    sessionId: string;
    userId: string;
    status: NonNullable<"going" | "not_going" | "maybe" | undefined>;
}, yup.AnyObject, {
    sessionId: undefined;
    userId: undefined;
    status: undefined;
}, "">;
