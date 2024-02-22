import React from "react";

const Form_Help = ({ help, id }) => {
  return <div className="mt-2 text-sm text-gray-500" id={id}>{help}</div>;
};

export default React.memo(Form_Help);
