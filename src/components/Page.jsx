
import React from 'react';
import { NavLink, withRouter } from "react-router-dom";

import './page.css';

const Page = ({ title, children, match }) => (
  <div className="page">
    <div className="tab-list">
      <div className="tab-item">
        <NavLink exact to="/" className="link">
          Home
        </NavLink>
      </div>
      <div className="tab-item">
        <NavLink to="/lifecycle"  className="link">
          Life Cycle
        </NavLink>
      </div>
      <div className="tab-item" >
        <NavLink to="/hooks"  className="link">
          Hooks
        </NavLink>
      </div>
      <div className="tab-item">
        <NavLink to="/error-boundary"  className="link">
          Error Boundary
        </NavLink>
      </div>
    </div>
    <div className="content-container">
      <h1>{title}</h1>
      <div className="content">
        {children}
      </div>
    </div>

  </div>
);

export default withRouter(Page);
