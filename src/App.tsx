import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Scroll from './components/scroll';
import GlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <Scroll />
    <Routes />
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
