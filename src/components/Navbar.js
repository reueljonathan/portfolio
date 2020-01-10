import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import sizes from '../responsive/sizes';

const Nav = styled.nav`
  text-align: right;

  @media (max-width: ${sizes.tablet}){
    text-align: center;
    margin-bottom: 2em;
  }
`;

const NavList = styled.ul`
   list-style: none;
   margin: 0;
   padding: 0;

  @media (max-width: ${sizes.tablet}) {
  }
`;

const NavItem = styled.li`
   display: inline-block;
   margin: 0 1em;

  @media (max-width: ${sizes.mobileL}) {
    margin: 0 0.5em;
  }
`;

const CustomNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
  font-size: 1.3em;
  position: relative;

  transition: all 0.15s ease;

  &:after {
    position: absolute;
    bottom: -10px;
    left: 50%;
    content: '';
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.colors.secondary};
    transition: all 0.3s ease;
  }

   &.active {
    color: ${props => props.theme.colors.secondary};
   }

   &.active:after {
    left: 0;
    width: 100%;
   }

   &:hover {
    color: ${props => props.theme.colors.secondary};
   }

   &:hover:after {
    width: 100%;
    left: 0;
   }

  @media (max-width: ${sizes.mobileL}) {
    font-size: 1em;
  }
`;

export default function Navbar(props){
   return (
    <Nav>
      <NavList>
            { props.links.map( link => 
               <NavItem key={link.text}>
                 <CustomNavLink
                   activeClassName='active'
                   to={link.href}
                   target={link.target}
                 >{link.text}</CustomNavLink>
               </NavItem>
            )}
         </NavList>
      </Nav>
   );
}
