import React from 'react';
import Paragraph from '../styled/Paragraph';
import FlexWrapContainer from '../styled/FlexWrapContainer';
import BlockLink from '../styled/BlockLink';
import HeaderWithIcon from '../components/HeaderWithIcon';
import Project from '../components/Project';
import CodeIcon from '../svg/code.svg';

import FunctionsImg from '../img/projects/functions.png';
import PortfolioImg from '../img/projects/portfolio.png';

export default function ProjectsContainer(props){
   return (
      <React.Fragment>
         <HeaderWithIcon id={props.id}
            width='24'
            height='24'
            iconHref={`${CodeIcon}#code`}>
            Projects
         </HeaderWithIcon>
         <FlexWrapContainer>
            <Project imgSrc={PortfolioImg} title="Portfolio">
               <Paragraph>
                  A little of inception doesn't hurts, right?
                  This portfolio was made with ReactJS, and with some
                  Typicons.
               </Paragraph>
               <BlockLink target="_blank" href="https://github.com/reueljonathan/portfolio">Source</BlockLink>
            </Project>
            <Project imgSrc={FunctionsImg} title="Functions Game">
               <Paragraph>
                  A physics based game that use mathematical functions as controls. Unfinished.
               </Paragraph>
               <BlockLink target="_blank" href="https://github.com/reueljonathan/functions-game">Source</BlockLink>
               <BlockLink target="_blank" href="https://reueljonathan.github.io/functions-game/">Demo</BlockLink>
            </Project>
         </FlexWrapContainer>
         <Paragraph>More projects soon.</Paragraph>
      </React.Fragment>
   );
}
