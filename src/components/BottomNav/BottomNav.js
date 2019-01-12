import React, { Component } from 'react';
import './BottomNav.scss';

export default class BottomNav extends Component {
  render() {
    return(
      <div className="bottom-nav-container">
        <div className="bottom-nav-side-note">
          <p>
            <span className="bottom-nav-color-block"></span>
            <span className="bottom-nav-color-block-text">Kill it</span>
          </p>
          <h2 className="signed-title"> Built <span className="bottom-nav-highlight">with hate</span> by a fucking prodigy</h2>
          <p>in 2019</p>
        </div>
        <div />
        <div className="bottom-nav-game-container">
          <div className="bottom-nav-game-img" />
          <div className="bottom-nav-game-scan" />
          <p className="bottom-nav-game-title">BUY NOW</p>
        </div>
      </div>
    );
  }
}
