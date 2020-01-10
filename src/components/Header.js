import React from 'react';
import styled from 'styled-components'; 
import Header1 from '../styled/Header1';
import Header2 from '../styled/Header2';
import Navbar from './Navbar';
import resumeFile from '../files/resume-test.pdf';

import linkedinIcon from '../svg/social-linkedin.svg';
import githubIcon from '../svg/social-github.svg';

import theme from '../styled/theme';

const FlexContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;

   font-family: ${props => props.theme.fontFamily}
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 128px auto auto;
  grid-template-rows: 128px auto;
  align-items: center;
`;

const PhotoContainer = styled.div`
`;

const ProfileImage = styled.img`
   border-radius: 100%;
   border-width: 0;
   width: 128px;
   height: 128px;
`;

const IconsContainer = styled.div`
  text-align: center;
  padding-top: 20px;
`;

const SocialIcon = styled.svg`

  &:hover {
    fill: ${theme.colors.secondary};
  }
`;

const Headline = styled.div`
  flex-grow: 1;
  padding-left: 64px;
`;

const links = [
  { href:'about', text:'About' },
  { href:'projects', text:'Projects' },
  { href:'tools', text:'Tools' },
  { href:`${resumeFile}`, text:'Resume', target: '_blank' },
];

export default function Header(props){
   return (
      <GridContainer>
        <PhotoContainer>
          <ProfileImage src={props.imgSource} />
        </PhotoContainer>
        <Headline>
          <Header1> Reuel Jonathan </Header1>
          <Header2> Software Developer </Header2>
        </Headline>
        <Navbar links={links} />
        <IconsContainer>
          <a href="https://linkedin.com/in/reueljonathan" target="_blank">
            <SocialIcon width="30" height="30">
              <use width="30" height="30" xlinkHref={`${linkedinIcon}#linkedin`}/>
            </SocialIcon>
          </a>
          <a href="https://github.com/reueljonathan" target="_blank">
            <SocialIcon width="30" height="30">
              <use width="30" height="30" xlinkHref={`${githubIcon}#github`}/>
            </SocialIcon>
          </a>
        </IconsContainer>
      </GridContainer>
   );
}
