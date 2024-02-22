import React from "react";

const Form_Label = ({name,label}) => {
  return (
    <label
      htmlFor={name}
      className="block text-[16px] font-medium text-[#000000]  "
    >
      {label}
    </label>
  );
};

export default React.memo(Form_Label);
