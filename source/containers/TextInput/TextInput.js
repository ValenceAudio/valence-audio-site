import React from "react";
import "./TextInput.styl";

const TextInput = ({ name, required, nameOverride }) =>
  <div className="form-group">
    <input
      className="form-control"
      data-validation-required-message={`Please enter your ${name.toLowerCase()}.`}
      id={name.toLowerCase()}
      name={nameOverride ? nameOverride : name.toLowerCase()}
      placeholder={`Your ${name}${required ? " *" : ""}`}
      required={required}
      type="text"
    />
    <p className="help-block text-danger"></p>
  </div>;

export default TextInput;
