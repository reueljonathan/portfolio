import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import profileImage from './img/profile-2019.png';

import AboutContainer from './containers/AboutContainer';
import ProjectsContainer from './containers/ProjectsContainer';
import SkillsContainer from './containers/SkillsContainer';

import LanguagesContainer from './containers/LanguagesContainer';
import SocialContainer from './containers/SocialContainer';

import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import theme from './styled/theme';

const Root = styled.div`
   background-color: ${props => props.theme.backgroundColor};
   color: ${props => props.theme.colors.secondary}
   font-family: ${props => props.theme.fontFamily}
`;

const links = [
   { href:'#about', text:'About' },
   { href:'#projects', text:'Projects' },
   { href:'#skills', text:'Skills' },
   { href:'#languages', text:'Languages' },
   { href:'#social', text:'Social' },
];

function App(props){
   return (
      <ThemeProvider theme={theme}>
         <Root>
            <Header imgSource={profileImage} />
            <Navbar links={links} />

            <AboutContainer id="about" />
            <ProjectsContainer id="projects" />
            <SkillsContainer id="skills" />
            <LanguagesContainer id="languages" />
            <SocialContainer id="social" />
         </Root>
      </ThemeProvider>
   );
}

ReactDOM.render( <App />, document.getElementById('root') );
