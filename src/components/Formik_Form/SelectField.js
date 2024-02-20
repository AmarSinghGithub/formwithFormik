import { Field } from "formik";
import React from "react";

const SelectField = ({ name, type, rules, ...props }) => {
  return (
    <div>
      <Field
        as="select"
        id={name}
        name={name}
        {...props}
        className=" py-2 border  rounded px-4 w-full mt-2 bg-[#E2E2E2]"
      >
        {rules.options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </Field>
    </div>
  );
};

export default SelectField;
