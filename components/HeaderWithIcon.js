import React from 'react';
import styled from 'styled-components';
import Header1 from '../styled/Header1';
import SVG from '../styled/SVG';

const FlexHeader = styled(Header1)`
   display: flex;
   align-items: center;
   margin: 1em 0 0.2em;
`;

const Icon = styled(SVG)`
   margin-right: 0.2em;
`;

export default function HeaderWithIcon(props){
   return(
      <FlexHeader id={props.id}>
         <Icon width={props.width} height={props.height}>
            <use href={props.iconHref}
               width={props.width}
               height={props.height}
            />
         </Icon>
         {props.children}
      </FlexHeader>   
   );
}
