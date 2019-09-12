import React from 'react';

import Counter from './counter/Counter';
import CounterWithCustomHook from './counter/CounterWithCustomHook';

const CustomHook = () => (
  <div className="custom-hook">
    <div className="container">
      <div className="item">
        <Counter/>
      </div>
      <div className="item">
        <CounterWithCustomHook />
      </div>
    </div>
  </div>
);

export default CustomHook;
