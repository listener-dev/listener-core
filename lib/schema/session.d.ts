import * as yup from "yup";
export declare const session: yup.ObjectSchema<{
    startTime: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    durationMinutes: number;
}, yup.AnyObject, {
    startTime: undefined;
    durationMinutes: undefined;
}, "">;
