import React from 'react';

import ErrorBoundary from 'react-tuts/error-boundary/ErrorBoundary'

const ItemList = (props) => {
  return  props.items.length
};

const BuggyComponent = () => (
  <div className="page-container">
    <ErrorBoundary>
      <ItemList items={null}/>
    </ErrorBoundary>
    <ItemList items={['a', 'b']}/>
  </div>
);

export default BuggyComponent;
