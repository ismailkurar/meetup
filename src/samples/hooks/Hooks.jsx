import React from 'react';

import Page from '../../components/Page';
import { Route, NavLink } from 'react-router-dom';

import UseState from './useState/UseState';
import UseEffect from './useEffect/UseEffect';
import CustomHook from './custom/CustomHook'

import './hooks.css';

const Hooks = ({ match }) => (
  <Page title="React Hooks">
    <div className="hooks-container">
    <div className="tab-list">
      <div className="tab-item">
        <NavLink to={`${match.url}/useState`} className="link">
          useState
        </NavLink>
      </div>
      <div className="tab-item">
        <NavLink to={`${match.url}/useEffect`} className="link">
          useEffect
        </NavLink>
      </div>
      <div className="tab-item">
        <NavLink to={`${match.url}/customHook`} className="link">
          Custom Hooks
        </NavLink>
      </div>
    </div>
    <div className="tab-content">
      <Route
        path={`${match.url}/useState`}
        component={UseState}
      />
      <Route
        path={`${match.url}/useEffect`}
        component={UseEffect}
      />
      <Route
        path={`${match.url}/customHook`}
        component={CustomHook}
      />
    </div>
    </div>
  </Page>
);

export default Hooks;
