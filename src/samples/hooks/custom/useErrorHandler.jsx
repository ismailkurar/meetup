import React from 'react';

const useErrorHandler = (initialState) => {
  const [error, setError] = React.useState(initialState);

  const showError = (errorMessage) => {
    setError(errorMessage);

    setTimeout(() => {
      setError(null)
    }, 2000)
  };

  return [ error, showError ];
};

export default useErrorHandler;
