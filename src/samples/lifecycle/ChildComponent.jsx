import React from 'react';

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myState: null,
    };
  }

  componentDidMount() {
    console.log("DID MOUNT")
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("DID UPDATE")
  }

  componentWillUnmount() {
    console.log("UNMOUNT")
  }


  render() {
    return <div>{this.props.currentDate}</div>
  }
}

export default ChildComponent;
