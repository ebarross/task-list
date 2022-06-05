import React from 'react';
import Home from './pages/home';
import GlobalStyles from './styles/global';
import AppProvider from './context';

function App() {
  return (
    <AppProvider>
      <GlobalStyles />
      <Home />
    </AppProvider>
  );
}

export default App;
