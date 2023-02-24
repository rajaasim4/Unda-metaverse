import React from "react";

const Input = (props) => {
  return (
    <div className="form-input">
      <input type={props.type} placeholder={props.name} />
    </div>
  );
};

export default Input;
