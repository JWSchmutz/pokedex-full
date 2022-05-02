import React from "react";

const Button = (props) => {
  const buttonStyles = {
    padding: "10px",
    border: "2px solid",
    borderRadius: "15px",
    fontSize: "18px",
    padding: "5px 15px",
    backgroundColor: "rgb(183, 183, 253)",
    color: "rgb(37, 37, 37)",
    margin: "30px",
    cursor: "pointer",
  };
  return (
    <button type="button" style={buttonStyles} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
