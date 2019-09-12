import React from 'react';

const InputFunctionComponent = () => {
  const [ value, setValue ] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h3>InputFunctionComponent</h3>
      <input
        value={value}
        type="text"
        onChange={handleChange}
      />
      <div style={{ fontSize: 24 }}>{value}</div>
    </div>
  )
};

export default InputFunctionComponent;
