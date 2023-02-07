import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} style={{ margin: "0 10px" }}>
      {children}
    </button>
  );
};

export default Button;
