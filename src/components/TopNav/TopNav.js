import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

import './TopNav.scss';

class TopNav extends Component {
  state = {
    toggled: true
  }

  handleNavToggle = () => {
    this.setState(state => ({
      ...state,
      toggled: !state.toggled
    }));
  }

  render () {
    const { toggled } = this.state;

    return (
      <>
        <nav className="top-nav">
          <ul>
            <li>
              <a
                href="https://www.kingdomhearts.com/3/us/home/"
                target="_blank"
                rel="noopener noreferrer"
                className="fadeup"
                style={{ animationDelay: '2.2s' }}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="https://www.kingdomhearts.com/3/us/buy/"
                rel="noopener noreferrer"
                target="_blank"
                className="fadeup"
                style={{ animationDelay: '2.4s' }}
              >
                PRE-ORDER
              </a>
            </li>
            <li>
              <a
                href="https://www.kingdomhearts.com/about/us/"
                rel="noopener noreferrer"
                target="_blank"
                className="fadeup"
                style={{ animationDelay: '2.6s' }}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="https://www.kingdomhearts.com/home/us/#social"
                rel="noopener noreferrer"
                target="_blank"
                className="fadeup"
                style={{ animationDelay: '2.8s' }}
              >
                CONNECT
              </a>
            </li>
            <li>
              <img
                className="top-nav-logo fadeup"
                src="https://www.khwiki.com/images/thumb/3/3a/Kingdom_Hearts_Series_Logo.png/350px-Kingdom_Hearts_Series_Logo.png"
                style={{ animationDelay: '3s' }}
                alt="Kingdom Hearts Logo"
              />
            </li>
            <li />
            <li className="top-nav-date fadeup" style={{ animationDelay: '3.2s' }}>
              <p>
                1
                <sub>
                  {' / 29'}
                </sub>
              </p>
            </li>
            <li>
              <span className="spinnerBackground">
                <Link to="/" className="top-nav-icons spin circle">
                  <SearchIcon className="spinnerIcon" style={{ animationDelay: '5.2s' }} />
                </Link>
              </span>
            </li>
            <li>
              <span className="spinnerBackground">
                <Link to="/" className="top-nav-icons spin circle">
                  <MenuIcon className="spinnerIcon" style={{ animationDelay: '5.4s' }} />
                </Link>
              </span>
            </li>
          </ul>
        </nav>
        {toggled
          ? (<button
              className="mobile-nav-toggle"
              onClick={this.handleNavToggle}
              >
              <MenuIcon />
            </button>)
          : null}
      </>
    );
  }
};
export default TopNav;
