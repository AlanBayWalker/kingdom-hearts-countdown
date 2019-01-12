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
        sync: false
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
    events: {
      onclick: {
        enable: true,
        mode: 'remove'
      }
    },
    modes: {
      remove: {
        particles_nb: 10
      }
    }
  }
};
