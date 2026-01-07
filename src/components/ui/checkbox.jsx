import React from "react";

export default function Checkbox(props) {
  const { checked, text, onChange } = props;
  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <label>{text}</label>
    </div>
  );
}
