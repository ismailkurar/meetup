import React from 'react';

import Page from '../../../components/Page';

class Counter extends React.Component {
  state = {
    count: 0,
    error: null
  };

  increase = () => {
    this.setState((currentState) => ({
      count: currentState.count + 1
    }));
  };

  reset = () => {
    if (this.state.count < 5) {
      this.showError("Sayı 5'ten küçüktür");
    } else {
      this.setState({ count: 0 })
    }
  };

  showError = (errorMessage) => {
    this.setState({ error: errorMessage });

    setTimeout(() => {
      this.setState({ error: null })
    }, 2000)
  };

  render() {
    return (
      <Page title="Counter">
        <span style={{ fontSize: 30 }}>{this.state.count}</span>
        <button
          style={{ marginLeft: 30 }}
          type="button"
          onClick={this.increase}
        >Increase
        </button>
        <button
          style={{ marginLeft: 30 }}
          type="button"
          onClick={this.reset}
        >Reset
        </button>
        {
          this.state.error && <div className="error-text">{this.state.error}</div>
        }
      </Page>
    )
  }
}

export default Counter;
