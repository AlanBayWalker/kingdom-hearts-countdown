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
      <p style={{ marginBottom: '1.5rem' }}>
        <ColorBlock />
        <ColorBlockText>
          Kill it
        </ColorBlockText>
      </p>
      <SignedTitle className="fadeup" style={{ lineHeight: '0', animationDelay: '6.2s' }}>
        {' Designed & Built '}
        <SideNoteHighlight>
          with love
        </SideNoteHighlight>
      </SignedTitle>
      <SignedTitle className="fadeup" style={{ animationDelay: '6.4s' }}>
        by Alan Ayala
      </SignedTitle>
      <p className="fadeup" style={{ animationDelay: '6.6s', color: 'rgba(255, 255, 255, .8)' }}>
        in 2019
      </p>
    </SideNote>
    <div />
    <a href="https://kingdomhearts.com/3/us/buy/" target="_blank" rel="noopener noreferrer">
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
