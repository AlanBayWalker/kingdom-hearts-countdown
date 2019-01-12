import React from 'react';
import {
  Wrapper,
  SideNote,
  ColorBlock,
  ColorBlockText,
  SignedTitle,
  SideNoteHighlight,
  GameWrapper,
  GameIMG,
  GameScan,
  GameTitle
} from './styles';

const bottomNav = () => (
  <Wrapper>
    <SideNote>
      <p>
        <ColorBlock />
        <ColorBlockText>
          Kill it
        </ColorBlockText>
      </p>
      <SignedTitle className="fadeup" style={{ lineHeight: '0', animationDelay: '6.2s' }}>
        {' Built '}
        <SideNoteHighlight>
          with hate
        </SideNoteHighlight>
      </SignedTitle>
      <SignedTitle className="fadeup" style={{ animationDelay: '6.4s' }}>
        by a fucking prodigy
      </SignedTitle>
      <p className="fadeup" style={{ animationDelay: '6.6s' }}>
        in 2019
      </p>
    </SideNote>
    <div />
    <a href="https://kingdomhearts.com/3/us/buy/" target="_blank">
      <GameWrapper>
        <GameIMG />
        <GameScan />
        <GameTitle>
          BUY NOW
        </GameTitle>
      </GameWrapper>
    </a>
  </Wrapper>
);

export default bottomNav;
