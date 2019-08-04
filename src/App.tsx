import React from 'react';
import './App.scss';
import myImage from './assets/perfil.jpg';
import { SinglePage }  from './pages/SPA1';
import { ThemeProvider } from 'styled-components';
import { HeaderComponent } from './components/header';

import { HomePage } from './pages/home';
import { ProjectsPage } from './pages/projects';
import { ProcessPage } from './pages/proccess';
import { AboutPage } from './pages/about';

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const App: React.FC = () => {
  const theme = {
    bossaFontFamily: 'Roboto',
    primaryFontColor: '#000',
    success: {
      primaryColor: '#33d424',
      secondaryColor: '#35ad2a',
      terciaryColor: '#35912d',
      quaternaryColor: '#316e2c',
    },
    danger: {
      primaryColor: '#F95E5A',
      secondaryColor: '#CC4C4C',
      terciaryColor: '#A53F3F',
      quaternaryColor: '#FCAEAC',
    },
    neutral: {
      primaryColor: '#a3a3a3',
      secondaryColor: '#8a8a8a',
      terciaryColor: '#244AA8',
      quaternaryColor: '#B9C6FA',
    }
  }

  return (
    
    <ThemeProvider theme={theme}>
      <div className="site-box">
        <Router>
          <HeaderComponent />
          <Switch>
            <Route exact path="/" redirectTo="/home" />
            <Route path="/home" render={() => <HomePage myImage={myImage} /> } />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/process" component={ProcessPage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
