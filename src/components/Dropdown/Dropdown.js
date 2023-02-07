import React from "react";

const Dropdown = ({ onChange, value }) => {
  return (
    <>
      <label htmlFor="languages">Statuses:</label>
      <select onChange={onChange} value={value} name="" id="languages">
        <option value="expired">Expired</option>
        <option value="wip">Work in progress</option>
      </select>
    </>
  );
};

export default Dropdown;
