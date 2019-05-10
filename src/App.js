import React from 'react';

import './App.css';

//error-boundary
import BuggyComponent from './samples/error-boundary/BuggyComponent'


// hooks
import InputClassComponent from './samples/hooks/useState/InputClassComponent.jsx';
import InputFunctionComponent from './samples/hooks/useState/InputFunctionComponent.jsx';


function App() {
  return (
    <div className="app">
      <div className="component-container">
        <BuggyComponent />
      </div>
    </div>
  );
}

export default App;
