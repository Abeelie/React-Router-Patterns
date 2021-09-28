import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Result from './components/Result';
import Intro from "./components/Intro";
import './App.css';

const App = () => {

  const doMath = (props) =>{
    const { sign, num1, num2 } = props.match.params;
    return <Result mathsign={sign} num1={num1} num2={num2} />
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/intro"><Intro /></Route>
          <Route path="/:sign/:num1/:num2">{doMath}</Route>
          <Redirect to="/intro"></Redirect>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
