import * as yup from "yup";
import { timestampSchema } from "./utils/timestamp";

export const session = yup.object({
  startTime: timestampSchema,
  durationMinutes: yup.number().required(),
  title: yup.string().required(),
  livekitRoomName: yup.string(),
});
export type SessionValue = yup.InferType<typeof session>;
