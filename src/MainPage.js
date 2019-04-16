import React, {Component} from 'react';
import {subscribeToEvent} from "./socket";


class MainPage extends Component {
  constructor(props) {
    super(props);
    // this.props.history.push('/levelTwo');
    subscribeToEvent((err, data) => {
      console.log('callback')
    });
  }

  render() {
    return (
      <div>
        <p>Main page</p>
      </div>
    );
  }
}

export default MainPage;