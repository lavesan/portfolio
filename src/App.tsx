import React from 'react';
import './App.scss';
import myImage from './assets/perfil.jpg';
import { SinglePage }  from './pages/SPA1';
import { ThemeProvider } from 'styled-components';

import { HeaderComponent } from './components/header';
import { FooterComponent } from './components/footer';

import { HomePage } from './pages/home';
import { ProjectsPage } from './pages/projects';
import { ProcessPage } from './pages/process';
import { AboutPage } from './pages/about';

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import styled from 'styled-components';

const StyledApp = styled.div`
  width: 60%;
  margin: 0 auto;
  min-width: 300px;
  padding: 180px 0 40px 0;
  font-family: ${({ theme }) => theme.fontFamily};
  .title {
    color: ${({ theme }) => theme.neutral.primaryColor}
  }
  .subtitle {
    color: ${({ theme }) => theme.neutral.secondaryColor}
  }
  .text {
    color: ${({ theme }) => theme.neutral.terciaryColor}
  }
`;

const App: React.FC = () => {
  const theme = {
    fontFamily: 'Open Sans, sans-serif',
    success: {
      primaryColor: '#33d424',
      secondaryColor: '#35ad2a',
      terciaryColor: '#35912d',
      quaternaryColor: '#316e2c',
    },
    neutral: {
      primaryColor: '#424242',
      secondaryColor: '#a3a3a3',
      terciaryColor: '#8a8a8a',
      quaternaryColor: '#B9C6FA',
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Router>
          <HeaderComponent />
          <Switch>
            <Route exact path="/" redirectTo="/home" />
            <Route path="/home" render={() => <HomePage myImage={myImage} /> } />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/process" component={ProcessPage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
          <FooterComponent />
        </Router>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
