import React from 'react';
import Paragraph from '../styled/Paragraph';
import FlexWrapContainer from '../styled/FlexWrapContainer';
import BlockLink from '../styled/BlockLink';
import HeaderContent from '../styled/HeaderContent';
import Project from '../components/Project';

import FunctionsImg from '../img/projects/functions.png';
import TMGImg from '../img/projects/tmg.png';

export default function ProjectsContainer(props){
   return (
      <React.Fragment>
        <HeaderContent>
            Projects
         </HeaderContent>
         <FlexWrapContainer>
            <Project imgSrc={FunctionsImg} title="Functions Game">
               <Paragraph>
                  A physics based game prototype that use mathematical functions as controls.
                  It's made with no frameworks, just pure Javascript, HTML5, and CSS3 features.
               </Paragraph>
               <BlockLink target="_blank" href="https://github.com/reueljonathan/functions-game">Source</BlockLink>
               <BlockLink target="_blank" href="https://reueljonathan.github.io/functions-game/">Demo</BlockLink>
            </Project>
            <Project imgSrc={TMGImg} title="That Memory Game">
               <Paragraph>
                  Game prototype to learn the PhaserJS framework. It is based on Simon Says (or Genius) toy,
                  but changes the pattern every round.
               </Paragraph>
               <BlockLink target="_blank" href="https://github.com/reueljonathan/that-memory-game">Source</BlockLink>
               <BlockLink target="_blank" href="https://reueljonathan.github.io/that-memory-game/">Demo</BlockLink>
            </Project>
         </FlexWrapContainer>
      </React.Fragment>
   );
}
