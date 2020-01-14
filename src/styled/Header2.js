import React from 'react';
import styled from 'styled-components';
import sizes from '../responsive/sizes';

const Header2 = styled.h2`
   margin: 0;
   font-weight: normal;
   font-size: ${props => props.theme.h2.fontSize}
   color: ${props => props.theme.colors.primary}

  @media (max-width: ${sizes.laptop}) {
    font-size: 1.3em;
  }
`;

export default Header2;
