import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Header from './components/Header';
import profileImage from './img/profile-2019.png';

import AboutContainer from './containers/AboutContainer';
import ProjectsContainer from './containers/ProjectsContainer';
import SkillsContainer from './containers/SkillsContainer';

import LanguagesContainer from './containers/LanguagesContainer';
import SocialContainer from './containers/SocialContainer';

import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import theme from './styled/theme';

import sizes from './responsive/sizes';

const Root = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fontFamily};

  width: 100%;
  max-width: 2000px;
  box-sizing: border-box;
  padding: 32px 64px;

  @media (max-width: ${sizes.tablet}) {
    padding: 32px;
  }

  @media (max-width: ${sizes.mobileS}) {
    padding: 32px 16px;
  }
`;

const ContentContainer = styled.div`
  @media (min-width: ${sizes.tablet}) {
    margin-left: calc(128px + 2em);
  }

  @media (max-width: ${sizes.tablet}){
    margin-left: 0;
  }
`;

function App(props){
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Root>
          <Header imgSource={profileImage} />
          <ContentContainer>
            <Switch>
              <Route path="/about">
                <AboutContainer id="about" />
              </Route>
              <Route path="/projects">
                <ProjectsContainer id="projects" />
              </Route>
              <Route path="/tools">
                <SkillsContainer id="skills" />
              </Route>
            </Switch>
          </ContentContainer>
        </Root>
      </Router>
    </ThemeProvider>
  );
}

ReactDOM.render( <App />, document.getElementById('root') );
