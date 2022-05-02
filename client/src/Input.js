import React from "react";

const Input = (props) => {
  const inputStyles = {
    border: "1px solid",
    borderRadius: "20px",
    fontSize: "16px",
    padding: "5px 15px",
    backgroundColor: "light",
    color: "rgb(37, 37, 37)",
    margin: "8px 0",
  };
  return (
    <>
      <input
        type="text"
        style={inputStyles}
        onChange={(e) => props.onChange(e)}
        onKeyUp={(e) => props.onKeyUp(e)}
      />
    </>
  );
};

export default Input;
