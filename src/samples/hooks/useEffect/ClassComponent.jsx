import React from 'react';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    console.log('Component Did Mount')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component Did Update')
  }

  componentWillUnmount() {
    console.log('Component Will Unmount')
  }

  handleCount = () => {
    this.setState((currentState) => ({ count: currentState.count + 1 }))
  };

  render() {
    return (
      <div>
        <h3>Class component with lifecycle methods</h3>
        <span>{this.state.count}</span>
        <button onClick={this.handleCount}>
          Count
        </button>
      </div>
    );
  }
}

export default ClassComponent;
