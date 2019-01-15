import styled, { keyframes } from 'styled-components';

const colorBlock = keyframes`
  5% {
    width: 0px;
  }

  100% {
    width: 15px;
  }
`;

const colorBlockText = keyframes`
  to {
    opacity: 1;
  }
`;

const navGameScanner = keyframes`
  to {
    right: 0;
  }
`;

const imageScan = keyframes`
  0% {
    background: rgba(white, .3) no-repeat center center;
  }

  80% {
    background: rgba(white, .3) no-repeat center center;
  }

  5% {
    width: 0px;
  }

  90% {
    background: rgba(white, 0) no-repeat center center;
    width: 270px;
  }
`;

export const Wrapper = styled.div`
  bottom: 2rem;
  display: grid;
  grid-template-columns: 500px auto 500px;
  grid-template-rows: auto;
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: 2;
`;

export const SideNote = styled.div`
  margin-left: 4rem;
`;

export const ColorBlock = styled.span`
  animation-name: ${colorBlock};
  animation-duration: 1s;
  animation-delay: 5s;
  animation-fill-mode: forwards;
  display: inline-block;
  background-color: #ef9700;
  height: 10px;
  margin-right: .5rem;
  width: 0;
`;

export const ColorBlockText = styled.span`
  animation-name: ${colorBlockText};
  animation-duration: 1s;
  animation-delay: 5.6s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  color: rgba(255, 255, 255, .8);
  opacity: 0;
  margin-bottom: 5rem;
`;

export const SignedTitle = styled.h2`
  font-size: 1.5rem;
  line-height: 1.3;
  text-transform: uppercase;
`;

export const SideNoteHighlight = styled.span`
  text-decoration: underline;
`;

export const GameWrapper = styled.div`
  animation-name: ${navGameScanner};
  animation-duration: 1s;
  animation-delay: 6.4s;
  animation-fill-mode: forwards;
  right: -20rem;
  margin-left: auto;
  height: 150px;
  position: relative;
  width: 270px;
`;

export const GameIMG = styled.div`
  background: #fff url('https://assets1.ignimgs.com/2018/09/18/untitled-1-1537271499930_1280w.jpg') no-repeat center center;
  background-size: cover;
  height: 150px;
  width: 270px;
`;

export const GameScan = styled.div`
  animation-name: ${imageScan};
  animation-duration: 6s;
  animation-delay: 7s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  background: rgba(255, 255, 255, .3) no-repeat center center;
  background-size: cover;
  border-right: 2px solid rgba(255, 255, 255, .6);
  height: 150px;
  position: absolute;
  top: 0;
  width: 0px;
  z-index: 2;
`;

export const GameTitle = styled.p`
  background-color: rgba(0, 0, 0, .4);
  font-size: .6rem;
  color: rgba(255, 255, 255, .7);
  left: -.5rem;
  margin: .5rem;
  padding: .5rem;
  position: absolute;
  top: .5rem;
`;
