import React, { useState } from "react";
import { Link } from "react-router-dom";

const ColorForm = (props) => {
  const [formData, setFormData] = useState({ name: "", color: "#ffffff" });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addColor({ [formData.name]: formData.color });
    setFormData(formData);
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(colorData => ({...colorData, [name]: value }))
  }

  return (
   <div align ="center" style={{marginTop: "100px"}}>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Color Name: </label>
      <input id="name" name="name" value={formData.name} onChange={handleChange}></input>
      <label htmlFor="value">Color: </label>
      <input type="color" id="color" name="color" value={formData.color} onChange={handleChange}></input>
      <button>Add Color</button>
      <h1><Link to="/colors">Go Back</Link></h1>
    </form>
   </div>
  )
}

export default ColorForm;