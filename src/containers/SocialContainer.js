import React from 'react';
import HeaderWithIcon from '../components/HeaderWithIcon';
import Link from '../styled/Link';
import List from '../styled/List';
import ListItem from '../styled/ListItem';
import LinkedinIcon from '../svg/social-linkedin.svg';
import GithubIcon from '../svg/social-github.svg';
import Social from '../components/Social';


export default function SocialContainer(props){
   return (
      <React.Fragment>
         <HeaderWithIcon id="social"
            width="24"
            height='24'
         >
            Social
         </HeaderWithIcon>
         <List>
            <ListItem>
               <Social width='20' height='20'
                 iconHref={`${GithubIcon}#github`}>
                  <Link href="https://github.com/reueljonathan" target="_blank"> Github </Link>
               </Social>
            </ListItem>
            <ListItem>
               <Social width='20' height='20'
                 iconHref={`${LinkedinIcon}#linkedin`}>
                  <Link href="https://linkedin.com/in/reueljonathan" target="_blank"> LinkedIn </Link>
               </Social>
            </ListItem>
         </List>
      </React.Fragment>
   );
};
