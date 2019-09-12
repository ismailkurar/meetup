import React from 'react';
import { NavLink, withRouter, Route } from "react-router-dom";

import ClassComponent from './ClassComponent.jsx';
import FunctionalComponent from './FunctionalComponent.jsx';

const UseEffect = ({ match }) => (
  <div className="use-effect">
    <div className="tab-list sub">
      <div className="tab-item">
        <NavLink to={`${match.url}/class`} className="link">
          Class Component
        </NavLink>
      </div>
      <div className="tab-item">
        <NavLink to={`${match.url}/functional`} className="link">
          Function Component
        </NavLink>
      </div>
    </div>
    <div className="tab-content">
      <Route
        path={`${match.url}/class`}
        component={ClassComponent}
      />
      <Route
        path={`${match.url}/functional`}
        component={FunctionalComponent}
      />
    </div>
  </div>
);

export default withRouter(UseEffect);

