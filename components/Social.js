import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg`
   fill: ${props => props.theme.colors.secondary}
   margin-right: 0.1em;
`;

const SocialSpan = styled.span`
   display: flex;
   align-items: center;
`;

export default function Social(props){
   return (
      <SocialSpan>
         <Icon width={props.width} height={props.height}>
            <use href={props.iconHref}
               width={props.width}
               height={props.height} />
         </Icon>
         {props.children}
      </SocialSpan>
   );   
}
