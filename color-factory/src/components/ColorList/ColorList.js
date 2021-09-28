import React from "react";
import { Link } from "react-router-dom";

const ColorList = (props) => {
  const links = Object.keys(props.colors).map((color) => (
    <li key={color}>
      <Link to={`/colors/${color}`}>{color}</Link>
    </li>
  ))

  return (
    <div align="center">
      <h1>Welcome to Color Factory</h1>
        <h1 style={{fontSize: "20px"}}><Link to="colors/new">Add a Color</Link></h1>
      <p>{links}</p>
    </div>
  )
}

export default ColorList;