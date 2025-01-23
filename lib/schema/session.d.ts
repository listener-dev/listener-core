import * as yup from "yup";
export declare const session: yup.ObjectSchema<{
    startTime: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    durationMinutes: number;
}, yup.AnyObject, {
    startTime: {
        seconds: undefined;
        nanoseconds: undefined;
        isEqual: undefined;
        toMillis: undefined;
        toDate: undefined;
    };
    durationMinutes: undefined;
}, "">;
export type SessionValue = yup.InferType<typeof session>;
