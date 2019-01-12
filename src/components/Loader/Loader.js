import React, { Component } from 'react';
import './Loader.scss';

export default class Loader extends Component {
  state = {
    loaded: false
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState(state => ({
        loaded: true
      }));
    }, 5000);
  }

  render() {
    const { loaded } = this.state;

    return (
      <div className="loader" style={{ display: loaded ? 'none' : 'block' }} />
    );
  }
}
