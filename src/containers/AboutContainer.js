import React from 'react';
import Paragraph from '../styled/Paragraph';
import HeaderContent from '../styled/HeaderContent';

export default function AboutContainer(props){
   return (
      <React.Fragment>
         <HeaderContent>
            About
         </HeaderContent>
         <Paragraph>
            I started my career in 2013 with 17 years old, working at C.E.S.A.R (Recife, Brazil) as an apprentice developer.
            There I worked on different projects, with the most variated technologies. ASP.Net MVC, Java, Lua, Javascript, AngularJS...
            just to name a few. There were almost 6 different projects, in a duration of 3 years, which helped me develop the
            ability to learn new things in a short period of time.
         </Paragraph>
         <Paragraph>
            I like to define myself as a curious person because I like to know how stuff works. Does not matter if it is how to 
            play an instrument, develop an NES game with Assembly, or learn a new programming language.
         </Paragraph>
      </React.Fragment>
   );
}
