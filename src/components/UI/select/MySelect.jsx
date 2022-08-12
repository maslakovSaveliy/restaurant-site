import React from "react";
const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      style={{ marginBottom: "20px" }}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
export default MySelect;
