import React from 'react';

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
      <div>
        <h3>InputClassComponent</h3>
        <input
          value={this.state.value}
          type="text"
          onChange={this.handleChange}
        />
        <div style={{ fontSize: 24 }}>{this.state.value}</div>
      </div>
    )
  }
}

export default InputClassComponent;
