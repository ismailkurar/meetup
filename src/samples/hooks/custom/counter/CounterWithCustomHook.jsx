import React from 'react';

import useErrorHandler from '../useErrorHandler';

const CounterWithCustomHook = () => {
  const [ count, setCount ] = React.useState(0);

  const [error, showError] = useErrorHandler(null);

  const increase = () => {
    setCount(count + 1);
  };

  const reset = () => {
    if (count < 5) {
      showError("Sayı 5'ten küçüktür");
    } else {
      setCount(0);
    }
  };

  return (
    <div className="counter">
      <h3>Counter with Custom Hook</h3>
      <span style={{ fontSize: 30 }}>{count}</span>
      <button
        style={{ marginLeft: 30 }}
        type="button"
        onClick={increase}
      >Increase
      </button>
      <button
        style={{ marginLeft: 30 }}
        type="button"
        onClick={reset}
      >Reset
      </button>
      {
        error && <div className="error-text">{error}</div>
      }
    </div>
  )
};

export default CounterWithCustomHook;
