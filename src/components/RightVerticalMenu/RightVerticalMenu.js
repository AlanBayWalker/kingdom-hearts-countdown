import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RightVerticalMenu.scss';

export default class LeftVerticalMenu extends Component {

  render() {
    return (
      <nav className="right-vertical-menu">
        <ul>
          <li>
            <Link to="/">
              Follow The GRIP Movement
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

}
