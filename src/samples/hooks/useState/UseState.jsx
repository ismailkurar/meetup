import React from 'react';

import InputClassComponent from './InputClassComponent.jsx';
import InputFunctionComponent from './InputFunctionComponent.jsx';

const UseState = () => (
  <div className="use-state">
    <div className="container">
      <div className="item">
        <InputClassComponent/>
      </div>
      <div className="item">
        <InputFunctionComponent />
      </div>
    </div>
  </div>
);

export default UseState;

