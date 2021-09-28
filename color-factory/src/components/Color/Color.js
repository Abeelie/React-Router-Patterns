import React from "react";
import { Link } from "react-router-dom";

const Color = (props) => {
  return (
    <div style={{ backgroundColor: props.value, height: "90vh" }}>
      <h1 style={{textAlign: "center"}}>This is {props.name}</h1>
      <h1><Link to="/colors">Go Back</Link></h1>
    </div>
  );
}

export default Color;