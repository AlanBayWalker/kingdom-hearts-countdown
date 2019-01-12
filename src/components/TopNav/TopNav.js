import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

import './TopNav.scss';

export default class TopNav extends Component {
  render() {
    return(
      <nav className="top-nav">
        <ul>
          <li>
            <Link to="#" className="fadeup" style={{ animationDelay: '2.2s' }}>HOME</Link>
          </li>
          <li>
            <Link to="#" className="fadeup" style={{ animationDelay: '2.4s' }}>SITE</Link>
          </li>
          <li>
            <Link to="#" className="fadeup" style={{ animationDelay: '2.6s' }}>ORDER</Link>
          </li>
          <li>
            <Link to="#" className="fadeup" style={{ animationDelay: '2.8s' }}>GAME</Link>
          </li>
          <li>
            <Link to="#">
              <img
                className="top-nav-logo fadeup"
                src="https://www.khwiki.com/images/thumb/3/3a/Kingdom_Hearts_Series_Logo.png/350px-Kingdom_Hearts_Series_Logo.png"
                 style={{ animationDelay: '3s' }}
                 alt="Kingdom Hearts Logo"
              />
            </Link>
          </li>
          <li className="top-nav-date fadeup" style={{ animationDelay: '3.2s' }}>
            1 <sub>/ 29</sub>
          </li>
          <li>
          <span className="spinnerBackground">
            <Link to="#" className="top-nav-icons spin circle">
                <SearchIcon className="spinnerIcon" style={{ animationDelay: '5.2s' }} />
            </Link>
            </span>
          </li>
          <li>
          <span className="spinnerBackground">
            <Link to="#" className="top-nav-icons spin circle">
                <MenuIcon className="spinnerIcon" style={{ animationDelay: '5.4s' }} />
            </Link>
            </span>
          </li>
        </ul>
      </nav>
    );
  }
}
