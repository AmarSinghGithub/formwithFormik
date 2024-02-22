import React from "react";
import FormLabel from "./Form_Label";
import FormFields from "./FormFields";
import FormHelp from "./Form_Help";
import FormError from "./Form_Error";

const FormField = ({ label, help, width, ...props }) => {
  return (
    <div className={`col-span-${width}`}>
      <FormLabel label={label} name={props.name} />
      <FormFields {...props} />
      <FormHelp help={help} id={props.name} />
      <FormError name={props.name} />
    </div>
  );
};

export default React.memo(FormField);
