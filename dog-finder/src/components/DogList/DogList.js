import React from "react";
import { Link } from "react-router-dom";

const DogList = (props) => {
  return (
    <div className="container" align="center">
        <h1>Dog List</h1>
      <div style={{display: "flex", flexFlow: "row", justifyContent: "space-evenly", alignContent: "center"}}>
        {props.dogs.map(d => (
          <div key={d.name}>
            <h3><Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link></h3>
            <img src={d.src} width="300" height="300" alt={d.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
