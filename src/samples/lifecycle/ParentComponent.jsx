import React from 'react';

import Page from '../../components/Page';

import ChildComponent from './ChildComponent'

class ParentComponent extends React.Component {
  state = {
    currentDate: new Date().toUTCString()
  };

  updateCurrentDate = () => {
    this.setState({ currentDate: new Date().toUTCString() })
  };

  render() {
    return(
      <div>
        <ChildComponent currentDate={this.state.currentDate}/>

        <button onClick={this.updateCurrentDate}>Update Date</button>
      </div>
    )
  }
}

export default ParentComponent;
