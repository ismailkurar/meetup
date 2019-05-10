import React from 'react';

import Page from '../../components/Page';

class InputClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <Page title="InputClassComponent">
        <input
          value={this.state.value}
          type="text"
          onChange={this.handleChange}
        />
        <div style={{ fontSize: 24 }}>{this.state.value}</div>
      </Page>
    )
  }
}

export default InputClassComponent;
