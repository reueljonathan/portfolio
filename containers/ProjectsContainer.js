import React from 'react';
import Paragraph from '../styled/Paragraph';
import FlexWrapContainer from '../styled/FlexWrapContainer';
import Link from '../styled/Link';
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
         <Paragraph> More Soon.</Paragraph>
         <FlexWrapContainer>
            <Project imgSrc={PortfolioImg} title="This portfolio">
               <Paragraph>
                  A little of inception doesn't hurts, right?
                  This portfolio was made with ReactJS, and with some
                  Typicons.
               </Paragraph>
               <Paragraph>
                  <Link target="_blank" href="https://github.com/reueljonathan/portfolio">Source</Link>
               </Paragraph>
            </Project>
            <Project imgSrc={FunctionsImg} title="Functions Game">
               <Paragraph>
                  A physics based game that use mathematical functions as controls. Unfinished.
               </Paragraph>
               <Paragraph>
                  <div>
                     <Link target="_blank" href="https://github.com/reueljonathan/functions-game">Source</Link>
                  </div>
                  <div>
                     <Link target="_blank" href="https://reueljonathan.github.io/functions-game/">Demo</Link>
                  </div>
               </Paragraph>
               <Paragraph>
               </Paragraph>
            </Project>
            <Project title="opa">
               teste
            </Project>
         </FlexWrapContainer>
      </React.Fragment>
   );
}
