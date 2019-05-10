import React from 'react';

import './App.css';

// hooks
import InputClassComponent from './samples/hooks/useState/InputClassComponent.jsx';
import InputFunctionComponent from './samples/hooks/useState/InputFunctionComponent.jsx';


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
