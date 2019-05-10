import React from 'react';

import './App.css';

//error-boundary
import BuggyComponent from './samples/error-boundary/BuggyComponent'


// hooks
import InputClassComponent from './samples/hooks/useState/InputClassComponent.jsx';
import InputFunctionComponent from './samples/hooks/useState/InputFunctionComponent.jsx';
import Counter from './samples/hooks/custom/Counter';
import CounterWithCustomHook from './samples/hooks/custom/CounterWithCustomHook';

function App() {
  return (
    <div className="app">
      <div className="component-container">
        <CounterWithCustomHook />
      </div>
    </div>
  );
}

export default App;
