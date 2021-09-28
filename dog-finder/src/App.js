import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import Navbar from "./components/Navbar/Navbar";
import { dogs } from "./dogsprops";

const App = ({dogs}) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar dogs={dogs} />
          <div className="container">
            <Routes dogs={dogs}/>
          </div>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = { dogs };

export default App;
