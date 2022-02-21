import React from "react";
import "./Button.css";
const Button = ({ classStyle, customStyle, text, onClick }) => {
  return (
    <button
      className={`button ${classStyle}`}
      style={customStyle}
      onClick={(e) => onClick(e)}
    >
      {text}
    </button>
  );
};

export default Button;
