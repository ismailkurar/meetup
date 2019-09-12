import React from 'react';

import { Route, Switch } from "react-router-dom";
import './App.css';

import Home from './home/Home';
import Hooks from './samples/hooks/Hooks'

// lifecycle
import LifeCycle from './samples/lifecycle/LifeCycles'

//error-boundary
import BuggyComponent from './samples/error-boundary/BuggyComponent'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route  path="/lifecycle" component={LifeCycle} />
    <Route  path="/error-boundary" component={BuggyComponent} />
    <Route  path="/hooks" component={Hooks} />
    <Route render={() => <h1>404 Page not found</h1>} />
  </Switch>
)

export default App;
