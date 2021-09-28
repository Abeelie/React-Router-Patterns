import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav style={{display: "flex", flexFlow: "row", justifyContent: "space-evenly", alignContent: "center"}}>
            <p><NavLink exact to="/dogs">Home</NavLink></p>
            {props.dogs.map((dog) => (
                <p key={dog.name}>
                    <NavLink exact to={`/dogs/${dog.name.toLowerCase()}`}>
                        {dog.name}
                    </NavLink>
                </p>
            ))}
        </nav>
    )
}


export default Navbar