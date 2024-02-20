import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const backgroundColor = props.bgcolor || "#0B128C";
  return (
    <button
      id={props.id}
      className={`rounded-[8px]  h-[32px] px-4  flex gap-2 items-center justify-center text-[12px]  text-white shadow-sm capitalize focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
      style={{ backgroundColor: backgroundColor || "#0B128C" }}
      onClick={props.onClick}
      {...props}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
};

export default Button;
