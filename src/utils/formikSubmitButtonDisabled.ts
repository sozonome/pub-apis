import { FormikErrors } from "formik";

export const formikSubmitButtonDisabled = <
  FormDataType = unknown,
  CheckDataShape = unknown
>(
  dirty: boolean,
  errors: FormikErrors<FormDataType>,
  checkData?: CheckDataShape
) => {
  return (!checkData && !dirty) || (dirty && Object.keys(errors).length > 0);
};
