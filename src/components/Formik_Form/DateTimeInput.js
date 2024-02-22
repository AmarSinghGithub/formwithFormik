import { Field } from "formik";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";

const DateTimeInput = ({name,type, ...props }) => {
  return (
    <div>
      <Field name={name}>
        {({ field, form }) => (
          <input
            selected={field.value}
            type={type}
            onChange={(e) => form.setFieldValue(name, e.target.value)}
            // showTimeInput
            {...props}
            className=" py-2 border  rounded px-4 w-full mt-2 bg-[#E2E2E2]"
          />
        )}
      </Field>
    </div>
  );
};

export default React.memo(DateTimeInput);
