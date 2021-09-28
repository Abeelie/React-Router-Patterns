import React, { useState, useEffect } from "react";

const Result = (props) => {
    const [result, setResult] = useState();

    useEffect(() => {
      switch(props.mathsign) {
        case "add":
            setResult(Number(props.num1) + Number(props.num2));
          break;
        case "subtract":
            setResult(Number(props.num1) - Number(props.num2));
          break;
        case "multiply":
            setResult(Number(props.num1) * Number(props.num2));
          break;
        case "divide":
            setResult(Number(props.num1) / Number(props.num2));
          break;
        default:
            setResult();
      }
    },[props.mathsign, props.num1, props.num2]);
    
    return (
        <div align="center">
            <h1>Result Equals: {result}</h1>
        </div>
    )
}


export default Result
