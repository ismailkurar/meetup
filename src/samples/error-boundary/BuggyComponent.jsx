import React from 'react';

import ErrorBoundary from './ErrorBoundary';

const ItemList = (props) => {
  return  props.items.length
};

const BuggyComponent = () => (
  <div className="page-container">
    <ItemList items={null}/>
    <ItemList items={['a', 'b']}/>
  </div>
);

export default BuggyComponent;
