import React from 'react';
import Paragraph from '../styled/Paragraph';
import FlexWrapContainer from '../styled/FlexWrapContainer';
import BlockLink from '../styled/BlockLink';
import HeaderContent from '../styled/HeaderContent';
import Project from '../components/Project';

import styled from 'styled-components';

import FunctionsImg from '../img/projects/functions.png';
import TMGImg from '../img/projects/tmg.png';
import TimerImg from '../img/projects/timer.png';

const ProjectLinksContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 2em;
  text-align: center;

  & a {
    text-decoration: none;
    color: #fff;
    margin: 0 4em;
    transition: color 0.3s ease;
  }

  & a:hover {
    color: #0055d4;
  }
`;

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
              <ProjectLinksContainer>
               <a target="_blank" href="https://github.com/reueljonathan/functions-game">Source</a>
               <a target="_blank" href="https://reueljonathan.github.io/functions-game/">Demo</a>
              </ProjectLinksContainer>
            </Project>
            <Project imgSrc={TMGImg} title="That Memory Game">
               <Paragraph>
                  Game prototype to learn the PhaserJS framework. It is based on Simon Says (or Genius) toy,
                  but changes the pattern every round.
               </Paragraph>
              <ProjectLinksContainer>
                 <a 
                   target="_blank" 
                   href="https://github.com/reueljonathan/that-memory-game">
                   Source
                </a>
                <a target="_blank" href="https://reueljonathan.github.io/that-memory-game/">
                  Demo
                </a>
              </ProjectLinksContainer>
            </Project>
            <Project imgSrc={TimerImg} title="Minimalist Timer">
              <Paragraph>
                Minimalist timer made with plain JavaScript, HTML and CSS, and 
                using SVG graphics.
              </Paragraph>
              <ProjectLinksContainer>
                <a 
                  target="_blank" 
                  href="https://github.com/reueljonathan/timer"
                >
                    Source
                </a>
                <a 
                  target="_blank" 
                  href="https://reueljonathan.github.io/timer"
                >
                  Demo
                </a>
              </ProjectLinksContainer>
            </Project>
         </FlexWrapContainer>
      </React.Fragment>
   );
}
