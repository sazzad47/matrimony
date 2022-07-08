import React from "react";

const Input = ({ name, handleChange, placeholder, value, type }) => (
  <label class="custom-field three">
    <input 
    type={type}
    name={name}
    value={value} 
    onChange={handleChange}
    placeholder="&nbsp;" />
    <span class="placeholder">{placeholder}</span>
    <span class="border"></span>
  </label>
);

export default Input;
