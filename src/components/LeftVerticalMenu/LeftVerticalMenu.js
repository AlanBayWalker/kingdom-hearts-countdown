import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LeftVerticalMenu.scss';

export default class LeftVerticalMenu extends Component {
  render () {
    return (
      <nav className="left-vertical-menu">
        <ul>
          <li>
            <Link to="/">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/">
              Github
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
