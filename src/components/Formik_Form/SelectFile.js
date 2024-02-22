import React, { useState } from "react";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";

const SelectFile = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [fileName, setFileName] = useState("");
  const inputId = `file-input-${props.name}`;

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
      setFieldValue(props.name, selectedFile); 
    } else {
      setFileName("");
      setFieldValue(props.name, null); 
    }
  };

  return (
    <div>
      <input
        type="file"
        id={inputId}
        className="sr-only"
        onChange={handleChange}
      />
      <label
        htmlFor={inputId}
        className="mt-2 relative flex h-10 items-center justify-between rounded-md border border-dashed border-[#e0e0e0]  text-center bg-[#E2E2E2] cursor-pointer"
      >
        <span className="block pl-[16px] text-[14px] text-[#B5B5B5]">
          {fileName || "Choose a file"}
        </span>
        <span className="inline-flex py-2 border-l-2 border-[#B5B5B5] px-7 text-base font-medium text-[#07074D]">
          Browse
        </span>
      </label>
    </div>
  );
};

SelectFile.propTypes = {
  name: PropTypes.string.isRequired,
};

export default React.memo(SelectFile);
