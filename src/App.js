import React from 'react';
// import './App.css';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import GlobalStyle from './theme/globalStyle';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
