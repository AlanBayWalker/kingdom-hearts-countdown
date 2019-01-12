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
      <SignedTitle className="fadeup" style={{ lineHeight: '0', animationDelay: '5.5s' }}>
        {' Built '}
        <SideNoteHighlight>
          with hate
        </SideNoteHighlight>
      </SignedTitle>
      <SignedTitle className="fadeup" style={{ animationDelay: '5.7s' }}>
        by a fucking prodigy
      </SignedTitle>
      <p className="fadeup" style={{ animationDelay: '5.7s' }}>
        in 2019
      </p>
    </SideNote>
    <div />
    <GameWrapper>
      <GameIMG />
      <GameScan />
      <GameTitle>
        BUY NOW
      </GameTitle>
    </GameWrapper>
  </Wrapper>
);

export default bottomNav;
