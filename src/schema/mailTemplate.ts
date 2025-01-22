import * as yup from "yup";
import { requiredStringArray } from "./utils/arrays";

export const mailTemplateSchema = yup.object().shape({
  html: yup.string().required(),
  subject: yup.string().required(),
  requiredDataKeys: requiredStringArray,
});
