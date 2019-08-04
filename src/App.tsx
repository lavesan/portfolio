import React from 'react';
import './App.scss';
import myImage from './assets/imgs/perfil.jpg';
import { ThemeProvider } from 'styled-components';

import { HeaderComponent } from './components/header';
import { FooterComponent } from './components/footer';

import { HomePage } from './pages/home';
import { ProjectsPage } from './pages/projects';
import { ProcessPage } from './pages/process';
import { AboutPage } from './pages/about';
import { ContactPage } from './pages/contact';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import styled from 'styled-components';

const StyledApp = styled.div`
  width: 60%;
  margin: 0 auto;
  min-width: 300px;
  padding: 225px 0 50px 0;
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.fontFamily};
  .green-title {
    color: ${({ theme }) => theme.success.terciaryColor};
  }
  .title {
    color: ${({ theme }) => theme.neutral.primaryColor};
    text-decoration: none;
  }
  .subtitle {
    color: ${({ theme }) => theme.neutral.secondaryColor};
    text-decoration: none;
  }
  .text {
    color: ${({ theme }) => theme.neutral.terciaryColor};
    text-decoration: none;
  }

  .link-icon {
    text-decoration: none;
  }

  .whatsapp-icon:hover {
    color: ${({ theme }) => theme.whatsappColor};
  }
  .telegram-icon:hover {
    color: ${({ theme }) => theme.telegramColor};
  }
  .github-icon:hover {
    color: ${({ theme }) => theme.githubColor};
  }
  .linkedin-icon:hover {
    color: ${({ theme }) => theme.linkedinColor};
  }

  @media(max-width: 765px) {
    .whatsapp-icon {
      color: ${({ theme }) => theme.whatsappColor};
    }
    .telegram-icon {
      color: ${({ theme }) => theme.telegramColor};
    }
    .github-icon {
      color: ${({ theme }) => theme.githubColor};
    }
    .linkedin-icon {
      color: ${({ theme }) => theme.linkedinColor};
    }
  }
`;

const App: React.FC = () => {
  const theme = {
    fontFamily: 'Open Sans, sans-serif',
    whatsappColor: '#00e676',
    telegramColor: '#3a6d99',
    githubColor: '#000',
    linkedinColor: '#0077B5',
    success: {
      primaryColor: '#33d424',
      secondaryColor: '#35ad2a',
      terciaryColor: '#35912d',
      quaternaryColor: '#316e2c',
    },
    neutral: {
      primaryColor: '#424242',
      secondaryColor: '#8a8a8a',
      terciaryColor: '#a3a3a3',
      quaternaryColor: '#B9C6FA',
    }
  }

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
