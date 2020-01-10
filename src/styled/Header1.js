import React from 'react';
import styled from 'styled-components';
import sizes from '../responsive/sizes';

const Header1 = styled.h1`
   margin: 0;
   font-weight: normal;
   font-size: ${props => props.theme.h1.fontSize}
   color: ${props => props.theme.colors.primary}

  @media (max-width: ${sizes.mobileM}) {
    font-size: 2em;
  }

`;

export default Header1;
