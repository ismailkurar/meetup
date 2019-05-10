
import React from 'react';

const Page = ({ title, children }) => (
  <div className="page">
    <h3>{title}</h3>
    <div className="content">
      {children}
    </div>
  </div>
);

export default Page;
