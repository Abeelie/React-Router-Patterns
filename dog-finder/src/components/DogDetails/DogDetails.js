import React from "react";
import { Link, useParams, Redirect } from "react-router-dom";

const DogDetails = (props) => {
  const {name} = useParams();
  const [dog] = props.dogs.filter(dog => dog.name.toLowerCase() === name );

  if (!dog) return <Redirect to="/dogs"/>

  return (
    <div align="center">
      <div>
        <img src={dog.src} width="300" height="300" alt={dog.name} />
        <h2>{dog.name}</h2>
        <h3>{dog.age} years old</h3>
        <p>
          {dog.facts.map((fact, i) => (
            <p key={i}>{fact}</p>
          ))}
        </p>
        <Link to="/dogs">Go Back</Link>
      </div>
    </div>
  );
}

export default DogDetails;