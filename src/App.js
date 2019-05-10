import React from 'react';

import './App.css';

// hooks
import InputClassComponent from '../src/samples/hooks/InputClassComponent.jsx';
import InputFunctionComponent from '../src/samples/hooks/InputFunctionComponent.jsx';


function App() {
  return (
    <div className="app">
      <div className="component-container">
        <InputFunctionComponent />
      </div>
    </div>
  );
}

export default App;
