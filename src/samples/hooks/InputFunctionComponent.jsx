import React from 'react';

import Page from '../../components/Page';

const InputFunctionComponent = () => {
  const [ value, setValue ] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Page title="InputFunctionComponent">
      <input
        value={value}
        type="text"
        onChange={handleChange}
      />
      <div style={{ fontSize: 24 }}>{value}</div>
    </Page>
  )
};

export default InputFunctionComponent;
