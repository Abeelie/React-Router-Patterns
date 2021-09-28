import { useState } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import ColorList from "./components/ColorList/ColorList";
import ColorForm from "./components/ColorForm/ColorForm";
import Color from "./components/Color/Color";
import './App.css';

const App = () => {
  const init =  {red: "#FF0000", green: "#00FF00", blue: "#0000FF"}
  const [colors, setColors] = useState(init);

  const addColor = (data) => {
    setColors(color => ({ ...color, ...data }));
  }

  const showColor = (props) => {
    const { color } = props.match.params;
    const value = colors[color];
    return <Color value={value} name={color} />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors/new"><ColorForm addColor={addColor} /></Route>
          <Route exact path="/colors/:color">{showColor}</Route>
          <Route exact path="/colors"><ColorList colors={colors} /></Route>
          <Redirect to="/colors"></Redirect>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
