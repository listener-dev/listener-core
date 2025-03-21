import * as yup from "yup";
/**
 * Schema for user preferences stored in Firestore
 */
export declare const userSchema: yup.ObjectSchema<{
    displayName: string | undefined;
    email: string | undefined;
    timezone: string | undefined;
    createdAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | undefined;
}, yup.AnyObject, {
    displayName: undefined;
    email: undefined;
    timezone: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        isEqual: undefined;
        toMillis: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        isEqual: undefined;
        toMillis: undefined;
        toDate: undefined;
    };
}, "">;
export type UserValue = yup.InferType<typeof userSchema>;
