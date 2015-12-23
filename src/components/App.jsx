import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      isLoggedIn: false
    };
  },
  render() {
    if (!this.state.isLoggedIn) {
      return <div><h1>Logged In</h1></div>;
    }
    return <div><h1>Not Logged In</h1></div>;
  }
})
