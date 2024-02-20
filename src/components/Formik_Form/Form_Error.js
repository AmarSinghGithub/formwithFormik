import React from "react";
import { ErrorMessage } from "formik";

const Form_Error = ({ name }) => {
  return <ErrorMessage name={name} component="div" className="text-red-500" />;
};

export default Form_Error;
