import { Field, useField } from "formik";
import React from "react";

const Form_Input_Fields = ({ ...props }) => {
  const [field] = useField(props.name);
  return (
    <Field
      {...field}
      {...props}
      className=" py-2 border  rounded px-4 w-full mt-2 bg-[#E2E2E2]"
    ></Field>
  );
};

export default Form_Input_Fields;
