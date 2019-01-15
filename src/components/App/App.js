import React from 'react';
import Loader from '../Loader/Loader';
import TopNav from '../TopNav/TopNav';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import LeftVerticalMenu from '../LeftVerticalMenu/LeftVerticalMenu';
import RightVerticalMenu from '../RightVerticalMenu/RightVerticalMenu';
import BottomNav from '../BottomNav/BottomNav';

import { AppWrapper, CustomParticles } from './styles';

const App = () => (
  <AppWrapper>
    <Loader />
    <TopNav />
    <CountdownTimer />
    <LeftVerticalMenu />
    <RightVerticalMenu />
    <BottomNav />
    <CustomParticles
      params={particleParams}
      className="particles"
    />
  </AppWrapper>
);

export default App;

const particleParams = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 80,
        size_min: 0.1,
        sync: true
      }
    },
    move: {
      direction: 'none',
      out_mode: 'out',
      speed: 1
    },
    line_linked: {
      enable: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      resize: true,
      onclick: {
        enable: true,
        mode: 'remove'
      },
      onresize: {
        enable: true,
        density_auto: true,
        density_area: 1000
      }
    },
    modes: {
      remove: {
        particles_nb: 10
      }
    }
  }
};
// would you ever want to use a normal setState over a callback setState?
// When would you use constructor and super to set state over doing just state in a class?
// can you destructure someting in a function parameter?
// vender bundling
