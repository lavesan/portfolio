import React from 'react';
import './App.scss';
import myImage from './assets/imgs/perfil4.jpeg';
import { ThemeProvider } from 'styled-components';

import { HeaderComponent } from './components/header';
import { FooterComponent } from './components/footer';

import { HomePage } from './pages/home';
import { ProjectsPage } from './pages/projects';
import { ProcessPage } from './pages/process';
import { AboutPage } from './pages/about';
import { ContactPage } from './pages/contact';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { StyledApp } from './App.styles';
import { theme } from './App.theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Router>
          <HeaderComponent />
          <Switch>
            <Route exact path="/" render={() => <Redirect to='/home' />} />
            <Route path="/home" render={() => <HomePage myImage={myImage} /> } />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/process" component={ProcessPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
          <FooterComponent />
        </Router>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
