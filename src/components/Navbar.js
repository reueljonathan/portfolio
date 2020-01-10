import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
   text-align: right;
`;

const NavList = styled.ul`
   list-style: none;
   margin: 0;
   padding: 0;
`;

const NavItem = styled.li`
   display: inline-block;
   margin: 0 1em;
`;

const NavLink = styled(Link)`
   text-decoration: none;
   color: ${props => props.theme.colors.primary};
   font-size: 1.3em;
`;

export default function Navbar(props){
   return (
      <Nav>
         <NavList>
            { props.links.map( link => 
               <NavItem>
                  <NavLink to={link.href} target={link.target}>{link.text}</NavLink>
               </NavItem>
            )}
         </NavList>
      </Nav>
   );
}
