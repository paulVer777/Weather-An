import React from "react";

export const Radio = ({ onChange }) => (
  <input
    type="radio" onChange={onChange}
    name={"city"}
  />
);