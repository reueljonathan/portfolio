import React from 'react';
import styled from 'styled-components'; 
import Header1 from '../styled/Header1';
import Header2 from '../styled/Header2';
import Navbar from './Navbar';
import resumeFile from '../files/resume-test.pdf';

import linkedinIcon from '../svg/social-linkedin.svg';
import githubIcon from '../svg/social-github.svg';

import theme from '../styled/theme';
import sizes from '../responsive/sizes';

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 128px auto auto;
  grid-template-rows: 128px auto;
  align-items: center;

  @media (max-width: ${sizes.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const PhotoContainer = styled.div`
  @media (max-width: ${sizes.tablet}) {
    order: -3;
  }
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

  @media (max-width: ${sizes.tablet}) {
    padding: 0;
    order: -1;
    margin: 1em 0;
  }
`;

const SocialIcon = styled.svg`
  transition: fill 0.3s ease;

  &:hover {
    fill: ${theme.colors.secondary};
  }

  @media (max-width: ${sizes.tablet}) {
    margin: 0 2em;
  }
`;

const Headline = styled.div`
  padding-left: 2em;

  @media (max-width: ${sizes.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    order: -2;
  }
`;

const links = [
  { href:'about', text:'About' },
  { href:'projects', text:'Projects' },
  { href:'tools', text:'Tools' },
  { href:`${resumeFile}`, text:'Resume', target: '_blank' },
];

export default function Header(props){
   return (
      <HeaderContainer>
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
            <SocialIcon width="40" height="40">
              <use width="40" height="40" xlinkHref={`${linkedinIcon}#linkedin`}/>
            </SocialIcon>
          </a>
          <a href="https://github.com/reueljonathan" target="_blank">
            <SocialIcon width="40" height="40">
              <use width="40" height="40" xlinkHref={`${githubIcon}#github`}/>
            </SocialIcon>
          </a>
        </IconsContainer>
      </HeaderContainer>
   );
}
