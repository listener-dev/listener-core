import * as yup from "yup";
import { optionalTimestampSchema } from "./utils/timestamp";

export const session = yup.object({
  startTime: optionalTimestampSchema,
  durationMinutes: yup.number().required(),
});
