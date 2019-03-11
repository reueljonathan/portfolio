import React from 'react';
import Paragraph from '../styled/Paragraph';
import HeaderWithIcon from '../components/HeaderWithIcon';
import Project from '../components/Project';
import CodeIcon from '../svg/code.svg';

import FunctionsImg from '../img/projects/functions.png';

export default function ProjectsContainer(props){
   return (
      <React.Fragment>
         <HeaderWithIcon id={props.id}
            width='24'
            height='24'
            iconHref={`${CodeIcon}#code`}>
            Projects
         </HeaderWithIcon>
         <Paragraph> Soon.</Paragraph>
         <Project imgSrc={FunctionsImg} title="Functions Game">
            A physics based game that use mathematical functions as controls. Unfinished.
         </Project>
      </React.Fragment>
   );
}
