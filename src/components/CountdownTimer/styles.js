import styled, { keyframes } from 'styled-components';

const countdownTimer = keyframes`
  to {
    opacity: 1;
  }
`;

const tubeGlow = keyframes`
  0% {
    box-shadow:
      inset -3px 4px 30px 2px rgba(255, 110, 11, 0.07),
      0 -2px 32px 0 rgba(255, 169, 22, 0.06)
      ;
    border-top: 2px solid rgba(240, 150, 150, 0.15);
    border-right: 2px solid rgba(240, 150, 150, 0.15);
  }
  30% {
    box-shadow:
      inset -6px 4px 30px 2px rgba(255, 110, 11, 0.1),
      0 -2px 32px 0 rgba(255, 169, 22, 0.06)
      ;
  }
  55% {
    box-shadow:
      inset -5px 4px 30px 2px rgba(255, 110, 11, 0.08),
      0 -2px 32px 0 rgba(255, 169, 22, 0.06)
      ;
  }
  70% {
    box-shadow:
      inset -6px 4px 30px 2px rgba(255, 110, 11, 0.09),
      0 -2px 32px 0 rgba(255, 169, 22, 0.06)
      ;
  }
  78% {
    box-shadow:
      inset -4px 4px 30px 2px rgba(255, 110, 11, 0.02),
      0 -2px 32px 0 rgba(255, 169, 22, 0.06)
      ;
    border-top: 2px solid rgba(240, 150, 150, 0.12);
    border-right: 2px solid rgba(240, 150, 150, 0.12);

  }
  85% {
    box-shadow:
      inset -2px 4px 30px 2px rgba(255, 110, 11, 0.02),
      0 -2px 32px 0 rgba(255, 169, 22, 0.06)
      ;
  }
  90% {
    box-shadow:
      inset 0 4px 30px 2px rgba(255, 110, 11, 0.09),
      0 -2px 32px 0 rgba(255, 169, 22, 0.06)
      ;
  }
  96% {
    box-shadow:
      inset -1px 4px 30px 2px rgba(255, 110, 11, 0.01),
      0 -2px 32px 0 rgba(255, 169, 22, 0.06)
      ;
  }
`;

export const Wrapper = styled.div`
  animation-name: ${countdownTimer};
  animation-duration: 2s;
  animation-delay: 7s;
  animation-fill-mode: forwards;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  left: 50%;
  transform: translate(-50%, 0);
  top: 42%;
  opacity: 0;
  position: absolute;
  font-family: 'Josefin Slab', serif;
  font-size: 6em;
  text-align: center;
  letter-spacing: 0.1em;
  width: 80%;
  z-index: 2;
`;

export const FlexItem = styled.div`
  display: flex;
`;

export const Tube = styled.span`
  position: relative;
  display: inline-block;
  text-align: center;
  width: 95px;
  height: 130px;
  margin: 6px;
  border-top: 2px solid rgba(240, 200, 200, 0.12);
  border-left: 2px solid rgba(240, 200, 200, 0.1);
  border-right: 2px solid rgba(240, 200, 200, 0.1);
  border-bottom: 12px solid rgba(30, 30, 30, 1);
  border-radius: 60px 60px 8px 8px;
  background-color: rgba(255, 110, 11, 0.02);
  box-shadow:
    inset -6px 4px 30px 2px rgba(255, 110, 11, 0.1),
    0 -2px 32px 0 rgba(255, 169, 22, 0.06)
    ;
  animation-duration: 4.5s;
  animation-name: ${tubeGlow};

  ::before {
    content: "";
    position: absolute;
    top: 18px;
    right: 14px;
    width: 46px;
    height: 24px;
    border-top: 10px solid rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    transform: rotate(43deg);
  }

  ::after {
    content: "";
    position: absolute;
    top: 80px;
    right: 10px;
    width: 10px;
    height: 150px;
    border-right: 2px solid rgba(255, 255, 255, 0.03);
    border-radius: 6px;
  }
`;

export const Digit = styled.span`
  position: absolute;
  width: 170px;
  line-height: 1.65em;
  left: -2.1rem;
  text-shadow:
    rgba(50, 50, 50, 0.05) 0 0 1px,
    ;
  color: transparent;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: rgba(40, 40, 40, 0.15);
`;

export const Active = styled(Digit)`
  color: #ffdb9e;
  opacity: 1;
  text-shadow:
    #ff4d00 0 0 112px,
    #ffa916 0 0 48px,

    #ef9700 0 0 24px,
    #ef9700 0 0 16px,
    #ef9700 0 0 4px,
    ;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #ef9700;
`;

export const AltDigit = styled.span`
  position: absolute;
  width: 170px;
  line-height: 1.65em;
  left: -2.1rem;
  text-shadow:
    rgba(50, 50, 50, 0.05) 0 0 1px,
    ;
  color: transparent;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: rgba(40, 40, 40, 0.15);

  color: #ccffff;
  opacity: 1;
  text-shadow:
    cyan 0 0 112px,
    #91FFFF 0 0 48px,

    #ffff 0 0 24px,
    #ffff 0 0 16px,
    #ffff 0 0 4px,
    ;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #ccffff;
`;
