import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import DogList from "../components/DogList/DogList";
import DogDetails from '../components/DogDetails/DogDetails';

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/dogs">
        <DogList dogs={props.dogs} />
      </Route>
      <Route path="/dogs/:name">
        <DogDetails dogs={props.dogs} />
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
}

export default Routes;
