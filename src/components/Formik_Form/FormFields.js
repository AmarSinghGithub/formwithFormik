import React from "react";
import FormInputFields from "./Form_Input_Fields";
import SelectFile from "./SelectFile";
import DateTimeInput from "./DateTimeInput";
import SelectField from "./SelectField";

const FormFields = ({ ...props }) => {
  return (
    <>
      {["text", "number", "richtext"].includes(props.type) && (
        <FormInputFields {...props} />
      )}
      {["file"].includes(props.type) && <SelectFile {...props} />}
      {["datetime-local", "date"].includes(props.type) && (
        <DateTimeInput {...props} />
      )}
      {["select"].includes(props.type) && <SelectField {...props} />}
    </>
  );
};

export default React.memo(FormFields);
