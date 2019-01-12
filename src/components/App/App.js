import React, { Component } from 'react';
import TopNav from '../TopNav/TopNav';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import LeftVerticalMenu from '../LeftVerticalMenu/LeftVerticalMenu';
import RightVerticalMenu from '../RightVerticalMenu/RightVerticalMenu';
import BottomNav from '../BottomNav/BottomNav';
import Particles from 'react-particles-js';

import soldier from '../../assets/soldier.png';
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <CountdownTimer />
        <LeftVerticalMenu />
        <RightVerticalMenu />
        <BottomNav />
        <Particles
          params={particleParams}
          style={{
            height: '99vh',
            position: 'absolute',
            top: '-2rem',
            width: '100vw',
            zIndex: '1'
          }}
        />
        {/* }<img className="character-img" src={soldier} alt="Sora" /> */}
      </div>
    );
  }
}

const particleParams = {
  "particles": {
    "number": {
      "value": 160,
      "density": {
        "enable": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 80,
        "size_min": 0.1,
        "sync": false
      }
    },
    "move": {
      "direction": "none",
      "out_mode": "out",
      "speed": 1
    },
    "line_linked": {
      "enable": false
    }
  },
  "interactivity": {
    "events": {
      "onclick": {
        "enable": true,
        "mode": "remove"
      }
    },
    "modes": {
      "remove": {
        "particles_nb": 10
      }
    }
  }
};
