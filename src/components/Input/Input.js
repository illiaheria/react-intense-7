import React from "react";

const Input = ({ placeholder, handleInputChange = () => {}, value }) => {
  // console.log("render");
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
      style={{ margin: "50px 0 15px" }}
    />
  );
};

export default React.memo(Input);
