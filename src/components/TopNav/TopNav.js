import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

import './TopNav.scss';

class TopNav extends Component {
  render() {
    return(
      <nav className="top-nav">
        <ul>
          <li>
            <Link to="#" className="fadeup" style={{ animationDelay: '.2s' }}>HOME</Link>
          </li>
          <li>
            <Link to="#" className="fadeup" style={{ animationDelay: '.4s' }}>SITE</Link>
          </li>
          <li>
            <Link to="#" className="fadeup" style={{ animationDelay: '.6s' }}>ORDER</Link>
          </li>
          <li>
            <Link to="#" className="fadeup" style={{ animationDelay: '.8s' }}>GAME</Link>
          </li>
          <li>
            <Link to="#">
              <img
                className="top-nav-logo fadeup"
                src="https://www.khwiki.com/images/thumb/3/3a/Kingdom_Hearts_Series_Logo.png/350px-Kingdom_Hearts_Series_Logo.png"
                 style={{ animationDelay: '1s' }}
                 alt="Kingdom Hearts Logo"
              />
            </Link>
          </li>
          <li className="top-nav-date fadeup" style={{ animationDelay: '1.2s' }}>
            10 <sub>/ 2</sub>
          </li>
          <li>
          <span className="spinnerBackground">
            <Link to="#" className="top-nav-icons spin circle">
                <SearchIcon className="spinnerIcon" style={{ animationDelay: '3.2s' }} />
            </Link>
            </span>
          </li>
          <li>
          <span className="spinnerBackground">
            <Link to="#" className="top-nav-icons spin circle">
                <MenuIcon className="spinnerIcon" style={{ animationDelay: '3.5s' }} />
            </Link>
            </span>
          </li>
        </ul>
      </nav>
    );
  }
}

export default TopNav;

// (res => {
//   const chartData = {...this.state.chartData};
//   newChartData.datasets.label = towns;
//   newChartData.datasets.data = population;
//   this.setState({
//     ...this.state,
//     chartData
//   });
// })
