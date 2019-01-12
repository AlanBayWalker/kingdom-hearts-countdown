import styled from 'styled-components';
import Particles from 'react-particles-js';

export const AppWrapper = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, .8) 0%, rgba(0, 0, 0, .8) 100%) no-repeat center center,
              #000 url('https://i.imgur.com/sXAsbQk.jpg') no-repeat center center;
  background-size: cover;
  color: #fff;
  font-family: 'Lato', sans-serif;
  letter-spacing: 1.5px;
  min-height: 100vh;
`;

export const CustomParticles = styled(Particles)`
  height: 99vh;
  position: absolute;
  top: -2rem;
  width: 100vw;
  z-index: 1;
`;
